import React from 'react';

function Footer() {
	return (
		<div className="py-5 bg-neutral-500 dark:bg-neutral-800 text-center text-gray-300 rounded-t-lg">
			<a href="#hero" className="block text-xl md:text-2xl font-semibold">
				CYATT
			</a>
			<a
				href="mailto:webcifar@gmail.com"
				className="text-sm md:text-md hover:text-orange-500"
			>
				team@cyatt.com
			</a>
			<p className="text-xs mt-2 text-gray-800 dark:text-gray-400">
				© CYATT Techno Pvt. Ltd. {new Date().getFullYear()}. All rights reserved
			</p>
		</div>
	);
}

export default Footer;
