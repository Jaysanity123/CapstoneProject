import React from 'react'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-4 text-center item-center bg-yellow-500' : 'hidden'}
        onClick={toggle}>
                <a href="#" class="p-4">Home</a>
                <a href="#" class="p-4">Discover</a>
                <a href="#" class="p-4">Find a Doctor</a>
                <a href="#" class="p-4">Contact Us</a>
                
        </div>
    )
}

export default Dropdown
