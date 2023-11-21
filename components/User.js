import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { TextInput, Avatar, Button } from 'react-native-paper';
import { styles } from '../assets/styles/allstyles';
// Importa axios si es necesario

export default function User() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Agrega aquí cualquier otro estado necesario

  useEffect(() => {
    // Lógica que quieres ejecutar al montar el componente
  }, []);

  const handleSignIn = () =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        setEmail("")
        setPassword("")
        // console.log("Conexión exitosa ...");
        navigation.navigate('Home',{email:email})
    })
    .catch((error)=>{
        //console.log(error.message)
        setMessage("Usuario y/o contraseña invalida")
        setMessageColor(false)
    })
}

const handleCreateAccount = () =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        //console.log(userCredential.user.providerData)
        setMessageColor(true);
        setMessage("Cuenta creada correctamente ...")
    })
    .catch((error)=>{
        ///console.log(error.message)
        setMessage("Error al crear la cuenta... Inténtelo de nuevo")
        setMessageColor(false)
    })
}

  const handleForgotPassword = () => {
    // Lógica para manejar la recuperación de contraseña
  };

  return (
    <View style={styles.container}>
      <Avatar.Image
        style={{ marginBottom: 20 }}
        size={100}
        source={require('../assets/imgs/imglogin.png')}
      />
      <View style={{ borderWidth: 2, borderColor: 'gray', borderRadius: 10, padding: 50 }}>
        <TextInput
          autoFocus
          label="Correo Electrónico"
          left={<TextInput.Icon icon="email" />}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={{ marginTop: 20 }}
          label="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button
          style={{ marginTop: 20, backgroundColor: 'orange' }}
          icon="login"
          mode="outlined"
          onPress={handleSignIn}
        >
          Iniciar Sesión
        </Button>
        <Button
          style={{ marginTop: 20, backgroundColor: 'yellow' }}
          icon="account"
          mode="outlined"
          onPress={handleCreateAccount}
        >
          Crear Cuenta
        </Button>
        <Button
          style={{ marginTop: 20, backgroundColor: 'red' }}
          icon="account"
          mode="outlined"
          onPress={handleForgotPassword}
        >
          Olvido Contraseña
        </Button>
      </View>
    </View>
  );
}

