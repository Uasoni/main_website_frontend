import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
    const slug = params.slug;

    // Check if the slug ends with /leaderboard
    if (slug.endsWith('/leaderboard') || slug.endsWith('/leaderboard/')) {
        const competitionPath = slug.replace(/\/leaderboard\/?$/, '');
        const response = await fetch(`/competitions/${competitionPath}/leaderboard.html`);
        if (response.ok) {
            const rawText = await response.text();
            const stripped = rawText.replace(/^---[\s\S]*?---\n*/, '');
            const titleMatch = rawText.match(/^---[\s\S]*?title:\s*"([^"]+)"[\s\S]*?---/);
            const title = titleMatch ? titleMatch[1] : competitionPath;
            return { slug, type: 'html', html: stripped, title };
        }
        return { slug, type: 'html', html: null, title: slug };
    }

    // Otherwise its the original markdown text
    const response = await fetch(`/competitions/${slug}/_index.md`);
    if (!response.ok) {
        return { slug, type: 'markdown', markdown: null, title: slug };
    }
    const rawText = await response.text();
    const stripped = rawText.replace(/^---[\s\S]*?---\n*/, '');
    const titleMatch = rawText.match(/^---[\s\S]*?title:\s*"([^"]+)"[\s\S]*?---/);
    const title = titleMatch ? titleMatch[1] : slug;

    return { slug, type: 'markdown', markdown: stripped, title };
};