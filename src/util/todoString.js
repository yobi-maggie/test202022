const LOCAL_KEY = "todomvc";

/**
 *
 * @returns {number}
 */
export function generateId() {
    return +new Date()
}

/**
 *
 * @returns {*[]|any}
 */
export function fetch() {
    const result = localStorage.getItem(LOCAL_KEY)
    if (result) {
        return JSON.parse(result)
    } else {
        return []
    }
}

/**
 *
 * @param item
 */
export function save(item) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(item))
}

/**
 *
 * @param todolist
 * @param visibility
 */
export function filter(todolist, state = 'all') {
    if (state === 'all') {
        return todolist
    } else if (state === 'active') {
        return todolist.filter(it => !it.completed)
    } else if (state === 'completed') {
        return todolist.filter(it => it.completed)
    }
}

/**
 *
 * @param todolist
 * @param todo
 */
export function deleteTodo(todolist,todo) {
    console.log(todolist,todo)
   return todolist.splice(todolist.indexOf(todo),1)
} 