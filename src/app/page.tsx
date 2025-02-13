'use client'


import React, { useState, useEffect } from 'react';
import { SATQuestionsData } from '@/lib/data';
import FreeSat from '@/components/FreeSat';
import StudentRegistrationForm from '@/components/form/StudentRegisterationForm';
import CountdownTimer from '@/components/SatTimer';
import { InlineWidget } from "react-calendly";

function App() {
    const [isRegistered, setIsRegistered] = useState(false);
    const [userData, setUserData] = useState({ name: '', email: '' });
    const [satFinished, setSatFinished] = useState(false); // Track if SAT is finished

    // Callback function to handle registration and update user details
    const handleRegistrationComplete = (formData: React.SetStateAction<{ name: string; email: string; }>) => {
        setUserData(formData);
        setIsRegistered(true);
    };

    // Construct the Calendly URL with user details
    const calendlyUrl = `https://calendly.com/youngscholars/meeting`;

    // Handle SAT timer finish (triggered from CountdownTimer)
    const handleSatFinish = () => {
        setSatFinished(true);
    };

    return (
        <div>
            {isRegistered ? (
                <>
                    <CountdownTimer onFinish={handleSatFinish} />
                    {satFinished && (
                        <div className="App">
                            <InlineWidget url={calendlyUrl} />
                        </div>
                    )}
                    <FreeSat onFinish = {handleSatFinish}/>
                </>
            ) : (
                <>
                    <StudentRegistrationForm onRegister={handleRegistrationComplete} />
                </>
            )}
        </div>
    );
}

export default App;
