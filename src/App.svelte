<script>
    import { todoStore } from "./stores/stores.js";
    import { v4 as uuidv4 } from 'uuid';


</script>
<h2>Second Attempt at Todo Store</h2>

{#each $todoStore as todo (todo)}
<!--    will find the recommended way-->
    <h3 data-key={todo.id} on:keydown={()=> {}} on:click={(event)=> console.log("swallow", event.target.dataset.key)}>{todo.name}</h3>
{/each}

<button on:click={()=>todoStore.append({id: uuidv4().toString(),name: 'jorge'})}>Append</button>
<button on:click={()=>todoStore.remove({id: uuidv4().toString(), name: 'gaga'})}>Remove</button>
<button on:click={()=>todoStore.empty()}>Empty</button>