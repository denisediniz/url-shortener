# URL Shortener Microservice
Full stack JavaScript app to shorten URLs.

## Development
Just `clone`, `cd url-shortener` and `npm start`.

## Production
Follow your host instructions but it's usually like this:

### Production Server
* Send everything to your production server.

### Client Folder
* Create a `.env.production` file and set your REACT_APP_API_URL production enviroment variable;
* Run `npm run build:production`. The `/client` folder only needs the `/build` folder for production (`/build` is the view for your server).

### Backend Folder
* Create your `.env` file at the root (/url-shortener/.env) and set your production variables. Remove the `.env.development` at `/backend` folder.

#### Optional: testing the production setup in development before deploying
* **/client:** `npm run build:dev` for testing the build in development.
* **/backend:** at `.env.development` set your `NODE_ENV` to `production`. Don't forget to rollback to `development` after testing.
* **Start your backend server ONLY:** go to `/backend` and run `npm start`.