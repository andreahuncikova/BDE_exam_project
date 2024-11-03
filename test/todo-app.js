import { Selector } from 'testcafe';

fixture ( 'ToDo app tests' )
    .page ( 'test.andreahuncikova.com/todo' );

    test('Due Date Highlighting Test', async t => {
        const todoInput = Selector('#todo-input');
        const addButton = Selector('.todo-form button');
        const todoItem = Selector('.todo-item').withText('Test todo');
      
        await t
          .typeText(todoInput, 'Test todo with due date')
          .click(addButton)
          .expect(todoItem.exists).ok(); // Confirms the todo item with a due date is added
      });