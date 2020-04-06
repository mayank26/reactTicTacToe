import React from 'react'
import {FaTimes, FaRegCircle, FaPen} from 'react-icons/fa'

const Icon = ({ name }) => {
        switch (name) {
            case 'circle':
                return <FaRegCircle className="icon"></FaRegCircle>
            case 'pen':
                return <FaPen className="icon"></FaPen>
            default:
                return <FaTimes className="icon"></FaTimes>
                
        }
}

export default Icon
