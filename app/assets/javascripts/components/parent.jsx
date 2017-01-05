class Parent extends React.Component{

  constructor(){
    super();
    this.state = {movies: []}
    this.updateMovies = this.updateMovies.bind(this)
  }

  componentDidMount(){

    $.ajax({

      method: 'get',
      url: 'http://www.omdbapi.com/?s=cars&type=movie&r=json'
    })
    .done(function(response){
       this.setState({
        movies: response.Search
       })
    }.bind(this))
  }

  updateMovies(response){

   if(response.Error){
      this.setState({

      movies: [{"Title": response.Error}]
    })
   }
   else{
    this.setState({

      movies: response.Search
    })
  }
  }



  render(){
    return(
   <div>
    <SearchBar updateMovies={this.updateMovies}/>
    <Movies movies={this.state.movies}/>
    </div>
      )
  }
}
