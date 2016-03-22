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

    getAll() {
        return this.todos;
    }
}

const todoStore = new TodoStore;

export default todoStore;