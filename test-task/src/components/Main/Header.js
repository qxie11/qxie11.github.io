import React, { Component } from 'react';
import Typed  from 'typed.js';
import  header__github  from '../../images/header__github.png';
import  header__telegram  from '../../images/header__telegram.png';
import  header__vk  from '../../images/header__vk.png';

class Header extends Component {

    componentDidMount = () => {
        let typed = new Typed('#typed',{
            strings: ["Front-End", "HTML", "CSS", "Javascript", "React JS", "Redux", "ES6", "SASS", "Rest API", "Bootstrap"],
            backSpeed: 80,
            typeSpeed: 80,
            loop: true,
            loopCount: 111
          });
    }

    scrollDown = () => {
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

        smoothScroll('contacts');
    }

    render() {
        return (
                <section className="home-header" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 ml-md-auto mr-md-auto">
                                <h1 className="home-header__chapter1">created by</h1>
                                <h1 className="home-header__chapter2">Ponomarev Evgeniy</h1>
                            </div>
                        </div>
                        <span id="typed"></span>
                        <div className="row">
                            <div className="col-md-3 ml-md-auto mr-md-auto">
                                <div className="home-header__refs">
                                    <a href="https://vk.com/genia1103" target="_blank" className="home-header__refs-link"><img src={header__vk} alt=""/></a>
                                    <a href="https://t.me/dsxxxx" target="_blank" className="home-header__refs-link"><img src={header__telegram} alt=""/></a>
                                    <a href="https://github.com/qxie11" target="_blank" className="home-header__refs-link"><img src={header__github} alt=""/></a>
                                </div>
                            </div>
                        </div>

                        <div onClick={this.scrollDown} className="home-header__mouse">
                            <div className="home-header__mouse-wheel">
                                <span className="home-header__mouse-wheelchild"></span>
                                <span className="home-header__mouse-arrow"></span>
                                <span className="home-header__mouse-arrow"></span>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    }
export default Header;
