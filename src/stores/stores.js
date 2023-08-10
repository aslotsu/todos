import {writable} from "svelte/store";
import {v4 as uuidv4} from "uuid"
const store = () => {
    let id = uuidv4()


    const {subscribe, update, set} = writable([{id: '',name: ''}])
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
            console.log(newTodo.id)
        },
        /**
         * Assign the project to a list of employees.
         * @param {Object} unwanted - The employees who are responsible for the project.
         * @param {string} unwanted.id - The name of an employee.
         * @param {string} unwanted.name - The employee's department.
         */
        remove: (unwanted)=> {
            update(value => [...value, unwanted])
        },
        empty: ()=> {
            set([])
        },

    }
}

export const todoStore = store()