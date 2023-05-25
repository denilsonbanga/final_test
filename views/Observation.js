import React from 'react';
import { css } from '../assets/css/Css'
import { Text, View, TouchableOpacity,ScrollView } from 'react-native';
import FloatingButton from './menuIcon';
const CustomButton = TouchableOpacity;
import { useNavigation } from '@react-navigation/native';

var texto="1. O alfabeto: a, b, d, e, f, i, k, 1, m, n, ng, o, p, S, t, U, v, w, y, z.\n\n2. Não temos: c, h, j, q, r, x (j =z, x =s). O r é substituido por 1. (Kilisitu).\n\n2. Não temos: c, h, j, q, r, x (j =z, x =s). O r é substituido por 1. (Kilisitu).\n\n3. g nunca tem o valor de j. Assim, escreve-se nkonge, dyenge, dingidingi (e não nkongue, dyengue, dinguidingui).\n\n4. s soa sempre f ou ss (Ex.: Iusansu, Iusanu, Iukasa, disa, disu).\n\n5. Neste dicionario usa-se m', n' (duro) e serve de acento da primeira silaba(m'bangiki, m'banku, m'bandu m'bazi, m'bundu, m'vati, n'longoki,n'samu, n'tima, n'tokami).\n\n6. N.B.: Nem todas as palavras que comes; m ou n têm apostrofo (mbaza, mbandu, mbangu, mbundu, mbanzi, mbazi,mbata, nkome, nkomi, ndundu, ndonda, ndyata, nkindu, nsoyo).\n\n7. m e n brandos nasalam levemente e abrandam as consoantes da sílaba. Por conseguinte, a divisao de silabas não segue as regras do portugues(lu-ba-mba, lu-so-mpo, lu-so-mpo, mu-ntu, nda-nda-ni, tu-nga, lu-to-nto, vu-mvu-Ia, vwa-mvu-Ia).\n\n8. b, f, p e v são nasalizados com m' (duro) ou m (brando). Ex.: m'bundu, mbundu, m'fuma, mfuma, m'pata, m'pata, m'vu, mvu, m'vwatu, mvwata).\n\n9. Todas as palavras terminam com vogais.\n\n10. O 1 da primeira silaba do verbo transforma-se em nd como substantivo(longa -> ndonga, lunda -> ndunda).\n\n11. m'm, n'n são representados por 'm, 'n neste dicionário (Ex.: m'moni -> 'moni, n'nene-7 'nene).\n\n12. Na adaptação de palavras estrangeiras deve tomar-se em conta que, o Kikongo não tern consoantes seguidas (cr, cl, pI, pr, etc.). Por conseguinte, intercala-se uma vogal entre as consoantes (Cristo -> Kilisitu, cruz->kuluzu, presidente->pelezidente, litro->litulu)\n\n";
export default function Home(props) {
  const navigation = useNavigation();
  return (
    <View style={[css.container,{height:'100%',backgroundColor:'#fff',width:'100%'}]}>
      <View style={{backgroundColor: "#da2" ,  justifyContent: "space-between", flexDirection: "row" }}>
        <FloatingButton navigation={navigation}/>
        <Text style={{textAlign:'center',width:'90%', fontWeight: 'bold', fontSize: 20, paddingTop:'2%'}}>Observações</Text>
      </View>
      <ScrollView style={[css.container,{height:'100%',backgroundColor:'#fff'}]}>
      <Text style={{ ...css.tradu, fontWeight: "normal", paddingBottom:'2%'}}>{texto}</Text>
      </ScrollView>
    </View>
  );
}