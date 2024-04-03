import React, { useState } from 'react';
import './styles.css';


const AddForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [idNumber, setIdNumber] = useState(['', '', '', '', '', '', '', '']);
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [areaCode, setAreaCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [service, setService] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };
  
    

    return (
        
        <div>
            <h1>Liste D'ajout</h1>
            <form onSubmit={handleSubmit}>
                <div id='name'>
                    <h2 className='name'>Nom :</h2>
                    <input
                    className='firstname'
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <br />
                    <label className='firstlabel'>Nom</label>
                    <input
                    className='lastname'
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <br />
                    <label className='lastlabel'> Prénom</label>
                </div>

                <div className='numero-carte'>
                    <h2 className='name'>Carte D'identité :</h2>
                    {idNumber.map((digit, index) => (
                        <input
                            key={index}
                            type="number"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => {
                                const updatedIdNumber = [...idNumber];
                                updatedIdNumber[index] = e.target.value;
                                setIdNumber(updatedIdNumber);
                            }}
                        />
                    ))}
                </div>

                <div className='date-naissance'>
                    <h2 className='name'>Date de naissance :</h2>
                    <input
                        type="number"
                        maxLength="2"
                        placeholder="J"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                    />
                    <span>/</span>
                    <input
                        type="number"
                        maxLength="2"
                        placeholder="M"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                    />
                    <span>/</span>
                    <input
                        type="number"
                        maxLength="4"
                        placeholder="A"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>

                <h2 className='name'>Adresse :</h2>
                <input
                className='company'
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <h2 className='name'>Email :</h2>
                <input
                className='email'
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <h2 className='name'>Télephone :</h2>
                <input
                    className="code"
                    type="text"
                    value={areaCode}
                    onChange={(e) => setAreaCode(e.target.value)}
                />
                <label className='area_code'>Area Code</label>
                <input
                    className="number"
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <label className='phone-number'>Phone Number</label>

                <h2 className='name'>Service :</h2>
                <select
                    className="option"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                >
                    <option disabled>--choose service</option>
                    <option>Subject 1</option>
                    <option>Subject 2</option>
                    <option>Subject 3</option>
                </select>

                <h2 id='coustomer'>Genre :</h2>
                <label className='radio'>
                    <input
                        type="radio"
                        name="gender"
                        value="Femme"
                        checked={gender === 'Femme'}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Femme
                </label>
                <label className='radio'>
                    <input
                        type="radio"
                        name="gender"
                        value="Homme"
                        checked={gender === 'Homme'}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Homme
                </label>

                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default AddForm;

