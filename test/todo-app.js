import { Selector } from 'testcafe';

fixture ( 'ToDo app tests' )
    .page ( 'test.andreahuncikova.com/todo' );

    test('Add Todo with Due Date', async t => {
        const todoInput = Selector('#todo-input');
        const dueDateInput = Selector('#due-date');
        const addButton = Selector('.todo-form button');
        const todoItem = Selector('.todo-item').withText('Test todo with due date');
      
        await t
            .typeText(todoInput, 'Test todo with due date') // Add the todo text
            .typeText(dueDateInput, '2024-12-01') // Set the due date
            .click(addButton) // Click the add button
            .expect(todoItem.exists).ok(); // Check if the todo item was added successfully
    });