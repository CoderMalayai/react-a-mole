import { useEffect } from "react";
import MoleHill from '../assests/molehill.png'

const EmptySlot = (props) => {

    useEffect(() => {
        let seconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, seconds)
        return () => clearTimeout(timer)
    })

    return (
        <div className="empty-slot">
            <img src={MoleHill}/>
        </div>
    )
}

export default EmptySlot;