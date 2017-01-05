class Movie extends React.Component{



  render(){
    return(

    <tr>
      <td><img src={this.props.data.Poster} alt={this.props.data.Title} /></td>
      <td><h3>{this.props.data.Title}</h3></td>
      <td><h3>{this.props.data.Year}</h3></td>
    </tr>

      )
  }
}
