import { Text, View } from "react-native";

export const Profile = () => {

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
            }}>PROFILE</Text>
        </View>
    );
}