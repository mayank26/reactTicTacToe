import React from 'react'
import {FaTimes, FaRegCircle, FaPen} from 'react-icons/fa'

const Icon = ({ name }) => {
    return (
        <div>
            <FaTimes className="icon"></FaTimes>
            <FaRegCircle className="icon"></FaRegCircle>
            <FaPen className="icon"></FaPen>
        </div>
    )
}

export default Icon
