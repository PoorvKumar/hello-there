// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {

		}

		interface PageData {
			defaultMeta: {
				title: string
				description: string
				image: {
					url: string
					alt: string
				}
			}
		}
		// interface Platform {}
	}

	// declarations for
	// https://github.com/poppa/sveltekit-svg
	declare module '*.svg?component' {
		import type {ComponentType, SvelteComponentTyped} from 'svelte'
		import type {SVGAttributes} from 'svelte/elements'

		const content: ComponentType<
			SvelteComponentTyped<SVGAttributes<SVGSVGElement>>
		>

		export default content
	}

	declare module '*.svg?src' {
		const content: string
		export default content
	}

	declare module '*.svg?url' {
		const content: string
		export default content
	}

	declare module '*.svg?dataurl' {
		const content: string
		export default content
	}
}

export {}