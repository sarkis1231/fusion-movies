import React from 'react';
import PropTypes from 'fusion:prop-types'

const SideBar = (props) => {

    const {customFields,  children} = props
    const { hasBorder , heading } = customFields
    let className = 'col-xs-12 col-md-4'
    className = hasBorder ? `${className} border-left` : className
    console.log( props)
    console.log(className, heading)
    return (
        <section className={className}>
            {heading && <h3>{heading}</h3>}
            <div>
                {children}
            </div>
        </section>
    );
};

SideBar.propTypes = {
    customFields: PropTypes.shape({
        heading: PropTypes.string.tag({
            name: "heading",
            defaultValue: ""
        }),
        hasBorder:  PropTypes.bool.tag({
            name: "has-border",
            defaultValue: false
        }),
    })
}

export default SideBar;