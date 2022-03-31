import React,{useEffect,useState} from 'react'
import apiJobs from '../api/apiJobs'
import {useHistory} from 'react-router-dom'

export default function AddJobs() {
    let history = useHistory()
    const [value,setValue] = useState({
        job_id : undefined,
        job_title : '',
        min_salary:'',
        max_salary:''
    })
    const handleChange = name => event =>{
        setValue({...value,[name]:event.target.value})
    }
    const onSubmit = async()=>{
        const payload = {
            job_id :(value.job_id)||'',
            job_title : (value.job_title) || '',
            min_salary:(value.min_salary) || '',
            max_salary:(value.max_salary) || ''
        }
        await apiJobs.Create(payload)
        .then(result =>{
            window.alert('Data Succesfully Insert')
            history.push('/jobs')
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
        <h1>Add jobs</h1>
        <form>
        <div>
                <label>
                    job title : 
                </label>
                <input type='text' placeholder='job title' onChange={handleChange('job_title')} />
            </div>
            <div>
                <label>
                    min salary : 
                </label>
                <input type='text' placeholder='min salary' onChange={handleChange('min_salary')} />
            </div>
            <div>
                <label>
                    max salary : 
                </label>
                <input type='text' placeholder='max salary' onChange={handleChange('max_salary')} />
            </div>
        </form>
        <div>
            <button type='button' onClick={onSubmit}>
                Submit
            </button>
            <button type='button' onClick={()=>history.goBack()}>
                Cancel
            </button>
        </div>
    </div>
  )
}