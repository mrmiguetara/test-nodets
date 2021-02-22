// import express from 'express';
// import config from './config/index';

// const app = express();
// const PORT = config.port;
// app.get('/', (req,res) => res.send('Express + TypeScript Server'));
// app.listen(PORT, () => {
//   console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
// });

import App from './src/app'
import config from './config/index';

import * as bodyParser from 'body-parser'
// import loggerMiddleware from './middleware/logger'

// import PostsController from './controllers/posts/posts.controller'
import HomeController from './src/controllers/user.controller';

const app = new App({
    port: config.port,
    controllers: [
        new HomeController(),
        // new PostsController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        // loggerMiddleware
    ]
})

app.listen()