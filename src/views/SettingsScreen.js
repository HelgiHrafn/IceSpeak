import React, { Component } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

class SettingsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notificationsEnabled: false,
            darkModeEnabled: false,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Settings</Text>
                <View style={styles.setting}>
                    <Text>Enable Notifications</Text>
                    <Switch
                        value={this.state.notificationsEnabled}
                        onValueChange={(value) =>
                            this.setState({ notificationsEnabled: value })
                        }
                    />
                </View>
                <View style={styles.setting}>
                    <Text>Enable Dark Mode</Text>
                    <Switch
                        value={this.state.darkModeEnabled}
                        onValueChange={(value) => this.setState({ darkModeEnabled: value })}
                    />
                </View>
            </View>
        );
    }
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

export default SettingsScreen;