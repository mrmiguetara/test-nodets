import express from 'express'
import mongoose from 'mongoose'
import { Application } from 'express'
import IControllerBase from './interfaces/controllerBase';
import config from '../config/index';

const DB_USER = config.dbUser;
const PASSWORD = config.dbPassword;
const DB_NAME = config.dbName;
const MONGO_URI = `mongodb+srv://${DB_USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;

class App {
    public app: Application
    public port: string|number

    constructor(appInit: { port: string|number; middleWares: any; controllers: any; }) {
        this.app = express();
        this.port = appInit.port

        this.initMongoConnection();
        this.routes(appInit.controllers)
        this.middlewares(appInit.middleWares)
        this.assets()
        this.template()
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private routes(controllers: { forEach: (arg0: (controller: IControllerBase) => void) => void; }) {
        controllers.forEach(controller => {
            console.log(controller.path)
            this.app.use(controller.path, controller.router)
        })
    }

    private initMongoConnection() {
        mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
    }

    private assets() {
        this.app.use(express.static('public'))
        this.app.use(express.static('views'))
    }

    private template() {
        this.app.set('view engine', 'pug')
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

export default App