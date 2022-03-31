import React,{useEffect,useState} from 'react'
import apiLocations from '../api/apiLocations'
import {useHistory} from 'react-router-dom'

export default function AddLocations() {
    let history = useHistory()
    const [value,setValue] = useState({
        location_id : '',
        street_address : '',
        postal_code:'',
        city:'',
        state_province : '',
        country_id : ''
    })
    const handleChange = name => event =>{
        setValue({...value,[name]:event.target.value})
    }
    const onSubmit = async()=>{
        const payload = {
            location_id : (value.location_id) || '',
            street_address : (value.street_address) || '',
            postal_code : (value.postal_code) || '',
            city : (value.city) || '',
            state_province : (value.state_province) || '',
            country_id : (value.country_id)||''
        }
        await apiLocations.Create(payload)
        .then(result =>{
            window.alert('Data Succesfully Insert')
            history.push('/locations')
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
        <h1>Add Locationss</h1>
        <form>
        <div>
                <label>
                    Location Id : 
                </label>
                <input type='text' placeholder='Location Id' onChange={handleChange('location_id')} />
            </div>
            <div>
                <label>
                    street Address : 
                </label>
                <input type='text' placeholder='Street Adress' onChange={handleChange('street_address')} />
            </div>
            <div>
                <label>
                    Postal Code : 
                </label>
                <input type='text' placeholder='Postal code' onChange={handleChange('postal_code')} />
            </div>
            <div>
                <label>
                    City : 
                </label>
                <input type='text' placeholder='city' onChange={handleChange('city')} />
            </div>
            <div>
                <label>
                    State Province : 
                </label>
                <input type='text' placeholder='State Province' onChange={handleChange('state_province')} />
            </div>
            <div>
                <label>
                    Country Id : 
                </label>
                <input type='text' placeholder='country id' onChange={handleChange('country_id')} />
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