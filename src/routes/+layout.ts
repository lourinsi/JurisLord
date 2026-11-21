import { dev } from '$app/env';
import { injectAnalytics } from '@vercel/analytics/sveltekit';

injectAnalytics({ mode: dev ? 'development' : 'production' });

// Everything lives in the browser (localStorage), so ship a pure SPA.
export const ssr = false;
export const prerender = false;
