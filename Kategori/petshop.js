import React, { Component } from 'react';
import {StyleSheet,Text,  View,  FlatList,TouchableOpacity,ScrollView} from 'react-native';
import Product from '../components/Product';
import data from '../data/data.json'


const DATA=[

      {
        "search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/09080032/whiskas-biftekli-konserve-kedi-mamasi-400-gr-fe1126.jpg",
        "styleid":1,
        "brands_filter_facet":"Migros Sanal Market Whiskas Biftekli Konserve Kedi Mamas",
        "price":12.95,
        "type":"Kedi Maması"
       
  },
  {
    "search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/41031090/41031090-9dc98e.jpg",
    "styleid":2,
    "brands_filter_facet":"Felix  Sardalyalı Somonlu Yaş Mama",
    "price":7.90,
     "type":"Kedi Maması"
    
    },
  
      {"search_image":"https://www.kolaymama.com/pedigree-biscrok-kopek-odul-biskuvisi-500-gr-kopek-odulleri-pedigree-13022-35-B.jpg",
        "styleid":3,
        "brands_filter_facet":"Pedigree Biscrok Ödül Bisküvisi 500 GR",
        "price":25.95,
         "type":"Köpek Maması"
        
        },
        {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/09070030/pedigree-biftekli-kopek-konservesi-400-gr-bd88b9.jpg",
          "styleid":4,
          "brands_filter_facet":" Pedigree Sığırlı Konserve Yaş Mama 400 G",
          "price":12.90,
           "type":"Köpek Maması"
    
          },
           {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/41025172/41025172-d206a8.jpg",
          "styleid":5,
          "brands_filter_facet":"Purina One Steril Sığır Somonlu Kedi Maması",
          "price":74.99,
           "type":"Kedi Maması"
    
          },
          {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/18992595/migros-karides-400-gr-9dd721-1650x1650.jpg",
          "styleid":6,
          "brands_filter_facet":"Karides 400GR",
          "price":15.40,
           "type":"Köpek Maması"
    
          },
            {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/41025343/41025343-616500.png",
          "styleid":7,
          "brands_filter_facet":"Bestpet Premium Tavuklu Kedi Pouch ",
          "price":1.95,
          "type":"Kedi Maması"
    
          }
         
       
]


export default class Petshop extends Component {


    constructor(props) {
        super(props);
        this.state = { products: DATA };
        this.handlePress = this.handlePress.bind(this);
     
      
    }

    hepsi=()=>{
      
    
    return this.setState({products:DATA});
    }
    kedi=()=>{
    const urun=DATA.filter(gida=>{
         
                return gida.type=="Kedi Maması";
                })
     this.setState({products:urun})

    }
    kopek=()=>{
    const urun=DATA.filter(gida=>{
         
                return gida.type=="Köpek Maması";
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

      <TouchableOpacity onPress={this.kedi}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Kedi Maması</Text></View></TouchableOpacity>


       <TouchableOpacity onPress={this.kopek}><View style={{marginTop:30,marginLeft:40,width:100,height:30,backgroundColor:"#ffffff",borderRadius:8,marginBottom:10}}><Text style={{fontSize:12,color:"#000000",textAlign:"center",paddingTop:8}}>Köpek Maması</Text></View></TouchableOpacity>
       
       
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