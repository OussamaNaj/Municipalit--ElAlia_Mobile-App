import Notifications from './Notifications'
import Services from './Services'
import Acceuil from './Acceuil'
import Actualities from './Actualities'
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Acceuil" component={Acceuil} />
      <Tab.Screen name="Actualities" component={Actualities} />
      <Tab.Screen name="Services" component={Services} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}