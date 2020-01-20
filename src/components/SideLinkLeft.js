import React from 'react'
import {Link} from 'gatsby'
export default props => {

    return (
        <div style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            background: '#ffaadd',
            color: 'white',
            fontSize: '32pt',
            justifyText: 'bottom',
        }}>
            {props.children}
        </div>
    )
}