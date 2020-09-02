import React from 'react'
import PropTypes from 'prop-types'

const TemplateItem = ({ template }) => {
    return (
        <li>
            {template.content}
        </li>
    )
} 
TemplateItem.propTypes = {
    template:PropTypes.object.isRequired
} 
export default TemplateItem
