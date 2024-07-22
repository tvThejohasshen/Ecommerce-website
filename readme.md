# Setting up the project

In the terminal, type:
1. mysql -u root < setup.sql
2. Create the following `.env` file:
    ```
CLOUDINARY_NAME=dikchcdea
CLOUDINARY_API_KEY=935175647765615
CLOUDINARY_API_SECRET=BjvAVM1aa1C2Tzl8yIUb1lAmi6g
CLOUDINARY_UPLOAD_PRESET=singschool
CLOUDINARY_URL=cloudinary://935175647765615:BjvAVM1aa1C2Tzl8yIUb1lAmi6g@dikchcdea
DB_DRIVER=mysql
DB_USER=foo
DB_PASSWORD=bar
DB_DATABASE=singschool
DB_HOST=127.0.0.1
STRIPE_PUBLISHABLE_KEY=pk_test_51PG1KjAI4YF5mOzs8WWzkmyA1noLstN2jno10u2236DIYWqs2hkCNCy7cSCcvcFdT5rnqOKCvvKM0N05XEKELGpu00fHnA5Uzy
STRIPE_SECRET_KEY=sk_test_51PG1KjAI4YF5mOzsBGKhI4aho9S9ASdvCaDLYQSofKYTfWlNGPoAKlTAWcIw3793ONOLrPNKKjLZMc9kia01ypH600VAmbbzhn
STRIPE_SUCCESS_URL=https://www.google.com/
STRIPE_CANCEL_URL=https://www.amazon.in/
    ```

    For Cloudinary upload to work, you must provide the Cloudinary name,
    API Key, API Secret and the Upload Preset respectively
3. Install all dependencies with `yarn install`
4. Run all migration files with `npm run migrate up`
5. Run the application with `npm run start`
6. Go to `/users/register` in the browser and register a new user
7. Go to `/products/add-product` and add a couple of products