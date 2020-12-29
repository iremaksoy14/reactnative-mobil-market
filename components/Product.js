import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableWithoutFeedback,TouchableOpacity,TouchableHighlight
} from 'react-native';

import { addFood} from "../store/actions/food";
import { connect } from "react-redux";
const screenWidth = Dimensions.get('window').width;
const itemSpacing = 10;
const rowWidth = (screenWidth - 3 * itemSpacing) / 4;
const aspectRatio = 3 / 4;

const Product = (props) => {


const {isPDP,productData}=props;

 // Styling changes for using common component
    const imageStyle = isPDP ? {
        width: screenWidth,
        height: screenWidth / aspectRatio,
    } : {};
    const containerStyle = isPDP ? {paddingLeft: 0} : {};
    const elmStyle = isPDP ? {paddingLeft: 15} : {};

	return (
		<View style={[styles.container, containerStyle]}>
            
               <Image  source={{ uri: productData.search_image }}  style={[styles.image, imageStyle]} />
           <Text style={[styles.brand, elmStyle]}>{ productData.brands_filter_facet }</Text>
           <Text style={[styles.price, elmStyle]}>{productData.price}TL</Text>
           <Text style={[styles.desc, elmStyle]}>{ productData.product_additional_info }</Text>
  <TouchableOpacity  onPress={()=>{props.add(productData.price,productData.search_image,productData.brands_filter_facet,productData.adet)}}>
           <View style={{backgroundColor:"#ff7f00",color:"#ffffff",borderRadius:5,borderColor:"#666666",borderWidth:1}}><Text style={{color:"#ffffff",fontSize:17,textAlign:"center"}}>Sepete Ekle</Text></View></TouchableOpacity>

             
           
        </View>
	)
}


const styles = StyleSheet.create({
	image: {
		width: rowWidth,
        height: rowWidth / aspectRatio,
        borderColor: '#d5d6d9',
		borderWidth: 0.5,
    },
    container: {
        paddingLeft: itemSpacing,
        backgroundColor: '#ffffff',
    },
    brand: {
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 14,
        color: '#161925',
        width: rowWidth,
    },
    price: {
        marginTop: 5,
        fontSize: 14,
        color: '#94989f',
        width: rowWidth,
        marginLeft:3
    },
    desc: {
        marginTop: 5,
        fontWeight: '200',
      
        fontSize: 11,
        color: '#94989f',
        width: rowWidth,
    },
});


const mapDispatchToProps = (dispatch) => {
  return {
    add: (price,search_image,brands_filter_facet,adet) => dispatch(addFood(price,search_image,brands_filter_facet,adet))
  }
}

export default connect(undefined,mapDispatchToProps)(Product)

