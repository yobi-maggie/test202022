import {deleteTodo} from '../util/todoString'

export default function usedeleteTodo(todoRef) {
    const remove = (todo) => {
        deleteTodo(todoRef.value, todo)
    }
    const removeComputed = () => {
        todoRef.value = todoRef.value.filter(it => !it.completed)
    }
    return {
        remove,
        removeComputed
    }
}