import {ref, onMounted, onUnmounted, computed} from 'vue'
import {filter} from "../util/todoString";

export default function useFilter(todoRef) {
    const state = ref('all')
    const stateList = ['all', 'active', 'completed']
    const onHashChange = () => {
        const hash = location.hash.replace(/#\/?/, '')
        if (stateList.includes(hash)) {
            state.value = hash
        } else {
            state.value = 'all'
            location.hash = ''
        }
    }
    onMounted(() => {
        window.addEventListener('hashchange', onHashChange)
    })
    onUnmounted(() => {
        window.removeEventListener('hashchange', onHashChange)
    })
    const todoComputed = computed(() => {
        return filter(todoRef.value, state.value)
    })
    const activeListLenght = computed(() => {
        return filter(todoRef.value,'active').length
    })
    const computedLengthRef = computed(() => {
        return filter(todoRef.value,'completed').length
    })
    return {
        state,
        todoComputed,
        activeListLenght,
        computedLengthRef
    }
}