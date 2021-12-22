import React from 'react'
import { Icon } from 'react-native-elements'
// import { Colors } from 'components/Screens/Setting1/constants/Colors.js'

const Chevron = () => (
  <Icon
    name="chevron-right"
    type="entypo"
    color={"gray"} // changed color
    containerStyle={{ marginLeft: -15, width: 20 }}
  />
)

export default Chevron
