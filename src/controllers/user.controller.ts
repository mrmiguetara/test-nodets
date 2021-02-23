import * as express from 'express'
import { Request, Response, NextFunction } from 'express';
import IControllerBase from '../interfaces/controllerBase'
import { UserService } from '../services/user.service';
import IUser from '../interfaces/user.interface';
import { HttpError } from '../errors/http.error';
class HomeController implements IControllerBase {
    public path = '/api/users'
    public router = express.Router()
    private service: UserService = new UserService();
    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.retrieve);
        this.router.post('/', this.create);
    }

    getAll = async (req: Request, res: Response) => {
        const users = await this.service.getAll();
        res.status(200).json({users});
    }

    retrieve = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id
        try {
            const user = await this.service.get(id);
            if (user) {
                res.status(200).json({user})
            }

        } catch (err ) {
            next(new HttpError(`User with id ${id} not found`, 404))
        }
    }

    create = async (req: Request, res: Response) => {
        const user: IUser = await this.service.create(req.body);

        res.status(201).json(user);

    }
}

export default HomeController