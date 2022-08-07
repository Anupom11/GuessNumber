import React, {useState} from 'react';
import { TextInput, View, Text, StyleSheet, Alert } from "react-native";

import PrimaryButton from '../component/PrimaryButton';
import Colors from '../component/Colors';

function StartGameScreen({onPickNumber}) {

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredValue) {
        setEnteredNumber(enteredValue);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const enteredNo = parseInt(enteredNumber);

        if(isNaN(enteredNo) || enteredNo <=0 || enteredNo > 99) {
            Alert.alert('Invalid!', 'Please enter a number in between including 1 and 99', [
                {
                    text: 'Okey',
                    style: 'cancel',
                    onPress:()=> {resetInputHandler},
                },
            ]);

            return;
        }
        else {
            onPickNumber(enteredNo);
        }
    }

    return (
        <View style={styles.rootContainer}>
            <Text style={styles.title}>Guess My Number</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.hintText}>Enter a number between 1 and 100</Text>
                <TextInput style={styles.numberInput}
                    multiline={false}
                    keyboardType={"number-pad"}
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredNumber} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPressed={resetInputHandler} title='Reset'/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPressed={confirmInputHandler} title='Submit' />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems:'center'
    },  
    inputContainer: {
        alignItems: 'center',
        marginTop:35,
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
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary100,
        textAlign:'center',
        borderWidth: 2,
        borderColor: Colors.primary100,
        padding: 12
    },
    hintText: {
        fontSize: 14,
        color:'white'
    }
});