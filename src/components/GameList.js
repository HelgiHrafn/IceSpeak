import { View, StyleSheet} from "react-native";
import GameListItem from "./GameListItem";

export default function GameList(){
    const games = [ "Orðarugl", "Blabla", "Eitthvað", "LundaLeikur", "SetningaLeikur", "OrðaLeikur", "Leikur", "Annar Leikur" ];
    return (
        <View style={styles.container}>
            {games.map((game) => (
                <GameListItem key={game} name={game} />
            ))}
        </View>
    );
}
styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});