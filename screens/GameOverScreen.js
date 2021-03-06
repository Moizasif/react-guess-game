import React from 'react'
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import colors from '../constants/colors';

const GameOverScreen = (props) => {
    return (
        <ScrollView>
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
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    resultcontainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60,
    },
    resultText:{
       textAlign: 'center',
       fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    },

    imageContainer: {
        //70 % of the available width
        width: Dimensions.get('window').width * 0.75,
        height: Dimensions.get('window').width * 0.75,
        borderRadius: Dimensions.get('window').width * 0.75 / 2,
        borderWidth: 2,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30,
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
