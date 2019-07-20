import React, { Component } from 'react';
import { Text, ScrollView, TextInput, View, Input } from 'react-native';
import { Card } from 'react-native-elements';



class EditProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'First Name',
            lastName: 'Last Name'
        };
    }
    render() {
        return (
            <View style={{flex:1, padding:10}}>
                <Card
                title={"First Name"}>
                {/* <Text style={{padding:10}}>
                    {this.state.text}
                </Text> */}
                <TextInput
                    style={{height:40}}
                    placeholder="Edit First Name"
                    onChangeText={(firstName) => this.setState({firstName})}
                    value={this.state.firstName}
                />
                </Card>
                <Card
                title={"Last Name"}>
                {/* <Text style={{padding:10}}>
                    {this.state.text}
                </Text> */}
                <TextInput
                    style={{height:40}}
                    placeholder="Edit Last Name"
                    onChangeText={(lastName) => this.setState({lastName})}
                    value={this.state.lastName}
                />
                </Card>
            </View>
        )
    }
}

export default EditProfileScreen;