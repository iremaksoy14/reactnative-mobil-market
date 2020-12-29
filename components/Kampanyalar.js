import React, { Component } from "react";
import { View, Text,Button } from "react-native";


import PaperOnboarding, {PaperOnboardingItemType} from "@gorhom/paper-onboarding";


import BankSVG from '../svg/bank';
import HotelSVG from '../svg/hotel';
import KeySVG from '../svg/key';
import StoreSVG from '../svg/store';
import WalletSVG from '../svg/wallet';
import ShoppingCartSVG from '../svg/shopping-cart';

const data: PaperOnboardingItemType[] = [
  {
    title: '10 TL BONUS HEDİYE',
    description:'İlk üyelikte anında 10 tl bonus kazanın',
    backgroundColor: '#698FB8',
    
   
  
    
  },
  {
    title: 'Sağlık Ürünlerinde %15 İNDİRİM!!!',
    description: '250tl ve üzeri sağlık ürünlerinde İNDİRİM!!!',
    backgroundColor: '#6CB2B8',
    
     
    
  },
  {

    title: 'SÜPERMARKET İHTİYAÇLARINIZ KAPIDA',
    description: '150TL ve üzeri %10 İNDİRİM!!!',
    backgroundColor: '#9D8FBF',
  
   
  },
];



class Kampanyalar extends Component {

  render() {
    return (
   
     <PaperOnboarding
      data={data}
     
    />
  
    

  
  
    );
  }
}

export default Kampanyalar;