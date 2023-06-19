import React, { useState } from 'react'
import Project from './Project';
import classes from './Projects.module.css';
import hhimg from '../../../img/HealthyHearTechs.png';
import focimg from '../../../img/fitocracy.png'
import gdimg from '../../../img/GoingDutch1.png'

const pjs = [
    {
        id: 'hh', img: hhimg,
        description: 'This medicine website serves as a one-stop platform for allopathic and ayurvedic information. Users access detailed insights on medicines, book appointments with doctors, and make informed healthcare decisions. With a user-friendly interface and intuitive search, it offers a vast database. The platform prioritizes privacy and security. By bridging the gap between allopathic and ayurvedic approaches, it provides unbiased information for holistic healthcare. Empowering users to make informed choices and connect with healthcare professionals, it enhances overall well-being.',
        repo: 'https://github.com/AnmolVerma404/Healthy-HearTechs'
    },
    {
        id: 'foc', img: focimg,
        description: "This full-stack fitness website offers personalized workout and diet plans based on user preferences and their current well-being. It utilizes integrated AI functionality to provide precise and customized diet plans tailored to each user's specific needs. The website includes a BMI calculator and stores user details in a MongoDB database.",
        repo: 'https://github.com/Shaurya1102/fit-o-cracy'
    },
    {
        id: 'gd', img: gdimg,
        description: 'Going Dutch is a bill splitting app simplifies expense division for groups, using an on-device database for secure storage. It offers features like customizable rules, automatic calculations, and real-time notifications. With a user-friendly interface, it ensures fairness, accuracy, and transparency in splitting bills, making it an ideal solution for hassle-free group expense management.',
        repo: 'https://github.com/radheshyambsoni/GoingDutch'
    }
];

const Projects = () => {
    const [selectedPj, setSelectedPj] = useState(pjs[0]);
    const [selected, setSelected] = useState('hh');

    const onHHClicked = () => {
        setSelectedPj(pjs[0]);
        setSelected('hh');
    }

    const onFOCClicked = () => {
        setSelectedPj(pjs[1]);
        setSelected('foc');
    }

    const onGDClicked = () => {
        setSelectedPj(pjs[2]);
        setSelected('gd');
    }

    return <>
        <div className={classes["projects-list"]}>
            <ul>
                <li className={selected === 'hh' ? classes.selected : ""} onClick={onHHClicked}>💊Healthy-HearTechs</li>
                <li className={selected === 'foc' ? classes.selected : ("")} onClick={onFOCClicked}>🏋️Fit-O-Cracy</li>
                <li className={selected === 'gd' ? classes.selected : ("")} onClick={onGDClicked}>📱Going Dutch</li>
            </ul>
        </div>
        <Project repo={selectedPj.repo} img={selectedPj.img} description={selectedPj.description} />
    </>
}

export default Projects;