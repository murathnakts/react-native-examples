import React, { useState } from "react"
import { Button, Text, View } from "react-native"

interface CounterProps {
    start: number
    step: number
}

export const Counter = ({start,step}: CounterProps) => {
    const [count, setCount] = useState<number>(start)
    const arttir = () => setCount(count + step)
    const azalt = () => setCount(count - step)

    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            width: 200,
            height: 200,
            backgroundColor:"lightgray",
            margin:20
        }}>

            <Text style={{fontSize:20}}>{count}</Text>
            <Button title="Arttir" onPress={arttir} />
            <Button title="Azalt" onPress={azalt}/>

        </View>
    )
}

// <Counter start={200} step={5}></Counter>
// <Counter start={500} step={10}></Counter>