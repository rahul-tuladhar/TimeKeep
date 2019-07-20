import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { Card } from 'react-native-elements';

class AddRoutineDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Some Placeholder text'
        }
    }
    
    render() {
        return (
            <View>
                <Card
                    featuredTitle={"Create a New Routine"}
                    >
                <Text style={{margin:10, justifyContent: 'center'}}>
                    Create a New Routine:
                </Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                </Card>
            </View>
        )
    }
}

export default AddRoutineDetailsScreen;