
<template>
	<article>
		<h2>{{ user.name.first }}</h2>
		<p>
			{{ user.email }}
		</p>
	</article>
</template>

<script>
export default {
	props: ["user"],
};
</script>