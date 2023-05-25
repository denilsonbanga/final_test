import React from 'react';
import { css } from '../assets/css/Css'
import { Text, View } from 'react-native';

export default function Home(props) {
  
  return (
    <View style={[css.container,{height:'100%',backgroundColor:'#fff'}]}>
      <Text style={css.wordTra} >{props.route.params.key} </Text>
      
      {props.route.params.trad.indexOf(",") >  0?
        <Text style={css.tradu}>
        Tradução:<Text style={{ ...css.tradu, fontWeight: "normal" }}>{props.route.params.abrev}{props.route.params.trad}</Text>
        {"\n"}
        {"\n"}
          </Text>
  
      :
        <Text style={css.tradu}>
          Português: <Text style={{ ...css.tradu, fontWeight: "normal" }}>{props.route.params.trad}</Text> 
          {"\n"}
          {"\n"}
          Kikongo: <Text style={{ ...css.tradu, fontWeight: "normal" }}>{props.route.params.kiko}</Text>
        </Text>
        
      }
    
    

      <Text style={{fontSize:17,marginTop:'90%',textAlign:'center',width:'100%'}} > Ajuda-nos a Manter-se Online
      </Text>
      <Text style={{fontSize:17,textAlign:'center',width:'100%'}} > Faça a sua Doação
      </Text>
      <Text style={{fontSize:17,textAlign:'center',width:'100%'}} > Iban: 0040.0000.2320.1453.1018.5
      </Text>
    </View>
  );
}