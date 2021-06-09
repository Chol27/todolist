import React, { PureComponent } from 'react'
import axios from 'axios';
import HourBar from '../hourBar/hourBar'


export default class TaskList extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/get').then(res =>{
            this.setState({
                tasks: res.data
            })
            console.log(this.state.tasks)
        });
    }
   
    onClickCreate = () => {
        const obj = {
          taskname: document.getElementById("creatingTask").value,
        }    
        axios.post('http://localhost:4000/post', obj).then(res => console.log(res.data));
        document.getElementById("creatingTask").value =  ''

        axios.get('http://localhost:4000/get').then(res =>{
            this.setState({
                tasks: res.data
            })
        });
    }
    
    DataTable = () => {
        return this.state.tasks.map((res, i) => {
            return <HourBar obj={res} key={i} />
        })
    }

    render() {
        return (
            <div>
            <b>create ur task here</b>
            <br />
             <input id="creatingTask"></input>
                        <button onClick={this.onClickCreate}>create</button>
                <table style={{width:"100%"}}>
                    <thead>
                        <tr>
                            <th>taskname</th>
                        </tr>
                            {this.DataTable()}
                    </thead>
                </table>
               
            </div>
        )
    }
}
