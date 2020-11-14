import dotenv from 'dotenv'; 
import express from 'express';

// load the env vars from the .env file 
dotenv.config({
    path: '.env'
});

/** 
 * Express server application class.
 * @description will later contain the way the app routes to itself 
 */

 class Server {
     public app = express();
 }

 // Initialize server app 
 const server = new Server(); 

 // make the server listen to a port 
 ((port = process.env.APP_PORT || 5000) => {
     server.app.listen(port, () => console.log(`> Listening on port ${port}`));
 })();

 