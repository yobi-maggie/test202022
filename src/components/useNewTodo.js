import {ref} from 'vue'
import {generateId} from '../util/todoString'

export default function useNewTodo(todoRef) {
    const newTodoRef = ref('')
    const  addTodo = () => {
        const value = newTodoRef.value.trim()
        const list = {
            value,
            id:generateId(),
            completed:false
        }
        todoRef.value.push(list)
        // console.log(list)
        newTodoRef.value = ''
    }
    return {
        newTodoRef,
        addTodo
    }
}