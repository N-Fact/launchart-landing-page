import React, { useState } from "react";
import Step1 from "./app01";
import Step2 from "./app02";
import Step3 from "./app03";
import Submit from "./appsubmit";
import styles from './appform.module.css'

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        street: "",
        city: "",
        postcode: "",
        comments: "",
    });
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const next = () => {
        setCurrentStep(currentStep + 1);
    };
    const back = () => {
        setCurrentStep(currentStep - 1);
    };
    switch (currentStep) {
        case 1:
            return (
                <Step1
                    data={formData}
                    handleChange={handleChange}
                    next={next}
                />
            );
        case 2:
            return (
                <Step2
                    data={formData}
                    handleChange={handleChange}
                    next={next}
                    back={back}
                />
            );
        case 3:
            return (
                <Step3
                    data={formData}
                    handleChange={handleChange}
                    next={next}
                    back={back}
                />
            );
        default:
            return <Submit data={formData} back={back} />;
    }
};
export default MultiStepForm;