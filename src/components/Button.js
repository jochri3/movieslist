import React from 'react';
import { Text,TouchableOpacity } from 'react-native';

const Button = ({ btnLabel }) => {
    return (
        <TouchableOpacity>
            <Text>
                { btnLabel }
            </Text>
        </TouchableOpacity>
    )
};

export default Button;