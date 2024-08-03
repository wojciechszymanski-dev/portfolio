import React from 'react';

const Contact = () => {
	return (
		<div className='container mx-auto p-4'>
			<h2 className='text-4xl mb-4 text-white'>Contact Me</h2>
			<form className='bg-gray-700 p-4 rounded-lg text-white'>
				<div className='mb-4'>
					<label className='block mb-2'>Name</label>
					<input
						type='text'
						className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-500'
					/>
				</div>
				<div className='mb-4'>
					<label className='block mb-2'>Email</label>
					<input
						type='email'
						className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-500'
					/>
				</div>
				<div className='mb-4'>
					<label className='block mb-2'>Message</label>
					<textarea className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-500'></textarea>
				</div>
				<button
					type='submit'
					className='bg-yellow-500 text-gray-900 px-4 py-2 rounded'
				>
					Send
				</button>
			</form>
		</div>
	);
};

export default Contact;
