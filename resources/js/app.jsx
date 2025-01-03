import './bootstrap';
import '../css/app.css';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

import Layout from '@/Layouts/Layout';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })

        let page = pages[`./Pages/${name}.jsx`]

        // if page has layout use that one if not use default layout
        page.default.layout = page.default.layout || ((page) => <Layout children={page} />)

        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
    progress: {
        color: '#ff0000',
        showSpinner: true
    }
})
