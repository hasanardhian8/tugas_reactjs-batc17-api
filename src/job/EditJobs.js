import React, {useEffect,useState} from 'react'
import apiJobs from '../api/apiJobs'
import { useHistory } from 'react-router-dom'

export default function EditJobs({match}) {
    let history = useHistory()
    const [values,setValues] = useState({
        job_id : undefined,
        job_title : '',
        min_salary: '',
        max_salary: ''
    })
    useEffect(()=>{
        apiJobs.findOne(match.params.id)
        .then(data =>{
            setValues({
                ...values,
                job_id : data.job_id,
                job_title : data.job_title,
                min_salary: data.min_salary,
                max_salary: data.max_salary
            })
        })
        .catch(error => console.log(error))
    },[])
    const handleChange = name => event => {
        setValues({...values,[name]: event.target.value})
    }
    const onSubmit = async () =>{
        const payload ={
            job_id : values.job_id,
            job_title : values.job_title,
            min_salary : values.min_salary,
            max_salary : values.max_salary
        }
        await apiJobs.update(payload)
        .then(result => {
            window.alert('Data Successfully Edited')
            history.push('/Jobs')
        })
    }
  return (
    <div>
        <h1>Edit Jobss</h1>
        <form>
            <div>
                <label>
                    job title : 
                </label>
                <input type='text' placeholder='job title' value={values.job_title} onChange={handleChange('job_title')} />
            </div>
            <div>
                <label>
                    min salary : 
                </label>
                <input type='text' placeholder='min salary' value={values.min_salary} onChange={handleChange('min_salary')} />
            </div>
            <div>
                <label>
                    max salary : 
                </label>
                <input type='text' placeholder='max salary' value={values.max_salary} onChange={handleChange('max_salary')} />
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