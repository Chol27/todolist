// didnt use

import React,{ useState,useEffect } from 'react';

export default function TestBar() {
    
    
    const [task,setTask] = useState('')
    const [content,setContent] = useState(<th>{task}</th>)
    
    const [editting,setEditting] = useState(false)
    const [color,setColor] = useState('default')

    useEffect(() => {
        
        if(task=='' && !editting){
            setColor('default')
            setContent(
            <th>
                <input id='input'></input>
                <button onClick={onClickCreate}>create</button> 
            </th>
            )
        }
        if(task!='' &&!editting) {
            setColor('yellow')
            setContent(
                <th>
                    <div>{task}</div>
                    <button onClick={onClickEdit}>edit</button>  
                    <button onClick={onClickDelete}>delete</button>
                </th>
             
            )
        }
        if(editting){
            setContent(
                <th>
                    <input id='edit'></input>
                    <button onClick={onClickSave}>save</button>
                </th>
             
            )
        }   
        else{

        }
        return () => {
            // cleanup
        }
    })

    function onClickCreate() {
        let newTask = document.getElementById('input').value
        console.log(newTask)
        console.log('taskbf:',task)
        setTask(newTask)
        console.log('taskat:',task)
        console.log(document.getElementById('input').value)
    }

    
    function onClickEdit ()  {
        setEditting(true)
    }

    function onClickDelete ()  {
        setTask('')
        setColor('default')
    }

    function onClickSave () {
        let newTask = document.getElementById('edit').value
        console.log(newTask)
        console.log('taskbf:',task)
        setTask(newTask)
        console.log('taskat:',task)
        console.log(document.getElementById('edit').value)
        setEditting(false)
    }

    return (
        <tbody>
            <tr style={{background:color }}>
            {content}
            
        </tr>
        </tbody>
        
    )
}



