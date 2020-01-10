import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SignInForm from './Formas/SignInForm';
import { connect } from 'react-redux';
import { actionLogin } from '../../Store/ACCIONES';

class SignIn extends Component {
    signinDeUsuario = (values) => {
        // console.log(values);
        this.props.login(values);
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <SignInForm login={this.signinDeUsuario} />
                <Button
                    title="SignUp"
                    onPress={() =>
                        navigation.navigate('SignUp')
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 16,
    },
});

const mapStateToProps = (state) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (datos) => {
            // dispatch({type: 'LOGIN', datos});// remember destructuring in "datos" 😜
            // implementing a action creator
            dispatch(actionLogin(datos));// remember destructuring in "datos" 😜
        }
    }
}

// export default SignIn;
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);