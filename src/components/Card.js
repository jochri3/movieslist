import React from 'react';
import { View } from 'react-native';

const Card=()=>{
    const { children } = props;
    return (
        <View>
            { children }
        </View>
    )
};

const styles={
    containerStyles:{
        
    }
}

export default Card;