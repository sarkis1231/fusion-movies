const Api = ({children}) => {
    // only return the data from the first child
    return Array.isArray(children) ? children[0] : null
}

Api.sections = [
    'body'
]

export default Api;