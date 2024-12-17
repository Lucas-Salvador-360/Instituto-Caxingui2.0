import { TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle } from "react-native"
import { style } from "./styles"
import { ElementType, ReactNode } from "react"


interface IProps {
    titleButton: ReactNode, 
    styleContainer?: StyleProp<ViewStyle>,
    styleText?: StyleProp<TextStyle>,
    handleClick: () => void
    Icon: ElementType
}

export const ButtonWithIcon =({
    titleButton,
    styleContainer,
    styleText,
    Icon,
    handleClick}:IProps ) => {
        return(
                <TouchableOpacity 
                onPress={handleClick}
                style={[style.button, styleContainer, ]}>
                    {
                     Icon &&
                     <Icon/>
                    }
                     <Text style={[style.title, styleText]} numberOfLines={2}>
                        {titleButton}
                     </Text>
                </TouchableOpacity>  
        )
    }