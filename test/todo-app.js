import { Selector } from 'testcafe';

fixture ( 'ToDo app tests' )
    .page ( 'test.andreahuncikova.com/todo' );

    test('Test case 1', async t => {
        await t
            .click(Selector('#myButton'))
            .expect(Selector('#myElement').exists).ok();
    });