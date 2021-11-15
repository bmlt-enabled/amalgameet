<script lang="ts">
    import Meetings from '$lib/controls/Events.svelte';
    import ServiceBodySelector from '$lib/controls/ServiceBodySelector.svelte';
</script>

<div class="block">
    <div class="block">
        <ServiceBodySelector />
    </div>
    <h4 class="title is-4">Meetings</h4>
    <Meetings />
</div>
