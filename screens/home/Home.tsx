import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export const Home = () => {

    const nav = useNavigation();
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black'
            }}>HOME</Text>

            <Button title="Profile"/>
        </View>
    );
}