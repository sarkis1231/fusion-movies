const Json = ({children}) => {

    return JSON.stringify(children, null,  4)

}

Json.contentType = 'application/json';

export default Json