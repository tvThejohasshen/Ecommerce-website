'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('cart_items', {
    id: { type: 'int', unsigned: true, primaryKey: true, autoIncrement: true},
    // since the name of the products table is `products`, therefore the FK should be `product_id` (for bookshelf ORM to work more easily)
    product_id: {
      type:'int',
      notNull: true,
      unsigned: true,
      foreignKey: {
        name:'cart_items_products_fk',
        table: 'products',
        mapping:'id',
        rules: {
          onDelete:"CASCADE",
          onUpdate:"RESTRICT"
        }
      }
    },
    user_id: {
      type:'int',
      unsigned: true,
      notNull: true,
      foreignKey: {
        name:"cart_items_users_fk",
        table:"users",
        mapping:"id",
        rules:{
          onDelete:"CASCADE",
          onUpdate:"RESTRICT"
        }
      }
    }
  });
};

exports.down = function(db) {
  return db.dropTable('cart_items');
};

exports._meta = {
  "version": 1
};