import { TextInput, View, Text, StyleSheet } from "react-native";

import PrimaryButton from '../component/PrimaryButton';

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput}
                multiline={false}
                keyboardType={"number-pad"}
                maxLength={2} />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton title='Reset'/>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton title='Submit' />
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        marginTop:100,
        marginHorizontal: 25,
        padding: 16,
        backgroundColor: '#3b011e',
        borderRadius: 8,
        elevation: 4, 
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 55,
        width: 100,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlignVertical:'bottom',
        textAlign:'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    buttonContainer: {
        flex: 1
    }
});