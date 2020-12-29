import React, { Component } from "react";
import { View, Text ,TouchableOpacity,ImageBackground,Image,
StyleSheet,Picker,ScrollView,StatusBar} from "react-native";
import { Icon } from 'react-native-elements'
import Urunler from './Urunler'
import Swiper from "react-native-web-swiper";
import Hesap from './Hesap';
import CartView from './CartView';
import Firsat from './Firsat';
import Digerler from './Digerler'
import Yilbasi from './Yilbasi'

 export default class Anasayfa extends Component {
  
   state={
      selectedValue:"java"
   
    }
  constructor(props){
    super(props);
  
    
  }
 
  render() {
  const{navigation}=this.props;
    return (
      <View>
       <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
<ScrollView>
      <View>
      
    
<View style={{width:410,height:230,marginBottom:10}}>
                  <Swiper
                    from={1}
                    minDistanceForAction={0.1}
                    controlsProps={{
                      dotsTouchable: true,
                      prevPos: 'left',
                      nextPos: 'right',
                      nextTitle: '>',
                      nextTitleStyle: { color: 'white', fontSize: 24, fontWeight: '500' },
                      PrevComponent: ({ onPress }) => (
                        <TouchableOpacity onPress={onPress}>
                          <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                            {'<'}
                          </Text>
                        </TouchableOpacity>
                      ),
                    }}
                  >
                   <ImageBackground source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2RS8gJCjxlZVQWvpoH1ug4LgENdDFFiMcHg&usqp=CAU"}} style={{width:400,height:230}}/>
                   <ImageBackground source={{uri:"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/list/campaign_list/20000012917311/750_kampanyalar_sayfasi_2-e4a37d.jpg"}} style={{width:410,height:230}}/>
                 
                   <ImageBackground source={{uri:"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/list/campaign_list/20000100882293/766_kampanyalar_sayfasi_febrez-5250a6.jpg"}} style={{width:410,height:230}}/>
                  <ImageBackground source={{uri:"https://ayb.akinoncdn.com/cms/2020/11/16/0265d800-5823-4156-b723-441fe775cc47.jpg"}} style={{width:410,height:230}}/>
               <ImageBackground source={{uri:"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/banner/main_page_slider/13043/15077-765_web_slider_money_bonus-dc7f60.jpg"}} style={{width:410,height:230}}/>
              
               <ImageBackground source={{uri:"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/list/campaign_list/20000095251537/766_kampanyalar_sayfasi_lysol-6aa70e.jpg"}} style={{width:410,height:230}}/>
              
              
               
         
                  </Swiper>
  
            
          </View>
         <View style={{borderRadius:5,borderColor:"#ff0000",borderWidth:1,width:150,marginLeft:120}}><Text style={{textAlign:"center",color:"#ff0000"}}>Bu Firsat Kaçmaz</Text></View>
         <ScrollView horizontal={true}>
          <Firsat/>
          </ScrollView>

           
          <View ><Image source={require("../kargo.jpg")} style={{width:400,height:150,marginTop:16}}/></View>
       
     
      </View>
      <View style={{borderRadius:5,borderColor:"#000000",borderWidth:1,width:200,marginLeft:120,marginTop:20}}><Text style={{textAlign:"center",color:"#000000"}}>Her şeyin Başı Sağlık</Text></View>
   <ScrollView horizontal={true}>
          <Urunler/>
       
        
          </ScrollView>
             <View style={{borderRadius:5,borderColor:"#0000ff",borderWidth:1,width:200,marginLeft:120}}><Text style={{textAlign:"center",color:"#0000ff"}}>Haftanın İndirimli Ürünleri</Text></View>
          <ScrollView horizontal={true}>
          <View style={{marginTop:10,marginBottom:10}}></View>
          <Digerler/>
       
        
          </ScrollView>

           <View style={{borderRadius:5,borderColor:"#ff0000",borderWidth:1,width:200,marginLeft:120}}><Text style={{textAlign:"center",color:"#ff0000"}}>Yılbaşı Ürünleri</Text></View>
          <ScrollView horizontal={true}>
          <View style={{marginTop:10,marginBottom:10}}></View>
          <Yilbasi/>
       
        
          </ScrollView>

           
      </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  
 
  
  
});




/*

<View style={{flexDirection:"row"}}>
      <Image
          style={styles.tinyLogo}
          source={{uri:"https://s3.amazonaws.com/htw/dt-contest-entries/15792/canada-finance-investor-trade-show-logo-design.gif"}}/>
          <View style={{flexDirection:"column"}}>
          <TouchableOpacity onPress={()=>{navigation.navigate("Hesap")}}>
         <Image style={styles.hesap} source={{uri:"https://www.nfitdiyet.com/images/memberIcon.png"}}
        />
        </TouchableOpacity>
        <Text >Hesabım</Text>
        </View>
       
     
        
    </View>


 */

 