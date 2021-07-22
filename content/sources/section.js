const resolve = ({id}) => `https://jsonplaceholder.typicode.com/todos/${id}`

export default  {
    resolve,
    params: [
        {
            name: "id",
            displayName: "Section ID",
            type: "text"
        }
    ]
}