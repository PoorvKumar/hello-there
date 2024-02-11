<script lang="ts">
    import { browser } from '$app/environment';
    import { applyAction, enhance } from '$app/forms';
    import { page } from '$app/stores';

    // Function to copy URL to clipboard
    const copyToClipboard = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        }).catch((error) => {
            console.error('Error copying link to clipboard: ', error);
        });
    };

    // Function to handle sending greeting
    const sendGreeting = () => {
        const personName = prompt('Enter the person\'s name:');
        if (personName) {
            const url = `/${encodeURIComponent(personName)}`;
            window.location.href = url;
        }
    };

    // Dynamic tag based on page URL
    $: logoTag = $page.url.pathname === '/' ? 'h1' : 'div';

    import YouTubeIcon from '$lib/icons/youtube.svg';
</script>

<header class="relative z-10 bg-surface-2">
    <div class="container flex items-center justify-between px-2 py-4">
        <svelte:element this={logoTag}>
            <a href="/" class="text-2xl no-underline" aria-label="Hello there">👋 Hello there!</a>
        </svelte:element>
        <nav class="flex items-center gap-4">
            <!-- Button to copy link -->
            <button on:click={copyToClipboard}>🔗 Copy Link</button>
            <!-- Button to send greeting -->
            <button on:click={sendGreeting}>Send Greeting</button>
            <a href="/about">About</a>
            <a href="https://poorvkumar.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="My Portfolio">My Portfolio</a>
        </nav>
    </div>
</header>
