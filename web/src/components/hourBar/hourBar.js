import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

class HourBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      taskname:props.obj.taskname,
      component: (
       <tr>
            <th style={{width:750}}>{this.props.obj.taskname}</th>
            {/*  still cannot use taskname from state cause download in same time */}
            <th>
            <button style={{textDecoration: 'none' }} onClick={this.updateTask}>
             Edit
            </button>

            
            </th>
            <th>
                <Button onClick={this.deleteTask} variant="danger">Delete</Button>
            </th>
        </tr>
      )
    }
  }

  static defaultProps = {
    obj:{},
  };

  updateTask = () => {
  
    axios.get('http://localhost:4000/edit/' + this.props.obj._id)
        .then(() => {
              this.setState({
                
                component: (
                  <tr>
                    <input id={this.props.obj._id} style={{width:300},{marginLeft:325}}></input>
                    <th><button onClick={this.saveTask}>Save</button></th>  
                  </tr>
                  
                )
                
              })
              {document.getElementById(this.props.obj._id).value = this.state.taskname }
        })
  }

  saveTask = () => {
    const obj = {
      taskname: document.getElementById(this.props.obj._id).value,
    }    
    axios.put('http://localhost:4000/put/' + this.props.obj._id, obj)
    .then(
      this.setState({
        taskname: obj.taskname,
        component: (
          <tr>
            <th style={{width:750}}>{document.getElementById(this.props.obj._id).value}</th>
            <th>
            <button style={{textDecoration: 'none' }} onClick={this.updateTask}>
             Edit
            </button>

            
            </th>
            <th>
                <Button onClick={this.deleteTask} variant="danger">Delete</Button>
            </th>
          </tr>
        )
      })
    )
  }

  deleteTask = () => {
    
    axios.delete('http://localhost:4000/delete/' +  this.props.obj._id)
        .then((res) => {
            window.location.reload()
        })     
  }

  render() {
      return (
        <tr>{this.state.component}</tr>
        // <tr>
        //     <th style={{width:750}}>{this.props.obj.taskname}</th>
        //     <th>
        //     <button style={{textDecoration: 'none' }}>
        //       <Link  to={"/edit/" + this.props.obj._id}>Edit</Link>
        //     </button>

            
        //     </th>
        //     <th>
        //         <Button onClick={this.deleteTask} variant="danger">Delete</Button>
        //     </th>
        // </tr>
      )
  }
}

export default HourBar;
