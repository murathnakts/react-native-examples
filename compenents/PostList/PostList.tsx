import { faker } from "@faker-js/faker";
import { FlatList, View } from "react-native";
import { PostItem } from "../PostItem/PostItem";
import { StoryItem } from "../StoryItem/StoryItem";

export interface Post {
    id: string
    userAvatar: string
    userName: string
    description: string
    image: string
    likes: number
    comments: number
    hours: number
}

const posts = Array<number>(10).fill(0).map<Post>(() => ({
    id: faker.string.uuid(),
    userAvatar: faker.image.url(),
    userName: faker.internet.userName(),
    description: faker.lorem.paragraph(),
    image: faker.image.urlPicsumPhotos(),
    likes: faker.number.int({ min: 10, max: 1000 }),
    comments: faker.number.int({ min: 0, max: 125 }),
    hours: faker.number.int({min:1,max:11})
} as Post))



export const PostList = () => {

    return (
        <View style={{
            alignItems:'center'
        }}>
            <FlatList
                style={{width:'90%'}}
                showsVerticalScrollIndicator={false}
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PostItem {...item} />}
            />
        </View>
    );
}