<script lang="ts">
    import Meetings from '$lib/controls/Events.svelte';
    import ServiceBodySelector from '$lib/controls/ServiceBodySelector.svelte';
    import { ServiceBody } from '$lib/ServiceBody';

    // TODO: This list should be generated with data from somewhere... should also be put in a store
    // since it is shared between meetings and events pages
    const serviceBodies = [new ServiceBody(1, 'Carolina Region'), new ServiceBody(2, 'New England Region')];
</script>

<div class="block">
    <div class="block">
        <ServiceBodySelector {serviceBodies} />
    </div>
    <h4 class="title is-4">Events</h4>
    <Meetings />
</div>
