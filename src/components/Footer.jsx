import React from 'react';

const Footer = () => {
	return (
		<footer className='bg-gray-800 text-white py-4 px-8 absolute text-center left-0 top-100 w-full'>
			<p className='text-sm'>
				© {new Date().getFullYear()} Wojciech Szymański. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
