import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Animated, StyleSheet } from 'react-native';

import { css } from '../assets/css/Css'

const CustomButton = TouchableOpacity;
import * as ImagePicker from "react-native-image-picker";
import { useNavigation } from '@react-navigation/native';
import FloatingButton from './menuIcon';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Aulas(props) {
  
  const navigation = useNavigation();
  const [text, setText] = useState('');
  var texto ='O alfabeto\n\nO alfabeto do Kikongo abrange 20 letras:\nA, B, D, E, F, G, I, K, L, M, N, O, P, S, T. U, V, W, Y, Z.\n\nCinco são as vogais: A, E, I, O, U.\n\nDuas são as semi vogais: W, Y.\n\nTreze são as consoantes: B, D, F, G, K, L, M, N, P, S, T, V, Z.\n\nFaltam as seguintes letras do alfabeto português: C, Q, R, J, H, X.\n\nInsisto que a letra R nâo existe no alfabeto Kongo.';
   console.log(props.route.params.texto)



  return (

    <View style={{ backgroundColor: '#fff', height: '100%' }}>
      
       <View style={{ backgroundColor: '#da2', padding: 2, borderTopColor: '#da2', marginTop: 0 }}>
          
          <View style={{  justifyContent: "space-between", flexDirection: "row" }}>
            
        <View
        //style={[styles.container, { top: 10, left: 30 }]}
        >
            <TouchableWithoutFeedback onPress={() => {console.log('click')
                navigation.goBack()}}>
                <Animated.View style={[stylesBack.button, stylesBack.menu]}>
                    <Icon name="arrow-back" size={25} color="#000" />
                </Animated.View>
                
            </TouchableWithoutFeedback>
        </View>
              <View style={{paddingLeft:'3%',justifyContent: "space-between", flexDirection: "row"}}>
                <Text 
                style={{ fontWeight: 'bold',width:'90%', textAlign:'center', fontSize: 20, paddingTop:'2%'}}>
                  {props.route.params.aula}</Text>
            </View>
          </View>

      </View> 
  
      <View >
      <ScrollView style={css.container,{height:'100%',backgroundColor:'#fff'}}>
      <Text style={{ ...css.tradu, fontWeight: "normal", paddingBottom:'2%'}}>{props.route.params.texto}</Text>
      </ScrollView>
      </View>

    </View>

  );
}
const stylesBack = StyleSheet.create({
    container: {
        backgroundColor: '#da2',
        alignItems: "center",
        position: "absolute",
        zIndex: 999999
    },
    button: {
        //position: "absolute",
        width: 45,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        shadowRadius: 10,
        shadowColor: "#2a2a2a",
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 }
    },
    menu: {
    }
});