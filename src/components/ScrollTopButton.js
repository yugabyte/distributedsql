import React from 'react'

const ScrollTopButton = (props) => {
    const handleScroll = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(handleScroll);
            window.scrollTo(0, c - c / 10);
        }
    }
    return (
        <div className="scroll-wrapper">
            <button id="scroll-top-btn" onClick={handleScroll}>
                <i className="fa fa-arrow-up"></i> BACK TO TOP
            </button>
        </div>
    )
}

export default ScrollTopButton