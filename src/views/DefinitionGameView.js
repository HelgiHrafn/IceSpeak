import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Card, useTheme } from 'react-native-paper';


export default function DefinitionGameView() {
    const theme = useTheme();
    const handleAnswer = (answer) => {
        if (answer === currentWord.correctAnswer) {
            alert('Rétt svar!');
        } else {
            alert('Rangt svar!');
        }
    };
    const words = [
                {word: 'Hryggur', options: [ 'Að vera glaður', 'Að vera leiður', 'Að vera reiður', 'Að vera pirraður' ],correctAnswer: 'Að vera leiður'},
                {word: 'Staðráðinn', options: [ 'Að vera ráðinn á staðnum', 'Að vera mjög reiður', 'Að vera ákveðinn', 'Að vera sorgmæddur' ],correctAnswer: 'Að vera ákveðinn'},
                {word: 'Óttasleginn',options: [ 'Að vera hræddur', 'Að vera reiður', 'Að vera áhyggjufullur', 'Að vera fyndinn' ],  correctAnswer: 'Að vera hræddur'}
                ];
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextWord = () => {
        if (currentIndex < words.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setCurrentWord(words[currentIndex + 1]);
        } else {
            setCurrentIndex(0);
            setCurrentWord(words[0]);
        }
    }

    return (
        <Card style={styles.container}>
            <View style={styles.titles}>
                <Text style={{ fontSize: 25, margin: 10 }}>Hvað þýðir orðið?</Text>
                <Text style={{ fontSize: 30, margin: 10 }}>"{currentWord.word}"</Text>
            </View>
            <View style={styles.answerCards}>
                <TouchableOpacity
                    style={[styles.answerCard, { backgroundColor: '#E01A4F' }]}
                    onPress={() => handleAnswer(currentWord.options[0])}
                >
                    <Text style={{ fontSize: 20, color: 'white' }}>{currentWord.options[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.answerCard, { backgroundColor: '#F15946' }]}
                    onPress={() => handleAnswer(currentWord.options[1])}
                >
                    <Text style={{ fontSize: 20, color: 'white' }}>{currentWord.options[1]}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.answerCard, { backgroundColor: '#F9C22E' }]}
                    onPress={() => handleAnswer(currentWord.options[2])}
                >
                    <Text style={{ fontSize: 20, color: 'white' }}>{currentWord.options[2]}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.answerCard, { backgroundColor: '#53B3CB' }]}
                    onPress={() => handleAnswer(currentWord.options[3])}
                >
                    <Text style={{ fontSize: 20, color: 'white' }}>{currentWord.options[3]}</Text>
                </TouchableOpacity>
            </View>
            <Card.Actions style={{margin: 5}}>
                <Button mode='contained'  onPress={() => nextWord()}>Næsta spurning</Button>
            </Card.Actions>
        </Card>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        alignItems: 'center',
      
        margin: 10,
        height: '100%',
      
      
       
    },
    answerCards: {
        
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginHorizontal: 5,


     

    },
    answerCard: {
        margin: 10,
        width: '45%', 
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,

        
        
      
    },
    titles: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    }
});