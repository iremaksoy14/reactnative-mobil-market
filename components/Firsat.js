import React, { Component } from 'react';
import {StyleSheet,Text,  View,  FlatList,} from 'react-native';
import Product from './Product';
import data from '../data/data.json'


const DATA=[

     {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08040593/-migros-limon-dogal-zengin-mineralli-icecek-6x200-ml-9126ad-1650x1650.jpg",
          "styleid":7,
          "brands_filter_facet":"Doğal Zengin Mineralli Maden Suyu",
          "price":4.45,
           "adet":1
    
          },
            {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08038937/08038937-78b830.jpg",
          "styleid":8,
          "brands_filter_facet":"Vol Banana Split Milkshake Muz Aromalı ",
          "price":7.59,
           "adet":1
    
          },
  
      {"search_image":"https://www.ozyukselgida.com.tr/UserFiles/Fotograflar/116-avakado-avakado-avakado.png",
        "styleid":4,
        "brands_filter_facet":"Avakado",
        "price":6.95,
         "adet":1
        
        },
       
          {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/30733222/30733222-1c2f23.jpg",
          "styleid":8,
          "brands_filter_facet":"Cillit Bang Aktif Köpük+Yağ Çözücü",
          "price":18.90,
           "adet":1
    
          },
            {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/11013025/11013025-4fcdbe-1650x1650.jpg",
          "styleid":8,
          "brands_filter_facet":"İçim Tam yağlı Süt",
          "price":2.85,
           "adet":1
    
          },
          {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/09012034/tat-domates-rendesi-685-gr-2643b7.jpg",
          "styleid":9,
          "brands_filter_facet":"Tat Domates Rendesi",
          "price":4.45,
           "adet":1
    
          },
          
      {"search_image":"https://www.kalemarketleri.com/Uploads/UrunResimleri/thumb/hipp-1-organik-bebek-sutu-350gr-54a1.jpg",
          "styleid":5,
          "brands_filter_facet":"Hip Bebek Sütü",
          "price":2.95,
           "adet":1
    
          },
  {
    "search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08051994/08051994-31f0b2.jpg",
    "styleid":11,
    "brands_filter_facet":" Hayat Şeftalili Siyah Çaylı İçecek",
    "price":4.50,
     "adet":1
    
    },
     {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/09018746/migros-tatli-biber-salcasi-650-gr-06ab3b-1650x1650.jpg",
          "styleid":12,
          "brands_filter_facet":"Talı Biber Salçası",
          "price":2.95,
           "adet":1
    
          },
           {"search_image":"https://cdn.cimri.io/image/240x240/migros-200-gr-ahtapot-sogus-_153873763.jpg",
          "styleid":6,
          "brands_filter_facet":"Söğüş Ahtapot",
          "price":12.23,
           "adet":1
    
          },
          {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/46040145/46040145-019ba7.jpg",
          "styleid":7,
          "brands_filter_facet":"Banvit Piliç Pirzola",
          "price":33.45,
           "adet":1
    
          },
         
       
]



export default class Firsat extends Component {


    constructor(props) {
        super(props);
        this.state = { products: DATA };
       
     
      
    }
    
    


    keyExtractor = (item) => item.styleid
    
    

    renderItem= ({ index, item })=> {
		return (
			<Product
				productData={item}
				position={index}
			
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
       
			<FlatList
                contentContainerStyle={styles.listContainer}
                data={this.state.products}
                numColumns={11}
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