<script>
    import { todoStore } from "./stores/stores.js";
    import { v4 as uuidv4 } from 'uuid';
    import Todo from "./components/Todo.svelte";
    import TodoList from "./components/TodoList.svelte";
    
    let task = ''


</script>
<span class="header">Todo App- Alfred Lotsu </span>
<div class="control">
    <div class="left">
        <label for="new-task">New Task</label>
        <input type="text" id="new-task" name="new-task" bind:value={task}>
        <button on:click={()=>todoStore.append({id: uuidv4().toString(),name: task})}>Append</button>

    </div>

    <div>
        <button on:click={()=>todoStore.empty()}>Empty</button>
    </div>
</div>
<TodoList>
    {#each $todoStore as todo (todo)}
        <!--    will find the recommended way-->

        <Todo {todo}/>
    {/each}
</TodoList>

<style>

    span.header {
        background-color: yellowgreen;
        background-image: linear-gradient(white, wheat);
        -webkit-background-clip: text;
        color: transparent;
        font-size: 2rem;
        /*margin: 0 auto;*/
         text-align: center;
        width: 40vw;
        margin-left: 30vw;
        display: inline-block;
        }

    label {
        margin-right: 30px;
        color: white;
    }
    label + input {
        margin-right: 20px;
    }

    .left {
        display: flex;
        align-items: center;
        margin-left: 30px;
    }
    .control {
        width: 50vw;
        border: 2px solid palegreen;
        border-radius: 15px;
        display: flex;
        /*margin-left: 20vw;*/
        justify-content: space-between;
        align-items: center;
        padding: 30px;
        margin: 5vh 25vw 5vh 25vw;
    }

    .control button {
        background-color: transparent;
        outline: none;
        color: white;
        font-size: 20px;
        margin-left: 10px;
        border: 1px solid palegreen;
        padding: 10px 40px;
    }
</style>

