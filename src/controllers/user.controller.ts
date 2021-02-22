import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/controllerBase'
import User from '../interfaces/user.interface';
import { UserModel } from '../database/users/users.model';
import { UserService } from '../services/user.service';
class HomeController implements IControllerBase {
    public path = '/api/users'
    public router = express.Router()
    private service: UserService = new UserService();
    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/', this.service.getAll);
        this.router.get('/:id', this.retrieve);
        this.router.post('/', this.create);
    }
    retrieve = (req: Request, res: Response) => {
        const id: number = Number(req.params.id);
        // const user = this.users.find(u => u.id == id);

        // res.json( {user} )
    }

    create = (req: Request, res: Response) => {
        const user: User = req.body;

        // if (this.users.find( u => u.id == user.id)) {
        //     res.status(400).json({'message': 'there\'s a user with that id'});
        // }
        // this.users.push(user);

        res.status(201).json({userId: user.id, message: 'user created'});
    }
}

export default HomeController