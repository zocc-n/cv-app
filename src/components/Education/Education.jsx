import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

function Education({ setEducationData }) {

    const [data, setData] = useState({
        degree: "",
        school: "",
        city: "",
        country: "",
        startDate: "",
        endDate: "",
    })

    const [toggle, setToggle] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setEducationData(data);

    }

    return (
        <>
            <div className='title'>
                <p>Education</p>
                <div className="symbol" onClick={() => setToggle(!toggle)}>
                    {toggle
                        ? <FaChevronUp />
                        : <FaChevronDown />
                    }             
                </div>  
            </div>

            {
            toggle ?

            <div className="form-container">
                <form onSubmit={handleSubmit}>

                    <label htmlFor="degree">Degree</label>
                    <input 
                        type="text"
                        id="degree"
                        value={data.degree}
                        onChange={(e) => {setData({...data, degree: e.target.value})}}
                    />

                    <label htmlFor="school">School</label>
                    <input 
                        type="text"
                        id="school"
                        value={data.school}
                        onChange={(e) => {setData({...data, school: e.target.value})}}
                    />


                    <label htmlFor="city">City</label>
                    <input 
                        type="text"
                        id="city"
                        value={data.city}
                        onChange={(e) => {setData({...data, city: e.target.value})}}
                    />


                    <label htmlFor="country">Country</label>
                    <input 
                        type="text"
                        id="country"
                        value={data.country}
                        onChange={(e) => {setData({...data, country: e.target.value})}}
                    />

                    <label htmlFor="startDate">Start Date</label>
                    <input 
                        type="date"
                        id="startDate"
                        value={data.startDate}
                        onChange={(e) => {setData({...data, startDate: e.target.value})}}
                    />


                    <label htmlFor="endDate">End Date</label>
                    <input 
                        type="date"
                        id="endDate"
                        value={data.endDate}
                        onChange={(e) => {setData({...data, endDate: e.target.value})}}
                    />

                    <button>Save</button>
                </form>
            </div>
            
            : null    
            }           
        </>
    )
}

export default Education;