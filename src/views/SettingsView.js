import React, { Component } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
export default function SettingsView() {
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
    const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <View style={styles.setting}>
                <Text>Enable Notifications</Text>
                <Switch
                    value={notificationsEnabled}
                    onValueChange={(value) =>
                        setNotificationsEnabled(value)
                    }
                />
            </View>
            <View style={styles.setting}>
                <Text>Enable Dark Mode</Text>
                <Switch
                    value={darkModeEnabled}
                    onValueChange={(value) => setDarkModeEnabled(value)}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    setting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
});