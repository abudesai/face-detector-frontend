
import React from 'react';
import Tilt from 'react-tilt'
//import ai_logo from './artificial-intelligence.png'
import brain_logo from './Brain and Head free icon.png'
import './Logo.css'

const Logo = () => {
	return (
		<div className = 'ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner"> 
					<img src={brain_logo} alt = 'logo' style={{paddingTop: '10px'}}/>
				</div>
			</Tilt>
		</div>
	);
};

export default Logo;