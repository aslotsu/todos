<script>
import {todoStore} from "../stores/stores.js";

/**
 * @param {string} todo
 */
export let todo
</script>


<div class="item" data-key={todo.id} role="button" tabindex="-3"   on:click={(event)=> console.log("swallow", event.target.dataset.key)}>

    <span class="word">{todo.name}</span>
    <button on:click|stopPropagation={(event)=>{
                todoStore.remove(event.target.parentNode.dataset.key)
                console.log('hair',event.target.parentNode.dataset.key)}
                }>Remove</button>

</div>
<style>
    .item {
        border: 3px solid white;
        padding: 0 40px;
        display: flex;
        width: 400px;
        height: 10vh;
        align-items: center;
        margin-bottom: 3vh;
    }
    button {
        outline: none;
        padding: 3px;
        border: 4px solid #ecc;
        border-radius: 6px;
        background-color: transparent;
        color: white;
        margin-left: 5vw;
    }

    .word {
        color: white;
    }
</style>