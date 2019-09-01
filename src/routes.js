import react from 'react'
import { Image } from 'react-native'

import { createAppContainer, createStackNavigation } from 'react-navigation'

import logo from './assets/instagram.png'

import Feed from './pages/Feed'

const Routes = createAppContainer(
  createStackNavigation({
    Feed
  },{
    headerTLayoutPreset: 'center', 
    defaultnavigationOptions:{
      headerTitle: <Image source={logo} />,
      headerStyle: {
        backgroundColor: '#f5f5f5'
      }
    }
  })
)

export default Routes