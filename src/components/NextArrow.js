import React from 'react';
import UseAnimations from 'react-useanimations';
import skipForward from 'react-useanimations/lib/skipForward'

const NextArrow = () => {
    return (
        <div>
            <UseAnimations
                animation={skipForward}
                size={50}
                wrapperStyle={{ marginTop: '5px' , marginLeft : '5px' }}
                strokeColor="black"
            />
        </div>
    )
}

export default NextArrow





