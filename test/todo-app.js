import { Selector } from 'testcafe';

fixture ( 'ToDo app tests' )
    .page ( 'test.andreahuncikova.com/todo' );

    test('Check if at least one todo item exists', async t => {
        const todoList = Selector('#todo-list');
    
        // Check if there is at least one todo item in the list
        const todoItemsCount = await todoList.child('li.todo-item').count;
    
        // Assert that the count of todo items is greater than 0
        await t.expect(todoItemsCount).gt(0, 'There are no todo items in the list');
    });