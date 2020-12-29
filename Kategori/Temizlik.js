import React, { Component } from 'react';
import {StyleSheet,Text,  View,  FlatList,ScrollView,TouchableOpacity} from 'react-native';
import Product from '../components/Product';
import data from '../data/data.json'


const DATA=[

      {
        "search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/30539519/30539519-7b06ae.jpg",
        "styleid":1,
        "brands_filter_facet":"Perwoll Yenilenen 3D Beyaz Etki",
        "price":25.90,
        "type":"Banyo Malzemeleri"
       
  },
  {
    "search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/30719630/migros-sivi-arap-sabunu-1l-1b96df.jpg",
    "styleid":2,
    "brands_filter_facet":"Sıvı Arap Sabunu",
    "price":7.90,
     "type":"Banyo Malzemeleri"
    
    },
    {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/30128504/omo-sivi-camasir-deterjani-active-fresh-1400-ml-255bdf.jpg",
      "styleid":3,
      "brands_filter_facet":"Omo Ultra Aktif Fresh",
      "price":25.90,
       "type":"Banyo Malzemeleri"
     
      },
      {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/30619695/30619695-8f9cfc.jpg",
        "styleid":4,
        "brands_filter_facet":"Sıvı Bulaşık Deterjanı",
        "price":6.95,
         "type":"Mutfak Malzemeleri"
        
        },
        {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31173431/scotch-brite-extreme-tirnak-koruyuculu-bulasik-sungeri-2-li-982abd.jpg",
          "styleid":5,
          "brands_filter_facet":"Skotch Brite",
          "price":12.90,
           "type":"Mutfak Malzemeleri"
    
          },
           {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/30719635/migros-yuzey-temizleyici-beyaz-sabun-kokulu-1500ml-c6ba76.jpg",
          "styleid":6,
          "brands_filter_facet":"Yüzey Temizleyici Beyaz Sabunlu",
          "price":6.45,
           "type":"Banyo Malzemeleri"
    
          },
          {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/31310060/31310060-e3e02e.jpg",
          "styleid":7,
          "brands_filter_facet":"Ernet Sirkeli Çok Amaçlı Temizleyici",
          "price":15.40,
           "type":"Banyo Malzemeleri",
            
    
          },
            {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/30733222/30733222-1c2f23.jpg",
          "styleid":8,
          "brands_filter_facet":"Cillit Bang Aktif Köpük+Yağ Çözücü",
          "price":18.90,
           "type":"Mutfak Malzemeleri"
    
          }
         
       
]


export default class Temizlik extends Component {


    constructor(props) {
        super(props);
        this.state = { products: DATA };
        this.handlePress = this.handlePress.bind(this);
     
      
    }
    hepsi=()=>{
      
    
    return this.setState({products:DATA});
    }
    banyo=()=>{
    const urun=DATA.filter(gida=>{
         
                return gida.type=="Banyo Malzemeleri";
                })
     this.setState({products:urun})

    }
     mutfak=()=>{
    const urun=DATA.filter(gida=>{
         
                return gida.type=="Mutfak Malzemeleri";
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

      <TouchableOpacity onPress={this.banyo}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Banyo Malzemeleri</Text></View></TouchableOpacity>

       <TouchableOpacity onPress={this.mutfak}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Mutfak Malzemeleri</Text></View></TouchableOpacity>

       
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