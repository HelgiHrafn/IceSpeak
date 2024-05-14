import React from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';
import {  Text, TextInput, Button, Card } from 'react-native-paper';

export default function WordScrambleView() {
    const [word, setWord] = React.useState('');
    const [scrambledWord, setScrambledWord] = React.useState('');
    const [score, setScore] = React.useState(0);
    const [guess, setGuess] = React.useState('');
    const [isCorrect, setIsCorrect] = React.useState(false);
    const [isGameOver, setIsGameOver] = React.useState(false);
    const [isGameWon, setIsGameWon] = React.useState(false);
    const wordList = ['hundur', 'kettir', 'fuglar', 'hestur', 'kóngur', 'drottning', 'bíll', 'hús', 'tré', 'blóm', 'sjór', 'himinn', 'jörð', 'eldur', 'loft', 'víkingur', 'skáld', 'tónlist', 'list', 'saga', 'heimur', 'tími', 'vísa', 'sál', 'hugur', 'hugmynd', 'hugleiðing']
    
    const scrambleWord = (word) => {
        let scrambledWord = word.split('').sort(() => Math.random() - 0.5).join('');
        while (scrambledWord === word) {
            scrambledWord = word.split('').sort(() => Math.random() - 0.5).join('');
        }
        return scrambledWord;
    }
    const nextWord = () => {
        const randomIndex = Math.floor(Math.random() * wordList.length);
        setWord(wordList[randomIndex]);
        setScrambledWord(scrambleWord(wordList[randomIndex]));
    }
    const checkGuess = () => {
        if (guess === word) {
            setScore(score + 1);
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }
    React.useEffect(() => {
        nextWord();
    }, []);

    return (
        <Card style={styles.container}>
            <View style={styles.scrambledWord}>
                <Text variant='headlineLarge'>Orðarugl!</Text>
                <Image style={styles.image} source={require('../../assets/stafarugl.jpeg')} />
                <Text variant='bodyMedium'>Giskaðu á orðið sem er búið að rugla!</Text>
            </View>
            <View style={styles.scrambledWord}>
                <Text variant='headlineLarge'>{scrambledWord}</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Sláðu inn orðið"
                mode='outlined'
                value={guess}
                onChangeText={setGuess}
            />
            <Card.Actions style={styles.buttons}>
                <Button mode='outlined' onPress={nextWord}>Sleppa</Button>
                <Button mode='contained' onPress={checkGuess}>Áfram</Button>
            </Card.Actions>
            {isCorrect && <Text variant='bodyMedium'>Rétt!</Text>}
            {isGameOver && <Text variant='bodyMedium'>Leik lokið!</Text>}
        </Card>
    );
    
}
const styles = StyleSheet.create({
    container: {
      
        padding: 16,
        margin: 16,
        backgroundColor: '',
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
     
    },
    scrambledWord: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 30,
        margin: 16,
    },
});