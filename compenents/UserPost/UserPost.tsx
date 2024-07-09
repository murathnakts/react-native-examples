import React, { useEffect } from "react"
import { FlatList} from "react-native"
import { UserItem } from "./UserItem"
import { faker } from "@faker-js/faker"

export interface IUser {
    id: number
    userId: number
    title: string
    body: string
}

export interface IComment {
    id: number
    postId: number
    name: string
    email: string
    body: string
}

interface Images {
    image: string
    avatarImage: string
    likes: number
    hours: number
}

export interface Data {
    id: number
    userId: number
    title: string
    body: string
    image: string
    avatarImage: string                     //INTERFACE TANIMLAMALARI
    likes: number
    hours: number
}

const getUser = async (): Promise<IUser[]> => {
    const api = fetch('https://jsonplaceholder.typicode.com/posts');
    return (await api).json();
}

export const getComment = async (): Promise<IComment[]> => {
    const api = fetch('https://jsonplaceholder.typicode.com/comments');     //POSTS VE COMMENTS BAŞVURU
    return (await api).json();
}

export const UserList = () => {

    const [users, setUsers] = React.useState<IUser[]>([]);

    useEffect(() => {
        getUser().then(response => {
            const data = (response as IUser[]);                             //10 ADET POST ÇEKİMİ
            setUsers(data.slice(0, 10));
        });
    }, []);

    const posts = Array<number>(users.length).fill(0).map<Images>(() => ({
        avatarImage: faker.image.url(),
        image: faker.image.urlPicsumPhotos(),                                   //FAKER KÜTÜPHANESİ KULLANIMI
        likes: faker.number.int({ min: 10, max: 1000 }),
        hours: faker.number.int({ min: 1, max: 11 })
    } as Images))

    

    return (
        <FlatList
            data={users}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <UserItem 
                id={item.id}
                userId={item.userId}
                title={item.title}
                body={item.body}
                image={posts[item.id-1].image}               // COMPENENTE VERİ GÖNDERMEK VE EKLEMEK  
                avatarImage={posts[item.id-1].avatarImage}   // DİZİDEN İTEM İD'SİNE GÖRE VERİ GÖNDERMEK
                likes={posts[item.id-1].likes}               // -1'in SEBEBİ DİZİLERİN 0'DAN BAŞLAMASI
                hours={posts[item.id-1].hours}
                />
            )}
        />
    );
}