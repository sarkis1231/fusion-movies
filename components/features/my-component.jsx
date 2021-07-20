import React from 'react'
import Consumer from 'fusion:consumer'

@Consumer
const MyComponent = (props) => {
    return <div>{props.siteProperties.value}</div>
}

export default Consumer