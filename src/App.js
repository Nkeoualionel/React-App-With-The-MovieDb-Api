import React, { Component } from 'react';
import logo from './logo.svg';
import MovieRow from './components/MovieRow.js'
import $ from 'jquery';
import './App.css';

class App extends Component{

  constructor(props) {
    super(props)

    this.state = {}
    this.performerSearch("avengers")
  
  }

  performerSearch(search){
      const urlString = "https://api.themoviedb.org/3/search/movie?query="+search+"&api_key=6b82c27641d9b5858ef60d948329d46d";
      $.ajax({
        url: urlString,
        success: (searchResult) => {
          console.log("success fetching data")
          const results = searchResult.results

          var movieRows = []

          results.forEach((movie) => {
            movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
             // console.log(movie.poster_path)
              const movieRow = <MovieRow key={movie.id} movie={movie}/>
              movieRows.push(movieRow)
          })

          this.setState({rows: movieRows})
        },

        error: (xhr, status, err) => {
          console.log ("Failed to fetch data")
        }
      })
  }

  searchChangeHandler(event){
      console.log(event.target.value)
      const boundObject = this
      const searchTerm = event.target.value
      boundObject.performerSearch(searchTerm)
  }


  render(){
    return (
      <div className="App">
          <table className="titleBar">
            <tbody>
              <tr>
                 <td>
                    <img alt="app icon" width="50px" src="mdb.svg"/>
                 </td>
                  <td width="8"/>
                 <td>
                    <h3>The Movies DB Search</h3>
                 </td>
              </tr>
            </tbody>
          </table>
  
          <input style={{
            fontSize: 24,
            display: 'block',
            width: '99%',
            paddingTop: 8,
            paddingLeft:8,
            paddingBottom:16
          }} 
          onChange={this.searchChangeHandler.bind(this)}
          placeholder="Search your movie here"/>

        <h3>{this.state.rows}</h3>
      </div>
    );
  }
  

}


export default App;
