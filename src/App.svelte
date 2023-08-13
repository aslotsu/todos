<script>
    import { todoStore } from "./stores/stores.js";
    import { v4 as uuidv4 } from 'uuid';
    import Todo from "./components/Todo.svelte";
    import TodoList from "./components/TodoList.svelte";
    import {flip} from "svelte/animate";
    import {fade, fly} from "svelte/transition";
    import Keyblock from "./components/Keyblock.svelte";

    let task = ''

</script>



<span class="header">Todo App- Alfred Lotsu </span>
<div class="control">
    <div class="left">
        <label for="new-task">New Task</label>
        <input type="text" id="new-task" name="new-task" bind:value={task} placeholder="new">
        <button on:click={()=>{
        if (task){
            todoStore.append({id: uuidv4().toString(),name: task})}
    }}>Add New Todo </button>

    </div>

    <div>
        <button on:click={()=>todoStore.empty()}>Empty</button>
    </div>
</div>

<TodoList >
    {#each $todoStore as todo (todo)}
        <div in:fly={{duration: 400}}>
            <Todo  {todo}/>
        </div>
    {:else}
        <h3 in:fade={{delay: 400, duration: 400}}>No todos yet</h3>
    {/each}

</TodoList>

<Keyblock />

<style>

    .control input {
        outline: none;
        border: 2px solid black;
        background-color: transparent;
        padding: 7px;
        color: black;
    }
    .control input::placeholder {
        color: black;
    }

    span.header {
        background-color: black;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-size: 1.6rem;
        /*margin: 0 auto;*/
         text-align: center;
        width: 40vw;
        margin-left: 30vw;
        display: inline-block;
        }

    label {
        margin-right: 30px;
        color: black;
    }
    label + input {
        margin-right: 20px;
    }

    .left {
        /*border: 2px solid red;*/
        width: 70%;
        display: flex;
        /*justify-content: space-around;*/
        align-items: center;
        margin-left: 30px;
    }
    .control {
        width: 50vw;
        border: 5px solid black;
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
        color: black;
        font-size: 20px;
        margin-left: 10px;
        border: 1px solid black;
        padding: 10px 30px;
    }


    @media screen and (max-width: 1024px) {
        span.header {
            width: 60vw;
            margin-left: 20vw;

            /*color: black;*/
        }
    }
</style>


