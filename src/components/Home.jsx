import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
	return (
		<div className='bg-gray-900 text-white '>
			<Element
				name='home'
				className='flex flex-col items-center justify-center py-12 min-h-[60vh]'
			>
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className='text-center'
				>
					<h2 className='text-xl mb-2'>
						<ReactTypingEffect
							text={['Frontend Developer', 'Copywriter', 'UI/UX Designer']}
							speed={100}
							eraseSpeed={100}
							typingDelay={1000}
							eraseDelay={1000}
							cursorRenderer={(cursor) => <span>{cursor}</span>}
							displayTextRenderer={(text) => {
								return <span>{text}</span>;
							}}
						/>
					</h2>
					<h1 className='text-4xl font-bold mb-2'>Wojciech Szymański</h1>
					<p className='text-lg max-w-md mx-auto'>
						Ambitious developer eager to grow and learn. Currently immersed in
						learning web and app development. I&apos;m an AI-Engeneer and I see the bright
                        future for our nerdy field. Feel free to reach out!
					</p>
				</motion.div>
			</Element>
			<Element name='skills' className='container mx-auto py-12'>
				<Skills />
			</Element>
			<Element name='portfolio' className='container mx-auto py-12'>
				<Portfolio />
			</Element>
			<Element name='experience' className='container mx-auto py-12'>
				<Experience />
			</Element>
			<Element name='education' className='container mx-auto py-12'>
				<Education />
			</Element>
			<Element name='contact' className='container mx-auto py-12'>
				<Contact />
			</Element>
			<Element name='footer'>
				<Footer />
			</Element>
		</div>
	);
};

export default Home;
