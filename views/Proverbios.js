import React, { useState, useEffect } from 'react'
import { FlatList, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

import { css } from '../assets/css/Css'

const CustomButton = TouchableOpacity;
import * as ImagePicker from "react-native-image-picker";
import { useNavigation } from '@react-navigation/native';
import FloatingButton from './menuIcon';


export default function Aulas(props) {
  
  const navigation = useNavigation();
  const [text, setText] = useState('');
  var proverbios='Alambi madya mayingi ayivisanga.\n\nT1. “Os que cozinham de forma abundante fazem roubar a comida”.\nT2. “Cozinhar com prudência é poupar comida”.\n\nAvo kooko kwa ludinu kulenda kaya, kwa lumoso kakulendi zaya ko.\nT1. “Se a mão direita oferecer algo, a esquerda não pode saber”.\nT2. “Quando queres oferecer algo, não faça publicidade”.\n\nAvo kudyanga nsunsu ko na nwa supu didi mpe nsunsu.\nT1. “Se não comes a galinha e comeres o seu molho também comeste a galinha”.\nT2. “Para ser considerado gatuno, não basta roubar tudo, roubar pouco também é um acto de gatunice”.\n\nAvo se katula kima mudisu dya`nkweno, katula `ntete mudisu dyaku.\nT1.  “Se queres tirar algo no olho do outro, tira primeiro o que está no seu olho”.\nT2. “Antes de criticar, primeiro faz autoanálise dos seus actos”.\n\nAvo zolele kanga mbizi, kunkovudi ko.\nT1. “Se queres agarrar um animal não tussa”.\nT2. “Se queres apanhar um esperto, use a contra esperteza, ou seja, para apanhar um inteligente, use a contra inteligência”.';
  console.log(navigation)

  return (

    <View style={{ backgroundColor: '#fff', height: '100%' }}>
      
      <View style={{ backgroundColor: '#da2', padding: 2, borderTopColor: '#da2', marginTop: 0 }}>
          
          <View style={{  justifyContent: "space-between", flexDirection: "row" }}>
            <FloatingButton 
              navigation={navigation}
              />
              <View style={{paddingLeft:'3%',justifyContent: "space-between", flexDirection: "row"}}>
                <Text style={{ fontWeight: 'bold',width:'90%', textAlign:'center', fontSize: 20, paddingTop:'2%'}}>Provérbios em Kikongo</Text>
            </View>
          </View>

      </View>
  
      <View >
      <ScrollView style={[css.container,{height:'100%',backgroundColor:'#fff'}]}>
      <Text style={{ ...css.tradu, fontWeight: "normal", paddingBottom:'2%'}}>{proverbios}</Text>
      </ScrollView>
      </View>

    </View>

  );
}