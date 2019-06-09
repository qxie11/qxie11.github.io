import React, { Component } from 'react';
import Typed  from 'typed.js';
import  header__github  from '../../images/header__github.png';
import  header__telegram  from '../../images/header__telegram.png';
import  header__vk  from '../../images/header__vk.png';

class Header extends Component {

    componentDidMount = () => {
        let typed = new Typed('#typed',{
            strings: ["HTML", "CSS", "Javascript", "React JS", "Redux", "ES6", "SASS", "Rest API", "Bootstrap"],
            backSpeed: 80,
            typeSpeed: 80,
            loop: true,
            loopCount: 111
          });
    }

    render() {
        return (
                <div className="home-header" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 ml-md-auto mr-md-auto">
                                <h1 className="home-header__chapter1">done by</h1>
                                <h1 className="home-header__chapter2">Ponomarev Evgeniy</h1>
                            </div>
                        </div>
                        <span id="typed"></span>
                        <div className="row">
                            <div className="col-md-3 ml-md-auto mr-md-auto">
                                <div className="home-header__refs">
                                    <a href="https://vk.com/genia1103" className="home-header__refs-link"><img src={header__vk} alt=""/></a>
                                    <a href="https://t.me/dsxxxx" className="home-header__refs-link"><img src={header__telegram} alt=""/></a>
                                    <a href="https://github.com/qxie11" className="home-header__refs-link"><img src={header__github} alt=""/></a>
                                </div>
                            </div>
                        </div>

                        <div className="home-header__mouse">
                            <div className="home-header__mouse-wheel">
                                <span className="home-header__mouse-wheelchild"></span>
                                <span className="home-header__mouse-arrow"></span>
                                <span className="home-header__mouse-arrow"></span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
export default Header;
