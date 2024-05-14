import { View, StyleSheet} from "react-native";
import GameListItem from "./GameListItem";
import { FlatList } from "react-native";

export default function GameList({navigation}){
    const games = [
        { name: "Orðarugl", image: require("../../assets/ordarugl.jpeg") },
        { name: "Stafarugl", image: require("../../assets/stafarugl.jpeg") },
        { name: "MálfræðiMysa", image: require("../../assets/malfraedimysa.jpeg") },
        { name: "Lunda-Leikur", image: require("../../assets/lundaleikur.jpeg") },
        { name: "SetningaSull", image: require("../../assets/setningasull.jpeg") },
        { name: "FuglaFornöfn", image: require("../../assets/fuglafornofn.jpeg") }
    ];
    return (
        <View style={styles.container}>
        <FlatList
            data={games}
            renderItem={({item}) => <GameListItem game={item} navigation={navigation}/>}
            keyExtractor={(item, index) => index.toString()} 
            numColumns={2}
            showsVerticalScrollIndicator={false}
        />
        </View>
    );
}
styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,

        
    },
});