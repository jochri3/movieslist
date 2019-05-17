import React from 'react';
import { View } from 'react-native';

const Card=({ children })=>{
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