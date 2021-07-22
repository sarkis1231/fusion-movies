import React from 'react';
import PropTypes from "fusion:prop-types"

const Api = ({children}) => {
    return (
        <>
            {children}
        </>
    );
};

Api.sections = [
    'body'
]

Api.propTypes = {
    children: PropTypes.array
}

export default Api;