# React Task Manager

A simple and elegant Task Manager application built with React. This project is a demonstration of core React concepts including state management with hooks, component-based architecture, and handling user interactions.

##  Features

  - **View Tasks**: See a list of all your tasks.
  - **Add Tasks**: Easily add new tasks to your list via an input form.
  - **Complete Tasks**: Mark tasks as completed with a simple checkbox. Completed tasks are visually distinguished.
  - **Delete Tasks**: Remove tasks you no longer need.
  - **Filter Tasks**: Filter your view to see **All**, **Active** (incomplete), or **Completed** tasks.
  - **Persistent State (Local)**: Your tasks are managed in the browser, no backend required.

##  Tech Stack

  - **React**: A JavaScript library for building user interfaces.
  - **React Hooks (`useState`)**: For managing component state in a functional and intuitive way.
  - **CSS3**: For modern styling and a clean, responsive layout.
  - **JavaScript (ES6+)**: For application logic.

## Project Structure

The project is organized into a clean, component-based structure to ensure scalability and maintainability.

```
/src
├── components/       # Reusable UI components
│   ├── AddTaskForm.js  # Form for adding new tasks
│   ├── Task.js         # Component for a single task item
│   ├── TaskList.js     # Renders the list of tasks
│   └── TaskManager.js  # Main component holding state and logic
│
├── App.css           # Global styles for the application
└── App.js            # Main application component
```

## 🛠Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/react-task-manager.git
    ```

2.  **Navigate to the project directory:**

    ```sh
    cd react-task-manager
    ```

3.  **Install NPM packages:**

    ```sh
    npm install
    ```

4.  **Run the application:**

    ```sh
    npm start
    ```

The application will open automatically in your default browser at `http://localhost:3000`.

## How It Works

The application's logic is centered in the `TaskManager.js` component.

  - **State Management**: The `useState` hook is used to manage the `tasks` array and the current `filter` status.
  - **Adding Tasks**: The `AddTaskForm` component captures user input and calls the `addTask` function passed down as a prop from `TaskManager`. A new task object is created with a unique `id` (using `Date.now()`), the provided `title`, and a `completed` status of `false`.
  - **Updating & Deleting**: Functions like `toggleTaskCompletion` and `deleteTask` are passed down through props to the `Task` component. They update the state by creating a new array with the modified data, triggering a re-render.
  - **Filtering**: The `filteredTasks` array is computed based on the current `filter` state. This derived state is then passed to the `TaskList` component, which only renders the tasks that match the filter criteria. This ensures the UI is always in sync with the application's state.

-----
