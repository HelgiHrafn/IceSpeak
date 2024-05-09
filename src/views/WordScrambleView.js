import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


export default function WordScrambleView() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Word Scramble</Text>
            <Text style={styles.scrambledWord}>paple</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your guess"
            />
            <Button title="Submit" onPress={() => {}} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    scrambledWord: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
    },
});