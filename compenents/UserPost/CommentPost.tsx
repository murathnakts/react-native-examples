import React, { useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import { IUser } from "./UserPost";

export interface IComment {
    id: number
    postId: number
    name: string
    email: string
    body: string
}

const getComment = async (): Promise<IComment[]> => {
    const api = fetch('https://jsonplaceholder.typicode.com/comments');
    return (await api).json();
}

export const CommentPost: React.FC<IUser> = ({ id }) => {

    const [comments, setComments] = React.useState<IComment[]>([]);

    useEffect(() => {
        getComment().then(response => {
            const data = (response as IComment[]);
            const comment = data.filter(comments => comments.postId == id);
            setComments(comment);
        });
    }, []);

    return (
        <FlatList
            data={comments}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <View style={{padding:10}}>
                    <Text style={{
                        paddingLeft: 5,
                        paddingTop: 5,
                        color: 'black'
                    }}>{item.name}</Text>
                    <Text style={{
                        paddingLeft: 5,
                        paddingBottom: 5,
                        color: 'gray'
                    }}>{item.email}</Text>
                    <View style={{
                        borderWidth:1,
                        borderRadius:15,
                    }}>
                        <Text style={{
                            paddingLeft: 5,
                            paddingTop: 5,
                            color: 'black'
                        }}>{item.body}</Text>
                    </View>
                </View>
            )}
        />
    );
}
