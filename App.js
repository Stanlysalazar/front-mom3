import { StyleSheet, Text, View } from 'react-native';
import {styles} from './assets/styles/allstyles'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User from './components/User';
import RegistroUsuario from './components/RegistroUsuario';
import OlvidoContraseña from './components/olvidoContraseña';
import Cart from './components/Cart';
import Rent from './components/Rent';
import DevolucionCarts from './components/DevolucionCarst';
import Settings from './components/Settings';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='User'
      >
        
        <Stack.Screen name="User" component={User} options={{title:'User'}}/>
        <Stack.Screen name="RegistroUsuario" component={RegistroUsuario} options={{title:'RegistroUsuario'}}/>
        <Stack.Screen name="OlvidoContraseña" component={OlvidoContraseña} options={{title:'OlvidoContraseña'}}/>
        <Stack.Screen name="Cart" component={Cart} options={{title:'Cart'}}/>
        <Stack.Screen name="Rent" component={Rent} options={{title:'Rent'}}/>
        <Stack.Screen name="DevolucionCarts" component={DevolucionCarts} options={{title:'DevolucionCarts'}}/>
        <Stack.Screen name="Settings" component={Settings} options={{title:'Configuraciones'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


