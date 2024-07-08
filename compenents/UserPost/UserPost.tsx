import React, { useEffect } from "react"
import { FlatList} from "react-native"
import { UserItem } from "./UserItem"
import { faker } from "@faker-js/faker"

export interface IUser {
    id: number
    userID: number
    title: string
    body: string
}

const getUser = async (): Promise<IUser[]> => {
    const api = fetch('https://jsonplaceholder.typicode.com/posts');
    return (await api).json();
}

export const UserList = () => {

    const [users, setUsers] = React.useState<IUser[]>([]);

    useEffect(() => {
        getUser().then(response => {
            const data = (response as IUser[]);
            setUsers(data.slice(0, 10));
        });
    }, []);


    return (
        <FlatList
            data={users}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <UserItem {...item}/>
            )}
        />
    );
}