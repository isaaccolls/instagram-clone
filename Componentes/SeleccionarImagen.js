import * as React from 'react';
import { Button, Image, View, TouchableOpacity } from 'react-native';
// import { ImagePicker, Permissions, Constants } from 'expo';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const SeleccionarImagen = (props) => {

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  const seleccionarImagen = async () => {
    getPermissionAsync(); // should be on componentDidMount()

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      // this.setState({ image: result });
      props.cargar(result);
    }
  };
  console.log("😊 radius: ", props.radius);
  const radius = { borderRadius: props.radius ? 0 : 80 }

  return (
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={seleccionarImagen}>
        {
          props.imagen ? (
            <Image source={{ uri: props.imagen.uri }}
              style={{ width: 160, height: 160, ...radius }}
            />
          ) : (
            <Image source={require('../assets/signUp.png')}
              style={{ width: 160, height: 160, borderRadius: 80 }}
            />
          )
        }
      </TouchableOpacity>
    </View>
  );
};

export default SeleccionarImagen;
