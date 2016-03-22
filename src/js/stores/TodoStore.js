import {EventEmitter} from "events";

import dispatcher from "../dispatcher";

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

    handleActions(action) {
        console.log("TodoStore received an action", action);
        switch (action.type) {
            case "CREATE_TODO":
            {
                this.createTodo(action.text);
            }
        }
    }

    getAll() {
        return this.todos;
    }
}

const todoStore = new TodoStore;

dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;