import React, { Component } from 'react';
import {StyleSheet,Text,  View,  FlatList,TouchableOpacity} from 'react-native';
import Product from '../components/Product';
import data from '../data/data.json'


const DATA=[

      {
        "search_image":"https://ayb.akinoncdn.com/products/2019/08/07/26044/491c9057-3d43-4cf8-be74-8a62dc2d3e23_size780x780_quality60_cropCenter.jpg",
        "styleid":1,
        "brands_filter_facet":"Aptamil Kaşık Maması",
        "price":3.15,
        "type":"food"
       
  },
  {
    "search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05047543/05047543-0979c9.jpg",
    "styleid":2,
    "brands_filter_facet":" Hero Baby ",
    "price":4.721,
     "type":"food"
    
    },
    {"search_image":"https://www.babymall.com.tr/UserFiles/ProductImages/0/slpy636/orj/sleepy-natural-bebek-bezi-1-beden-yenidogan-2-5-kg-80li-jumbo-paket-121958.png",
      "styleid":3,
      "brands_filter_facet":"Sleepy NATURAL 2Lİ Jumbo Bebek Bezi",
      "price":12.45,
      "type":"cloth"
     
      },
      {"search_image":"https://cdn.e-bebek.com/www.ebebek/i/p/200/NC/smHIP-7345-NC_1.jpg",
        "styleid":4,
        "brands_filter_facet":"Hip Orgnik Nectar",
        "price":6.95,
         "type":"food"
        
        },
        {"search_image":"https://www.kalemarketleri.com/Uploads/UrunResimleri/thumb/hipp-1-organik-bebek-sutu-350gr-54a1.jpg",
          "styleid":5,
          "brands_filter_facet":"Hip Bebek Sütü",
          "price":2.95,
           "type":"food"
    
          },
           {"search_image":"https://hipp.com.tr/fileadmin/_processed_/0/3/csm_weaning_snacks_cockies_groupimage_adb498a7a3.jpg",
          "styleid":6,
          "brands_filter_facet":"Hip Organik Bebek Büskivisi",
          "price":2.95,
           "type":"food"
    
          },
          {"search_image":"https://productimages.hepsiburada.net/s/36/1500/10504705081394.jpg",
          "styleid":7,
          "brands_filter_facet":"Dalin Bebek Şampuanı",
          "price":4.45,
          "type":"shampoo"
    
          },
            {"search_image":"https://cdn.akakce.com/lactamil/lactamil-200-gr-emziren-anneler-icin-sutlu-icecek-z.jpg",
          "styleid":1123455,
          "brands_filter_facet":"Laktamil Emziren Anneler için sütlü içecek",
          "price":2.85,
           "type":"food"
    
          }
         
       
]


export default class Bebek extends Component {


    constructor(props) {
        super(props);
        this.state = { products: DATA };
        this.handlePress = this.handlePress.bind(this);
     
      
    }

     hepsi=()=>{
      
    
    return this.setState({products:DATA});
    }





    mama=()=>{
    
    const urun=DATA.filter(bebek=>{
         
                return bebek.type=="food";
                               
         
       
         

      })
      this.setState({products:urun})
   

    }

    bez=()=>{
    
    const urun=DATA.filter(bebek=>{
     
          return bebek.type=="cloth";

                                      

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
       <TouchableOpacity onPress={this.hepsi}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Tümünü Göster</Text></View></TouchableOpacity>

      <TouchableOpacity onPress={this.mama}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Bebek Maması</Text></View></TouchableOpacity>


       <TouchableOpacity onPress={this.bez}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Bebek Bezi</Text></View></TouchableOpacity>
      
      </View>
      
			<FlatList
                contentContainerStyle={styles.listContainer}
                data={this.state.products}
                numColumns={4}
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