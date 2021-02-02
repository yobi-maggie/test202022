import {ref,watchEffect} from 'vue'
import * as todoString from '../util/todoString'
export default function useTodoList() {
    const todoRef = ref(todoString.fetch())
    watchEffect(()=>{
        todoString.save(todoRef.value)
    })
    return {
        todoRef
    }
}