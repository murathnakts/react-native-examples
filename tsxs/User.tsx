import React, { useState } from "react"
import { Image, ImageBackground, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native"
import { IUser } from "./UseFakeData"

export const User: React.FC<IUser> = (props) => {
    const { name, surname, avatar, email, messages } = props;
    const [isVisibleImage, setIsVisibleImage] = useState<boolean>(false);
    const [isVisibleText, setIsVisibleText] = useState<boolean>(false);
    const [message, setMessage] = useState<number>(messages);
    return (
        <View>
            <View style={{
                width: '100%',
                height: 90,
                flexDirection: 'row',
            }}>
                <View style={{
                    flex: 2,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <TouchableOpacity onPress={() => { setIsVisibleImage(true) }}>
                        <Image source={{ uri: avatar }} style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                        }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => { setIsVisibleText(true); setMessage(0) }}
                    style={{
                        flex: 5,
                        justifyContent: "center",
                        flexDirection: 'row',
                    }}>
                    <View style={{
                        flex: 3,
                        justifyContent: "center",
                    }}>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>
                            {name} {surname}
                        </Text>
                        <Text style={{
                            color: 'gray',
                            fontSize: 12
                        }}>
                            {email}
                        </Text>
                    </View>

                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {
                            message > 0 &&
                            <View style={{
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                backgroundColor: 'blue',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontWeight: 'bold'
                                }}>{message}</Text>
                            </View>
                        }
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{
                width: '100%',
                height: 1,
                backgroundColor: 'gray'
            }}>
            </View>
            <Modal
                animationType='fade'
                transparent
                visible={isVisibleImage}
                onTouchStart={() => setIsVisibleImage(false)}
            >
                <ImageBackground
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqymovUnzSvqlq-9e-VJikgolTvAWBG55ZCg&s' }} style={{
                        width: '100%',
                        height: '100%',
                    }}>
                    <View>
                        <ImageBackground source={{ uri: avatar }} borderRadius={150}
                            style={{
                                marginLeft: 50,
                                marginTop: 250,
                                width: 300,
                                height: 300
                            }}>
                            <Pressable onPress={() => setIsVisibleImage(false)}
                                style={{ width: '100%', height: '100%' }}>
                            </Pressable>
                        </ImageBackground>
                    </View>
                </ImageBackground>
            </Modal>
            <Modal
                animationType='fade'
                transparent
                visible={isVisibleText}
                onTouchStart={() => setIsVisibleText(false)}
            >
                <ImageBackground
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqymovUnzSvqlq-9e-VJikgolTvAWBG55ZCg&s' }}
                    style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <ImageBackground source={{ uri: 'https://w0.peakpx.com/wallpaper/818/148/HD-wallpaper-whatsapp-background-cool-dark-green-new-theme-whatsapp.jpg' }}
                        borderRadius={50}
                        style={{
                            marginLeft: 20,
                            marginTop: 75,
                            width: '95%',
                            height: '85%',
                        }}>
                        <View style={{
                            flexDirection: 'row',
                            marginBottom:20
                        }}>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image source={{ uri: avatar }} style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 30,
                                    marginTop:10,
                                    marginLeft:10
                                }} />
                            </View>
                            <View style={{
                                flex: 3,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    marginTop:10,
                                    backgroundColor:'black',
                                    borderRadius:25,
                                    padding:3,
                                    fontSize:22,
                                    fontWeight: 'bold',
                                    color: 'white'
                                }}>
                                    {name} {surname}
                                </Text>
                            </View>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Pressable onPress={() => setIsVisibleText(false)}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        marginRight:20,
                                        marginTop:10,
                                        backgroundColor: 'red',
                                        borderRadius: 25,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>X</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 15, fontWeight: 'bold', backgroundColor: 'lightgreen', borderRadius: 25, marginBottom: 10,
                                paddingLeft: 15, width: 340, marginLeft: 10
                            }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
                            <Text style={{
                                fontSize: 15, fontWeight: 'bold', backgroundColor: 'lightgreen', borderRadius: 25, marginBottom: 10,
                                paddingLeft: 15, width: 340, marginLeft: 10
                            }}>
                                Vitae perspiciatis, nemo esse sed excepturi expedita non iusto</Text>
                            <Text style={{
                                fontSize: 15, fontWeight: 'bold', backgroundColor: 'lightgreen', borderRadius: 25, marginBottom: 10,
                                paddingLeft: 15, width: 340, marginLeft: 10
                            }}>
                                fugiat eum autem labore minus eveniet id earum aperiam sequi voluptatem officiis dolores!</Text>
                        </View>
                        <TextInput style={{
                            width: 300,
                            backgroundColor: 'gray',
                            borderRadius: 25,
                            marginLeft: 25,
                            marginTop: 50,
                            paddingLeft: 20
                        }} />
                    </ImageBackground>
                </ImageBackground>
            </Modal>
        </View>
    )
}
// 
{/* 
    import { UseFakeData} from './UseFakeData';
    import { User } from './User';
    import { MyUser } from './MyUser';
    
    const users = UseFakeData();
    
    <MyUser/>
      <ScrollView>
        {
          users.map(e => <User key={e.id}{...e} />)
        }
      </ScrollView> */}



//   const [name,setName] = useState<string>('');


//   <TextInput style={{
//     width: 250,
//     height: 50,
//     borderRadius: 25,
//     padding: 15,
//     fontWeight: 'bold',
//     backgroundColor: 'lightgray',
//     color: 'black'
//   }}
//     placeholder='İsim Giriniz'
//     placeholderTextColor={'gray'}
//     value={name}
//     onChangeText={e => setName(e)}
//   />

//     <Button
//     color={'gray'}
//     title='Open Modal'
//     onPress={() => setIsVisible(true)} />




// const [isVisible, setIsVisible] = useState<boolean>(false);
//   <Modal
//     animationType='slide'
//     transparent
//     visible={isVisible}
//   >
//     <View style={{
//       position: 'absolute',
//       height: 350,
//       width: '100%',
//       bottom: 0,
//       borderRadius: 40,
//       backgroundColor: 'lightgray'
//     }}>
//       <Button
//         color={'gray'}
//         title='Close'
//         onPress={() => setIsVisible(false)} />
//     </View>
//   </Modal>


{/* <MyUser />
      <ScrollView>
        {
          users.map(e => <User key={e.id}{...e} />)
        }
      </ScrollView> */}