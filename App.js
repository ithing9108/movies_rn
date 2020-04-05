import React from 'react';
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
// import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from "./navigation/MainNavigation"; 

export default class app extends React.Component {
  state = {
    loaded: false
  } 

  handleError = (error) => console.log(error);

  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
    // await Asset.loadAsync([
    //   require("images/icon.png")
    // ])
  };
  render(){
    const{ loaded } = this.state;
    if(loaded){
      return (
        // <View style={styles.container}></View>
        <MainNavigation />
      );
    }
    else{
      return (
        <AppLoading 
          startAsync={this.loadAssets} 
          onFinish={this.handleLoaded} 
          onError={this.handleError}
        />
      );
    }
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
