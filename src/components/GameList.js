import { View, StyleSheet} from "react-native";
import GameListItem from "./GameListItem";
import { FlatList } from "react-native";

export default function GameList({navigation}){
    const games = [
        { id: 0, name: "Orðarugl", image: require("../../assets/ordarugl.jpeg") },
        { id: 1, name: "Stafarugl", image: require("../../assets/stafarugl.jpeg") },
        { id: 2, name: "MálfræðiMysa", image: require("../../assets/malfraedimysa.jpeg") },
        { id: 3, name: "Lunda-Leikur", image: require("../../assets/lundaleikur.jpeg") },
        { id: 4, name: "SetningaSull", image: require("../../assets/setningasull.jpeg") },
        { id: 5, name: "FuglaFornöfn", image: require("../../assets/fuglafornofn.jpeg") }
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