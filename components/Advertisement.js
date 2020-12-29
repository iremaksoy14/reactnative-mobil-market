import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView,Image,View,TouchableHighlight, } from 'react-native';
import Constants from 'expo-constants';

const Advertisement = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      
    <TouchableHighlight onPress={()=>props.navigation.navigate("Gıda")}><Image  source={require("../Advert/advertisement1.jpg")}/></TouchableHighlight>
      <View style= {{marginBottom:10}}></View>
      <Image  source={require("../Advert/Advertisement2.jpg")}/>
        <View style= {{marginBottom:10}}></View>
    <TouchableHighlight onPress={()=>props.navigation.navigate("Deterjan-Temizlik")}><Image  source={require("../Advert/advertisement3.jpg")}/></TouchableHighlight>
         <View style= {{marginBottom:10}}></View>
        <Image  source={require("../Advert/advertisement4.jpg")}/>

        
          <View style= {{marginBottom:10}}></View>
         <Image  source={require("../Advert/advertisement5.jpg")}/>


          <View style= {{marginBottom:10}}></View>
       <Image  style={{width:450,height:161}} source={require("../Advert/advertisement6.jpeg")}/>
         <View style= {{marginBottom:10}}></View>
         
          <TouchableHighlight onPress={()=>props.navigation.navigate("Gıda")}>
        <Image  source={require("../Advert/advertisement7.jpg")}/>
        </TouchableHighlight>

          <View style= {{marginBottom:10}}></View>
             <TouchableHighlight onPress={()=>props.navigation.navigate("Deterjan-Temizlik")}>
         <Image  source={require("../Advert/advertisement8.jpg")}/>
         </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    
    marginHorizontal: 20,
  },
 
});

export default Advertisement;