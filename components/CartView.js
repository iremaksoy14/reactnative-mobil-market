import * as React from 'react';
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from 'react-native';
import CreditCard from 'react-native-credit-card-form-ui';

export default function CartView() {
 
/*
  const handleSubmit = React.useCallback(() => {
    
    if (CreditCard.current) {
      const { error, data } = CreditCard.current.submit();
      console.log('ERROR: ', error);
      console.log('CARD DATA: ', data);
    }
  }, []);
  */
  const handleSubmit=()=>{
    alert("Ödemeniz başarıyla alınmıştır")
  }
  

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={20}
      style={styles.container}
    >
      <CreditCard ref={CreditCard} onValidStateChange={console.log} />
      <Button title="Submit" onPress={handleSubmit} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
