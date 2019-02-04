import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAfSmc1IVPm-lR43CGZSfmJ8jiz038F47k',
            authDomain: 'authentication-26d97.firebaseapp.com',
            databaseURL: 'https://authentication-26d97.firebaseio.com',
            projectId: 'authentication-26d97',
            storageBucket: 'authentication-26d97.appspot.com',
            messagingSenderId: '127312415506'
          });

          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
            return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>;
            case false:
            return <LoginForm />;
            default:
            return <Spinner size={'small'} />;

        }
    }
   
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
            <View style={styles.renderContentStyle}>
                {this.renderContent()}
            </View>
            
        </View>
        );
    } 
    }

    const styles = {
        renderContentStyle: {
            
            height: 40
        }
    }
export default App;
