import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";

const url = "http://172.16.59.134:3000/api/clientes";

export default function Settings() {
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: "",
      apellidos: "",
    },
  });
  const [dataCustomers, setDataCustomers] = useState([]);
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const getCustomers = async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      if (!response.data.error) {
        setDataCustomers(response.data);
        //console.log(dataCustomers);
      }
      else {
        console.log("No hay clientes para mostrar");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCustomerById = async (id) => {
    const response = await axios.get(`${url}/${id}`);
    if (!response.data.error) {
      setValue("nombre", response.data.nombre);
      setValue("apellidos", response.data.apellidos);
    }
    else {
      console.log("No hay clientes con id: " + id);
    }

  };

  const onSave = async (data) => {
    try {
      const resp = await axios.get(`${url}/byname/${data.nombre}`);
      console.log(data.nombre)
      if (resp.data == null) {
        const response = await axios.post(url, data);
        getCustomers();
        setMessage("Cliente agregado correctamente...");
        setIsError(false)
      }
      else {
        setMessage("Nombre de cliente EXISTE. Inténtelo con otro ...");
        setIsError(true);
      }

    } catch (error) {
      console.log(error);
    }
  };

  const onUpdate = async (data) => {
    try {
      const response = await axios.put(`${url}/${id}`, data);
      setMessage("Cliente actualizado correctamente...");
      getCustomers();
      setIsError(false)
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async (data) => {
    try {
      if (confirm("Está seguro de eliminar el cliente?")) {
        const response = await axios.delete(`${url}/${id}`);
        setMessage("Cliente eliminado correctamente...");
        getCustomers();
        setIsError(false)
        reset()
      }

    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getCustomers();
  }, []);
  return (
    <View style={styles.container}>
      <Text>CRUD para Clientes de Tienda Backend</Text>
      {/* Formulario para clientes */}
      <TextInput
        label="Id a Buscar"
        onChangeText={(id) => setId(id)}
        value={id}
        style={{ marginTop: 10 }}
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Nombre"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={{ marginTop: 10 }}
            autoFocus
          />
        )}
        name="nombre"
      />
      {errors.nombre?.type == "required" && (
        <Text style={{ color: "red" }}>Nombre es obligatorio</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Apellidos"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={{ marginTop: 10 }}
          />
        )}
        name="apellidos"
      />
      {errors.apellidos?.type == "required" && (
        <Text style={{ color: "red" }}>Apellidos obligatorios</Text>
      )}
      <View style={{flexDirection:'row'}}>
        <Button
          style={{ marginTop: 20 }}
          icon="content-save"
          mode="outlined"
          onPress={handleSubmit(onSave)}
        >
          Guardar
        </Button>

        <Button
          style={{ marginTop: 20 }}
          icon="magnify"
          mode="outlined"
          onPress={() => getCustomerById(id)}
        >
          Buscar
        </Button>
        <Button
          style={{ marginTop: 20 }}
          icon="pencil"
          mode="outlined"
          onPress={handleSubmit(onUpdate)}
        >
          Actualizar
        </Button>
      </View>
      <View style={{flexDirection:'row'}}>
      <Button
        style={{ marginTop: 20 }}
        icon="delete"
        mode="outlined"
        onPress={handleSubmit(onDelete)}
      >
        Eliminar
      </Button>
      <Button
        style={{ marginTop: 20 }}
        icon="close"
        mode="outlined"
        onPress={() => {
          reset()
          setId("");
        }}
      >
        Limpiar
      </Button>
      </View>
      <Text style={{ color: isError ? "red" : "green" }}>{message}</Text>
      {/* Lista de clientes */}
      <Text style={{ marginTop: 30 }}>Listado de Clientes</Text>
      <FlatList
        data={dataCustomers}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              borderRadius: 10,
              padding: 20,
              backgroundColor: "powderblue",
              marginTop: 5,
            }}
            onPress={() => alert(item.nombre)}
          >
            {item.apellidos} {item.nombre}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
