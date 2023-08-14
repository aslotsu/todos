import {readable, writable} from "svelte/store";
const store = () => {

    const {subscribe, update, set} = writable([])
    return {
        subscribe,
        /**
         * Assign the project to a list of employees.
         * @param {Object} newTodo - The item to b added to the list.
         * @param {string} newTodo.id
         * @param {string} newTodo.name - The actual task to complete.
         */
        append: (newTodo) => {
            update(value => [...value, newTodo])
        },
        /**
         * Assign the project to a list of employees.
         * @param {string} unwanted - The id of the unwanted object.
         */
        remove: (unwanted)=> {
            console.log(unwanted)
            update(value => value.filter(item => item.id !== unwanted))
        },
        empty: ()=> {
            set([])
        },

    }
}
export const session = readable(0, (set)=> {
    let count = 0
    const interval = setInterval(()=> {
        count++
        set(count)
    }, 1000)
    return ()=> clearInterval(interval)
})

export const todoStore = store()