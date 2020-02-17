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
    </div>
    )
}

export default Splash;