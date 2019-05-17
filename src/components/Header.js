import React from 'react';
import { View, Text } from 'react-native';


const Header=({title})=>{
    const { headerContainer, textStyles } = styles;
    return (
        <View style={ headerContainer }>
            <Text style={ textStyles }>{ title }</Text>
        </View>
    )
}

const styles={
    headerContainer:{
        marginTop:25,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#0c0a20',
        marginBottom:5
    },
    textStyles:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    }
}

export default Header;

