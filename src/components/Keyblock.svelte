<script>
    import {fly} from "svelte/transition";

    let hits = 0
</script>

{#key hits}
    <div in:fly={{x: 300}}>
        Got hit {hits} {hits === 1 ? 'time' : 'times'}
    </div>
{/key}
<button on:click={()=>hits = hits + 1}>Hit 'em again</button>