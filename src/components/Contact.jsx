import React from 'react'

function Contact(){
    return(
        <div className='contacts'>
            <h1>OUR CONTACT DETAILS</h1>
                <span class="fa-stack fa-lg">
                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                    <i class="fa fa-whatsapp fa-stack-1x"></i>
                </span>
                Whatsapp<br />
                <br />
                <span class="fa-stack fa-lg">
                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                    <i class="fa fa-instagram fa-stack-1x"></i>
                </span>
                Instagram<br />
                <br />
                <span class="fa-stack fa-lg">
                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                    <i class="fa fa-twitter fa-stack-1x"></i>
                </span>
                Twitter<br />
                <br />
                <span class="fa-stack fa-lg">
                    <i class="fa fa-circle-thin fa-stack-2x"></i>
                    <i class="fa fa-envelope fa-stack-1x"></i>
                </span>
                Email<br />
        </div>
        
    )
}
export default Contact