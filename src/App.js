import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAfSmc1IVPm-lR43CGZSfmJ8jiz038F47k',
            authDomain: 'authentication-26d97.firebaseapp.com',
            databaseURL: 'https://authentication-26d97.firebaseio.com',
            projectId: 'authentication-26d97',
            storageBucket: 'authentication-26d97.appspot.com',
            messagingSenderId: '127312415506'
          });
    }
    render() {
        return (
            <View>
            <Header headerText="Authentication" />
            <LoginForm />
        </View>
        );
    } 
    }
export default App;
