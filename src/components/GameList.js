import { View, StyleSheet} from "react-native";
import GameListItem from "./GameListItem";
import { FlatList } from "react-native";

export default function GameList(){
    const games = [ "Orðarugl", "Blabla", "Eitthvað", "LundaLeikur", "SetningaLeikur", "OrðaLeikur", "Leikur", "Annar Leikur" ];
    return (
        <View style={styles.container}>
        <FlatList
            data={games}
            renderItem={({item}) => <GameListItem name={item} />}
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
        padding: 10,

        
    },
});