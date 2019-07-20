import React, { Component } from 'react';
import { Button,Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';


class ProfileScreen extends Component {
    render() {
      return (
        <ScrollView>
            <View style={{flex:1, alignItems: "center", justifyContent: "center"  }}>
              <Card>
                <Text> Profile Screen Scroll View</Text>
                <Button
                  title="Go to Home"
                  onPress={() => this.props.navigation.navigate('Home')}
                  />
              </Card>
            </View>
          </ScrollView>
      )
    }
}

export default ProfileScreen;