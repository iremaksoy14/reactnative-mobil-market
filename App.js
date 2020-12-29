import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,Image,Button} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import rootReducer from './store/store'
import promiseMiddleware from 'redux-promise';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Cart from './components/Cart'
import Firsat from './components/Firsat'
import { Provider } from "react-redux";
import Urunler from './components/Urunler'
import MapPage from './components/MapView'
import Hesabim from './components/Hesabim'
import ButtonGreen from './Sign/ButtonGreen'



import SignIn from './Sign/Signin'
import SignUp from './Sign/Signup'


import Adres from './components/Adres'

import Reklam  from './components/Advertisement'
import CartView from './components/CartView'
import Bebek from './Kategori/Bebek';
import Gida from './Kategori/Gida';
import Kahvaltilik from './Kategori/Kahvaltilik';
import Temizlik from './Kategori/Temizlik';
import Petshop from './Kategori/petshop';
import Icecek from  './Kategori/Icecek';
import Et from './Kategori/Et';





import Login from './components/Login';

import Hesap  from './components/Hesap';
import Sepet from './components/Sepet';
import Anasayfa from './components/Anasayfa';
import Kategoriler from './components/Kategoriler';
import Kampanyalar from './components/Kampanyalar';
import store from './store/store';

import Product from './components/Product'
const Top = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabindex" component={Tabindex}   options={{title:"SANAL MARKET"}}/>
        <Stack.Screen name="Anasayfa"  component={Anasayfa} />
      <Stack.Screen name="Login" component={Login} />
   
      <Stack.Screen name="Sepetim" component={Sepet} />
      <Stack.Screen name="Kampanyalar" component={Kampanyalar} />
       <Stack.Screen name="Reklam" component={Reklam} />
     <Stack.Screen name="ButtonGreen" component={ButtonGreen} />


        <Stack.Screen name="Gıda" component={Gida} />
          <Stack.Screen name="İçecek" component={Icecek} />
        <Stack.Screen name="Bebek Ürünleri" component={Bebek} />
          <Stack.Screen name="Süt-Kahvaltılık" component={Kahvaltilik} />
           <Stack.Screen name="Ev-Petshop" component={Petshop} />


        <Stack.Screen name="Deterjan-Temizlik" component={Temizlik} />
          <Stack.Screen name="Et-Tavuk-Balık" component={Et} />


       
       <Stack.Screen name="Urunler"  component={Urunler} />
        
         <Stack.Screen name="CartView"  component={CartView} />
          <Stack.Screen name="Product"  component={Product} />
           <Stack.Screen name="Firsat"  component={Firsat} />
            <Stack.Screen name="Adres"  component={Adres}   options={{title:"ADRESLERİM"}}/>
               <Stack.Screen name="Hesap"  component={Hesap} />
                <Stack.Screen name="Girisyap"  component={SignIn} />
                 <Stack.Screen name="Hesabim"  component={Hesabim} />
                 <Stack.Screen name="Uyeol"  component={SignUp} />
           
          </Stack.Navigator>
  );
}

function Tabindex() {
  return (
    <Top.Navigator  barStyle={{ backgroundColor: '#808080' }} activeColor="#ff7f00"
  inactiveColor="#ffffff">
    <Top.Screen name="Anasayfa" component={MyDrawer} options={{ tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons  name="home" color={color} size={26} />
          )}} />
   
   
   
          <Top.Screen  name="Kampanyalar" component={Reklam}  options={{ tabBarIcon: ({ color }) => (
           <MaterialCommunityIcons name="inbox" size={26} color={color} />
          )}} />
           <Top.Screen name="Sepetim"  component={Sepet}  options={{ tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons  name="cup" color={color} size={26} />
          )}} />
         
           <Top.Screen  name="Fırsatlar" component={Kampanyalar}  options={{ tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons  name="gift" color={color} size={26} />
          )}} />
            <Top.Screen  name="Harita" component={MapPage}  options={{  tabBarIcon: ({ color }) => (
           <MaterialCommunityIcons name="map" size={26} color={color} />
          ),title:"Şubemiz "}} />

        </Top.Navigator>

  );
}
function MyDrawer() {
  
  return (
    <Drawer.Navigator drawerStyle={{
    backgroundColor: '#fff8f2'
    
  }} >
      <Drawer.Screen name="Anasayfa" component={Anasayfa} options={{drawerIcon: ({ tintColor }) => (<MaterialCommunityIcons name="home" size={26} color={tintColor} />
     
    )}}  />
      <Drawer.Screen name="Gıda"  component={Gida} options={{drawerIcon: ({ tintColor }) => (<MaterialCommunityIcons name="food" size={26} color={tintColor} />
     
    )}} />
        <Drawer.Screen name="Bebek Ürünleri" component={Bebek}  options={{drawerIcon: ({ tintColor }) => (<MaterialCommunityIcons name="baby-carriage" size={26} color={tintColor} />
     
    )}}/>
       <Drawer.Screen name="Süt-Kahvaltılık" component={Kahvaltilik}  options={{drawerIcon: ({ tintColor }) => (<MaterialCommunityIcons name="food-variant" size={26} color={tintColor} />
     
    )}}/>
      <Drawer.Screen name="Deterjan-Temizlik" component={Temizlik} options={{drawerIcon: ({ tintColor }) => (<MaterialCommunityIcons name="flask-empty" size={26} color={tintColor} />
     
    )}} />
        <Drawer.Screen name="Et-Tavuk-Balık" component={Et}  options={{drawerIcon: ({ tintColor }) => (<MaterialCommunityIcons name="fish" size={26} color={tintColor} />
     
    )}} />
        <Drawer.Screen name="İçecek" component={Icecek} options={{drawerIcon: ({ tintColor }) => (<MaterialCommunityIcons name="coffee" size={26} color={tintColor} />
     
    )}} />
      <Drawer.Screen name="Ev-Petshop"  component={Petshop} options={{drawerIcon: ({ tintColor }) => (<MaterialCommunityIcons name="dog-side" size={26} color={tintColor} />
     
    )}} />
     

     <Drawer.Screen name="Hesabim"  component={Hesabim} options={{drawerIcon: () => (<MaterialCommunityIcons name="account" size={26} color="#ff0000" />
     
    )}} />

     <Drawer.Screen name="Adreslerim"  component={Adres} options={{drawerIcon: () => (<MaterialCommunityIcons name="book" size={26} color="#ff0000" />
     
    )}} />
    
       
</Drawer.Navigator>
    

  );
}



const App = () => {
  return (
    
    <Provider store={store}>
    <NavigationContainer>
    <MyStack/>
    </NavigationContainer>
    </Provider>
    
  );
};



export default App;
