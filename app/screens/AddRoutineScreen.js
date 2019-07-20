import React, { Component } from 'react';
import { Button, View, ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class AddRoutineScreen extends Component {
    render() {
        return (
            <View style={{ alignItems: "center", justifyContent: "center"  }}>
                <Card>
                <Text>
                    Click the button below to create a new routine
                </Text>
                <Button
                    onPress={() => this.props.navigation.navigate('AddRoutineDetails')}
                    title="+"
                />
                </Card>
            </View>
        )
    }
}

export default AddRoutineScreen;