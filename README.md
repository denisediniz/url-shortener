# URL Shortener Microservice
Microservice to shorten URLs. Powered by Express and MongoDB+Mongoose.

## How it works
* POST a URL to `/api/shorturl/new` and receive a shortened URL in the JSON response. Example : `{"original_url":"www.google.com","short_url":1}`;
* If you pass an invalid URL that doesn't follow the `http(s)://www.example.com(/more/routes)` format, the JSON response will contain an error like `{"error":"invalid URL"}`;
* When you visit the shortened URL it will redirect you to your original link.

## Example Usage
`/api/shorturl/1` will redirect to https://www.google.com/

## Installation
1. `git clone [PASTE_URL_HERE]`
2. `cd url-shortener`
3. `npm install`

You must have MongoDB locally installed and running. If you prefer a cloud database just replace the url in *package.json*. Then:

Development: `npm run dev`

Production: `npm start`

*production note: you must set your `DATABASE_URL` in `.env` file.