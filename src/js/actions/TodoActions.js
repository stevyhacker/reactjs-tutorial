import dispatcher from "../dispatcher";

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        text
    });
}

export function reloadTodos() {

    dispatcher.dispatch({type: "FETCH_TODOS"});

    setTimeout(() => {
        dispatcher.dispatch({
            type: "RECEIVE_TODOS", todos: [
                {
                    id: 122454355,
                    text: "Go Running",
                    complete: false
                },
                {
                    id: 333245455,
                    text: "Street Workout",
                    complete: true
                },
                {
                    id: 52454355,
                    text: "Listen to good music",
                    complete: true

                }
            ]
        });

        if(false) {
            dispatcher.dispatch({type:"FETCH_TODOS_ERROR"})
        }


    }, 1000);

}