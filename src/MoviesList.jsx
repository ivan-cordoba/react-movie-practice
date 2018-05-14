class MoviesList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      statusText: 'Watched'
    }
  }

  handleDisplayWatched() {
    this.setState({
      display: 0,
      statusText: 'Watched'
    });
  }

  handleDisplayToWatch() {
    this.setState({
      display: 1,
      statusText: 'To Watch'
    });
  }

  render() {
    var m = this;
    return (
        <div>
        <button onClick={(e) => this.handleDisplayWatched(e)}>Watched </button><button onClick={(e) => this.handleDisplayToWatch(e)}>To Watch</button>
        <table><tbody>
          <tr><th>Movies</th></tr>
          {
            this.props.movies.map(function(movie, index) {
              if(movie.watchStatus === m.state.display){
                return (<Movie movie={movie} toggleMovie={m.props.toggleMovie} index={index} statusText={m.state.statusText}/>);
              }
            })
          }
        </tbody></table></div>);
  }
}
window.MoviesList = MoviesList;