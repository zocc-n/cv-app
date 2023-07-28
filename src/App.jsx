import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import General from './components/General/General.jsx'
import Education from './components/Education/Education.jsx'
import Experience from './components/Experience/Experience.jsx'
import Preview from './components/Preview/Preview.jsx'

function App() {

  const [generalData, setGeneralData] = useState(null)
  const [educationData, setEducationData] = useState(null)
  const [experienceData, setExperienceData] = useState(null)

    const TESTSTATEDATA = () => {
      console.log(generalData)
      console.log(educationData)
      console.log(experienceData)
    }

  return (
    <div className='root-container'>
      <button className="test" onClick={TESTSTATEDATA}>TEST</button>
      <Sidebar />
      <div className='forms-container'>
        <General setGeneralData={setGeneralData} />
        <Education setEducationData={setEducationData} />
        <Experience setExperienceData={setExperienceData} />
      </div>
      <Preview 
        generalData={generalData}
        educationData={educationData}
        experienceData={experienceData}
      />
    </div>
  )
}

export default App
