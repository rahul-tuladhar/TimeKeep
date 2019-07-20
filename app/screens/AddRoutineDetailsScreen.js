import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class AddRoutineDetailsScreen extends Component {
    render() {
        return (
            <View>
                <Card
                    featuredTitle={"Create a New Routine"}
                    >
                <Text style={{margin:10}}>
                    Click the button below to create a new routine
                </Text>
                </Card>
            </View>
        )
    }
}

export default AddRoutineDetailsScreen;