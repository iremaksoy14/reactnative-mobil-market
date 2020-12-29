import React, { Component } from 'react';
import {StyleSheet,Text,  View,  FlatList,} from 'react-native';
import Product from './Product';


const veri=[
   {
        "search_image":"https://cdn.cimri.io/image/1200x1200/makarnaveehriyefiyatlar_220893147.jpg",
        "styleid":1,
        "brands_filter_facet":"Barilla Makarna",
        "price":3.15
       
  },
  {
    "search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/09011009/09011009-5861cc-1650x1650.jpg",
    "styleid":2,
    "brands_filter_facet":" Tat Biber Salçası",
    "price":4.721
    
    },
    {"search_image":"https://productimages.hepsiburada.net/s/3/1500/9585688444978.jpg",
      "styleid":3,
      "brands_filter_facet":"Heinz Mayonez",
      "price":12.45
     
      },
      {"search_image":"https://www.ozyukselgida.com.tr/UserFiles/Fotograflar/116-avakado-avakado-avakado.png",
        "styleid":4,
        "brands_filter_facet":"Avakado",
        "price":6.95
        
        },
        {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08057158/08057158-f22eae-1650x1650.jpg",
          "styleid":5,
          "brands_filter_facet":"Tropicana Elma Suyu",
          "price":2.95
    
          },
          {"search_image":"https://productimages.hepsiburada.net/s/27/1500/10183751401522.jpg",
          "styleid":6,
          "brands_filter_facet":"Uno Tost Ekmeği",
          "price":2.95
    
          },
          {"search_image":"https://cdn.akakce.com/kurukahveci-mehmet-efendi/kurukahveci-mehmet-efendi-100-gr-10-lu-paket-z.jpg",
          "styleid":7,
          "brands_filter_facet":"Kurukahveci mehmet Efendi Türk Kahvesi",
          "price":4.45
    
          },
            {"search_image":"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/11013025/11013025-4fcdbe-1650x1650.jpg",
          "styleid":1123455,
          "brands_filter_facet":"İçim Tam yağlı Süt",
          "price":2.85
    
          }
  
  
]
export default class Digerler extends Component {


    constructor(props) {
        super(props);
        this.state = { urunler: veri };
       
     
      
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
                data={this.state.urunler}
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
