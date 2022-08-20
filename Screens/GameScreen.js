import { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';

import Colors from '../component/Colors';
import ResultTextView from '../component/ResultTextView';
import PrimaryButton from '../component/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } 
    else {
      return rndNum;
    }
}

var lowerVal = 1, higherVal = 100;

function GameScreen({userInputNo, gameOverFlag, guessCountNo}) {

    const initialGuess = generateRandomBetween(1, 100, userInputNo);
    const [currentGuessNo, setCurrentGuessNo] = useState(initialGuess);
    const [guessCount, setGuessCount] = useState(0);

    useEffect(()=> {
        if(currentGuessNo === userInputNo) {
            gameOverFlag(true);
            guessCountNo(guessCount);
        }
    }, [currentGuessNo, userInputNo]);

    function nextRandomNumber(direction)    // direction=> 'lower'/'higher'
    {
        if(
            (direction === 'lower' && currentGuessNo < userInputNo) || 
            (direction === 'higher' && currentGuessNo > userInputNo)) 
        {
            Alert.alert("Info", "Wrong user input!", [
                {
                    text: 'Okey',
                    style: 'cancel'
                }
            ]);

            return;
        }
        else {
            if(direction === 'lower') {
                higherVal = currentGuessNo;
            }
            else if(direction === 'higher') {
                lowerVal = currentGuessNo + 1;
            }
    
            const newRandNo = generateRandomBetween(lowerVal, higherVal, currentGuessNo);
            setCurrentGuessNo(newRandNo);

            setGuessCount(guessCount+1);
        }
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Opponent's Guess</Text>
            <ResultTextView result={currentGuessNo}/>
            <View style={{alignItems:'center'}}>
                <Text>Higher or Lower</Text>
                <View style={{flexDirection:'row'}}>
                    <PrimaryButton onPressed={nextRandomNumber.bind(this, 'higher')} title='+'/>
                    <PrimaryButton onPressed={nextRandomNumber.bind(this, 'lower')} title='-'/>
                </View>
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding: 24
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary100,
        textAlign:'center',
        borderWidth: 2,
        borderColor: Colors.primary100,
        padding: 12
    }
});