import { Selector } from 'testcafe';

fixture ( 'ToDo app tests' )
    .page ( 'test.andreahuncikova.com/todo' );

    // Test to add a new todo with due date
    test('Add Todo with Due Date', async t => {
        // Arrange
        const todoInput = Selector('#todo-input');
        const dueDateInput = Selector('#due-date');
        const addButton = Selector('.todo-form button');
        const todoItem = Selector('.todo-item').withText('Test todo with due date');
      
        // Act
        await t
            .typeText(todoInput, 'Test todo with due date') 
            .typeText(dueDateInput, '2024-12-01') 
            .click(addButton) 

        // Assert
            .expect(todoItem.exists).ok(); 
    });

    // Test to toggle dark mode
    test('Toggle Dark Mode', async t => {
        // Arrange
        const darkModeToggle = Selector('#darkModeToggle');
        const body = Selector('body');

        // Act and Assert
        await t
            .click(darkModeToggle) 
            .expect(body.hasClass('dark-mode')).ok('Dark mode should be enabled')

            .click(darkModeToggle) 
            .expect(body.hasClass('dark-mode')).notOk('Dark mode should be disabled'); 
    });