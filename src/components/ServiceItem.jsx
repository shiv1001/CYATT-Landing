import React from 'react';

function ServiceItem({ title, icon, description }) {
	return (
		<div className="bg-neutral-300 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 hover:-translate-y-2 transform transition rounded-md p-5">
			<div className="text-gray-800 dark:text-gray-300 w-6 h-6 mb-3">
				{icon}
			</div>
			<h1 className="font-semibold text-lg text-gray-600 dark:text-gray-200 mb-1">
				{title}
			</h1>
			<p className="text-md text-gray-600 dark:text-gray-300">{description}</p>
			<button type="button" class=" inline-block px-6 py-2.5 my-4 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out">Know More</button>
		</div>
		
	);
}

export default ServiceItem;
