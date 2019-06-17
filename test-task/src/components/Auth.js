import React, { Component } from 'react';

class Auth extends Component {

    state = {
        blur: ''
    }

    blurBg = () => {
        this.setState({blur: 'blur(12px)'})
    }

    blurBgOut = () => {
        this.setState({blur: ''})
    }


    render() {
        return (
             <section className="auth">
                 <div className="auth__bg" style={{'filter': this.state.blur}}></div>
                 <h1 className="auth__chapter">Authorization</h1>
                 <form className="auth__form">
                     <input placeholder="Your name" type="name" onFocus={this.blurBg} onBlur={this.blurBgOut} className="auth__form-name"/>
                     <input placeholder="Your email" type="email" onFocus={this.blurBg} onBlur={this.blurBgOut} className="auth__form-email"/>
                     <input placeholder="Your mobile number" type="phone" onFocus={this.blurBg} onBlur={this.blurBgOut} className="auth__form-tel"/>
                     <button className="auth__form-submit">SUBMIT</button>
                 </form>
             </section>
            );
        }
    }

export default Auth;
