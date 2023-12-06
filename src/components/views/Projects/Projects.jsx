import React, { useContext, useState } from "react";
import ThemeContext from "../../../context/theme-context";
import Project from "./Project";
import classes from "./Projects.module.css";
import hhimg from "../../../assets/img/HealthyHearTechs.png";
import focimg from "../../../assets/img/fitocracy.png";
import rmimg from "../../../assets/img/ReactMeals.png";

const pjs = [
	{
		id: "hh",
		img: hhimg,
		description:
			"This medicine website serves as a one-stop platform for allopathic and ayurvedic information. Users access detailed insights on medicines, book appointments with doctors, and make informed healthcare decisions. With a user-friendly interface and intuitive search, it offers a vast database. The platform prioritizes privacy and security. By bridging the gap between allopathic and ayurvedic approaches, it provides unbiased information for holistic healthcare. Empowering users to make informed choices and connect with healthcare professionals, it enhances overall well-being.",
		repo: "https://github.com/AnmolVerma404/Healthy-HearTechs",
	},
	{
		id: "foc",
		img: focimg,
		description:
			"This full-stack fitness website offers personalized workout and diet plans based on user preferences and their current well-being. It utilizes integrated AI functionality to provide precise and customized diet plans tailored to each user's specific needs. The website includes a BMI calculator and stores user details in a MongoDB database.",
		repo: "https://github.com/Shaurya1102/fit-o-cracy",
	},
	{
		id: "rm",
		img: rmimg,
		description:
			"Explore React Meals, an intuitive food ordering platform built with React. Effortlessly add meals to your cart and witness dynamic functionalities in action. This project serves as a practical showcase of React concepts, demonstrating seamless user interactions and cart management.",
		repo: "https://github.com/radheshyambsoni/food-order-app",
	},
];

const Projects = () => {
	const ctx = useContext(ThemeContext);
	const [selected, setSelected] = useState(1);

	const onHHClicked = () => {
		setSelected(1);
	};

	const onFOCClicked = () => {
		setSelected(2);
	};

	const onRMClicked = () => {
		setSelected(3);
	};

	return (
		<>
			<div className={classes["projects-list"]}>
				<ul>
					<li
						className={`
                        ${classes["list-items"]}
                        ${ctx.theme ? classes["list-items-dark"] : ""}
                        ${
													selected === 1
														? ctx.theme
															? classes["selected-dark"]
															: classes.selected
														: ""
												}
                    `}
						onClick={onHHClicked}
					>
						💊Healthy-HearTechs
					</li>
					<li
						className={`
                        ${classes["list-items"]}
                        ${ctx.theme ? classes["list-items-dark"] : ""}
                        ${
													selected === 2
														? ctx.theme
															? classes["selected-dark"]
															: classes.selected
														: ""
												}
                    `}
						onClick={onFOCClicked}
					>
						🏋️Fit-O-Cracy
					</li>
					<li
						className={`
                        ${classes["list-items"]}
                        ${ctx.theme ? classes["list-items-dark"] : ""}
                        ${
													selected === 3
														? ctx.theme
															? classes["selected-dark"]
															: classes.selected
														: ""
												}
                    `}
						onClick={onRMClicked}
					>
						🍕React Meals
					</li>
				</ul>
			</div>
			<Project pj={pjs[selected - 1]} />
		</>
	);
};

export default Projects;
