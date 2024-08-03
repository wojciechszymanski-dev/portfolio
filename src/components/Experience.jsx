import React from 'react';

const experiences = [
	{
		role: 'Copywriter',
		duration: 'Aug 2024 - Present',
		description:
			'Crafting clear and engaging technical content for technology products and services. Translating complex technical concepts into accessible language, while collaborating with development teams to ensure accuracy and relevance.',
	},
	{
		role: 'Headstarter AI SWE Engineering Fellow',
		duration: 'Jul 2024 - Present',
		description:
			'Engaging in advanced software engineering projects, contributing to innovative solutions and collaborating with industry professionals. Gaining hands-on experience with cutting-edge technologies and best practices in software development.',
	},
	{
		role: 'Frontend Developer',
		duration: 'Jan 2024 - Feb 2024',
		description:
			'Built a custom CMS plugin using React, improving content management and user experience. Enhanced SEO performance and optimized website speed. Fixed issues with a custom theme, ensuring consistent design and functionality.',
	},
	{
		role: 'Copywriter/Tester',
		duration: '2021 - 2023',
		description:
			'Created engaging content for various platforms and tested tech products for quality and usability. Ensured content accuracy and consistency while identifying and resolving issues to improve user experience.',
	},
];

const Experience = () => {
	return (
		<div className='container mx-auto p-4'>
			<h2 className='text-4xl mb-4 text-white'>Experience</h2>
			{experiences.map((exp) => (
				<div
					key={exp.role}
					className='mb-4 bg-gray-700 p-4 rounded-lg text-white'
				>
					<h3 className='text-2xl'>{exp.role}</h3>
					<span className='block mb-2'>{exp.duration}</span>
					<p>{exp.description}</p>
				</div>
			))}
		</div>
	);
};

export default Experience;
