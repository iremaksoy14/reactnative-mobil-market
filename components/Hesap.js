import React from "react";

import { StyleSheet, View, Image, ImageBackground, TouchableOpacity } from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Grid, Row, Button, Text, Col } from "native-base";

import ButtonGreen from "../Sign/ButtonGreen";
import ButtonWhite from "../Sign/ButtonWhite";

const Hesap = ({navigation}) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/564x/b5/3f/bb/b53fbb92d5bf547459fd84d469f05601.jpg',
      }}
      resizeMode="cover"
      style={styles.image}
    >
    <Grid>
        <Row><Image style={styles.imageLogo} source={{
          uri: 'https://i.imgur.com/SONWM6V.png',
        }} resizeMode="cover"/><Text style={styles.txtTitle}>Tek Tıkla Sipariş</Text></Row>
      
      
       <Row style={{justifyContent: "center",marginTop:70}}><ButtonGreen top={hp('14')} style={styles.btnSignIn} onPress={() => navigation.navigate('Uyeol')} name="Uye Ol"></ButtonGreen></Row>
        
        <Row style={{justifyContent: "center"}}><ButtonWhite top={hp('14')} style={styles.btnSignIn} onPress={() => navigation.navigate('Girisyap')} name="Oturum Aç"></ButtonWhite></Row>


        <Row style={{justifyContent: "center"}}><Text style={styles.txtFotgotPW}>Forgot password?</Text></Row>
    </Grid>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(15,15, 15,1)",
    flex: 1,
    position: "absolute"
  },
  txtFotgotPW: {
    color: "#fff",
    top: hp("10"),
    textDecorationLine: "underline"
  },
 
  txtTitle: {
    color: "#fff",
    top: hp("4"),
    left: wp("11")
  },
  imageLogo: {
    top: hp("3"),
    left: wp("9"),
    width: wp("10"),
    height: wp("10"),
  }
});

export default Hesap;