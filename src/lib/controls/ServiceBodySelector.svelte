<script lang="ts">
    import { onMount } from 'svelte';
    import { serviceBodies, selectedServiceBody } from '$lib/stores';
    import { getSelectedServiceBodyID } from '$lib/localStorage';

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
            for (const sb of $serviceBodies) {
                $selectedServiceBody = sb;
                break;
            }
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
