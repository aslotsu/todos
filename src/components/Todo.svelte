<script>
import {todoStore} from "../stores/stores.js";
import {fly} from "svelte/transition";
import {onMount} from "svelte";

/**
 * @param {string} todo
 */
export let todo
let item;

onMount(()=> {
    console.log('item',item)
})

import {setContext} from "svelte";
import {key} from "../../context/context.js";

setContext(key, "#23d997")
</script>


<button bind:this={item} out:fly={{y: -100, duration: 600}} in:fly={{x:-100}}  class="item" data-key={todo.id} tabindex="-3"  on:click={()=> console.log("swallow", item.dataset.key)}>

    <span class="word">{todo.name}</span>
    <button class="btn" on:click|stopPropagation={()=>{
                todoStore.remove(item.dataset.key)
                console.log('hair',item.dataset.key)}
                }/>
</button>
<style>
    .btn {
        background: url("../../public/btn.svg") no-repeat 50% 50%;
        border: 0;
        width: 150px;
        height: 50px;
        display: flex;
    }
    .item {
        border: 3px solid black;
        padding: 0 40px;
        display: flex;
        width: 300px;
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
        color: black;
        margin-left: 5vw;
    }

    .word {
        color: black;
        font-size: 20px;
    }
</style>