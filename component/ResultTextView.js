import {Text, View, StyleSheet} from 'react-native';

import Colors from './Colors';

function ResultTextView({result}) {
    return <View style={styles.container}>
        <Text style={styles.numberText}>{result}</Text>
    </View>
}

export default ResultTextView;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.primary100,
        borderRadius: 8,
        padding: 24,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color:Colors.primary100,
        fontSize: 34,
        fontWeight:'bold'
    }

})