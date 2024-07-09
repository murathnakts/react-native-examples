import React, { useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import { Data, getComment } from "./UserPost"
import { IComment } from "./CommentPost";


export const UserItem: React.FC<Data> = ({ id, userId, title, body, image, avatarImage, likes, hours }) => {

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [comments, setComments] = React.useState<IComment[]>([]);


    useEffect(() => {
        getComment().then(response => {
            const data = (response as IComment[]);
            const comment = data.filter(comments => comments.postId == id);
            setComments(comment);
        });
    }, []);

    return (
        <View style={{
            width: '100%',
            height: 500,
            marginTop: 20,
            backgroundColor: 'gray',
            borderRadius: 25,
            paddingLeft: 5
        }}>
            <View style={{ flex: 1, marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Image source={{ uri: avatarImage }} style={{
                            marginTop: 5,
                            width: 40,
                            height: 40,
                            borderRadius: 20
                        }} />
                    </View>
                    <View style={{ flex: 5, justifyContent: 'center', padding: 8, paddingLeft: 20, borderWidth: 2, borderRadius: 25 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}>{title}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>⋮</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ width: 350, borderWidth: 2, borderRadius: 25, padding: 10, fontSize: 15 }}>
                    {body}</Text>
                <Image source={{ uri: image }} style={{
                    width: '90%',
                    height: 220,
                    marginTop: 10,
                    borderRadius: 20
                }} />
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'lightgray', fontSize: 15, paddingLeft: 40, marginTop: 5 }}>♥ {likes}</Text>
                    </View>
                    <View style={{ flex: 1, }}>
                        <TouchableOpacity onPress={() => { setIsVisible(true) }}>
                            <Text style={{ color: 'lightgray', fontSize: 15, paddingLeft: 0, marginTop: 5 }}>🗨{comments.length}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 15, paddingLeft: 0, marginTop: 5 }}>{hours} hours ago</Text>
                    </View>
                </View>
            </View>
            <Modal visible={isVisible}>
                <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqymovUnzSvqlq-9e-VJikgolTvAWBG55ZCg&s' }}
                    style={{
                        height: '100%',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <View style={{
                        width: '90%',
                        height: '90%',
                        backgroundColor: 'lightgray',
                        borderWidth: 2,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                            <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 25, color: 'black' }}>Comments</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Pressable onPress={() => { setIsVisible(false) }}>
                                    <View style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', borderRadius: 20 }}>
                                        <Text style={{ color: 'white', fontSize: 25, }}>X</Text>
                                    </View>
                                </Pressable>
                            </View>
                        </View>
                        <FlatList
                            data={comments}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => (
                                <View style={{ padding:10}}>
                                    <View style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 25, marginBottom: 2, padding: 5 }}>
                                        <Text style={{
                                            paddingLeft: 5,
                                            fontWeight: 'bold',
                                            color: 'black',
                                            fontSize: 15
                                        }}>{item.name}</Text>
                                        <Text style={{
                                            paddingLeft: 5,
                                            paddingBottom: 5,
                                            color: 'gray'
                                        }}>{item.email}</Text>
                                    </View>
                                    <View style={{
                                        borderColor: 'blue',
                                        borderWidth: 1,
                                        borderRadius: 25,
                                        padding: 5
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
                    </View>
                </ImageBackground>
            </Modal>
        </View>
    );
}