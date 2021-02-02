import {ref,computed} from 'vue'
import {deleteTodo} from "../util/todoString";

export  default function todoEdit(todoRef) {
    const iseditRef = ref(null)
    let editValue = null
    const editInfo = (todo) => {
        iseditRef.value = todo
        editValue = todo.value
    }
    const editEnt = (todo) => {
        const val = todo.value.trim()
        if (val){
            todo.title = val
        }else {
            deleteTodo(todoRef.value,todo)
        }
        iseditRef.value = null
    }
    const editEsc = (todo) => {
        iseditRef.value = null
        todo.value = editValue
    }
    const editComputed = computed({
        get(){
            return todoRef.value.filter( it => !it.completed).length === 0
        },
        set(is){
            todoRef.value.forEach(it => {
                it.completed = is
            })
        }
    })
    return{
        iseditRef,
        editInfo,
        editEnt,
        editEsc,
        editComputed
    }
}