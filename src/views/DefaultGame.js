import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function DefaultGame() {
    return (
        <View style={styles.container}>
        <View style={styles.box}>
            <Image style={styles.image} source={require('../../assets/Designer.jpeg')}/>
            <Text style={styles.title}>Þessi leikur er ekki tilbúinn!</Text>
        </View>
  
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 16,
    },
    image : {
        width: 200,
        height: 200,
        borderRadius: 100,
    },

});