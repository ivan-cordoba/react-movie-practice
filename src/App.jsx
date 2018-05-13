class App extends React.Component {

  constructor(props) {
    super(props);
    this.searchInput = '';
    this.movies = [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'},
    ];
    this.state = {
      movies: this.movies,
      filterText: ''
    };
  }

  updateInput(event) {
    this.searchInput = event.target.value;
  }

  handleSearch() {
    var filteredList = this.movies.filter(movie => movie.title.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase()));
    if (filteredList.length === 0) {
      filteredList = [{title: 'No Results'}];
    }
    this.setState({
      movies: filteredList
    });
  }

  render() {
    return (
      <div>
        <h2>Movies List</h2>
        <input onChange={this.updateInput.bind(this)}/><button onClick={this.handleSearch.bind(this)}>Go</button>
        <table><tbody>
          <tr><th>Movies</th></tr>
          {
            this.state.movies.map(function(movie) {
              return (<tr><td>{movie.title}</td></tr>);
            })
          }
        </tbody></table>    
      </div>
    );
  }
}
window.App = App;
ReactDOM.render(<App/>, document.getElementById('app'));