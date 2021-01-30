import React from 'react'

function IRBTitle(props) {
    // const {title}
    return (
        <div className='irb-title'>
            <p>{props.text}</p>
        </div>
    )
};

function IRBSubTitle(props) {
    return (
        <div className='irb-subtitle'>
            <p>{props.text}</p>
        </div>
    )
};

function IRBContent(props) {
    return (
        <div className='irb-content'>
            <p>{props.text}</p>
        </div>
    )
};

export {IRBTitle, IRBSubTitle, IRBContent};