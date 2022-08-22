import {View, Text, Pressable, StyleSheet} from 'react-native';

function PrimaryButton({title, onPressed, enableFlag}) {
    return (
        <View style={style.buttonOuterContainer}>
            <Pressable 
                style={({pressed})=> pressed ? [style.buttonInnerContainer, style.buttonPressed] : style.buttonInnerContainer}
                onPress={onPressed}
                disabled={enableFlag ? false : true}
                android_ripple={{color: '#660134'}}>
                <Text style={style.buttonText}>{title}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const style = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8, 
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    buttonPressed: {
        opacity: 0.75
    }
});