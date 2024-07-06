import { useEffect } from "react";
import { View } from "react-native";

export const Products = () => {

    useEffect(() => {
        (async () => {
            fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(json => console.log(json))
        })();
    }, []);

    return(
        <View>

        </View>
    );
}