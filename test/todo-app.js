import { Selector } from 'testcafe';

fixture ( 'ToDo app tests' )
    .page ( 'test.andreahuncikova.com/todo' );

    test('User can add a new todo item', async t => {
        // Selectors for elements on the page
        const todoInput = Selector('#todo-input');
        const todoForm = Selector('.todo-form');
        const todoList = Selector('#todo-list');
        const todoItem = todoList.find('.todo-item'); // Selects a new todo item in the list
    
        // Type a new todo item and submit the form
        await t
            .typeText(todoInput, 'My new todo item')
            .pressKey('enter'); // Or .click(todoForm) if form submission requires a click
    
        // Check if the todo item was added to the list
        await t.expect(todoItem.withText('My new todo item').exists).ok();
    });