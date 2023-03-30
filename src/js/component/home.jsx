import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle




//create your first component
const Home = () => {
	return (
			<>

			<NavBar/>
			<div className="container">
			<Jumbotron/>
			<div className="container-fluid d-flex">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
		
			</div>
			<Footer/>
			</>
		
	);
};

export default Home;
