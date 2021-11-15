<script lang="ts">
    import { selectedServiceBody } from '$lib/stores';
</script>

{#if $selectedServiceBody}
    <div class="block">
        Selected Service Body: {$selectedServiceBody.name}
    </div>
{/if}
