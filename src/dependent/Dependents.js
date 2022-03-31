import React, { useState, useEffect } from 'react'
import apiDependents from '../api/apiDependents'
import { useHistory } from 'react-router-dom'

export default function Dependents() {
    let history = useHistory()
    const [Dependents, setDependents] = useState()
    let [refresh, setRefresh] = useState(false);


    useEffect(() => {
        apiDependents.list().then(data => {
            setDependents(data)
        })
    }, [])

    useEffect(()=>{
        apiDependents.list().then(data => {
            setDependents(data)
        })
        setRefresh(false)
    },[refresh])

    const onEdit = async (id) =>{
        history.push(`dependents/edit/${id}`)
    }
    const onDelete = async (id) =>{
        apiDependents.deleteRow(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Deleted')
        })
        .catch(error => window.error(error.message))
    }

    return (
        <div>
            <h2>List of Dependentss</h2>
            <button onClick={() => history.push('/dependents/new')}>Add Dependents</button>
            <button onClick={() => history.push('/')}>Back</button>
            <table>
                <thead>
                    Dependents Name
                </thead>
                <tbody>
                    {
                        Dependents && Dependents.map(Dependents => {
                            return (
                                <tr>
                                    <td>{Dependents.dependent_id}</td>
                                    <td>{Dependents.first_name}</td>
                                    <td>{Dependents.last_name}</td>
                                    <td>{Dependents.relationship}</td>
                                    <td>{Dependents.employee_id}</td>
                                    <button onClick={()=>onEdit(Dependents.dependent_id)}>Edit</button>
                                    <button onClick={()=>{
                                        if(window.confirm('Delete this record')) {
                                            onDelete(Dependents.dependent_id)
                                        }
                                    }}>Delete</button>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}