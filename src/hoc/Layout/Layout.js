import React from 'react';
// CSS
import classes from './Layout.module.css';
// JSX
import HeaderProvider from './Header/Header';
import Navbar from '../../containers/Navbar/Navbar';
import Footer from '../../components/UI/Footer/Footer';

const layout = (props) => {
	return (
		<HeaderProvider>
			{/* AuthModal */}
			<Navbar />
			<main className={classes.Layout}>
				{props.children}
			</main>
			<Footer />
		</HeaderProvider>	
	);
}

export default layout;
