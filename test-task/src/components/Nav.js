import React from 'react';
import { Link } from 'react-router-dom';

const scrollDown = (e) => {
    const text = e.currentTarget.innerHTML.toLowerCase();
    console.log(text)

    function currentYPosition() {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset) return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop) return document.body.scrollTop;
        return 0;
    }
    
    
    function elmYPosition(eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        } return y;
    }
    
    
    function smoothScroll(eID) {
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = 15;
        var step = Math.round(distance / 95);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed   );
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
    }

    smoothScroll(text);
}

const Nav = () => {
                return (
                     <div className="navigation">
                         <div className="navigation__wrap">
                            <Link to="/about" >About me</Link>
                            <Link to="#" onClick={scrollDown} >Contacts</Link>
                            <Link to="#" onClick={scrollDown}>FAQ</Link>
                            <Link to="#" >Services</Link>
                            <Link to="#" >Blog</Link>
                            <Link to="/authorization">Authorization</Link>
                         </div>
                     </div>
                    );
}

export default Nav;


