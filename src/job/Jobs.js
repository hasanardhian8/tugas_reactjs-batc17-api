import React, { useState, useEffect } from 'react'
import apiJobs from '../api/apiJobs'
import { useHistory } from 'react-router-dom'

export default function Jobs() {
    let history = useHistory()
    const [Jobs, setJobs] = useState()
    let [refresh, setRefresh] = useState(false);


    useEffect(() => {
        apiJobs.list().then(data => {
            setJobs(data)
        })
    }, [])

    useEffect(()=>{
        apiJobs.list().then(data => {
            setJobs(data)
        })
        setRefresh(false)
    },[refresh])

    const onEdit = async (id) =>{
        history.push(`jobs/edit/${id}`)
    }
    const onDelete = async (id) =>{
        apiJobs.deleteRow(id)
        .then(()=>{
            setRefresh(true)
            window.alert('Data Successfully Deleted')
        })
        .catch(error => window.error(error.message))
    }

    return (
        <div>
            <h2>List of Jobss</h2>
            <button onClick={() => history.push('/jobs/new')}>Add Jobs</button>
            <button onClick={() => history.push('/')}>Back</button>
            <table>
                <thead>
                    Jobs Name
                </thead>
                <tbody>
                    {
                        Jobs && Jobs.map(Jobs => {
                            return (
                                <tr>
                                    <td>{Jobs.job_id}</td>
                                    <td>{Jobs.job_title}</td>
                                    <td>{Jobs.min_salary}</td>
                                    <td>{Jobs.max_salary}</td>
                                    <button onClick={()=>onEdit(Jobs.job_id)}>Edit</button>
                                    <button onClick={()=>{
                                        if(window.confirm('Delete this record')) {
                                            onDelete(Jobs.job_id)
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