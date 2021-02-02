<template>
    <div id="app">
        <section class="todoapp">
            <header class="header">
                <h1>todos</h1>
                <input
                        class="new-todo"
                        autofocus=""
                        autocomplete="off"
                        placeholder="What needs to be done?"
                        v-model="newTodoRef"
                        @keyup.enter="addTodo"
                />
            </header>
            <section  class="main" v-show="todoComputed.length >= 1">
                <input id="toggle-all" class="toggle-all" type="checkbox" v-model="editComputed"/>
                <label for="toggle-all">Mark all as complete</label>
                <ul class="todo-list">
                    <li class="todo" v-for="item in todoComputed" :key="item.id"
                        :class="{completed: item.completed,editing:item === iseditRef}">
                        <div class="view">
                            <input class="toggle" type="checkbox" v-model="item.completed"/>
                            <label @dblclick="editInfo(item)">{{item.value}}</label>
                            <button class="destroy" @click="remove(item)"></button>
                        </div>
                        <input class="edit" type="text" v-model="item.value" @keyup.enter="editEnt(item)"
                               @blur="editEnt(item)"
                               @keyup.escape="editEsc(item)"/>
                    </li>
                </ul>
            </section>
            <footer class="footer" v-show="todoComputed.length >= 1">
      <span class="todo-count">
        <strong>{{activeListLenght}}</strong>
        <span>item{{activeListLenght <=1 ? '' : 's'}} left</span>
      </span>
                <ul class="filters">
                    <li><a href="#/all" :class="{selected:state === 'all'}">All</a></li>
                    <li><a href="#/active" :class="{selected:state === 'active'}">Active</a></li>
                    <li><a href="#/completed" :class="{selected:state === 'completed'}">Completed</a></li>
                </ul>
                <button class="clear-completed" style="display: none" v-show="computedLengthRef >= 1" @click="removeComputed">
                    Clear completed
                </button>
            </footer>
        </section>
    </div>
</template>

<script>
    import useTodoList from "./components/uesTodoList";
    import useNewTodo from "./components/useNewTodo";
    import useFilter from "./components/useFilter";
    import usrTodoEdit from "./components/usrTodoEdit";
    import useDeleteTodo from "./components/useDeleteTodo";

    export default {
        setup() {
            const {todoRef} = useTodoList()
            return {
                todoRef,
                ...useNewTodo(todoRef),
                ...useFilter(todoRef),
                ...usrTodoEdit(todoRef),
                ...useDeleteTodo(todoRef)
            }
        }
    }
</script>
