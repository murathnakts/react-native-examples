import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { PropsWithChildren } from "react"
import { Home } from "../screens/home/Home";
import { Profile } from "../screens/profile/Profile";

// type NavigationProps = PropsWithChildren;
const Stack = createStackNavigator();

export const Navigation = ({children} : PropsWithChildren) => {

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  name="home" component={Home} />
                <Stack.Screen  name="profile" component={Profile} />
            </Stack.Navigator>
            {children}
        </NavigationContainer>
    )
}