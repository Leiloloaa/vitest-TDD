import { describe, it, beforeEach, expect } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useListStore } from '../index';


describe('test todoList', () => {
    beforeEach(() => {
        // 先要引入 pinia
        setActivePinia(createPinia())
    })

    let id = 0

    it('test add item', () => {
        const list = useListStore()

        list.list.push({
            todo: 'heihei',
            id: id++
        })

        expect(list.list[1].todo).toBe('heihei')
    });

    it('test reverse item', () => {
        const list = useListStore()

        let todo = 'reverse:heihei'

        list.handleTodo(todo)

        expect(list.list[1].todo).toBe('iehieh')
    });


    it('test top item', () => {
        const list = useListStore()

        let todo = 'top:top'

        list.handleTodo(todo)

        expect(list.list[0].todo).toBe('top')
    });

    it('test delete item', () => {
        const list = useListStore()

        let delTodooId = 0

        list.delTodo(delTodooId)

        expect(list.list.length).toBe(0)
    });
})