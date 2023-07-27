import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import General from './components/General/General.jsx'
import Education from './components/Education/Education.jsx'

function App() {

  const [generalData, setGeneralData] = useState(null)
  const [educationData, setEducationlData] = useState(null)
  const [experienceData, setExperienceData] = useState(null)

  const [toggle, setToggle] = useState(
    {
      general: false, 
      education: false,
      experience: false
    })

    const TESTSTATEDATA = () => {
      console.log(generalData)
    }

  return (
    <div className='root-container'>
      <button className="test" onClick={TESTSTATEDATA}>TEST</button>
      <Sidebar />
      <div className='forms-container'>
        <General setGeneralData={setGeneralData}/>
        <Education setEducationData={setEducationlData}/>
        {/* <Experience /> */}
      </div>
      {/* <Preview /> */}
    </div>
  )
}

export default App


// FaChevronDown
// FaChevronUp