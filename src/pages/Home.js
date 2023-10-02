import React from 'react';
import Logo from '../components/Logo.js';
import Navigation from '../components/Navigation';
import Countries from '../components/Countries';

const Home = () => {
	return (
		<div>
			<Logo />
			<Navigation />
			<Countries />
		</div>
	);
};

export default Home;