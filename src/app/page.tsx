import React from 'react';
import { SATQuestionsData } from '@/lib/data';
import FreeSat from '@/components/FreeSat';
import StudentRegistrationForm from '@/components/form/StudentRegisterationForm';
import CountdownTimer from '@/components/SatTimer';

function App() {
    return (
        <div>
            <CountdownTimer />
            <StudentRegistrationForm />
            <FreeSat />
        </div>
    );
}

export default App;
