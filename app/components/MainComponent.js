import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator, createStackNavigator, createDrawerNavigator, createAppContainer, DrawerItems, SafeAreaView } from "react-navigation";

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import AddRoutineScreen from '../screens/AddRoutineScreen';
import AddRoutineDetailsScreen from '../screens/AddRoutineDetailsScreen';

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width:24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
        </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={1} />;
};

const AddRoutineNavigator = createStackNavigator({
  AddRoutine: { screen: AddRoutineScreen },
  AddRoutineDetails: { screen : AddRoutineDetailsScreen } // specifies the various components
}, {
  // initialRouteName: 'Add Routine',
  navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: "#fff"            
      },
      // headerLeft: <Ionicons name='menu' size={24} color='white'
      //         onPress={() => navigation.toggleDrawer()}
      //         />
  })
});

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container}
    forceInset={{ top: 'always', horizontal: 'never'}}>
      <View style={{flex:1}}>
        <Image source={require('../assets/images/logo.png')}
        style={styles.drawerImage}/>
        </View>
        <View style={{flex:2}}>
          <Text style={styles.drawerHeaderText}>TimeKeep</Text>
        </View>
      <DrawerItems {...props}/>
    </SafeAreaView>
  </ScrollView>
);

const ProfileNavigator = createDrawerNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'My Profile',
      drawerLabel: 'My Profile',
      drawerIcon: ({ tintColor }) => (
        <Ionicons 
          name='ios-person'
          size={24}
          color={tintColor}
          />
      )
    }
  },
  EditProfile: {
    screen: EditProfileScreen,
    navigationOptions: {
      title: 'Edit Profile',
      drawerLabel: 'Edit Profile',
      drawerIcon: ({ tintColor }) => (
        <Ionicons
          name='ios-create'
          size={24}
          color={tintColor}
          />
      )
    }
  }
},
{
  drawerBackgroundColor: '#B0E0E6',
  contentComponent: CustomDrawerContentComponent
})

// Tab Navigation 
const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileNavigator,
    AddRoutine: AddRoutineNavigator,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'AddRoutine') {
          iconName = `ios-add-circle`;
        }
        if (routeName === 'Home') {
          // iconName = `ios-home${focused ? '' : '-outline'}`;
          iconName = `ios-home`;
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge; 
        } else if (routeName === 'Profile') {
          // iconName = `ios-person${focused ? '' : '-outline'}`;
          iconName = `ios-person`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const styles = StyleSheet.create({
  container: {
      flex:1
  },
  drawerHeader: {
      backgroundColor: '#512DA8',
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
  },
  drawerHeaderText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      flexDirection: 'row'
  },
  drawerImage: {
      margin: 10,
      width: 40,
      height: 40,
      flexDirection: 'row'
  }
})

// export default createAppContainer(AppNavigator);
export default createAppContainer(TabNavigator);