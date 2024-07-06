import { PropsWithChildren } from "react"
import { View } from "react-native"

type ContainerProps = PropsWithChildren<{
    width: number
    height: number
    variant: "primary" | "warning" | "error"
}>

export const Container = ({ width, height, variant, children }: ContainerProps) => {
    return (
        <View style={{
            margin: 5,
            width: width,
            height: height,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: width / 2,
            backgroundColor: variant === 'primary' ? 'blue' :
                variant === 'warning' ? 'yellow' : 'red'
        }}>
            {
                children
            }
        </View>
    )
} 