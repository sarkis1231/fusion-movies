const resolve = (query) => {
    const requestUri = 'https://jsonplaceholder.typicode.com/todos'

    if (query.hasOwnProperty('todoId')) return `${requestUri}/${query.todoId}`

    throw new Error('todo source need Id');
}

export default {
    resolve,
    params: {
        todoId: '1',
    }
}