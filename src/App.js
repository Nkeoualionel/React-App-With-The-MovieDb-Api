import React, { Component } from 'react';
import logo from './logo.svg';
import MovieRow from './components/MovieRow.js'
import './App.css';

class App extends Component{

  constructor(props) {
    super(props)

    const movies = [
      {id: 0, poster_src:"https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", title: "Avengers, infinity war", overview: "This is the marvel movies and you can see it anytime and anywhere"},
      {id: 1, poster_src:"https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",title: "Avengers, End Games", overview: "This is the marvel movies and you can see it anytime and anywhere"},
      {id: 2, poster_src:"https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", title: "Avengers, Ultron age", overview: "This is the marvel movies and you can see it anytime and anywhere"}

    ]


      var movieRows = []

      movies.forEach((movie) => {
        console.log(movie.title)
        const movieRow = <MovieRow movie={movie}/>
      movieRows.push(movieRow)
      })

      this.state = {rows: movieRows}
  
  }


  render(){
    return (
      <div className="App">
          <table className="titleBar">
            <tbody>
              <tr>
                 <td>
                    <img alt="app icon" width="50px" src="mdb.png"/>
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
          placeholder="Search your movie here"/>

        <h3>{this.state.rows}</h3>
      </div>
    );
  }
  

}


export default App;
