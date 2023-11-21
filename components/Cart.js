import {useState, UseEffect} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Avatar, Button} from 'react-native-paper';
import {styles} from '../assets/styles/allstyles';


export default function Cart(){
    return (
        <View style={styles.container}>
          <Text>Platenumber:</Text>
          <TextInput
            style={styles.input}
            
            
          />
    
          <Text>Brand:</Text>
          <TextInput
            style={styles.input}
            
            
          />
    
          <Text>State:</Text>
          <TextInput
            style={styles.input}
          
          />
    
          <Text>Daily Value:</Text>
          <TextInput
            style={styles.input}
            
          />
    
        <Button
                    style={{ marginTop: 20, backgroundColor: 'red' }}
                    icon="account"
                    mode="outlined"
                   
                >
                    Volver
                </Button>
                
        </View>
      );
}