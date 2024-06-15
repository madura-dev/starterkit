import './bootstrap';
import '../css/app.css';

import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/react';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import Authenticated from "@/layouts/authenticated";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
	title: (title) => `${title} - ${appName}`,
	resolve: name => {
		const pages = import.meta.glob('./pages/**/*.tsx', {eager: true})
		let page: any = pages[`./pages/${name}.tsx`]
		page.default.layout = page.default.layout || ((page: any) => <Authenticated children={page} />)
		return page
	},
	setup({el, App, props}) {
		const root = createRoot(el);

		root.render(<App {...props} />);
	},
	progress: {
		delay: 250,
		color: '#4B5563',
		includeCSS: true,
		showSpinner: false,
	},
});
