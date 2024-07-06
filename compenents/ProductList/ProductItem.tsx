import {ImageBackground, Text, View } from "react-native";
import { IProduct } from "./IProduct";

export const ProductItem: React.FC<IProduct
// {
//     title: string
//     thumbnail: string
//     description: string        Farklı Bir Tip Oluşturmak Yerine Export edilen 
//     price: number              Interface Kullanıldı!!!
//     rating: number
//     category: string

// }
> = ({ title, thumbnail, description, price, rating, category }) => {

    return (
        <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>{title}</Text>
            <Text style={{ fontSize: 17, color: 'lightgray' }}>{description}</Text>
            <ImageBackground imageStyle={{}} source={{ uri: thumbnail }} style={{ width: 300, height: 300, margin: 20 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{category}</Text>
                    </View>
                    <View style={{ flex: 5 }}></View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>*{rating}</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>    ${price}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}