<script lang="ts">
    import { serviceBody } from '$lib/stores';
</script>

{#if $serviceBody}
    <div class="block">
        Selected Service Body: {$serviceBody.name}
    </div>
{/if}
