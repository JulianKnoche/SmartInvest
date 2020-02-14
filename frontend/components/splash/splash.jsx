import React from 'react';
import {Link} from 'react-router-dom';

const Splash = (props) => {
    return (
    <div>
        <div className="splash-body">
            <div className="left">

            <h1>It’s Time to Do Money</h1>
            <p>Robinhood, a pioneer of commission-free investing, gives you more ways to make your money work harder.</p>
            </div>
            {/* <img class="css-1eazbjj" src="https://cdn.robinhood.com/assets/robinhood/brand_2/cbac2a50904278e795e198ae0b42d7ab-1x.png" srcset="https://cdn.robinhood.com/assets/robinhood/brand_2/cbac2a50904278e795e198ae0b42d7ab-1x.png, https://cdn.robinhood.com/assets/robinhood/brand_2/eb957cff14daa387fe187e56084fc894-2x.png 2x, https://cdn.robinhood.com/assets/robinhood/brand_2/e8fdee266978c1b5406c331cb7aa1a3a-3x.png 3x" role="presentation" draggable="false"></img> */}
            <Link className="black-sign-up-button" to="/signup">Sign Up</Link>
        </div>
        <div className="splash-video">
        {/* <iframe src="https://giphy.com/embed/NM4nFbVBIgn5e" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
        {/* <iframe src="https://giphy.com/embed/12Eo7WogCAoj84" width="480" z-index="-1" height="361" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
            {/* <iframe width="560" height="315"
            src="https://www.youtube.com/embed/GnJCOof2HJk"
            // frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            // allowfullscreen
            >
            </iframe> */}
        </div>
    </div>
    )
}

export default Splash;