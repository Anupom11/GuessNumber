import {Text, View, StyleSheet, Image} from 'react-native';
import Colors from '../component/Colors';

import PrimaryButton from '../component/PrimaryButton';

function GameOver({roundNumber, useNumber, onStartNewGame}) {

    // method to do the on restart operation
    const doRestartOp=()=> {
        onStartNewGame();
    }

    return <View style={styles.rootContainer}>
        <Text style={styles.mainText}>Game Over!</Text>
        <View style={styles.imageContainer}>
            <Image 
                style={styles.imageStyle} 
                source={require('../assets/images/success.png')}/>
        </View>
        <Text style={[styles.textSummary, {marginBottom:30}]}>
            Your phone needed 
            <Text style={styles.textHighlighted}> {roundNumber} </Text>
            round to guess the 
            <Text style={styles.textHighlighted}> {useNumber} </Text>
        </Text>
        <PrimaryButton title='Restart' onPressed={doRestartOp} enableFlag={true}/>
    </View>
}

export default GameOver;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainText: {
        fontSize: 28,
        textAlign: 'center',
        padding: 10,
        color: Colors.primary100,
        borderColor: Colors.primary100,
        borderWidth: 2,
    },
    imageContainer: {
        height: 300,
        width: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary100,
        overflow: 'hidden',
        margin: 36
    },
    imageStyle: {
        width: '100%',
        height:'100%'
    },
    textSummary: {
        fontSize:22,
        fontFamily:'OpenSans',
        textAlign:'center'
    },
    textHighlighted: {
        fontSize:24,
        fontFamily:'OpenSans',
        color: 'red'
    }
});