import React from 'react';
import UseAnimations from 'react-useanimations';
import skipBack from 'react-useanimations/lib/skipBack'

const PreviousArrow = () => {
    return (
        <div>
            <UseAnimations
                animation={skipBack}
                size={38}
                wrapperStyle={{ marginTop: '10px' , marginLeft : '10px' }}
                strokeColor="black"
            />
        </div>
    )
}

export default PreviousArrow

