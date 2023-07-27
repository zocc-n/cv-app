import {GiPapers} from 'react-icons/gi'
import './Sidebar.css'

function Sidebar() {
    
    return(
        <div className="sidebar">
            <div className='logo'>
                <GiPapers />
                <span>CV</span>
            </div>
            <div className='download-btn-container'>
                <button className='download-btn'>Download CV</button>
            </div>
        </div>
    )
}

export default Sidebar