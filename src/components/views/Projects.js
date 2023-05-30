import React, { useState } from 'react'
import './Projects.css';
import hhimg from '../../img/HealthyHearTechs.png'
import focimg from '../../img/fitocracy.png'
import gdimg from '../../img/GoingDutch1.png'

const heatlhyHeartechs = <div className='project-info'>
    <div className="project-img">
        <img src={hhimg} alt="" />
    </div>
    <div className="project-description">
        This website serves as a comprehensive source for information on medicine in both allopathic and ayurvedic fields. Users can gain insights on various medicines and book appointments with nearby doctors. It provides a one-stop solution for all medicine-related needs.
    </div>
</div>

const goingDutch = <div className='project-info'>
    <div className="project-img">
        <img src={gdimg} alt="" />
    </div>
    <div className="project-description">
        A bill split application which can split bills and tasks easily while going out with family and friends.
    </div>
</div>

const fitOCracy = <div className='project-info'>
    <div className="project-img">
        <img src={focimg} alt="" />
    </div>
    <div className="project-description">
        FIT-O-CRACY is a website that promotes fitness as a lifestyle and is available at no cost. It offers tailored diet suggestions, nutrient requirements, and workout plans that are adaptable to the user's needs.
    </div>
</div>

const Projects = () => {
    const [pj, setPj] = useState(heatlhyHeartechs);

    const onHHClicked = () => {
        setPj(heatlhyHeartechs);
    }

    const onGDClicked = () => {
        setPj(goingDutch);
    }

    const onFOCClicked = () => {
        setPj(fitOCracy);
    }

    return <div className='projects'>
        <div className="projects-list">
            <ul>
                <li onClick={onHHClicked}>💊Healthy-HearTechs</li>
                <li onClick={onGDClicked}>📱Going Dutch</li>
                <li onClick={onFOCClicked}>🏋️Fit-O-Cracy</li>
            </ul>
        </div>
        <div className="divider"></div>
        {pj}
    </div>
}

export default Projects;