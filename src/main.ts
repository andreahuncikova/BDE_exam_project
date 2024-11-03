// Import the CSS file
import './style.css';

// Define the Todo interface
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  dueDate?: string;
}

// Initialize an empty array to store todos
export let todos: Todo[] = [];

// Get references to the HTML elements
const todoInput = document.getElementById('todo-input') as HTMLInputElement;
const dueDateInput = document.getElementById('due-date') as HTMLInputElement;
const todoForm = document.querySelector('.todo-form') as HTMLFormElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;
const errorMessage = document.getElementById('error-message') as HTMLParagraphElement;
const clearCompletedButton = document.getElementById('clearCompletedBtn') as HTMLButtonElement;
const toggleAllButton = document.getElementById('toggleAllBtn') as HTMLButtonElement;

// Function to add a new todo
export const addTodo = (text: string, dueDate: string): void => {
  const newTodo: Todo = {
    id: Date.now(),
    text: text,
    completed: false,
    dueDate: dueDate,
  };
  todos.push(newTodo);
  console.log("Todo added: ", todos);
  renderTodos();
};

// Function to check if a due date is overdue
const isOverdue = (dueDate: string): boolean => {
  const now = new Date();
  const due = new Date(dueDate);
  return due < now;
};

// Function to render the list of todos
const renderTodos = (): void => {
  todoList.innerHTML = '';

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
      <input type="checkbox" class="toggleCompleteCheckbox" ${todo.completed ? 'checked' : ''}>
      <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
      <span class="due-date">${todo.dueDate ? `Due: ${todo.dueDate}` : ''}</span>
      <button class="removeBtn">Remove</button>
      <button class="editBtn">Edit</button>
    `;

    if (todo.dueDate && isOverdue(todo.dueDate)) {
      li.classList.add('overdue'); // Add a class for styling overdue items
  }

    addRemoveButtonListener(li, todo.id); 
    addEditButtonListener(li, todo.id); 
    addToggleCompleteButtonListener(li, todo.id); 
    todoList.appendChild(li); 
  });
};

// Initial render
renderTodos();

// Event listener for the form submission
todoForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const text = todoInput.value.trim();
  const dueDate = dueDateInput.value;
  if (text !== '') {
    todoInput.classList.remove('input-error');
    errorMessage.style.display = 'none';
    addTodo(text, dueDate);
    todoInput.value = '';
    dueDateInput.value = '';
  } else {
    todoInput.classList.add('input-error');
    errorMessage.style.display = 'block';
  }
});

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class
});

// Function to remove a todo by ID
export const removeTodo = (id: number): void => {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
};

// Function to toggle the completed status of a todo
const toggleTodoCompletion = (id: number): void => {
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    renderTodos();
  }
};

// Function to toggle the completion status of all todos
const toggleAllTodos = (): void => {
  const allCompleted = todos.every(todo => todo.completed);
  todos.forEach(todo => todo.completed = !allCompleted);
  renderTodos();
};

// Function to clear all completed todos
const clearCompletedTodos = (): void => {
  todos = todos.filter(todo => !todo.completed);
  renderTodos();
};

// Event listener for the remove button
const addRemoveButtonListener = (li: HTMLLIElement, id: number): void => {
  const removeButton = li.querySelector('.removeBtn');
  removeButton?.addEventListener('click', () => removeTodo(id));
};

// Event listener for the edit button
const addEditButtonListener = (li: HTMLLIElement, id: number): void => {
  const editButton = li.querySelector('.editBtn');
  editButton?.addEventListener('click', () => editTodo(id));
};

// Function to edit a todo
const editTodo = (id: number): void => {
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    const text = prompt('Edit todo', todo.text);
    if (text) {
      todo.text = text;
      renderTodos();
    }
  }
};

// Event listener for the toggle complete checkbox
const addToggleCompleteButtonListener = (li: HTMLLIElement, id: number): void => {
  const toggleCompleteCheckbox = li.querySelector('.toggleCompleteCheckbox') as HTMLInputElement;
  toggleCompleteCheckbox?.addEventListener('change', () => toggleTodoCompletion(id));
};

// Event listener for the clear completed button
if (clearCompletedButton) {
  clearCompletedButton.addEventListener('click', clearCompletedTodos);
} else {
  console.error('Clear completed button element not found');
}

// Event listener for the toggle all button
if (toggleAllButton) {
  toggleAllButton.addEventListener('click', toggleAllTodos);
} else {
  console.error('Toggle all button element not found');
}

// Function to change the background color of the page based on the color picker value
const changeBackgroundColor = (color: string): void => {
  document.body.style.backgroundColor = color;
};

// Function to initialize the color picker event listener
const initializeColorPicker = (): void => {
  const colorPicker = document.getElementById('colorPicker') as HTMLInputElement;
  if (colorPicker) {
    colorPicker.addEventListener('input', (event: Event) => {
      const target = event.target as HTMLInputElement;
      changeBackgroundColor(target.value);
    });
  } else {
    console.error('Color picker element not found');
  }
};

// Call the initializeColorPicker function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeColorPicker();
});


/** 
 * Kristian: 6th of September 2024, BDE
 * 
 * This is the list of optional features that can be added to the todo list application:
 * You must make at least one of these features to complete the project. The more the merrier.
 * In your submission video, please mention which feature you have implemented and demonstrate how it works. Go through the code and explain how you implemented the feature and how it works.
 * IF, you want to implement something not on list, you can do that as well.
*/


//Optional features list: 

// Option 1: Add a button to toggle the completed status of a todo item
// Function to toggle the completed status of a todo + 
// Add a button to toggle the completed status of a todo item


// Option 2: Add a button to clear all completed todos
// Add a button to clear all completed todos
// Function to clear all completed todos
// Add a button to toggle all todos








// Option 3: Add a button to toggle all todos
// Edit a todo item and update it
// Add an input field to edit a todo item
// Save the updated todo item
// Cancel the editing of a todo item
// Add a button to cancel the editing of a todo item



// Option 4: Add a button to filter todos by status
// Add a button to filter todos by status
// Function to filter todos by status

// Option 5: Add a button to sort todos by status
// Add a button to sort todos by status
// Function to sort todos by status

// Option 6: Due Date for Todos:
// Add a date input field to set a due date for each todo item.
// Display the due date next to each todo item.
// Highlight overdue todos.
// Priority Levels:

// Option 7: Add a dropdown to set the priority level (e.g., Low, Medium, High) for each todo item.
// Display the priority level next to each todo item.
// Sort todos by priority.
// Search Functionality:

// Option 8: Add a search input field to filter todos based on the search query.
// Display only the todos that match the search query.
// Category Tags:

// Option 9: Add a text input field to assign category tags to each todo item.
// Display the tags next to each todo item.
// Filter todos by category tags.
// Progress Indicator:

// Option 10: Add a progress bar to show the percentage of completed todos.
// Update the progress bar as todos are marked as completed or incomplete.
// Dark Mode Toggle:

// Option 11: Add a button to toggle between light and dark modes.
// Change the app's theme based on the selected mode.
// Export/Import Todos:

// Option 12: Add buttons to export the list of todos to a JSON file.
// Add functionality to import todos from a JSON file.
// Notifications:

// Option 13: Add notifications to remind users of due todos.
// Use the Notification API to show browser notifications.

// Option 14: Local Storage:
// Save the list of todos to local storage.
// Retrieve the todos from local storage on page load.
// Add a button to clear all todos from local storage.

// Option 15: JSDOC Comments:
// Add JSDoc comments to document the functions and interfaces in the code.
// Link : https://jsdoc.app/

// Optional 16: Handle Errors:
// Add error handling for user input validation. Show red text or border for invalid input.
// Display error messages for invalid input.
