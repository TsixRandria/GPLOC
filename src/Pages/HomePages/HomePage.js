import React from 'react';



import Slider from './Components/Slider/Slider';
import Search from './Components/Search/Search';
import World from './Components/World/World';

import Welcome from './Components/Welcome/Welcome';
import Home from './Components/HomeReviews/Home';
import Asks from './Components/Asks/Asks';

class HomePage extends React.Component {
	render() {
		return (
			<>
				<Slider />
		        <Search />
		        <World />
		        <Welcome />
		        <Home />
		        <Asks />
			</>
		)
	}
}


export default HomePage;