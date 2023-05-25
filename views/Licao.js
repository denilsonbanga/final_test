import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Voice from '@react-native-voice/voice';
import Ocr, { LANG_PORTUGUESE } from "react-native-tesseract-ocr";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { css } from '../assets/css/Css'

const CustomButton = TouchableOpacity;
import * as ImagePicker from "react-native-image-picker";
import { useNavigation } from '@react-navigation/native';
import FloatingButton from './menuIcon';

const imagePickerOptions = {
  quality: 1.0,
  mediaType: "photo",
  storageOptions: {
    skipBackup: true
  },
}

export default function Home(props) {
  const navigation = useNavigation();
  const [text, setText] = useState('');

  console.log(navigation)

  const listlicao = [
    { aula: 'Familia', texto:'\nKIKÔNGO e a FAMÍLIA\n\nTraduzimos para o Kikôngo algumas palavras do grau de parantesco.\n\nFAMÍLIA – Kanda ou vumu (no sentido restringido) \nPAI – Sé,Tata.\nMÃE – Ngudi (N’gwa)\nFILHO(A) – Mwana (Yakala vo Nkento) – plural: (B)ANA.\nIRMÃ(O) – Mpangi, nkazi.\nIRMÃ(O) maior – Mbuta.\nIRMÃ(O) menor – N’leke\nIRMÃO primogénito – Nzulunkulu\nIRMÃ(O) caçulo – Mwana a nsuka\nTIO paterno – Sé dya mbuta vo n’leke.\nTIO materno – Ngudi (N’gwa) a Nkazi.\nTIA paterna – Sé (Tata) dya nkento\nTIA materna – Ngudi a mbuta vo n’leke\nSOBRINHO(A) – Mwana a Nkazi.\nSOGRO(A) – N’zitu, bokilo.\nCUNHADO(A) – N’kwezi (Nzadi), semeki.\nGENRO – Mwana.\nNOIVO(A) – Nzitikilw(a)\nRIVAL – Mbanda.\nMARIDO – Yakala\nESPOSA – Nkento\nNAMORADO(A) – Nzolwa\nAMANTE – Makangu.\nAVO – Nkaka.\nNETO – N’tekelo' },
    { aula: 'Dias da Semana', texto:'\nOs 7 Dias Da Semana - Lumbu Sambuadi Ya Lumingu\n\nSegunda Feira - Kyamosi\nTerça Feira - Kyazole\nQuarta Feira - Kyatatu\nQuinta Feira - Kyaya\nSexta Feira - Kyatanu\nSabado - Kyasabala\nDomingo-Kyalumingo'},
    { aula:'Matemática', texto:'Matemática-Mathematique\n\n1-Mosi\n2- Zole\n3-Tatu\n4-Ya\n5-Tanu\n6-Sambanu\n7-Nsambuadi\n8-Nana\n9- Vua\n10-Kumi\n11-Kumi Ye Mosi\n12-Kumi Ye Zole\n13-Kumi Ye Tatu\n14-Kumi Ye Ya\n15-Kumi Ye Tanu\n16-Kumi Ye Sambanu\n17-Kumi Ye Nsambuadi\n18-Kumi Ye Nana\n19-Kumi Ye Vua\n2o-Makumole\n21-Makumole Ye Mosi\n22-Makumole Ye Zole\n"\n30-Makumatatu\n31-Makumatatu Ye Mosi\n32-Makumatatu Ye Zole\n"\n40-Makumaya\n41-Makumaya Ye Mosi\n42-Makumaya Ye Zole\n"\n50-Makumatanu\n51-Makumatanu Ye Mosi\n52-Makumatanu Ye Zole\n"\n60-Makumasambanu\n61- Makumasambanu Ye Mosi\n62-Makumasambanu Ye Zole\n"\n70-Lusambuadi (Isto Muda Em L Ou Ça Change L)\n71-Lusambuadi Ye Mosi\n72-Lusambuadi Ye Zole\n"\n80-Lunana\n81-Lunana Ye Mosi\n82-Lunana Ye Zole\n"\n90- Luvua\n91-Luvua Ye Mosi\n92-Luvua Ye Zole\n"\n100-Nkama\n101 Nkama Mosi Ye Mosi\n102-Nkama Mosi Ye Zole\n"\n110-Nkama Mosi Ye Kumi\n111-Nkama Mosi Ye Kumi Ye Mosi\n"\n200-Nkama Zole\n201-Nkama Zole Ye Mosi\n202-Nkama Zole Ye Zole\n203-Nkama Zole Ye Tatu\n"\n"\n300-Nkama Tatu\n301-Nkama Tatu Ye Mosi\n"\n"\n400-Nkama Ya\n401-Nkama Ya Ye Mosi\n402-Nama Ya Ye Zole\n"\n"\n500-Nkama Tanu\n"\n"\n600-Nkama Sambanu\n"\n"\n700-Nkama Nsambuadi\n"\n"\n800-Nkama Nana\n"\n"\n900-Nkama Vua\n"\n1000-Funda\n1001-Funda Dimosi Ye Mosi\n"\n10.000-Kiazi\n"\n100.000-Lundu'},
    { aula:'Os meses do ano', texto:'Os 12 Meses Do Ano - Ngonde Kumi Ye Zole Za Nvula\n\nJaneiro-Mwanda Nkasi\nFevereiro-Muanda Nuni\nMarço-Ndoli Nkasi\nAbril-Ndoli Nuni\nMaio-Mawalala\nJunho-Mbula Masi Ma Volo\nJulho-Mbula Masi Ma Mbu\nAgosto-Mabunzi\nSetembro-Kafula\nOutubro-Kasafa\nNovembro-Ntombo\nDezembro-Mbangala\n'}
  ]

  var [dicilicao, setDicionario] = useState(listlicao)
  //Algortimo de ordenação do dicionario 

  

  function search(value = "") {
    let data = [...listlicao], result = []
      for (let i = 0; i < data.length; i++) {
        if (data[i].name.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {

          result.push(data[i])
        }
      }
      setDicionario(result);
  }
  return (

    <View style={{ backgroundColor: '#fff', height: '100%' }}>
      
      <View style={{ backgroundColor: '#da2', padding: 2, borderTopColor: '#da2', marginTop: 0 }}>
          
          <View style={{  justifyContent: "space-between", flexDirection: "row" }}>
            <FloatingButton 
              navigation={navigation}
              />
              <View style={{paddingLeft:'3%',justifyContent: "space-between", flexDirection: "row"}}>
                <Text style={{ fontWeight: 'bold',width:'90%', textAlign:'center', fontSize: 20, paddingTop:'2%'}}>Lições</Text>
            </View>
          </View>

      </View>

      
      <View >
        {/* Meu txt pesquisar */}
        {dicilicao.length === 0 ?
          null :
          <FlatList style={css.container}
            data={dicilicao}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => <Text style={css.palavras} 
            onPress={() => props.navigation.navigate('Aula', { aula: item.aula, texto:item.texto.toString() })} >{item.aula}</Text>}

          />
        }
      </View>

    </View>

  );
}