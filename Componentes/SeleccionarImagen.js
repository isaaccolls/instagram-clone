import * as React from 'react';
import { Button, Image, View, TouchableOpacity } from 'react-native';
import {ImagePicker, Permissions, Constants} from 'expo';

export default class SeleccionarImagen extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={this.seleccionarImagen}>
          {
            this.state.image ? (
              <Image source={{ uri: this.state.image }}
                style={{ width: 160, height: 160, borderRadius: 80 }}
              />
            ) : (
              <Image source={require('../assets/xd_304.jpg')}
                style={{ width: 160, height: 160, borderRadius: 80 }}
              />
            )
          }
        </TouchableOpacity>
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  seleccionarImagen = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}