import React,{useEffect,useState} from 'react'
import apiDepartments from '../api/apiDepartments'
import {useHistory} from 'react-router-dom'

export default function AddDepartments() {
    let history = useHistory()
    const [value,setValue] = useState({
        department_id : '',
        department_name : '',
        location_id:''
    })
    const handleChange = name => event =>{
        setValue({...value,[name]:event.target.value})
    }
    const onSubmit = async()=>{
        const payload = {
            department_id : (value.department_id) || '',
            department_name : (value.department_name) || '',
            location_id : (value.location_id) || ''
        }
        await apiDepartments.Create(payload)
        .then(result =>{
            window.alert('Data Succesfully Insert')
            history.push('/departments')
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
        <h1>Add Departments</h1>
        <form>
            <div>
                <label>
                    Departments Name : 
                </label>
                <input type='text' placeholder='Country Name' onChange={handleChange('department_name')} />
            </div>
            <div>
                <label>
                    Region Id : 
                </label>
                <input type='text' placeholder='Region id' onChange={handleChange('location_id')} />
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