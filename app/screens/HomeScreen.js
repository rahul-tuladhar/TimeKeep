import React, { Component } from 'react';
import { Button, Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';


class HomeScreen extends Component {
    render() {
      return (
        <ScrollView>
            <View style={{flex:1, alignItems: "center", justifyContent: "center"  }}>
              <Card>
                <Text> Home Screen Scroll View</Text>
                <Button
                  title="Go to Profile"
                  onPress={() => this.props.navigation.navigate('Profile')}
                  />
              </Card>
            </View>
          </ScrollView>
      )
    }
}

export default HomeScreen;