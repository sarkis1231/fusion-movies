const resolve = ({website, id}) => `/site/v3/website/${website}/section?_id=${id}`

export default  {
    resolve,
    params: [
        {
            name:"website",
            displayName: "Website",
            type: "text"
        },
        {
            name: "id",
            displayName: "Section ID",
            type: "text"
        }
    ]
}