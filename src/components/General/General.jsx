import { useState } from 'react'

function General({ setGeneralData }) {

    const [data, setData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        country: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setGeneralData(data);
    }

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="full-name">Full Name</label>
                    <input
                        id="full-name" 
                        type="text"
                        value={data.fullName}
                        onChange={(e) => setData({...data, fullName: e.target.value})}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        id="email" 
                        type="text"
                        value={data.email}
                        onChange={(e) => setData({...data, email: e.target.value})}
                    />

                    <label htmlFor="phone">Phone number</label>
                    <input
                        id="phone" 
                        type="text"
                        value={data.phone}
                        onChange={(e) => setData({...data, phone: e.target.value})}
                    />

                    <label htmlFor="address">Address</label>
                    <input
                        id="address" 
                        type="text"
                        value={data.address}
                        onChange={(e) => setData({...data, address: e.target.value})}
                    />

                    <label htmlFor="city">City</label>
                    <input
                        id="city" 
                        type="text"
                        value={data.city}
                        onChange={(e) => setData({...data, city: e.target.value})}
                    />

                    <label htmlFor="country">Country</label>
                    <input
                        id="country" 
                        type="text"
                        value={data.country}
                        onChange={(e) => setData({...data, country: e.target.value})}
                    />
                    <button>Save</button>
                </form>
            </div>          
        </>
    );
}

export default General;