import React, { useState, useEffect } from 'react'
import apiDepartments from '../api/apiDepartments'
import { useHistory } from 'react-router-dom'

export default function Departments() {
    let history = useHistory()
    const [Departments, setDepartments] = useState()
    let [refresh, setRefresh] = useState(false);


    useEffect(() => {
        apiDepartments.list().then(data => {
            setDepartments(data)
        })
    }, [])

    useEffect(()=>{
        apiDepartments.list().then(data => {
            setDepartments(data)
        })
        setRefresh(false)
    },[refresh])

    const onEdit = async (id) =>{
        history.push(`departments/edit/${id}`)
    }
    const onDelete = async (id) =>{
        apiDepartments.deleteRow(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Deleted')
        })
        .catch(error => window.error(error.message))
    }

    return (
        <div>
            <h2>List of Departmentss</h2>
            <button onClick={() => history.push('/departments/new')}>Add Departments</button>
            <button onClick={() => history.push('/')}>Back</button>
            <table>
                <thead>
                    Departments Name
                </thead>
                <tbody>
                    {
                        Departments && Departments.map(Departments => {
                            return (
                                <tr>
                                    <td>{Departments.department_id}</td>
                                    <td>{Departments.department_name}</td>
                                    <td>{Departments.location_id}</td>
                                    <button onClick={()=>onEdit(Departments.department_id)}>Edit</button>
                                    <button onClick={()=>{
                                        if(window.confirm('Delete this record')) {
                                            onDelete(Departments.department_id)
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