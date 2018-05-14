class App extends React.Component {

  constructor(props) {
    super(props);
    this.searchInput = '';
    this.titleInput = '';
    this.movies = [];
    this.state = {
      movies: this.movies,
      filterText: ''
    };
  }

  displayAllMovies() {
    this.setState({
      movies: this.movies
    });
  }

  updateInput(event) {
    this.searchInput = event.target.value;
  }

  updateAddMovieInput(event) {
    this.titleInput = event.target.value;
  }

  handleSearch() {
    var filteredList = this.movies.filter(movie => movie.title.toLowerCase().includes(this.searchInput.toLowerCase()));
    if (filteredList.length === 0) {
      filteredList = [{title: 'No Results', watchStatus: 0}, {title: 'No Results', watchStatus: 1}];
    }
    this.setState({
      movies: filteredList
    });
  }


  toggleMovie(index) {
    if (this.movies[index].watchStatus === 0) {
      this.movies[index].watchStatus = 1;
    } else {
      this.movies[index].watchStatus = 0;
    }
    this.handleSearch();
  }

  render() {
    return (
      <div id="content">
        <input onChange={this.updateAddMovieInput.bind(this)}/><button onClick={this.apiCallSearch.bind(this)}>Add</button>
        <input onChange={this.updateInput.bind(this)}/><button onClick={this.handleSearch.bind(this)}>Go</button>
        <MoviesList movies={this.state.movies} toggleMovie={this.toggleMovie.bind(this)}/>
      </div>
    );
  }


  apiCallSearch() {
    $.get({
      url: 'https://api.themoviedb.org/3/search/movie',
      data: {
        api_key: window.api_key,
        query: 'Interstellar',
        page: 1
      },
      success: (response) => {
        this.apiCallDetails(response.results[0].id);
      }
    });
  }

  apiCallDetails(videoId) {
    $.get({
      url: 'https://api.themoviedb.org/3/movie/' + videoId,
      data: { api_key: window.api_key },
      success: (response) => {
        console.log(response);
        var newMovie = {
          title: response.original_title, 
          watchStatus: 0,
          year: response.release_date.substr(0, 4),
          runtime: response.runtime,
          poster_path: 'http://image.tmdb.org/t/p/w185/' + response.poster_path
        };
        this.movies.push(newMovie);
        this.handleSearch();
      }
    });
  }

}
window.App = App;
ReactDOM.render(<App/>, document.getElementById('app'));