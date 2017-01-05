class Movies extends React.Component{


  render(){
    return(
   <table>
     <tbody>
     {this.props.movies.map((movie, i)=>
         <Movie data={movie} key={i}/>
      )}

      </tbody>
   </table>
      )
  }
}

