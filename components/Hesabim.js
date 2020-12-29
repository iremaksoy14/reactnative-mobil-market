import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Hesabim = (props) => {
  const {navigation}=props

  return (
    <SafeAreaView style={styles.container}>
       <TouchableHighlight onPress={()=>navigation.navigate("Hesap")}>
       
       <View  style={styles.item}>
     
        <MaterialCommunityIcons  name="account"  size={26} color="#838b8b" />
        <Text style={styles.title}> Üye ol veya Giriş Yap</Text>
         <MaterialCommunityIcons style={{marginLeft:120}} name="arrow-right"  size={26} color="#666666" />
      
  </View>
  </TouchableHighlight>

  <TouchableHighlight>
  <View style={styles.item}>
     
        <MaterialCommunityIcons name="map"  size={26} color="#838b8b" />
        <Text style={styles.title}> Teslimat Bölgesi Seç</Text>
         <MaterialCommunityIcons style={{marginLeft:120}} name="arrow-right"  size={26} color="#666666" />
  </View>
  </TouchableHighlight>

  <TouchableHighlight>
  <View style={styles.item}>
     
        <MaterialCommunityIcons name="gift"  size={26} color="#838b8b" />
        <Text style={styles.title}>Sipariş Takibi</Text>
         <MaterialCommunityIcons style={{marginLeft:180}} name="arrow-right"  size={26} color="#666666" />
  </View>


  </TouchableHighlight>
  <View style={styles.item1}>
     
        <MaterialCommunityIcons name="phone"  size={26} color="#ff7f00" />
      
        <View style={{flexDirection:"column",height:30,marginBottom:8,paddingLeft:20,}}>
        <Text style={{fontSize: 15,color:"#666666"}}>Müşteri Hizmetleri</Text>
        <Text style={{color:"#ff7f00",fontSize:20}}>0553 744 3924</Text>
       
        </View>
  </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:"row",
    marginLeft:5
  },
  title: {
    fontSize: 18,
    color:"#838b8b"
  },
  item1: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:"row",
    marginLeft:30,
    width:300,
    marginTop:10,
  

  },

});

export default Hesabim;