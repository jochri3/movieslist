import React,{ Component } from 'react';
import { View } from 'react-native';
import MovieDetails from './MovieDetails';

class MoviesList extends Component{
    constructor(){
        super(props);
    }
    
    renderMovies(){
        const { movies } = this.props;
        if(movies){
            return movies.map(movie => {
                return <MovieDetails key={ movie.imdbID } movie = { movie } />
            });
        }else{
            return;
        }
    }

    render(){
        return (
            <View>
                { this.renderMovies() }
            </View>
        )
    }
}

export default MoviesList;