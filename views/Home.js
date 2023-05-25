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
  const [isRecord, setIsRecord] = useState(false);
  const [text, setText] = useState('');
  const [imageSource, setImageSource] = useState(null);
  const buttonLabel = isRecord ? 'Stop' : 'Start';
  const voiceLabel = text
    ? text
    : isRecord
      ? 'Say something...'
      : 'press Start button';
  console.log(navigation)

  const dados = [
    { name: 'Abada', abrev: 'S.', kikongo: 'Nguvu ankento, Mpika, Mpaka.' },
    { name: 'Abalamento', abrev: 'S.', kikongo: 'Ndikunu, Ndikuka, Nzakama.' },
    { name: 'Aborrecer', abrev: 'V.', kikongo: 'Saula, Savula, Nukwa.' },
    { name: 'Aborrotar', abrev: 'V.', kikongo: 'Zala, Zadisa, Safula, Sefula.' },
    { name: 'Abraçar', abrev: 'V.', kikongo: 'Bimba, Bimbakana, Bita.' },
    { name: 'Bacidez', abrev: 'S.', kikongo: ' Mfufukila, Mvesuka, Mvesoka. ' },
    { name: 'Bacoco', abrev: 'Adj.S.', kikongo: ' dinda, Zowa, Zengui. ' },
    { name: 'Bacorice', abrev: 'S.', kikongo: ' Nsokela, Kumbu, Nsangu. ' },
    { name: 'Bacorinhar', abrev: 'V.', kikongo: ' Tumpa, Landana, Kulana. ' },
    { name: 'Badernar', abrev: 'V.', kikongo: ' Sakana, Kemba, Yangalala. ' },
    { name: 'Basbaearia', abrev: 'S.', kikongo: ' Kidinda, Kizowa, Kizenga,  ' },
    { name: 'Barusta', abrev: 'S.', kikongo: ' Nkoloma, Ntokama, Lutokamu,  ' },
    { name: 'Basbaque', abrev: 'Adj.', kikongo: ' Dinda, Zowa, Zengi, ' },
    { name: 'Basbaquice', abrev: 'S.', kikongo: ' Kidinda, Kizowa, Kizenga, ' },
    { name: 'Caboucar', abrev: 'V.', kikongo: ' Kuba, Lufulu, Kuba nzo, ' },
    { name: 'Caimento', abrev: 'S.', kikongo: ' Mbwa, Nsotoka, Munkanda' },
    { name: 'Calamidade', abrev: 'S.', kikongo: ' Nkuba, Vuku, N´zilu, Sumbula. ' },
    { name: 'Calamitoso', abrev: 'Adj.', kikongo: ' Avuku, Avonza, Asumbula. ' },
    { name: 'Cálculo', abrev: 'S.', kikongo: ' Lutangu, Mbadika, Tadi muna nitu. ' },
    { name: 'Dada', abrev: 'S.', kikongo: ' Lukau, Mpana, Nkayilu. ' },
    { name: 'Dádiva', abrev: 'S.', kikongo: ' Nkayilu, Mpana, Lukau. ' },
    { name: 'Danamento', abrev: 'S.', kikongo: ' Ngwanzi, Nsita, Mbi, Sibu ' },
    { name: 'Danar', abrev: 'V.', kikongo: ' Fwasa, Fwasakesa, Vonda, Veza ' },
    { name: 'Deajudar', abrev: 'V.', kikongo: ' Lembi Sadisa, Yambula, Sisa, Zembeka. ' },
    { name: 'Elegibilidade', abrev: 'S.', kikongo: ' Nsolakana, Ngyekekana, Nrumbakana. ' },
    { name: 'Eiva', abrev: 'S.', kikongo: ' Lwamvwa, Rona, Twangu.' },
    { name: 'Fatalidade', abrev: 'S.', kikongo: ' Nkanwa, , lukanu, Lufwa, Vonza. ' },
   
  ]

  var [dicionario, setDicionario] = useState(dados)
  //Algortimo de ordenação do dicionario 

  
  dados.sort(function (a, b) {
    return (a.name).localeCompare(b.name);
  });
  function extractText(imagePath) {

    Ocr.recognizeTokens(imagePath, LANG_PORTUGUESE, {
      whitelist: null,
      blacklist: null
    }).then(res => { setText(res) })
  }
  function selectImage() {
    ImagePicker.launchCamera(imagePickerOptions, (res) => {
      if (!res.didCancel) {
        const source = { uri: res.uri };
        setImageSource(source);
        extractText(res.path)
      }
    })
  }
  const _onSpeechStart = (event) => {
    setText('');
  };
  const _onSpeechEnd = () => {
    setIsRecord(false)
  };
  const _onSpeechResults = (event) => {
    setText(event.value[0]);
    search(event.value[0])
  };

  const _onSpeechError = (event) => {
    setIsRecord(false)
  };
  const _onRecordVoice = () => {
    if (isRecord) {
      Voice.stop();
      search(text)
    } else {
      Voice.start('pt-PT', {
        "RECOGNIZER_ENGINE": "GOOGLE",
        "EXTRA_PARTIAL_RESULTS": true
      });
    }
    setIsRecord(!isRecord);
  };

  useEffect(() => {
    Voice.onSpeechStart = _onSpeechStart;
    Voice.onSpeechEnd = _onSpeechEnd;
    Voice.onSpeechResults = _onSpeechResults;
    Voice.onSpeechError = _onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);
  //Função de pesquisa 

  function search(value = "") {
    let data = [...dados], result = []
      for (let i = 0; i < data.length; i++) {
        if (data[i].name.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {

          result.push(data[i])
        }
      }
      setDicionario(result);
  }

  function textRecognized() {
    const tessOptions = { level: LEVEL_WORD };
    TesseractOcr.recognizeTokens(imageSource, LANG_PORTUGUESE, {
      whitelist: null,
      blacklist: null
    }).then(res => setText(res))

  }

  const takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
    }
  };
  return (

    <View style={{ backgroundColor: '#fff', height: '100%' }}>
      
      <View style={{ backgroundColor: '#da2', padding: 2, borderTopColor: '#da2', marginTop: 0 }}>
          
          <View style={{  justifyContent: "space-between", flexDirection: "row" }}>
            <FloatingButton 
              navigation={navigation}
              />
              <View style={{paddingLeft:'3%',justifyContent: "space-between", flexDirection: "row"}}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, paddingTop:'2%'}}>Português</Text>
                <TouchableOpacity style={{paddingLeft:'5%'}} onPress={() => props.navigation.navigate("KikPt")} >
                  <Image style={{...css.changeIcon}} source={require('../assets/img/change.png')}></Image>
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', fontSize: 20,paddingLeft:'5%', paddingTop:'2%', width: '100%' }}>Kikongo</Text>
            </View>
          </View>
        <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
          <TextInput style={css.input} autoFocus={true} placeholder='Pesquisar' onChangeText={(e) => search(e)} defaultValue={text} />
          {isRecord ?
            <TouchableOpacity onPress={_onRecordVoice}>
              <Icon name="keyboard-voice" size={30} color="#757575" />
            </TouchableOpacity> :
            <TouchableOpacity onPress={_onRecordVoice} >
              <Icon name="keyboard-voice" size={30} color={"black"} />
            </TouchableOpacity>
          }

          <TouchableOpacity onPress={selectImage} >
            <Icon name="image-search" size={30} />
          </TouchableOpacity>
        </View>

      </View>

      
      <View >
        {/* Meu txt pesquisar */}
        {dicionario.length === 0 ?
          null :
          <FlatList style={css.container}
            data={dicionario}
            keyExtractor={(item, index) => index.toString()}                          // props.navigation.navigate("KikPt") 
            renderItem={({ item, index }) => 
            <Text style={css.palavras} 
            onPress={() => 
              props.navigation.navigate("Traducao", 
            { 
              key: item.name, 
              trad:item.kikongo.toString(),
              abrev:item.abrev
            })
          } >{item.name}</Text>}
          />
        }
      </View>

    </View>

  );
}