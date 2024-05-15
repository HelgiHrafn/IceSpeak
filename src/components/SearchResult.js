import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

export default function SearchResult({ name }) {
    return (
        <Card style={styles.container}>
            <Text style={styles.text}>{name}</Text>
        </Card>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 5,
        padding: 10,
  
        borderRadius: 10,
        
    },
    text: {
        fontSize: 25,
    },
});
