import React from 'react';

function Hero() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt='HeroImg'className='mb-5'/>
                <h1 className='mt-5'>HAR CHEEZ MEIN INVEST KARO!!</h1>
                <p>Online platform to invest in stocks, mutual funds, amd more</p>
                <button className="p-3 btn btn-primary fs-5 mb-5" style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
            </div>

        </div>
    )
}

export default Hero;