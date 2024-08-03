import React from 'react';

const education = [
	{
		school: 'ZSE Opole (Web & App Development)',
		duration: '2021 - 2026',
		description:
			'Pursuing a technician degree in Web and App Development, focusing on modern technologies. Gaining hands-on experience with development tools, programming languages, and industry best practices.',
	},
];

const Education = () => {
	return (
		<div className='container mx-auto p-4'>
			<h2 className='text-4xl mb-4 text-white'>Education</h2>
			{education.map((edu) => (
				<div
					key={edu.school}
					className='mb-4 bg-gray-700 p-4 rounded-lg text-white'
				>
					<h3 className='text-2xl'>{edu.school}</h3>
					<span className='block mb-2'>{edu.duration}</span>
					<p>{edu.description}</p>
				</div>
			))}
		</div>
	);
};

export default Education;
