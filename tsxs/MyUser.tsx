import { faker } from '@faker-js/faker';
import {
    Switch,
    ScrollView,
    View,
    Text,
    Image,
    Touchable,
    TouchableOpacity,
    Modal,
    Button,
    Pressable,
    ImageBackground,
} from 'react-native';
import { useState } from 'react';

export const MyUser = () => {

    const user = {
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        avatar: faker.image.avatarGitHub(), //burda bir sorun var!
        email: faker.internet.email(),
        messages: faker.number.int() % 5,
    }

    return (
        <View style={{
            width: '100%',
            height: 90,
            flexDirection: 'row',
            backgroundColor: 'lightgray'
        }}>
            <View style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <TouchableOpacity>
                    <Image source={{ uri: user.avatar }} style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                    }} />
                </TouchableOpacity>
            </View>

            <View style={{
                flex: 4,
                justifyContent: "center"
            }}>
                <TouchableOpacity>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'black'
                    }}>
                        {user.name} {user.surname}
                    </Text>
                    <Text style={{
                        color: 'gray',
                        fontSize: 12
                    }}>
                        {user.email}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity>
                    <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' }} style={{
                        width: 40,
                        height: 40,
                    }} />
                </TouchableOpacity>
            </View>
            {/* <Modal
                animationType='fade'
                transparent
                visible={isVisible}
                onTouchStart={() => setIsVisible(false)}
            >
                <ImageBackground
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqymovUnzSvqlq-9e-VJikgolTvAWBG55ZCg&s' }} style={{
                        width: '100%',
                        height: '100%',
                    }}>
                    <View>
                        <ImageBackground source={{ uri: user.avatar }} borderRadius={150}
                            style={{
                                marginLeft: 50,
                                marginTop: 250,
                                width: 300,
                                height: 300
                            }}>
                            <Pressable onPress={() => setIsVisible(false)}
                                style={{ width: '100%', height: '100%' }}>
                            </Pressable>
                        </ImageBackground>
                    </View>
                </ImageBackground>
            </Modal> */}
        </View>
    );
}