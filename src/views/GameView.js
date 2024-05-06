import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, Button, Pressable, Alert} from 'react-native';

import puffin from '../../assets/Designer.jpeg';
import logo from '../../assets/logo.png';
import GameList from '../components/GameList';


export default function GameView () {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>IceSpeak</Text>
            <StatusBar style="auto" />
            <Image
                source={logo}
                style={{ width: 300, height: 300, borderRadius: 75}}
            />
            <Pressable style={styles.button} onPress={() => alert('Jibbí! Þú vannst.')}>
                <Text style={styles.buttonText}>Byrja Leik</Text>
            </Pressable>
            <GameList />

        </View>
    );
    }

    const styles = StyleSheet.create({
        heading: {
            fontSize: 30,
            fontWeight: 'bold',
            margin: 20,
        },
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        button: {
            backgroundColor: '#f01d71',
            color: 'white',
            padding: 10,
            borderRadius: 5,
            margin: 20,
        },
        buttonText: {
            color: 'white',
            fontSize: 20,
        },
    });