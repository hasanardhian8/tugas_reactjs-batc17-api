import React,{useEffect,useState} from 'react'
import apiDependents from '../api/apiDependents'
import {useHistory} from 'react-router-dom'

export default function AddDependents() {
    let history = useHistory()
    const [value,setValue] = useState({
        dependent_id : '',
        first_name : '',
        last_name:'',
        relationship:'',
        employee_id:''
    })
    const handleChange = name => event =>{
        setValue({...value,[name]:event.target.value})
    }
    const onSubmit = async()=>{
        const payload = {
            dependent_id : (value.dependent_id) || '',
            first_name : (value.first_name) || '',
            last_name : (value.last_name) || '',
            relationship : (value.relationship) || '',
            employee_id : (value.employee_id) || ''
        }
        await apiDependents.Create(payload)
        .then(result =>{
            window.alert('Data Succesfully Insert')
            history.push('/dependents')
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
        <h1>Add dependentss</h1>
        <form>
        <div>
                <label>
                    Dependent id : 
                </label>
                <input type='text' placeholder='Dependent Id' onChange={handleChange('dependent_id')} />
            </div>
            <div>
                <label>
                first name : 
                </label>
                <input type='text' placeholder='first name' onChange={handleChange('first_name')} />
            </div>
            <div>
                <label>
                last name : 
                </label>
                <input type='text' placeholder='last name' onChange={handleChange('last_name')} />
            </div>
            <div>
                <label>
                relationship : 
                </label>
                <input type='text' placeholder='relationship' onChange={handleChange('relationship')} />
            </div>
            <div>
                <label>
                employee id : 
                </label>
                <input type='text' placeholder='employee_id' onChange={handleChange('employee_id')} />
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