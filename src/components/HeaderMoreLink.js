import React from 'react'

const HeaderMoreLink = ({ href, className, h4, p }) => {
    return (
    <li>
        <a role="menuitem" href={href} className={className}>
            <h4>{h4}</h4>
            <p>{p}</p>
        </a>
    </li>
    )
}

export default HeaderMoreLink