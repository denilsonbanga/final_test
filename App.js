import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Traducao, inicial, Abreviaturas, Observation, KikPt, Licao, Aulas, Proverbios } from './views'
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const InfoContent = () => {
  return (
    <Text>Info screen</Text>
  )
}

const Drawer = createDrawerNavigator()

const StackContent = ({ navigation }) => {
  const Stack = createStackNavigator();

  return (

    <Stack.Navigator>

      <Stack.Screen name="inicial"
        component={inicial}
        options={{
          title: "Dicionário",
          headerTintColor: '#333',
          headerStyle: { backgroundColor: '#da2' },
          headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center' }
        }}

      />

      <Stack.Screen name="Palavras"
        component={Home}
        options={{
          headerShown: false,
          //title: "Palavras",
          //headerTintColor: '#333',
          //headerStyle: { backgroundColor: '#da2' },
          //headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center' }
        }}
      />
      <Stack.Screen name="Traducao"
        component={Traducao}
        options={{
          title: "Tradução",
          headerTintColor: '#333',
          headerStyle: { backgroundColor: '#da2' },
          headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center' }
        }}
      />
      <Stack.Screen name="KikPt"
        component={KikPt}
        options={{
          headerShown: false,
          //title: "Palavras",
          //headerTintColor: '#333',
          //headerStyle: { backgroundColor: '#da2' },
          //headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center' }
        }}
      />


    </Stack.Navigator>

  );
}

const StackAulaContent = ({ navigation }) => {
  const Stack = createStackNavigator();

  return (

    <Stack.Navigator>

      <Stack.Screen name="Lições"
        component={Licao}
        options={{
          headerShown: false
        }}

      />

      <Stack.Screen name="Aula"
        component={Aulas}
        options={{
          headerShown: false,
          //title: "Palavras",
          //headerTintColor: '#333',
          //headerStyle: { backgroundColor: '#da2' },
          //headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center' }
        }}
      />


    </Stack.Navigator>

  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRoute='Main'
        screenOptions={({ navigation }) => ({
          headerTitle: (
            <View >
              <MaterialIcons name="menu" onPress={() => navigation.openDrawer()} size={28} />
            </View>
          ),
        })}
      >
        <Drawer.Screen name='Dicionario' component={StackContent} />
        <Drawer.Screen name='Lições' component={StackAulaContent} />
        <Drawer.Screen name='Proverbios' component={Proverbios} />
        <Drawer.Screen name='Abreviaturas' component={Abreviaturas} />
        <Drawer.Screen name='Observação' component={Observation} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
