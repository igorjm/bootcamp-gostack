interface TechObject {
    title: string;
    experience: number;
}

interface ICreateUserData {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | TechObject>;
}

export default function createUserService({name = '', email, password}: ICreateUserData) {
    const user = {
        name,
        email,
        password,
    }

    return user;
}