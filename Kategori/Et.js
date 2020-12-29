import React, { Component } from 'react';
import {StyleSheet,Text,  View,  FlatList,TouchableOpacity,ScrollView} from 'react-native';
import Product from '../components/Product';
import data from '../data/data.json'


const DATA=[

      {
        "search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/25509037/25509037-b43982-1650x1650.jpg",
        "styleid":1,
        "brands_filter_facet":"Uzman Kasap Dana Kuşbaşı",
        "price":39.90,
          "type":"tavuk"
       
  },
  {
    "search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/25030161/migros-dana-doner-250-gr-080eb5.jpg",
    "styleid":2,
    "brands_filter_facet":"Dana Döner",
    "price":11.65,
     "type":"et"
    
    },
    {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/13509386/13509386-98456a.jpg",
      "styleid":3,
      "brands_filter_facet":"Şenpiliç Karışık Piliç Döner",
      "price":7.95,
       "type":"et"
     
      },
      {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/13509365/cp-pilic-tenders-225-g-299fd8.jpg",
        "styleid":4,
        "brands_filter_facet":"Piliç Tenders",
        "price":6.95,
         "type":"tavuk"
        
        },
        {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/13019038/13019038-33139d.jpg",
          "styleid":5,
          "brands_filter_facet":"Beypiliç Piliç But",
          "price":12.67,
           "type":"tavuk"
    
          },
           {"search_image":"https://cdn.cimri.io/image/240x240/migros-200-gr-ahtapot-sogus-_153873763.jpg",
          "styleid":6,
          "brands_filter_facet":"Söğüş Ahtapot",
          "price":12.23,
           "type":"balık"
    
          },
          {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/46040145/46040145-019ba7.jpg",
          "styleid":7,
          "brands_filter_facet":"Banvit Piliç Pirzola",
          "price":33.45,
           "type":"et"
    
          },
            {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/18992609/migros-parca-somon-fume-100-g-c145b3.jpg",
          "styleid":1123455,
          "brands_filter_facet":"Somon Füme",
          "price":13.50,
           "type":"balık"
    
          }
         
       
]


export default class Et extends Component {


    constructor(props) {
        super(props);
        this.state = { products: DATA };
        this.handlePress = this.handlePress.bind(this);
     
      
    }
    hepsi=()=>{
      
    
    return this.setState({products:DATA});
    }
    
    et=()=>{
    const urun=DATA.filter(gida=>{
         
                return gida.type=="et";
                })
     this.setState({products:urun})

    }

    tavuk=()=>{
    const urun=DATA.filter(gida=>{
         
                return gida.type=="tavuk";
                })
     this.setState({products:urun})

    }
    balik=()=>{
    const urun=DATA.filter(gida=>{
         
                return gida.type=="balık";
                })
     this.setState({products:urun})

    }

    
    

    handlePress =(productData)=> {
      const {navigate}=this.props.navigation
     navigate('UrunDetay', {
            data: productData,
        });
    }

    keyExtractor = (item) => item.styleid
    
    

    renderItem= ({ index, item })=> {
		return (
			<Product
				productData={item}
				position={index}
				handlePress={this.handlePress}
			/>
		);
	}

	render() {
   
    
        if (this.state.loading) {
            return (<View style={styles.container}>
                <Text style={styles.text}> loading... </Text>
            </View>);
        }
		return (
      <View>
      
      <View style={{flexDirection:"row"}}>
      <ScrollView horizontal={true}>
       <TouchableOpacity onPress={this.hepsi}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Tümünü Göster</Text></View></TouchableOpacity>

      <TouchableOpacity onPress={this.et}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Et Ürünleri</Text></View></TouchableOpacity>


       <TouchableOpacity onPress={this.tavuk}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Tavuk/Pirzola</Text></View></TouchableOpacity>
       
       <TouchableOpacity onPress={this.balik}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Balık</Text></View></TouchableOpacity>
      </ScrollView>
      </View>
      	<FlatList
                contentContainerStyle={styles.listContainer}
                data={this.state.products}
                numColumns={3}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                removeClippedSubviews
            />
      
      
      </View>
		
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listContainer: {
        paddingTop: 10,
        backgroundColor: '#fff',
    },
    text: {
        color: '#94989f',
    },
});