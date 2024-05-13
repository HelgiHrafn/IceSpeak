import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import SearchResultList from '../components/SearchResultList';

export default function SearchView({navigation}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // Implement your search logic here
        console.log('Searching for:', searchTerm);
        // You can update the state or perform any other actions based on the search term
        
    };

    return (
        <View styles={styles.container}>
            
            <Searchbar
                style={styles.searchBar}
                placeholder="Leita að leik"
                onChangeText={setSearchTerm}
                value={searchTerm}
                onIconPress={handleSearch}
                />
            {/* SearchResults */}
            <SearchResultList styles={styles.results} searchTerm={searchTerm}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        marginTop: 20,
    },
    searchBar: {
        margin: 10,

    },
 
});
