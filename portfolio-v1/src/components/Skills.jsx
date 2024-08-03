import React from 'react';
import { FaReact, FaJs, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiCsharp, SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
	{ icon: <FaReact />, name: 'ReactJS' },
	{ icon: <FaJs />, name: 'JavaScript' },
	{ icon: <FaCss3Alt />, name: 'CSS' },
	{ icon: <SiTailwindcss />, name: 'TailwindCSS' },
	{ icon: <SiMysql />, name: 'SQL' },
	{ icon: <SiCsharp />, name: 'C#' },
	{ icon: <FaGithub />, name: 'GitHub' },
];

const Skills = () => {
	return (
		<div className='container mx-auto p-4'>
			<h2 className='text-4xl mb-8 text-white text-center'>My Skills</h2>
			<div className='grid grid-cols-3 gap-4'>
				{skills.map((skill) => (
					<motion.div
						key={skill.name}
						className='bg-gray-700 text-white p-4 rounded-lg flex flex-col items-center'
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<div className='text-4xl mb-2'>{skill.icon}</div>
						<p>{skill.name}</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Skills;
