import {useState, UseEffect} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Avatar, Button} from 'react-native-paper';
import {styles} from '../assets/styles/allstyles';


export default function RegistroUsuario(){
    return(
        <>
        <View style={{ borderWidth: 2, borderColor: 'gray', borderRadius: 10, padding: 50 }}>
                <TextInput
                    autoFocus
                    label="Usuario"
                    left={<TextInput.Icon icon="email" />}
                    
                />
                <TextInput
                    style={{ marginTop: 20 }}
                    label="Nombre"
                    left={<TextInput.Icon icon="email" />}
                />
                <TextInput
                    autoFocus
                    label="Rol"
                    left={<TextInput.Icon icon="email" />}
                    
                />
                <TextInput
                    autoFocus
                    label="Palabra Reservada"
                    left={<TextInput.Icon icon="email" />}
                    
                />
                <Button
                    style={{ marginTop: 20, backgroundColor: 'orange' }}
                    icon="login"
                    mode="outlined"
                    
                >
                    Registrar
                </Button>
                
                
            </View>
      
        
        
        </>
    )
    
}