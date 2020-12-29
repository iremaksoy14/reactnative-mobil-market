import React, { Component } from 'react';
import {StyleSheet,Text,  View,  FlatList,TouchableOpacity,ScrollView} from 'react-native';
import Product from '../components/Product';



const DATA=[

      {
        "search_image":"https://esatis.telliogludegirmen.com/Uploads/UrunResimleri/buyuk/tellioglu-degirmen-edremit-cizik-yesil-z-3e5a.jpg",
        "styleid":1,
        "brands_filter_facet":"Edremit Yeşil Zeytin",
        "price":3.15,
        "type":"zeytin"
       
  },
  {
    "search_image":"https://cdnd.bizimtoptan.com.tr/product/480x480/d84bf_Ece_Siyah_Zeytin_Kuru_Sele_Klb_351-380_2XS_1_Kg.png",
    "styleid":2,
    "brands_filter_facet":" Ece Krur Sele Siyah Zeytin",
    "price":4.721,
     "type":"zeytin"
    
    },
    {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/10012365/tahsildaroglu-ezine-keci-peyniri-600-gr-5e522d-1650x1650.jpg",
      "styleid":3,
      "brands_filter_facet":"Ezine Peynir",
      "price":12.45,
       "type":"peynir"
     
      },
      {"search_image":"https://ayb.akinoncdn.com/products/2019/09/02/6546/a75e5c23-e095-4513-98bb-bbd61e761b1c.jpg",
        "styleid":4,
        "brands_filter_facet":"Hun Tahin",
        "price":6.95,
         "type":"tahin-pekmez"
        
        },
        {"search_image":"https://cdn.cimri.io/image/1000x1000/stagrkaarpeyniri_228622265.jpg",
          "styleid":5,
          "brands_filter_facet":"Sütaş Kaşar Peyniri",
          "price":2.95,
           "type":"peynir"
    
          },
           {"search_image":"https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30177420/30177420_0_MC/8801028997170_1541580184902.jpg",
          "styleid":6,
          "brands_filter_facet":"Tat Çilek Reçeli",
          "price":2.95,
           "type":"reçel"
    
          },
          {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05053894/05053894-d00ed5-1650x1650.jpg",
          "styleid":7,
          "brands_filter_facet":"Uno Kahvaltılık Ekmek 400GR",
          "price":4.45,
           "type":"unlu mamuller"
    
          },
           
         
       
]


export default class Kahvaltilik extends Component {


    constructor(props) {
        super(props);
        this.state = { products: DATA };
        this.handlePress = this.handlePress.bind(this);
     
      

    }

    hepsi=()=>{
      
    
    return this.setState({products:DATA});
    }
    zeytin=()=>{
    const urun=DATA.filter(gida=>{
         
                return gida.type=="zeytin";
                })
     this.setState({products:urun})

    }
     peynir=()=>{
    const urun=DATA.filter(gida=>{
         
                return gida.type=="peynir";
                })
     this.setState({products:urun})

    }
    
     recel=()=>{
    const urun=DATA.filter(gida=>{
         
                return gida.type=="reçel";
                })
     this.setState({products:urun})

    }
     un=()=>{
    const urun=DATA.filter(gida=>{
         
                return gida.type=="unlu mamuller";
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

      <TouchableOpacity onPress={this.zeytin}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Zeytin çeşitleri</Text></View></TouchableOpacity>

       <TouchableOpacity onPress={this.peynir}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Peynir Çeşitleri</Text></View></TouchableOpacity>

        

          <TouchableOpacity onPress={this.recel}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Reçeller</Text></View></TouchableOpacity>
           <TouchableOpacity onPress={this.un}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Unlu Mamüller</Text></View></TouchableOpacity>
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