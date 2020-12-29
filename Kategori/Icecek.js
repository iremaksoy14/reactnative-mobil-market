import React, { Component } from 'react';
import {StyleSheet,Text,  View,  FlatList,TouchableOpacity,ScrollView} from 'react-native';
import Product from '../components/Product';



const DATA=[

      {
        "search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08050940/08050940-b3f83f.jpg",
        "styleid":1,
        "brands_filter_facet":"Dimes Karpuz Çilek",
        "price":3.15,
        "type":"meyve suyu"
       
  },
  {
    "search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08051994/08051994-31f0b2.jpg",
    "styleid":2,
    "brands_filter_facet":" Hayat Şeftalili Siyah Çaylı İçecek",
    "price":4.721,
    "type":"meyve suyu"
    
    },
    {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08059751/08059751-432072-1650x1650.jpg",
      "styleid":3,
      "brands_filter_facet":"Coffiee Flat White",
      "price":12.45,
      "type":"kahve"
     
      },
      {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08010909/08010909-abaad1.jpg",
        "styleid":4,
        "brands_filter_facet":"Coca Cola Şekersiz",
        "price":6.95,
        "type":"gazlı içecek"
        
        },
        {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08069989/saol-vitamin-water-c-mix-500-ml-0e65fb.jpg",
          "styleid":5,
          "brands_filter_facet":"Saol Vitamin Water",
          "price":2.95,
          "type":"meyve suyu "
    
          },
           {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08062278/08062278-f2e8ce.jpg",
          "styleid":6,
          "brands_filter_facet":"Sırma Kolojen Portakallı-Ananaslı",
          "price":2.95,
          "type":"meyve suyu"
    
          },
          {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08040593/-migros-limon-dogal-zengin-mineralli-icecek-6x200-ml-9126ad-1650x1650.jpg",
          "styleid":7,
          "brands_filter_facet":"Doğal Zengin Mineralli Maden Suyu",
          "price":4.45,
          "type":"maden suyu"
    
          },
            {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08038937/08038937-78b830.jpg",
          "styleid":8,
          "brands_filter_facet":"Vol Banana Split Milkshake Muz Aromalı ",
          "price":7.59,
          "type":"maden suyu"
    
          }
         
       
]


export default class Icecek extends Component {


    constructor(props) {
        super(props);
        this.state = { products: DATA };
        this.handlePress = this.handlePress.bind(this);
     
      
    }
    hepsi=()=>{
      
    
    return this.setState({products:DATA});
    }
    gaz=()=>{
    const urun=DATA.filter(gida=>{
         
                return gida.type=="gazlı içecek";
                })
     this.setState({products:urun})

    }
     meyvesuyu=()=>{
    const urun=DATA.filter(gida=>{
         
                return gida.type=="meyve suyu";
                })
     this.setState({products:urun})

    }
     madensuyu=()=>{
    const urun=DATA.filter(gida=>{
         
                return gida.type=="maden suyu";
                })
     this.setState({products:urun})

    }
     kahve=()=>{
    const urun=DATA.filter(gida=>{
         
                return gida.type=="kahve";
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

      <TouchableOpacity onPress={this.gaz}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Gazlı İçecekler</Text></View></TouchableOpacity>

       <TouchableOpacity onPress={this.meyvesuyu}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Meyve Suyu</Text></View></TouchableOpacity>

        <TouchableOpacity onPress={this.madensuyu}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Maden Suyu</Text></View></TouchableOpacity>

          <TouchableOpacity onPress={this.kahve}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Kahve</Text></View></TouchableOpacity>
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