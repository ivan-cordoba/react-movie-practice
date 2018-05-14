class Movie extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayDescription: false
    }
  }

  handleTitleClick() {
    this.setState({
      displayDescription: !this.state.displayDescription
    });
  }

  renderDescription() {
    if(this.state.displayDescription){
      return (
      <div>
      <ul id="description">
        <li>Year: {this.props.movie.year}</li>
        <li>Runtime: {this.props.movie.runtime}</li>
        <li><button onClick={() => this.props.toggleMovie(this.props.index)}>{this.props.statusText}</button></li>
      </ul>
      <img src={this.props.movie.poster_path}/>
      </div>);
    }
  }

  render() {
    return (
    <tr>
      <td onClick={this.handleTitleClick.bind(this)}>
        <h4>{this.props.movie.title}</h4>
        {this.renderDescription()}
      </td>
    </tr>);
  }
}

window.Movie = Movie;