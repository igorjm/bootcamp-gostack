import { Request, Response } from 'express';

import createUser from './services/CreateUserService';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        name: '',
        email: '',
        password: '',
        techs: [
            '',
            { title: '', experience: 1},
        ],
    });

    return response.json({ message: 'hello world' });
}