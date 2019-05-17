import { View } from 'react-native';
import React, { Component } from 'react';
import Header from './src/components/Header';
import MoviesList from './src/components/MoviesList';
import axios from 'axios';

const API_KEY = "c2f7961d";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies:[],
      movieToSearch:"avengers"
     };
  }

  componentDidMount=async()=>{
      const res = await axios.get(`http://www.omdbapi.com/?s=${this.state.movieToSearch}&apikey=${API_KEY}`);
      // const data=await res.json();
      this.setState({ movies:res.data.Search });
  }

  render() {
    return (
      <View style={ { flex:1 } }>
        <Header title={"Films"} />
        <MoviesList movies={ this.state.movies } />
      </View>
    );
  }
}

export default App;