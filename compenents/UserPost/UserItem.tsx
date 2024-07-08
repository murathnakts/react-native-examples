import React, { useEffect, useState } from "react";
import { Button, Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { IUser } from "./UserPost";
import { faker } from "@faker-js/faker";

interface Images {
    image: string
    avatarImage: string
    likes: number
    hours: number
}


export const UserItem: React.FC<IUser> = ({ id, userID, title, body }) => {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const posts = Array<number>(1).fill(0).map<Images>(() => ({
        avatarImage: faker.image.url(),
        image: faker.image.urlPicsumPhotos(),
        likes: faker.number.int({ min: 10, max: 1000 }),
        hours: faker.number.int({ min: 1, max: 11 })
    } as Images))

    return (
        <View style={{
            width: '100%',
            height: 400,
            marginTop: 20,
            backgroundColor: 'gray',
            borderRadius: 25,
            paddingLeft: 5
        }}>
            <View style={{ flex: 1, marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Image source={{ uri: posts[0].avatarImage }} style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20
                        }} />
                    </View>
                    <View style={{ flex: 5, justifyContent: 'center', paddingLeft: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{title}</Text>
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
            <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{body}</Text>
                <Image source={{ uri: posts[0].image }} style={{
                    width: '90%',
                    height: 200,
                    marginTop: 10,
                    borderRadius: 20
                }} />
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'lightgray', fontSize: 15, paddingLeft: 20, marginTop: 5 }}>♥ {posts[0].likes}</Text>
                    </View>
                    <View style={{ flex: 1, }}>
                        <TouchableOpacity onPress={() => { setIsVisible(true) }}>
                            <Text style={{ color: 'lightgray', fontSize: 15, paddingLeft: 20, marginTop: 5 }}>🗨 { }</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 15, paddingLeft: 20, marginTop: 5 }}>{posts[0].hours} hours ago</Text>
                    </View>
                </View>
            </View>
            <Modal
                transparent
                visible={isVisible}
            >
                <View style={{
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Button title="kapat" onPress={() => { setIsVisible(false) }} />
                    <View style={{
                        width:'90%',
                        height:'90%',
                        backgroundColor:'gray',
                        borderWidth:2,
                        borderRadius:25
                    }}>

                    </View>
                </View>
            </Modal>
        </View>
    );
}