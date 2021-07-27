import React from 'react'
import UseAnimations from 'react-useanimations';
import arrowDown from 'react-useanimations/lib/arrowDown'

const DropDownAnimation = () => {
    return (
        <div>
            <UseAnimations
                animation={arrowDown}
                size={64}
                strokeColor="black"
            />
        </div>
    )
}

export default DropDownAnimation
