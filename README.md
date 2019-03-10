# URL Shortener Microservice
Full stack JavaScript app to shorten URLs.

## Development
Just `clone`, `cd url-shortener` and `npm start`.

## Production
Follow your host instructions. Or, if you want to do a manual deployment:

### Client
1. Create a `.env.production` file and set your REACT_APP_API_URL production enviroment variable;
2. Run `npm run build:production`.

### Backend
1. Create your `.env` file at the root (/url-shortener/.env) and set your production variables.

### Production Server
1. The `/client` folder only needs the `/build` folder for production (`/build` is the view for your server). Send everything else to your production server.

#### Optional: testing the production setup in development before deploying
**/client:** `npm run build:dev` for testing the build locally. Don't forget to delete the build folder and generate a new one for producion before deploying. (See Client > item 2)
**/backend:** at `.env.development` set your `NODE_ENV` to `production`. Don't forget to rollback to `development` after testing.
**Start your backend server ONLY:** go to `/backend` and run `npm start`.