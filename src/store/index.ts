import { defineStore } from 'pinia';

let id = 1

export const useListStore = defineStore('list', {
    state: () => {
        return {
            list: [{ todo: 'item1', id: 0 }] as todoList[],
            todo: '' as string
        }
    },
    actions: {
        addTodo(todo: string) {
            this.list.push({
                todo,
                id: id++
            })
        },
        addTodoTop(todo: string) {
            this.list.unshift({
                todo,
                id: id++
            })
        },
        delTodo(id: number) {
            this.list = this.list.filter((e) => {
                return e.id != id
            })
        },
        handleTodo(todo: string) {
            if (todo.startsWith('top')) {
                this.todo = todo.slice(4)
                this.addTodoTop(this.todo)
            } else {
                if (todo.startsWith('reverse')) {
                    this.todo = todo.slice(8).split('').reverse().join('')
                }
                this.addTodo(this.todo)
            }

            this.todo = ''
        }
    }
})

interface todoList {
    todo: string,
    id: number
}