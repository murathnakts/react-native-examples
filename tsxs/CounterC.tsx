import React from "react"
import { Button, Text, View } from "react-native";

type CounterState = {
    count: number
}

export class CounterC extends React.Component<{}, CounterState> {
    state: Readonly<CounterState> = {
        count: 100
    }

    render(): React.ReactNode {
        return (
            <View style={{
                justifyContent:'center',
                alignItems:'center',
                width:200,
                height:200,
                backgroundColor:'black',
                borderRadius:30
            }}>
                <Text style={{
                    fontSize:50,
                    fontWeight:'bold'
                }}>{this.state.count}</Text>
                <Button title="Arttir" onPress={() => this.setState({
                    count: this.state.count + 1
                })}/>

            </View>
        );
    }
}