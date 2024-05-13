import { View, Text, FlatList } from "react-native";
import SearchResult from "./SearchResult";

export default function SearchResultList({ searchTerm }) {
    const searchResults = [ "Orðarugl", "Stafarugl", "MálfræðiMysa", "Lunda-Leikur", "SetningaSull", "FuglaFornöfn", "Leikur", "Annar Leikur" ];


        return (
            <View>
                {/* Render the search results here */}
                <FlatList
                    data={searchResults.filter(result =>
                        result.toLowerCase().includes(searchTerm.toLowerCase())
                    )}
                    renderItem={({ item }) => <SearchResult name={item} /> }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
