import React from 'react';
import UseAnimations from 'react-useanimations';
import activity from 'react-useanimations/lib/activity'
// EVERY ANIMATION NEEDS TO BE IMPORTED FIRST -> YOUR BUNDLE WILL INCLUDE ONLY WHAT IT NEEDS


const LetsGoAnnimation = () =>
<div>
<UseAnimations
 animation={activity} 
 size = {44}
 strokeColor = "black"
 />
</div>
export default LetsGoAnnimation;


