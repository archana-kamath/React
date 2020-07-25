import React from 'react'

function Person({p}){
    return(
        <div>
            <h2>{p.name} is {p.age} years old</h2>
        </div>
    )
}

export default Person