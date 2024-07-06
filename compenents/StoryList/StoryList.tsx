import { faker } from "@faker-js/faker"
import { FlatList, Text, View } from "react-native";
import { StoryItem } from "../StoryItem/StoryItem";

interface Story {
    id: string
    avatar: string
    username: string
}

const stories = Array<number>(40).fill(0).map<Story>(() => ({
    id: faker.string.uuid(),
    avatar: faker.image.url(),
    username: faker.internet.userName()
} as Story))

const Header = () => {

    return(
        <View style={{
            width: 80,
            height: 80,
            marginRight: 5,
            borderWidth:2,
            borderColor:'cyan',
            borderRadius:20,
            borderStyle:'dashed',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text style={{
                fontSize:50
            }}>+</Text>
        </View>
    );
}

export const StoryList = () => {

    return (
        <FlatList
            style={{
                marginLeft:20,
                marginTop:20
            }}
            ListHeaderComponent={Header}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={stories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <StoryItem {...item} />
            )}
        />
    );
}