import React from 'react'
import {Link} from 'gatsby'
export default props => {
    return (
        <div style={{
            position: 'absolute',
            right: '10px',
            top: '10px',
            background: '#ffaadd',
            color: 'white',
            fontSize: '32pt'
        }}>
            {props.children}
        </div>
    )
}