<script lang="ts">
	import Icon from '@iconify/svelte';
	import { NavBrand, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
	// import NavBar from './NavBar.svelte';
</script>

<Navbar
	class="w-screen px-24 bg-white sm:px-24 py-13 sm:py-13 h-50 lg:h-74 lg:px-36 lg:py-21"
	fluid
>
	<NavBrand href="/">
		<Icon icon="material-symbols:10k" />
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/docs/components/navbar">Navbar</NavLi>
		<NavLi href="/pricing">Pricing</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>
