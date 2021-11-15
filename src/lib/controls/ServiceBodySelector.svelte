<script lang="ts">
    import { onMount } from 'svelte';
    import { serviceBodies, selectedServiceBody } from '$lib/stores';
    import { getSelectedServiceBodyID } from '$lib/localStorage';
    import type { ServiceBody } from '$lib/ServiceBody';

    $: {
        if ($serviceBodies) {
            setSelectedServiceBody();
        }
    }

    onMount(() => {
        // TODO: put a fetch here to select the service bodies remotely
        serviceBodies.initialize();
    });

    function setSelectedServiceBody() {
        const serviceBodyID = getSelectedServiceBodyID();
        if (serviceBodyID) {
            let foundServiceBody: ServiceBody;
            for (const sb of $serviceBodies) {
                if (sb.id === serviceBodyID) {
                    foundServiceBody = sb;
                    break;
                }
            }
            $selectedServiceBody = foundServiceBody || null;
        }
    }
</script>

<div class="field is-horizontal">
    <div class="field-body">
        <div class="field">
            <div class="control is-expanded">
                <div class="select is-fullwidth">
                    <select bind:value={$selectedServiceBody}>
                        <option value={null} disabled selected>Select a Region</option>
                        {#if $serviceBodies}
                            {#each $serviceBodies as serviceBody}
                                <option value={serviceBody}>{serviceBody.name}</option>
                            {/each}
                        {/if}
                    </select>
                </div>
            </div>
        </div>
    </div>
</div>
