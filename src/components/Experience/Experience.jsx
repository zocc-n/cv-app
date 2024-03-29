import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

function Experience({ setExperienceData }) {

    const [data, setData] = useState({
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
    })

    const [toggle, setToggle] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setExperienceData(data);
    }

    return (
        <>
            <div className='title'>
                <p>Professional Experience</p>
                <div className="symbol" onClick={() => setToggle(prev => !prev)}>
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
                    <label htmlFor="jobTitle">Job Title</label>
                    <input
                        id="jobTitle" 
                        type="text"
                        value={data.jobTitle}
                        onChange={(e) => setData({...data, jobTitle: e.target.value})}
                    />

                    <label htmlFor="email">Company</label>
                    <input
                        id="company" 
                        type="text"
                        value={data.company}
                        onChange={(e) => setData({...data, company: e.target.value})}
                    />

                    <label htmlFor="startDate">Start Date</label>
                    <input
                        id="startDate" 
                        type="date"
                        value={data.startDate}
                        onChange={(e) => setData({...data, startDate: e.target.value})}
                    />

                    <label htmlFor="endDate">End Date</label>
                    <input
                        id="endDate" 
                        type="date"
                        value={data.endDate}
                        onChange={(e) => setData({...data, endDate: e.target.value})}
                    />

                    <label htmlFor="description">Description</label>
                    <input
                        id="description" 
                        type="text"
                        value={data.description}
                        onChange={(e) => setData({...data, description: e.target.value})}
                    />

                    <button>Save</button>
                </form>
            </div>
        
        :null    
        }          
        </>
    );
}

export default Experience;