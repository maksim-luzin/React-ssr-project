import { getAlbumByIdController, getAlbumsByUserIdController } from './../controller/album';
import { Routes } from 'enums';
import { Router, Request, Response, NextFunction } from 'express';
import { getAlbumDataById, getUsersData } from '../../shared/services';
import { getPostByIdController, getPostsByUserIdController } from '../controller/post';
import { getUsersController } from 'controller/user';

const apiRequest: Router = Router();

apiRequest
    .get(Routes.Main, (req: Request, res: Response, next: NextFunction) =>
        getUsersController()
            .then((users) => {
                req.body = { users }
                next()
            })
            .catch((err) => next(err)))

    .get(Routes.Users + '/:userId' + Routes.Posts, (req: Request, res: Response, next: NextFunction) =>
        getPostsByUserIdController(req.params.userId)
            .then((posts) => {
                req.body = { ...posts }
                next()
            })
            .catch((err) => next(err)))

    .get(Routes.Posts + '/:postId', (req: Request, res: Response, next: NextFunction) =>
        getPostByIdController(req.params.postId)
            .then((post) => {
                req.body = { ...post }
                next()
            })
            .catch((err) => next(err)))

    .get(Routes.Users + '/:userId' + Routes.Albums, (req: Request, res: Response, next: NextFunction) =>
        getAlbumsByUserIdController(req.params.userId)
            .then((albums) => {
                req.body = { ...albums }
                next()
            })
            .catch((err) => next(err)))

    .get(Routes.Albums + '/:albumId', (req: Request, res: Response, next: NextFunction) =>
        getAlbumByIdController(req.params.albumId)
            .then((albums) => {
                req.body = { ...albums }
                next()
            })
            .catch((err) => next(err)))


export { apiRequest };
