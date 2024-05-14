import React from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';
import {  Text, TextInput, Button, Card } from 'react-native-paper';

export default function WordScrambleView() {
    return (
        <Card style={styles.container}>
            <View style={styles.scrambledWord}>
                <Text variant='headlineLarge'>Orðarugl!</Text>
                <Image style={styles.image} source={require('../../assets/stafarugl.jpeg')} />
                <Text variant='bodyMedium'>Giskaðu á orðið sem er búið að rugla!</Text>
            </View>
            <View style={styles.scrambledWord}>
                <Text variant='headlineLarge'>ruhnud</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Sláðu inn orðið"
                mode='outlined'
                
            />
            <Card.Actions style={styles.buttons}>
                <Button mode='outlined' onPress={() => {}} >Næsta orð</Button>
                <Button mode='contained' onPress={() => alert("Rétt!")} >Giska</Button>
                
            </Card.Actions>
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