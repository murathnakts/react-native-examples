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

export const CommentPost: React.FC<IUser> = ({ id, userID, title, body }) => {

    const [comments, setComments] = React.useState<IComment[]>([]);

    useEffect(() => {
        getComment().then(response => {
            const data = (response as IComment[]);
            setComments(data.slice(0, 3));
        });
    }, []);

    return (
        <FlatList
            data={comments}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <View>
                    {
                        id == item.postId &&
                        <View>
                            <Text>eşleşti</Text>
                        </View>
                    }
                </View>
            )}
        />
    );
}
