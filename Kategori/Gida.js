import React, { Component } from 'react';
import {StyleSheet,Text,  View,  FlatList,TouchableOpacity,ScrollView} from 'react-native';
import Product from '../components/Product';



const DATA=[

      {
        "search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05030314/05030314-6a6c01.jpg",
        "styleid":1,
        "brands_filter_facet":"Barilla Fettuccine Makarna",
        "price":23.15,
          "type":"bakliyat"
       
  },
  {
    "search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/01011183/01011183-6a8d15-1650x1650.jpg",
    "styleid":2,
    "brands_filter_facet":" Baldo Pirinç",
    "price":4.721,
       "type":"bakliyat"
    
    },
    {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05030059/05030059-3914b8-1650x1650.JPG",
      "styleid":3,
      "brands_filter_facet":"Knorr Çabuk MAakarna Mantar Kremalı",
      "price":12.45,
        "type":"sos"
     
      },
      {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/01069992/01069992-ff7df2-1650x1650.jpg",
        "styleid":4,
        "brands_filter_facet":"Kırmızı Mercimek",
        "price":6.95,
          "type":"bakliyat"
        
        },
        {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/01075125/yayla-gurme-fit-domatesli-bulgur-360-g-212803.jpg",
          "styleid":5,
          "brands_filter_facet":"Yayla Fit Domatesli Bulgur",
          "price":2.95,
            "type":"bakliyat"
    
          },
           {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/09035770/09035770-fcda6b-1650x1650.jpg",
          "styleid":6,
          "brands_filter_facet":"Haşlanmış Nohut 800GR",
          "price":2.95,
            "type":"bakliyat"
    
          },
          {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/09035749/09035749-c40009-1650x1650.jpg",
          "styleid":7,
          "brands_filter_facet":"Konserve mısır",
          "price":4.45,
            "type":"mısır"
    
          },
            {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/03118368/03118368-5003bb.jpg",
          "styleid":1123455,
          "brands_filter_facet":"Filiz çay",
          "price":23.75,
            "type":"çay"
    
          },
          {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/09018746/migros-tatli-biber-salcasi-650-gr-06ab3b-1650x1650.jpg",
          "styleid":6,
          "brands_filter_facet":"Talı Biber Salçası",
          "price":2.95,
            "type":"salça"
    
          },
          {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/09012034/tat-domates-rendesi-685-gr-2643b7.jpg",
          "styleid":7,
          "brands_filter_facet":"Tat Domates Rendesi",
          "price":4.45,
            "type":"salça"
    
          },
            {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/09010020/09010020-11915b-1650x1650.jpg",
          "styleid":1123455,
          "brands_filter_facet":"Tat Salça",
          "price":23.75,
          "type":"salça"
    
          }
         
       
]


export default class Gida extends Component {


    constructor(props) {
        super(props);
        this.state = { products: DATA };
        this.handlePress = this.handlePress.bind(this);
     
      
    }


    hepsi=()=>{
      
    
    return this.setState({products:DATA});
    }
    bakliyat=()=>{
    const urun=DATA.filter(gida=>{
         
                return gida.type=="bakliyat";
                })
     this.setState({products:urun})

    }

    misir=()=>{
    const urun=DATA.filter(gida=>{
         
                return gida.type=="mısır";
                                                })
     this.setState({products:urun})

    }
    
     cay=()=>{
    const urun=DATA.filter(gida=>{
         
                return gida.type=="çay";
                               
         
       
         

      })
     this.setState({products:urun})

    }
     salca=()=>{
    const urun=DATA.filter(gida=>{
         
                return gida.type=="salça";
                               
         
       
         

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

      <TouchableOpacity onPress={this.bakliyat}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Bakliyat Ürünleri</Text></View></TouchableOpacity>

       <TouchableOpacity onPress={this.misir}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Mısır</Text></View></TouchableOpacity>

        <TouchableOpacity onPress={this.cay}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Çay</Text></View></TouchableOpacity>

          <TouchableOpacity onPress={this.salca}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Salça</Text></View></TouchableOpacity>
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