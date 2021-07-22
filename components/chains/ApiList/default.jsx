import React from 'react';
import PropTypes from "fusion:prop-types"

const ApiList = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

ApiList.propTypes = {
    children: PropTypes.any
}

export default ApiList;