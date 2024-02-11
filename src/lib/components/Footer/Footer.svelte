<script lang="ts">
	import YouTubeIcon from '$lib/icons/youtube.svg?component'
	import GitHubIcon from './github.svg?component'
	import DiscordIcon from './discord.svg?component'
	import PulsingHeart from './PulsingHeart.svelte'
</script>

<footer class="flex items-center justify-center gap-2 py-2">
	<div class="flex shrink-0 items-center justify-center gap-2">
		Made with
		<PulsingHeart />
		by <a href="https://poorvkumar.vercel.app">Poorv Kumar</a>
	</div>

	<a
		href="https://www.linkedin.com/in/PoorvKumar"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="YouTube"
		class="hover:text-emphasis-hover"
	>
		<!-- <YouTubeIcon title="YouTube channel" class="w-5" /> -->
		<span>🔗 Linkedin</span>
	</a>
	<a
		href="https://github.com/PoorvKumar/hello-there"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="checkout the source code at the github repo"
		class="hover:text-emphasis-hover"
	>
		<!-- <GitHubIcon class="w-5" /> -->
		<span>👨‍💻 Github</span>
	</a>
	<a
		href="https://instagram.com/poorv1"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="Join Discord community!"
		class="hover:text-emphasis-hover"
	>
		<!-- <DiscordIcon class="w-5" /> -->
		<span>🌍 Social</span>
	</a>
</footer>