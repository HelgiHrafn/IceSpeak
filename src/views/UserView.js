import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
const UserView = () => {
    const [user, setUser] = React.useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Image style={styles.image} source={require('../../assets/defaultAvatar.jpg')} />
                <Text style={styles.title}>{user?.name || 'Notandi Notandason'}</Text>
            </View>
            <View style={styles.buttonBox}>
                <Button style={styles.button} mode="contained" onPress={()=> console.log()}>Kaupa áskrift</Button>
                <Button style={styles.button} mode="outlined" onPress={() => setUser(null)}>Skrá út</Button>
            </View>
            
           

        </View>
    );
};

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
    button: {
        margin: 8,
    },
    buttonBox: {
        flexDirection: 'column',
      
    },

});
export default UserView;