'use client'

import React, { useState } from 'react';

interface FreeSatProps {
    onFinish: () => void;
}
import { SATQuestionsData } from '@/lib/data';

const FreeSat: React.FC<FreeSatProps> = ({ onFinish }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(SATQuestionsData.length).fill(null)); // Store selected answers for each question
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleFinish = () => {
        onFinish(); // Trigger onFinish callback
    };

    // Function to move to the next question
    const nextQuestion = () => {
        if (currentQuestion < SATQuestionsData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setAnswered(false); // Reset answered flag for the next question
        } else {
            // Calculate score after the last question
            const totalScore = selectedAnswers.filter((answer, index) => SATQuestionsData[index].options[answer]?.isCorrect).length;
            setScore(totalScore);
            setShowScore(true); // Show final score

            // Call the onFinish callback after the last question is answered
            handleFinish();
        }
    };

    // Function to go to the previous question
    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setAnswered(false); // Reset answered flag when going back to a previous question
        }
    };

    const handleAnswer = (index, isCorrect) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[currentQuestion] = index; // Set the selected answer for this question
        setSelectedAnswers(newSelectedAnswers);

        setAnswered(true); // Mark the question as answered
    };

    // Function to handle quiz submission
    const handleSubmit = () => {
        // Calculate score after the last question
        const totalScore = selectedAnswers.filter((answer, index) => SATQuestionsData[index].options[answer]?.isCorrect).length;
        setScore(totalScore);
        setShowScore(true); // Show final score

        // Call the onFinish callback when submitting
        handleFinish();
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-full max-w-lg bg-white p-5 rounded shadow-lg'>
                <div className='p-2 border text-center font-bold mb-2 text-xl'>Quiz App</div>
                <div>
                    {!showScore ? (
                        <>
                            <div>{SATQuestionsData[currentQuestion].passage}</div>
                            <div>{SATQuestionsData[currentQuestion].question}</div>
                            {SATQuestionsData[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    className={`block w-full p-2 mt-2 rounded border ${
                                        selectedAnswers[currentQuestion] === index
                                            ? 'bg-blue-500'  // Apply blue background for selected answer
                                            : selectedAnswers[currentQuestion] !== null && selectedAnswers[currentQuestion] !== index
                                            ? 'bg-gray-300'  // Gray background for non-selected options once an option is chosen
                                            : ''
                                    }`}
                                    onClick={() => handleAnswer(index, option.isCorrect)} // Passing correct parameters
                                >
                                    {option.answerText}
                                </button>
                            ))}
                            <div className='flex space-x-2'>
                                <button
                                    className="bg-gray-300 block w-full text-white p-2 mt-4 rounded"
                                    disabled={currentQuestion === 0} // Disable prev button if it's the first question
                                    onClick={prevQuestion}
                                >
                                    Previous Question
                                </button>
                                {currentQuestion < SATQuestionsData.length - 1 ? (
                                    <button
                                        className={`${answered ? "bg-green-500" : "bg-green-300"} block w-full text-white p-2 mt-4 rounded`}
                                        disabled={!answered}
                                        onClick={nextQuestion}
                                    >
                                        Next Question
                                    </button>
                                ) : (
                                    <button
                                        className="bg-blue-500 block w-full text-white p-2 mt-4 rounded"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </button>
                                )}
                            </div>
                            <p className='text-center text-gray-400 text-sm mt-2'>
                                Question {currentQuestion + 1} of {SATQuestionsData.length}
                            </p>
                        </>
                    ) : (
                        <div className='text-center'>
                            <p className='text-xl'>Quiz Completed!</p>
                            <p className='text-lg'>Your final score is: {score} / {SATQuestionsData.length}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FreeSat;
