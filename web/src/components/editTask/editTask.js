// For seperate page
// Not use now

import React, { Component } from 'react'

import axios from 'axios'

class EditTask extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
    
  }

  static defaultProps = {
    obj:{},
    
  };
  componentDidMount = () => {
    
  }

  onClickSave = () => {
    const obj = {
      taskname: document.getElementById("editingTask").value,
    }    
    console.log(this.props.match.params.id)
    axios.put('http://localhost:4000/put/' + this.props.match.params.id, obj)
    .then(
      res => console.log(res.data),
      this.props.history.push('/'));
    //change path back
    
  }

  render() {
      return (
          <div>
              <input id="editingTask"></input> 
              <button onClick={this.onClickSave}>save</button>
          </div>
            
              
      )
  }
}

export default EditTask;
