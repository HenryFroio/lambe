import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'


const menuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigaitonOptions : {
            title: 'Feed',
            tabBarIcon: ({tintColor}) => 
                <Icon name='home' size={30} color={tintColor} />
        }
    },
    Add: {
        name: 'AddPhoto',
        screen: Feed,
        navigaitonOptions : {
            title: 'AddPicture',
            tabBarIcon: ({tintColor}) => 
                <Icon name='camera' size={30} color={tintColor} />
        }

    },
    Profile: {
        name: 'Profile',
        screen: Feed,
        navigaitonOptions : {
            title: 'Profile',
            tabBarIcon: ({tintColor}) => 
                <Icon name='user' size={30} color={tintColor} />
        }

    },

}


const menuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
        showLabel: false,
        
    }
}

const menuNavigator = createBottomTabNavigator(menuRoutes, menuConfig)

export default menuNavigator


