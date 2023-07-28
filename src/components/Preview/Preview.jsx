import { useState } from 'react'

function Preview({ generalData, ducationData, experienceData }){



    return (
        <>
            {generalData ?
            <div className='preview-container'>
                <section className='generalPreview'>
                    <h1 className='namePreview'>{generalData.fullName}</h1>
                    <div className='otherGeneralPreview'>
                        <p>
                            {`
                            ${generalData.address}  •
                            ${generalData.city}  •
                            ${generalData.country}  •
                            ${generalData.phone}  •
                            ${generalData.email}
                            `}   

                        </p>
                    </div>
                </section>
                <section className='educationPreview'>
                    <h2>Education</h2>
                </section>
            </div>

            : <div className='preview-container'></div>}
        </>
    )
}

export default Preview;