import React, { Component } from 'react';
import { Button,Text, View, ScrollView } from 'react-native';


class ProfileScreen extends Component {
    render() {
      return (
        // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        //   <Text>Home Screen</Text>
        // </View>
        <ScrollView>
            <View style={{flex:1, alignItems: "center", justifyContent: "center"  }}>
              <Text> Profile Screen Scroll View</Text>
              <Button
                title="Go to Home"
                onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
          </ScrollView>
      )
    }
}

export default ProfileScreen;