import React from "react";
import Options from "./Option";

// Define types for the props
interface QuestionProps {
    question: {
        id: number;
        question: string;
        options: string[];
    };
    selectedOption: string;
    onOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent) => void;
}

const Question: React.FC<QuestionProps> = ({ question, selectedOption, onOptionChange, onSubmit }) => {
    return (
        <div>
            <h3>Question {question.id}</h3>
            <h5 className="mt-2">{question.question}</h5>
            <form onSubmit={onSubmit} className="mt-2 mb-2">
                <Options
                    options={question.options}
                    selectedOption={selectedOption}
                    onOptionChange={onOptionChange}
                />
                <button type="submit" className="btn btn-primary mt-2">
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

export default Question;
