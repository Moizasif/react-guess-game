import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import colors from '../constants/colors';

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over !</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/success.png')}
                    // source={
                    //     {uri: 'https://blog.strava.com/wp-content/uploads/2018/06/DSC02332-1.jpg'}
                    // }
                    style={styles.image}
                    resizeMode='cover' />
            </View>
            <View style={styles.resultcontainer}>
                <BodyText style = {styles.resultText}>Your phone needed {' '}
                    <Text style={styles.highlight}>{props.roundsNumber}  </Text>
            rounds to guess the number {' '}
                    <Text style={styles.highlight}>{props.userNumber}</Text>
                </BodyText>
            </View>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    resultcontainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    resultText:{
       textAlign: 'center',
       fontSize: 20
    },

    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 2,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%',

    },
    highlight: {
        color: colors.primary,
        fontFamily: 'open-sans-bold'
    }
})

export default GameOverScreen;
