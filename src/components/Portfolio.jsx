import React from 'react';

const projects = [
	{
		image: 'path/to/image1.jpg',
		name: 'Project 1',
		description: 'Description of project 1',
	},
	{
		image: 'path/to/image2.jpg',
		name: 'Project 2',
		description: 'Description of project 2',
	},
	{
		image: 'path/to/image3.jpg',
		name: 'Project 3',
		description: 'Description of project 3',
	},
];

const Portfolio = () => {
	return (
		<div className='container mx-auto p-4'>
			<h2 className='text-4xl mb-4 text-white'>Portfolio</h2>
			<div className='grid grid-cols-3 gap-4'>
				{projects.map((project) => (
					<div
						key={project.name}
						className='bg-gray-700 text-white p-4 rounded-lg'
					>
						<img
							src={project.image}
							alt={project.name}
							className='mb-2 rounded-lg'
						/>
						<h3 className='text-2xl'>{project.name}</h3>
						<p>{project.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
