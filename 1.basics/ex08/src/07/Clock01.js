import React from 'react'

const Clock01 = () => {

    const date = new Date();

    var h = date.getHours();
    var noonCheck = 'AM';

    if(h > 12) {
        noonCheck = 'PM';
    }

    const m = ('0' + date.getMinutes()).slice(-2);
    const s = ('0'+ date.getSeconds()).slice(-2);

    return (
        <div>{noonCheck} {h}:{m}:{('0'+ date.getSeconds()).slice(-2)} </div>
    )
} 

export default Clock01