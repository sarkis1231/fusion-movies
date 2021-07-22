const Json = ({children}) => {
    console.log("output Type JSON: " + children)
    // return Array.isArray(children) ? children[0] : null;
    return JSON.stringify(children, null,  4)
}

Json.contentType = 'application/json';

export default Json