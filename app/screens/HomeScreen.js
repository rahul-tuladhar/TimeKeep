import React, { Component } from 'react';
import { Button, Text, View, ScrollView } from 'react-native';


class HomeScreen extends Component {
    render() {
      return (
        // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        //   <Text>Home Screen</Text>
        // </View>
        <ScrollView>
            <View style={{flex:1, alignItems: "center", justifyContent: "center"  }}>
              <Text> Home Screen Scroll View</Text>
              <Button
                title="Go to Profile"
                onPress={() => this.props.navigation.navigate('Profile')}
                />
            </View>
          </ScrollView>
      )
    }
}

export default HomeScreen;