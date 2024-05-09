import { Text, StyleSheet, View, Pressable, TouchableOpacity, Image } from "react-native";

export default function GameListItem({name}) {
    return (
        <TouchableOpacity style={styles.listItem} onPress={() => alert(name)}>
            <Image source={require('../../assets/Designer.jpeg')} style={{ width: 100, height: 100, borderRadius: 25}} />
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    );

}
const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        display: 'flex',
        padding: 10,
        margin: 5,
        backgroundColor: 'lightblue',
        borderRadius: 5,
        alignItems: 'center',
       
        shadowColor: 'lightgrey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
       
    },
    text: {
        fontSize: 25,
    },
});