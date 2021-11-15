<script lang="ts">
    import { onMount } from 'svelte';
    import { serviceBody } from '$lib/stores';
    import { getServiceBodyID } from '$lib/localStorage';
    import type { ServiceBody } from '$lib/ServiceBody';

    export let serviceBodies: ServiceBody[];

    onMount(() => {
        const serviceBodyID = getServiceBodyID();
        if (serviceBodyID) {
            for (const sb of serviceBodies) {
                $serviceBody = sb;
                break;
            }
        }
    });
</script>

<div class="field is-horizontal">
    <div class="field-body">
        <div class="field">
            <div class="control is-expanded">
                <div class="select is-fullwidth">
                    <select bind:value={$serviceBody}>
                        <option value={null} disabled selected>Select a Region</option>
                        {#each serviceBodies as serviceBody}
                            <option value={serviceBody}>{serviceBody.name}</option>
                        {/each}
                    </select>
                </div>
            </div>
        </div>
    </div>
</div>
