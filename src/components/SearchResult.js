import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-paper';

export default function SearchResult({ name }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 5,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        
    },
    text: {
        fontSize: 25,
    },
});
