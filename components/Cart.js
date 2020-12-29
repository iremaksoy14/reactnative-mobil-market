
  
import React ,{Component}from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../store/actions/food";
import PropTypes from "prop-types";
import {Button,FlatList,SafeAreaView,View,Text} from 'react-native'
 
 const Item = ({ price }) => (
  <View >
    <Text>{price}</Text>
  </View>
);

 class Cart extends  Component{
 render(){

const renderItem = ({ item }) => (
    <Item price={item.price} />
  );


return (
       <SafeAreaView >
      <FlatList
        data={this.props.products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>

  );
   }
 }
  



const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(Cart);
