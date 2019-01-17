import React from "react";
import { View, Text,KeyboardAvoidingView, TextInput,StyleSheet,Button} from 'react-native';
import { inject, observer } from "mobx-react";

@inject(({ loginFormStore }) => ({
    loginFormStore
}))
@observer
class LoginScreen extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.container}>
                <TextInput style = {styles.input}
                           autoCapitalize="none"
                           onSubmitEditing={() => this.passwordInput.focus()}
                           autoCorrect={false}
                           keyboardType='email-address'
                           returnKeyType="next"
                           placeholder='Email'
                           placeholderTextColor='rgb(225,225,225)'/>

                <TextInput style = {styles.input}
                           returnKeyType="go"
                           ref={(input)=> this.passwordInput = input}
                           placeholder='Password'
                           placeholderTextColor='rgb(225,225,225)'
                           secureTextEntry/>
                <TextInput style = {styles.input}
                           returnKeyType="go"
                           ref={(input)=> this.passwordInput = input}
                           placeholder='Repeat Password'
                           placeholderTextColor='rgb(225,225,225)'
                           secureTextEntry/>
                <Button
                    style = {styles.button}
                    title="Login"
                    onPress={() => {
                        this.props.navigation.push("movies");
                    }}
                />
            </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(1,21,80,1)',
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.8)',
        marginBottom: 10,
        padding: 10,
        color: 'black'
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    button:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
})

export default LoginScreen;

