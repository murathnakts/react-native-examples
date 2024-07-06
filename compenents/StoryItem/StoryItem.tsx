import { Image, Text, View } from "react-native";

type StoryItemProps = {
    avatar: string
    username: string
}

export const StoryItem = ({ avatar, username }: StoryItemProps) => {

    return (
        <View style={{
            marginLeft:10
            
        }}>
            <Image style={{
                width: 80,
                height: 80,
                marginRight: 5,
                borderWidth:2,
                borderColor:'cyan',
                borderRadius:20
            }}
                source={{ uri: avatar }}
            />
            <Text style={{
                color:'gray'
            }}>{username}</Text>
        </View>
    );
}