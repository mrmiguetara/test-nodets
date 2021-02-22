import express from 'express'
import { Application } from 'express'
import IControllerBase from './interfaces/controllerBase';

class App {
    public app: Application
    public port: string|number

    constructor(appInit: { port: string|number; middleWares: any; controllers: any; }) {
        this.app = express();
        this.port = appInit.port

        this.middlewares(appInit.middleWares)
        this.routes(appInit.controllers)
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