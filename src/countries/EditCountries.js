import React, {useEffect,useState} from 'react'
import apiCountries from '../api/apiCountries'
import { useHistory } from 'react-router-dom'

export default function EditCountries({match}) {
    let history = useHistory()
    const [values,setValues] = useState({
        country_id : undefined,
        country_name : '',
        region_id : ''
    })
    useEffect(()=>{
        apiCountries.findOne(match.params.id)
        .then(data =>{
            setValues({
                ...values,
                country_id : data.country_id,
                country_name : data.country_name,
                region_id : data.region_id
            })
        })
        .catch(error => console.log(error))
    },[])
    const handleChange = name => event => {
        setValues({...values,[name]: event.target.value})
    }
    const onSubmit = async () =>{
        const payload ={
            country_id : values.country_id,
            country_name : values.country_name,
            region_id : values.region_id
        }
        await apiCountries.update(payload)
        .then(result => {
            window.alert('Data Successfully Edited')
            history.push('/Countries')
        })
    }
  return (
    <div>
        <h1>Edit Countriess</h1>
        <form>
            <div>
                <label>
                    Country Name : 
                </label>
                <input type='text' placeholder='Countries Name' value={values.country_name} onChange={handleChange('country_name')} />
            </div>
            <div>
                <label>
                    Region id : 
                </label>
                <input type='text' placeholder='Region id' value={values.region_id} onChange={handleChange('region_id')} />
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