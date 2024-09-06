import React from 'react';
import {Head} from '@inertiajs/react';
import GuestLayout from "@/layouts/guest";

const WelcomePage = ({}) => {
	return (
		<div className={'h-screen flex flex-col justify-start items-center'}>
			<Head title={'Welcome Page'} />
			<div className="container max-w-screen-lg h-full flex flex-col justify-center items-start">
				<h1 className={'text-4xl font-bold'}>Halo, Bro!</h1>
				<h1 className={'text-6xl font-extrabold inline-block text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 via-pink-400 to-indigo-700'}>Bikin Product Lebih Cepat</h1>
				<p>Starter project Laravel 11 ❤ React ini sudah include beberapa component dan package diataranya: </p>
				<ul className={'mt-4 list-disc ms-5'}>
					<li>
						<a href="https://github.com/barryvdh/laravel-debugbar"><span className={'font-semibold text-primary'}>Laravel Debugbar</span> (Lakukan debugging lebih mudah)</a>
					</li>
					<li>
						<a href="https://github.com/beyondcode/laravel-query-detector"><span className={'font-semibold text-primary'}>N+1 Query Detector</span> (Bersihkan Query N+1 degan mudah)</a>
					</li>
					<li>
						<a href="https://github.com/shadcn-ui/ui"><span className={'font-semibold text-primary'}>ShadcnUI</span> (Buat tampilan web lebih cepat)</a>
					</li>
					<li>
						<a href="https://github.com/tanstack/table"> <span className={'font-semibold text-primary'}>Tanstack Table</span> (Bikin simpel membuat datatable)</a>
					</li>
				</ul>
				<p className={'mt-5'}>Jangan lupa ya kasih star ⭐ nya kalau suka dengan <a className={'font-semibold'} href="https://github.com/abdasis/linertya">Laravel Starterkit</a> ini</p>
			</div>
		</div>
	);
};
WelcomePage.layout = (page: React.ReactNode) => <GuestLayout children={page} />;
export default WelcomePage;
