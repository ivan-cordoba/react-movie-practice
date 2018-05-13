var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];
var App = () => {
  return (
    <div>
      <table>
        <tr><th>Movie List</th></tr>
        {
          movies.map(function(movie) {
            return <tr><td>{movie.title}</td></tr>;
          })
        }
      </table>    
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));