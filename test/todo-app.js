import { Selector } from 'testcafe';

fixture ( 'ToDo app tests' )
    .page ( 'test.andreahuncikova.com/todo' );

    test('Check if Clear Completed button exists', async t => {
        // Select the button by its ID
        const clearCompletedButton = Selector('#clearCompletedBtn');
    
        // Assert that the button exists
        await t.expect(clearCompletedButton.exists).ok('The Clear Completed button does not exist');
    });