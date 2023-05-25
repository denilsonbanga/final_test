import * as React from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FloatingButton = ({ navigation }) => {
    console.log('react')
    return (

        <View
        //style={[styles.container, { top: 10, left: 30 }]}
        >
            <TouchableWithoutFeedback onPress={() => {console.log('click')
                navigation.openDrawer()}}>
                <Animated.View style={[styles.button, styles.menu]}>
                    <Icon name="ios-menu" size={25} color="#000" />
                </Animated.View>
                
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default FloatingButton