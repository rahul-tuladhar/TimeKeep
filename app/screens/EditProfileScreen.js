import React, { Component } from 'react';
import { Text, ScrollView, TextInput, View, Input } from 'react-native';
import { Card } from 'react-native-elements';



class EditProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'First Name',
            lastName: 'Last Name',
            email: 'Email',
        };
    }
    render() {
        return (
            <ScrollView>
            <View style={{flex:1}}>
                <Card
                title={"First Name"}>
                <TextInput
                    style={{height:40}}
                    placeholder="Edit First Name"
                    onChangeText={(firstName) => this.setState({firstName})}
                    value={this.state.firstName}
                />
                </Card>
            </View>
            <View style={{flex:1}}>
                <Card
                title={"Last Name"}>
                <TextInput
                    style={{height:40}}
                    placeholder="Edit Last Name"
                    onChangeText={(lastName) => this.setState({lastName})}
                    value={this.state.lastName}
                />
                </Card>
            </View>
            <View style={{flex:1}}>
                <Card
                title={"Email"}>
                <TextInput
                    style={{height:40}}
                    placeholder="Edit Email"
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
                </Card>
            </View>
            </ScrollView>

        )
    }
}

export default EditProfileScreen;