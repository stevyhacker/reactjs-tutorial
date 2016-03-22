import {EventEmitter} from "events";

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 112454355,
                text: "Go Shopping",
                complete: false
            },
            {
                id: 212454355,
                text: "Pay Bills",
                complete: false
            },
            {
                id: 332454355,
                text: "Walk a dog",
                complete: true
            },
            {
                id: 42454355,
                text: "Go to school",
                complete: false

            }
        ]
    }

    createTodo(text) {
        const id = Date.now();

        this.todos.push({
            id,
            text,
            complete: false
        });

        this.emit("change");
    }


    getAll() {
        return this.todos;
    }
}

const todoStore = new TodoStore;
window.todoStore = todoStore;
export default todoStore;