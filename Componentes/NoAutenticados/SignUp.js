import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

class SignUp extends Component {
    render() {
        console.log(this.props.numero);
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>SignUp</Text>
                <Button
                    title="Aumentar"
                    onPress={this.props.aumentar}
                />
                <Button
                    title="SignIn"
                    onPress={() =>
                        navigation.goBack()
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
        alignItems: 'center',
        backgroundColor: '#902e9b',
    },
});

const mapStateToProps = (state, ownProps) => {
    return {
        numero: state.reducerPrueba,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        aumentar: () => {
            dispatch({ type: 'AUMENTAR_REDUCER_PRUEBA' });
        },
    }
}

// export default SignUp;
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);