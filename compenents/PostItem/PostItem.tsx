import { Image, Text, TouchableOpacity, View } from "react-native";
import { Post } from "../PostList/PostList";

export const PostItem: React.FC<Post> = (props) => {

    const {
        id, userAvatar, userName, description, image, likes, comments ,hours
    } = props;

    return (
        <View style={{
            width: '100%',
            height: 400,
            marginTop: 20,
            backgroundColor:'gray',
            borderRadius:25,
            paddingLeft:5
        }}>
            <View style={{ flex: 1,marginTop:10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Image source={{ uri: userAvatar }} style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20
                        }} />
                    </View>
                    <View style={{ flex: 5, justifyContent: 'center', paddingLeft: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{userName}</Text>
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
                <Text>{description}</Text>
                <Image source={{ uri: image }} style={{
                    width: '90%',
                    height: 200,
                    marginTop: 10,
                    borderRadius: 20
                }} />
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'lightgray', fontSize: 15, paddingLeft: 20, marginTop: 5 }}>♥ {likes}</Text>
                    </View>
                    <View style={{ flex: 1, }}>
                        <Text style={{ color: 'lightgray', fontSize: 15, paddingLeft: 20, marginTop: 5 }}>🗨 {comments}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'gray', fontSize: 15, paddingLeft: 20, marginTop: 5 }}>{hours} hours ago</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}