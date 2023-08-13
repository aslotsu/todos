<script>
    import {fade} from "svelte/transition";
 </script>
<div in:fade={{delay:50}}  >
    <slot></slot>
</div>

<style>
    div {
        border: 3px solid black;
        padding: 30px;
        height: 100%;
        max-width: 1200px;
        min-width: 240px;
        width: 80vw;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
    }

    div:not(:has(div)) {
        border: 3px solid rgb(238, 232, 170);
        width: 40vw;
        margin-left: 30vw;
        padding: 10px;
    }


</style>