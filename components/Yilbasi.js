import React, { Component } from 'react';
import {StyleSheet,Text,  View,  FlatList,} from 'react-native';
import Product from './Product';
import data from '../data/data.json'


const DATA=[

     {"search_image":"https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30204761/30204761_0_MC/8805139382322_1512632217763.jpg",
          "styleid":7,
          "brands_filter_facet":"Yılbaşı Ağacı Süsü",
          "price":299.90,
           "adet":1
    
          },
            {"search_image":"https://cdn03.ciceksepeti.com/cicek/kc3761455-1/L/sans-getiren-led-sikli-ugurlu-yilbasi-agaci-kc3761455-1-9aab6ee478d045d0b7fb06269c77f682.jpg",
          "styleid":8,
          "brands_filter_facet":"Led Işıklı Yılbaşı Ağacı ",
          "price":49.99,
           "adet":1
    
          },
  
      {"search_image":"https://cdn.dsmcdn.com/ty23/product/media/images/20201115/6/26504243/106290350/0/0_org_zoom.jpg",
        "styleid":4,
        "brands_filter_facet":"Yılbaşı Ağacı  Kırmızı Süsü Top",
        "price":119.50,
         "adet":1
        
        },
       
          {"search_image":"https://cdn.dsmcdn.com/ty35/product/media/images/20201215/19/38782671/119667044/1/1_org_zoom.jpg",
          "styleid":8,
          "brands_filter_facet":"Yılbaşı Ağacı Süsü Seti ",
          "price":59.90,
           "adet":1
    
          },
          
    
     {"search_image":"https://cdn.dsmcdn.com/ty3/product/media/images/20200513/19/1247272/60186050/1/1_org_zoom.jpg",
          "styleid":12,
          "brands_filter_facet":"Yılbaşı Ağacı",
          "price":179.90,
           "adet":1
    
          },
           {"search_image":"https://cdn.dsmcdn.com/ty23/product/media/images/20201115/6/26504204/106290311/0/0_org_zoom.jpg",
          "brands_filter_facet":"Altın Renkli Toplar",
          "price":29.23,
           "adet":1,
    
          },
          {"search_image":"https://cdn.dsmcdn.com/ty26/product/media/images/20201125/13/32185871/112414681/1/1_org_zoom.jpg",
          "styleid":7,
          "brands_filter_facet":"MetalikYılbaşı Folyo Balon",
          "price":33.45,
           "adet":1
    
          },
         
       
]



export default class Yilbasi extends Component {


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