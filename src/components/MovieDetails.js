import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const MovieDetails = ({movie}) =>{
    return (
        <Card>
            <CardSection>
                <Text>{ movie.Title }</Text>
            </CardSection>

            <CardSection>
                <Text>{ movie.Title }</Text>
            </CardSection>

            <CardSection>
                <Button btnLabel="Voir les details" />
            </CardSection>
        </Card>
    )
}

export default MovieDetails;