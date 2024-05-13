import { Text, StyleSheet, View, Pressable, TouchableOpacity, Image } from "react-native";
import {Card, Button} from 'react-native-paper';

export default function GameListItem({name, navigation}) {
    return (
    
        <Card style={styles.listItem}>
            <Card.Title title={name} />
            <Card.Cover source={{ uri: 'https://picsum.photos/300' }} />
            <Card.Actions>
                <Button mode='contained' onPress={() => navigation.navigate('GameView')}>Spila</Button>
            </Card.Actions>
        </Card>
    );

}
const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        margin: 5,
        padding: 5,
       
    },
    text: {
        fontSize: 25,
    },
    
});