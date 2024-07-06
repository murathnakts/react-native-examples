import { faker } from '@faker-js/faker';


export interface IUser {
    id: string
    name: string
    surname: string    /// Props Oluşturuldu...
    avatar: string
    email: string
    messages: number
}

export const UseFakeData = () => {
    const users: Array<IUser> = []  ///Array 
    for (let i = 0; i < 20; i++) {
        users.push({
            id: faker.string.uuid(),
            name: faker.person.firstName(),
            surname: faker.person.lastName(),
            avatar: faker.image.avatarGitHub(),
            email: faker.internet.email(),
            messages: faker.number.int() % 5,
        })
    }

    return users;
}

export const UseMyFakeData = () => {
     const user = {
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        avatar: faker.image.avatarGitHub(),
        email: faker.internet.email(),
        messages: faker.number.int() % 5,
    }
    return user;
}