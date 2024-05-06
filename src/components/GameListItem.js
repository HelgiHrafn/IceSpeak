import { Text, StyleSheet, View, Pressable } from "react-native";

export default function GameListItem({name}) {
    return (
        <Pressable style={styles.listItem} onPress={() => alert(name)}>
            <Text style={styles.text}>{name}</Text>
        </Pressable>
    );

}
const styles = StyleSheet.create({
    listItem: {
        width: '45%',
        padding: 10,
        margin: 5,
        backgroundColor: '#f9c2ff',
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
    },
});