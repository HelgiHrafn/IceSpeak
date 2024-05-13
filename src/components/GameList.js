import { View, StyleSheet} from "react-native";
import GameListItem from "./GameListItem";
import { FlatList } from "react-native";

export default function GameList({navigation}){
    const games = [ "Orðarugl", "Stafarugl", "MálfræðiMysa", "Lunda-Leikur", "SetningaSull", "FuglaFornöfn", "Leikur", "Annar Leikur" ];
    return (
        <View style={styles.container}>
        <FlatList
            data={games}
            renderItem={({item}) => <GameListItem name={item} navigation={navigation}/>}
            keyExtractor={item => item}
            numColumns={2}
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