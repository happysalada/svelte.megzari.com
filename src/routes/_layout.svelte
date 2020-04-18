<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>
<style>
	.grid {
		display: grid;
		grid-template-rows: 10vh minmax(80vh, auto) 10vh;
		grid-template-areas: 
			"nav"
			"main"
			"footer";
	}

	.nav {
		grid-area: nav;
	}

	.main {
		grid-area: main;
	}

	.footer {
		grid-area: footer;
	}
</style>

<div class="grid">
	<div class="nav">
    <Nav {segment}/>
  </div>

	<div class="main">
		<main class="h-full">
		  <slot></slot>
    </main>
  </div>

	<div class="footer">
		<Footer />
  </div>
</div>