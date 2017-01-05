class SearchBar extends React.Component{

handleSearch(e){
 e.preventDefault();
 // debugger
 let data = this.refs.Search
 let type = this.refs.Type

 $.ajax({
  url: 'http://www.omdbapi.com/?s='+data.value+'&type='+ type.value+'&r=json',
  method:'get'

 }).done(function(response){
    // console.log(response.Search)
 // debugger
 this.props.updateMovies(response)

 }.bind(this))

}



  render(){
    return (

     <form id="search-bar" onSubmit={this.handleSearch.bind(this)}>
     <input ref = "Search" type="text" placeholder="search"/>
     <select ref = "Type">
        <option value="">All</option>
        <option value="series">series</option>
        <option value="movie">movie</option>
        <option value="episode">episode</option>
     </select>
     <input type = "submit" value = "submit"/>
     </form>

      )
  }
}
