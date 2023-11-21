import {useState, UseEffect} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Avatar, Button} from 'react-native-paper';
import {styles} from '../assets/styles/allstyles';


export default function OlvidoContraseña(){
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
                    label="Palabra Reservada"
                    left={<TextInput.Icon icon="email" />}
                />
                <TextInput
                    autoFocus
                    label="Nueva Contraseña"
                    left={<TextInput.Icon icon="email" />}
                    
                />
                
                <Button
                    style={{ marginTop: 20, backgroundColor: 'orange' }}
                    icon="login"
                    mode="outlined"
                    
                >
                    Registrar
                </Button>
                <Button
                    style={{ marginTop: 20, backgroundColor: 'orange' }}
                    icon="login"
                    mode="outlined"
                    
                >
                    Iniciar Sesion
                </Button>
                
                
                
            </View>
      
        
        
        </>
    )
}