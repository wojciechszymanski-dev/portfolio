import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
	return (
		<nav className='flex justify-between items-center py-4 px-8 bg-gray-800 text-white fixed w-full z-10'>
			<div className='text-2xl font-bold'>Wojciech Szymański</div>
			<div className='space-x-4'>
				<Link
					to='home'
					smooth={true}
					duration={500}
					className='hover:text-yellow-500 cursor-pointer'
				>
					Home
				</Link>
				<Link
					to='skills'
					smooth={true}
					duration={500}
					className='hover:text-yellow-500 cursor-pointer'
				>
					Skills
				</Link>
				<Link
					to='portfolio'
					smooth={true}
					duration={500}
					className='hover:text-yellow-500 cursor-pointer'
				>
					Portfolio
				</Link>
				<Link
					to='experience'
					smooth={true}
					duration={500}
					className='hover:text-yellow-500 cursor-pointer'
				>
					Experience
				</Link>
				<Link
					to='education'
					smooth={true}
					duration={500}
					className='hover:text-yellow-500 cursor-pointer'
				>
					Education
				</Link>
				<Link
					to='contact'
					smooth={true}
					duration={500}
					className='hover:text-yellow-500 cursor-pointer'
				>
					Contact
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
