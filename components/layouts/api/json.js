const Api = (props) => {
    console.log("Header", props.children[0])
    console.log("body ", props.children[1])
    // only return the data from the first child

    return {
        header: props.children[0],
        body: props.children[1]
    }
}

Api.sections = [
    'header',
    'body',
]

export default Api;