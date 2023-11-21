import {useState, UseEffect} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Avatar, Button} from 'react-native-paper';
import {styles} from '../assets/styles/allstyles';


export default function DevolucionCarts(){
    return (
        <View style={styles.container}>
          <Text>Número de Renta:</Text>
          <TextInput
            style={styles.input}
            
            keyboardType="numeric"
          />
    
          <Text>Número de Placa:</Text>
          <TextInput
            style={styles.input}
            
          />
    
          <Text>Fecha Final:</Text>
          <TextInput
            style={styles.input}
            
          />
    
    <Button
                    style={{ marginTop: 20, backgroundColor: 'yellow' }}
                    icon="account"
                    mode="outlined"
                    
                >
                    Guardar
                </Button>
                <Button
                    style={{ marginTop: 20, backgroundColor: 'red' }}
                    icon="account"
                    mode="outlined"
                   
                >
                    Cerrar sesion
                </Button>
        </View>
      );
}


