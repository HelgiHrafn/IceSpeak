import { Text, StyleSheet, View, Pressable, TouchableOpacity } from "react-native";
import {Card, Button, useTheme} from 'react-native-paper';

export default function GameListItem({game, navigation}) {
    const theme = useTheme();
    return (
    
        <Card theme={theme} style={styles.listItem}>
            <Card.Title title={game.name} />
            <Card.Cover source={game.image} />
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