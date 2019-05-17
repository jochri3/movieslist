import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const MovieDetails = (props) =>{
   const { Title, Year, Poster} = props.movie; 
    return (
        <Card>
            <CardSection>
                <Text>{ Title }</Text>
            </CardSection>

            <CardSection>
                <Text>{ Title }</Text>
            </CardSection>

            <CardSection>
                <Button btnLabel="Voir les details" />
            </CardSection>
        </Card>
    )
}

export default MovieDetails;