import {ActionsContainer,Button,FieldsContainer,Fieldset,Form,FormGroup,Input,Label} from 'react-native-clean-form'
import React,{Component} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView,Image,View,Switch} from 'react-native';


 export default class  Adres extends Component{

   constructor(props){
     super(props);

     this.state={

       name:"",
       lastname:"",
       email:"",
       adres:"",
       phone:"",
       sehir:"",
       ulke:"",
       toggle:false
       
     }
        }
      

        save=()=>{
          this.props.navigation.navigate("CartView")
        }
   render(){
    
     return( 
       <Form >
    <FieldsContainer>
      <Fieldset label="Contact details">
        <FormGroup>
          <Label>First name</Label>
          <Input placeholder="Martha" value={this.state.name} onChangeText={(name)=>{this.setState({name:name})}} />
        </FormGroup>
         <FormGroup>
          <Label>Last Name</Label>
          <Input placeholder="Stewart" value={this.state.lastname} onChangeText={(lastname)=>{this.setState({lastname:lastname})}} />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input placeholder="esbenspetersen@gmail.com" value={this.state.email} onChangeText={(email)=>{this.setState({email:email})}} />
        </FormGroup>
      </Fieldset>
      <Fieldset label="Password" last>
       <FormGroup>
          <Label>Address</Label>
          <Input placeholder="Bahcelievler Mah. 22334sk.Güven Sitesi..." value={this.state.adres} onChangeText={(adres)=>{this.setState({adres:adres})}} />
        </FormGroup>
        <FormGroup>
          <Label>Country</Label>
          <Input placeholder="İstanbul" value={this.state.sehir} onChangeText={(sehir)=>{this.setState({sehir:sehir})}} />
        </FormGroup>
         <FormGroup>
          <Label>Country</Label>
          <Input placeholder="Turkey" value={this.state.ulke} onChangeText={(ulke)=>{this.setState({ulke:ulke})}} />
        </FormGroup>
      
            
      </Fieldset>
    </FieldsContainer>
    <ActionsContainer>
      <Button icon="md-checkmark" iconPlacement="right" onPress={this.save}>Save</Button>
    </ActionsContainer>
  </Form>
   
  
     )
   }
 }
