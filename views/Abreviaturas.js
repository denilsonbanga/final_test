import React from 'react';
import { css } from '../assets/css/Css'
import { Text, View, TouchableOpacity } from 'react-native';
import FloatingButton from './menuIcon';
const CustomButton = TouchableOpacity;
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

export default function Home(props) {
  const navigation = useNavigation();
  
  return (
    <View>
    <View style={{backgroundColor: "#da2" ,  justifyContent: "space-between", flexDirection: "row" }}>
        <FloatingButton navigation={navigation}/>
        <Text style={{textAlign:'center',width:'90%', fontWeight: 'bold', fontSize: 20, paddingTop:'2%'}}>Abreviaturas</Text>
      </View>
    <ScrollView style={css.container,{height:'100%',backgroundColor:'#fff'}}>
      <Text ></Text>   
      <Text style={css.obsText} >Abrev. = Abreviatura</Text>
      <Text style={css.obsText} >Adj. = Adjectivo</Text>
      <Text style={css.obsText} >Adv. = Adverbio</Text>
      <Text style={css.obsText} >Anat. = Anatomia</Text>
      <Text style={css.obsText} >Ang. = Angolanismo</Text>
      <Text style={css.obsText} >Ang. = Angolanismo</Text>
      <Text style={css.obsText} >Bras. = Brasileirismo</Text>
      <Text style={css.obsText} >Dem. = Demonstrativo</Text>
      <Text style={css.obsText} >Depree. = Depreciativo</Text>
      <Text style={css.obsText} >Econ. = Economia</Text>
      <Text style={css.obsText} >Electr. = Electricidade</Text>
      <Text style={css.obsText} >F. = Feminino</Text>
      <Text style={css.obsText} >Fam. = Familiar</Text>
      <Text style={css.obsText} >Filos. = Filosona</Text>
      <Text style={css.obsText} >Fis. = Fisica</Text>
      <Text style={css.obsText} >Gir. = Giria</Text>
      <Text style={css.obsText} >Gram. = Gramatica</Text>
      <Text style={css.obsText} >Indef. = Indennido</Text>
      <Text style={css.obsText} >Inorm. = Informatica</Text>
      <Text style={css.obsText} >Jur. = Juridico</Text>
      <Text style={css.obsText} >Ling. = Linguistica</Text>
      <Text style={css.obsText} >Lac. Adv. = Locução adverbial</Text>
      <Text style={css.obsText} >Lus. = Lusitanismo</Text>
      <Text style={css.obsText} >M. = Masculino</Text>
      <Text style={css.obsText} >Mat. = Matematica</Text>
      <Text style={css.obsText} >Med. = Medicina</Text>
      <Text style={css.obsText} >Mus. = Musica</Text>
      <Text style={css.obsText} >N.=Nome</Text>
      <Text style={css.obsText} >Num. = Numerico</Text>
      <Text style={css.obsText} >Part. Carr. = Particula correctiva</Text>
      <Text style={css.obsText} >Pej. = Pejorativo</Text>
      <Text style={css.obsText} >PI. = Plural</Text>
      <Text style={css.obsText} >Pref. = Prenxo</Text>
      <Text style={css.obsText} >Prep. = Preposição</Text>
      <Text style={css.obsText} >Pron. = Pronome</Text>
      <Text style={css.obsText} >Psicol. = Psicologia</Text>
      <Text style={css.obsText} >Psiq = psiquiatria</Text>
      <Text style={css.obsText} >Quim. = Quimica</Text>
      <Text style={css.obsText} >S. = Substantivo</Text>
      <Text style={css.obsText} >ing. = Singular</Text>
      <Text style={css.obsText} >Sup. = Superlativo absoluto</Text>
      <Text style={css.obsText} >V. = Verbo</Text>

    </ScrollView>
    </View>
  );
}