import React, { useState, useEffect } from 'react';



interface CountdownTimerProps {

    onFinish: () => void;

}



const CountdownTimer: React.FC<CountdownTimerProps> = ({ onFinish }) => {

    const [timeLeft, setTimeLeft] = useState(30); // 1 hour in seconds



    useEffect(() => {

        const timer = setInterval(() => {

            setTimeLeft((prevTime) => {

                if (prevTime <= 1) {

                    clearInterval(timer);

                    onFinish();

                    return 0;

                }

                return prevTime - 1;

            });

        }, 1000);



        return () => clearInterval(timer);

    }, [onFinish]);



    return (

        <div>

            <h1>Time Left: {timeLeft} seconds</h1>

        </div>

    );

};



export default CountdownTimer;
