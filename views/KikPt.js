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
    { name: 'Afuana', abrev: 'Adj.', Portugues: 'Digno, Competente, Cómodo.' },
    { name: 'Aiingi', abrev: 'S.', Portugues: 'Imenso, muito, fecundo, mole, considerável, volumoso.' },
    { name: ' Ansuka', abrev: 'S.', Portugues: 'Último,final, derradeiro, definitivo.' },
    { name: 'Aludi', abrev: 'S.', Portugues: 'Verdadeiro, sincero, real, leal.' },
    { name: 'Akuikiji', abrev: 'S.', Portugues: ' Sincero, fiel, verdadeiro.' },
    { name: 'Ansuka', abrev: 'S.', Portugues: 'Último, final, derradeiro, definitivo.' }, 
    { name: 'Auete', abrev: 'S.', Portugues: 'Belo, bem, formoso.' },
    { name: 'Badika', abrev: 'S.', Portugues: 'Narrar, figurar, condescender, passada.' },
    { name: 'Badisa', abrev: 'S.', Portugues: 'Firmar, custar, dificultar, fortalecer.' },
    { name: 'Baka', abrev: 'S.', Portugues: 'Dilacerar, empunhar, demolir, depenar.' },
    { name: 'Bakisa', abrev: 'S.', Portugues: ' Firmar, pegar, fazer buscar.' },
    { name: 'Bandika', abrev: 'S.', Portugues: 'Formar par ou parelha, principiar, começar.' }, 
    { name: 'Bangumuka', abrev: 'S.', Portugues: 'Ficar derrubado, cair de costas.' },
    { name: 'Bangumuna', abrev: 'S.', Portugues: 'Rolar, revirar, inverter.' }, 
    { name: 'Betumuka', abrev: 'S.', Portugues: ' Abaixar, chover, pingar.' },
    { name: 'Bidia bia mbote', abrev: 'S.', Portugues: ' Manjares finos, guloseimas .' }, 
    { name: 'Bititi', abrev: 'S.', Portugues: ' Miséria ; grama, erva.' },
    { name: 'Boka', abrev: 'S.', Portugues: ' Berrar, dar brado, barulhar.' }, 
    { name: 'Bokela', abrev: 'S.', Portugues: 'Vozear, gritar, apelar, invocar.' },
    { name: 'Bubalala', abrev: 'S.', Portugues: 'Comer demais, dar de comer até a saciedade, barriga d"´"água.' }, 
    { name: 'Buka', abrev: 'S.', Portugues: ' Ala, fila, multidão.' },
    { name: 'Bukama', abrev: 'S.', Portugues: 'Colocar de boca ou de barriga para baixo, vir chegando a noite, apelar.' }, 
    { name: 'Bulakesa', abrev: 'S.', Portugues: 'Distribuir, dilacerar, ir quebrando.' },
    { name: 'Bumbula', abrev: 'S.', Portugues: 'Passear, girar de um lado para outro, cirandar.' }, 
    { name: 'Bunda', abrev: 'S.', Portugues: 'Dobrar, franja, ajuntar.' },
    { name: 'Dafuka', abrev: 'S.', Portugues: ' Comer muito, fartar-se, cheia, empachar.' }, 
    { name: 'Dandisa', abrev: 'S.', Portugues: 'Encimar, fazer boiar, sobrenadar.' },
    { name: 'Dandixila', abrev: 'S.', Portugues: 'Fazer conceber, ganhar barriga, emprenhar.' }, 
    { name: 'Deva', abrev: 'S.', Portugues: 'Fiar (emprestar), ficar a dever, abonar.' },
    { name: 'Devesa', abrev: 'S.', Portugues: 'Emprestar, abobar, debitar.' }, 
    { name: 'Diá', abrev: 'S.', Portugues: 'Comer, tomar alimento.' },
    { name: 'Diakisa', abrev: 'S.', Portugues: 'Fazer exaltar, fazer acirrar ou irritar.' }, 
    { name: 'Diatisa', abrev: 'S.', Portugues: 'Guiar, encaminhar, conduzir.' },
    { name: 'Digi-dingi', abrev: 'S.', Portugues: 'Meia noite, grande calma, grande silencio.' }, 
    { name: 'Dila', abrev: 'S.', Portugues: 'Pranto, choramingar, chorar.' },
    { name: 'Dila ie kata', abrev: 'S.', Portugues: 'Fazer acompanhar de conduto, tempero, qualquer alimento.' },
    { name: 'Dila ie endilu', abrev: 'S.', Portugues: 'Fazer acompanhar de conduto, tempero, qualquer alimento.' }, 
    { name: 'Digi-dingi', abrev: 'S.', Portugues: 'Meia noite, grande calma, grande silencio.' }, 
    { name: 'Dimbala', abrev: 'S.', Portugues: 'Dar no alvo, acertar um tiro, tomar como alvo.' },
    { name: 'Dimbu', abrev: 'S.', Portugues: 'Sinal, pendão (bandeira), goma.' }, 
    { name: 'Dimina', abrev: 'S.', Portugues: ' Entrar, sumir-se, mergulhar, afundar.' },
    { name: 'Diminisa', abrev: 'S.', Portugues: ' Entardecer, fundear, engolir, tornar imerso.' },
    { name: 'Dinzanda', abrev: 'S.', Portugues: 'Franja, tufo, saia de franjas.' }, 
    { name: 'Diombola', abrev: 'S.', Portugues: ' Viciar, tirar um a um, deitar a miúde lenha ao lume.' },
    { name: 'Diukisa', abrev: 'S.', Portugues: 'Implantar, fazer entrar, fazer meter.' },
    { name: 'Dodela', abrev: 'S.', Portugues: 'Bater a porta, badalar, furar.' }, 
    { name: 'Dodesa', abrev: 'S.', Portugues: 'Tornar decadente, tornar infeliz ou infortunado.' },
    { name: 'Dodokela', abrev: 'S.', Portugues: 'Rogar, rezar, adorar.' }, 
    { name: 'Dongama', abrev: 'S.', Portugues: 'Abancar, descansar o corpo, assentar-se sobre os calcanhares.' },
    { name: 'Duka', abrev: 'S.', Portugues: 'Arrancar, dar focinhadas, saliente.' }, 
    { name: 'Dumuka', abrev: 'S.', Portugues: 'Voar, galgar, passar por cima de.....' },
    { name: 'Dumuka', abrev: 'S.', Portugues: 'Voar, galgar, passar por cima de.....' },
    { name: 'Dumuka', abrev: 'S.', Portugues: 'Voar, galgar, passar por cima de.....' },
    { name: 'Dumuka', abrev: 'S.', Portugues: 'Voar, galgar, passar por cima de.....' },
    { name: 'Dumuka', abrev: 'S.', Portugues: 'Voar, galgar, passar por cima de.....' },
    { name: 'Dumuka', abrev: 'S.', Portugues: 'Voar, galgar, passar por cima de.....' },
    { name: 'Dumuka', abrev: 'S.', Portugues: 'Voar, galgar, passar por cima de.....' },
    { name: 'Dumuka', abrev: 'S.', Portugues: 'Voar, galgar, passar por cima de.....' },
    { name: 'Dumuka', abrev: 'S.', Portugues: 'Voar, galgar, passar por cima de.....' },
    { name: 'Dumuka', abrev: 'S.', Portugues: 'Voar, galgar, passar por cima de.....' },
      
  
  
  
  
  
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

            <View style={{paddingLeft:'2%',justifyContent: "space-between", flexDirection: "row"}}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, paddingTop:'2%'}}>Kikongo</Text>
                <TouchableOpacity style={{paddingLeft:'5%'}} onPress={() => props.navigation.navigate('Palavras')} >
                  <Image style={{...css.changeIcon}} source={require('../assets/img/change.png')}></Image>
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', fontSize: 20,paddingLeft:'5%', paddingTop:'2%', width: '100%' }}>Português</Text>
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
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => <Text style={css.palavras} onPress={() => props.navigation.navigate('Traducao', { key: item.name,abrev:item.abrev , trad:item.Portugues.toString() })} >{item.name}</Text>}
          />
        }
      </View>

    </View>

  );
}