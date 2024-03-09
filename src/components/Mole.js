import React, {useEffect} from 'react'
import MoleImg from '../assests/mole.png'

function Mole(props) {
    useEffect(() => {
        let seconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, seconds)
        return () => clearTimeout(timer)
    })

    return (
        <div className="mole-main">
            <img src={MoleImg} alt="mole" onClick={props.handleClick} draggable={false}/>
        </div>
    )
}

export default Mole;