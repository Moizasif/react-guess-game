import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';


const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        //First Validation Number Only 0 -9 globally
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }
    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Inavalid Number!',
                'Number has to be a number between 1 and 99.',
                [{ text: 'okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();

    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput =
            <Card style={styles.confirmOutput}>
                <Text>You Selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)}/>
            </Card>
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game! </Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                                title="Reset"
                                onPress={resetInputHandler}
                                color={colors.accent} />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="Confirm"
                                onPress={confirmInputHandler}
                                color={colors.primary} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,

    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'

    },
    button: {
        width: '40%'
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    confirmOutput: {
        marginTop: 20,
        alignItems:'center'
    }
});



export default StartGameScreen

