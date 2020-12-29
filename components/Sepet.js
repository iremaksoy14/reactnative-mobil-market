import React, { Component } from 'react';
import {SafeAreaView,View,FlatList,StyleSheet,Text,StatusBar,Image,Dimensions,Button,TouchableOpacity,ImageBackground} from 'react-native';
import Swipeout from 'rc-swipeout';
import sepetbos from './sepetbos.png'


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ListItem, Avatar, Badge } from 'react-native-elements';
import { connect } from 'react-redux';
const screenWidth = Dimensions.get('window').width;
const aspectRatio = 3 / 4;
const rowWidth = (screenWidth - 3 * 10) / 4;
import { deleteFood } from '../store/actions/food';

const imageStyle = {
  width: screenWidth,
  height: screenWidth / aspectRatio,
};
const containerStyle = { paddingLeft: 0 };
const elmStyle = { paddingLeft: 15 };

class Sepet extends Component {

hesapla=()=>
{
 var cevap=this.props.foods.reduce((total,item)=>{
  
        return total +=item.price}
         ,0)
  return cevap;


}
hesapla2=(item)=>{

var son=this.props.foods.filter((urun)=>{
     if(urun.styleid==item.styleid)
     {
        item.adet++
     }
     return this.props.foods;
     

})
  
}


  constructor(props) {
    super(props);
    
  }






  render() {
    const { navigation } = this.props;

    return (
      
      <SafeAreaView style={styles.container}>
      {this.props.foods ? (<FlatList
          data={this.props.foods}
          keyExtractor={(item) => item.styleid}
          renderItem={(data) => (
            <View  style={{
                borderRadius: 8,
                borderWidth: 1,
                margin: 5,
                borderColor: '#e0e0e0',
              }}>
            <Swipeout
              
              right={[
                {
                  text: 'SİL',
                  onPress: () => this.props.delete(data.item.key),
                  style: {
                    backgroundColor: '#ff0000',
                    color: 'white',
                    fontSize: 11,
                  },
                },
                {
                  text: 'FAVORİLERE EKLE',
                  style: {
                    backgroundColor: '#0000ff',
                    color: 'white',
                    fontSize: 11,
                  },
                },
              ]}>
              <ListItem>
                <Badge
                  value={data.item.styleid}
                  textStyle={{ color: 'orange' }}
                  
                />

                <ListItem.Content>
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: '#ffffff',
                    }}>
                    <Avatar
                      source={{ uri: data.item.search_image }}
                      style={{
                        width: 80,
                        height: 70,
                        backgroundColor: '#ffffff',
                      }}
                    />
                    <View style={{ flexDirection: 'column' }}>
                      <ListItem.Subtitle
                        style={{
                          marginTop: 5,
                          marginLeft: 4,
                          backgroundColor: '#ffffff',
                          fontSize:12,
                          marginBottom:2
                        }}>
                        {data.item.brands_filter_facet}
                      </ListItem.Subtitle>
                      <View style={{flexDirection:"column"}}>
                      <ListItem.Subtitle
                        style={{
                          marginTop: 3,
                          backgroundColor: '#ffffff',
                          marginLeft: 3, 
                          fontSize:15
                        }}>
                        {data.item.price}TL
                     </ListItem.Subtitle>



     <ListItem.Subtitle>
     <Text style={{marginLeft:4}}>{data.item.adet}adet</Text>
     <TouchableOpacity style={{marginLeft:80}} ><MaterialCommunityIcons    name="plus" color={"green"} size={25} style={{marginTop:15}} /><View style={{marginLeft:2,marginRight:2}}></View></TouchableOpacity>
                        
                     </ListItem.Subtitle>




            
                      </View>
                    </View>
                  </View>
                </ListItem.Content>
              </ListItem>
            </Swipeout>
            </View>
          )}
        />) :( <ImageBackground source={require("./sepetbos.png")} style={{ width:400,height:200}}/>)}
        
    
      <View style={{marginBottom:35,flexDirection:"row",borderRadius:10,borderColor:"#666666",marginLeft:100,width:200,height:40,paddingTop:14,paddingLeft:40,paddingBottom:4}}>
      <Text style={{textAlign:"center"}}>Total Price:</Text>
      <Text>{this.hesapla()}</Text></View>



        <TouchableOpacity onPress={() => navigation.navigate('Adres')}>
          <View
            style={{
              width: 120,
              height: 30,
              borderRadius: 10,
              borderColor: 'green',
              marginLeft: 140,
             
              marginBottom: 30,
            }}>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                color: '#000000',
                padding: 3,
              }}>
              SEPETİ ONAYLA
            </Text>
          </View>
        </TouchableOpacity>
        



        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

const mapStateToProps = (state) => {
  return {
    foods: state.foodReducer.foodList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
     delete: (key) => dispatch(deleteFood(key)),
   
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sepet);
