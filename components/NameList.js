import React from 'react'
import Person from './Person'

function NameList(){

    const names = ['a','b','c','d','a']

    const person =[
        {
            id: 1,
            name: "Arc",
            age: 26
        },
        {
            id: 2,
            name: "kaka",
            age: 23
        }
    ]

const personlist = person.map(x => <Person key={x.id} p={x}></Person>) // Pass this to Person.js class as props

const nameList = names.map((x,y) => <h2 key={y}>{x}-{y}</h2>) // x is items and y is index = key

    return(
        <div>{nameList}</div>
    )
}

export default NameList

//<div>{ names.map(x => <h2>{x}</h2>)}</div>

/**<h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */