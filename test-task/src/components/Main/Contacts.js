import React, { Component } from 'react';

 const Contacts = () => {
     return(
        <div className="contacts" id="contacts">
            <div className="container">
                <h1 className="contacts__chapter">My Contacts</h1>
                <p className="contacts__vk">ВКонтакте: <a href="https://vk.com/genia1103" target="_blank" className="contacts__vk-link">https://vk.com/genia1103</a></p>
                <p className="contacts__telegram">Telegram: <a href="https://t.me/dsxxxx" target="_blank" className="contacts__telegram-link">https://t.me/dsxxxx</a></p>
                <p className="contacts__github">GitHub: <a href="https://github.com/qxie11" target="_blank" className="contacts__github-link">https://github.com/qxie11</a></p>
                <p className="contacts__linkedin">LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/%D0%B5%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BF%D0%BE%D0%BD%D0%BE%D0%BC%D0%B0%D1%80%D1%91%D0%B2-576054160/" className="contacts__github-link">LinkedIn</a></p>
                <p className="contacts__phone">Phone number: <a href="tel:+380669094518" target="_blank" className="contacts__phone-link">+380669094518</a></p>
            </div>
        </div>
     )
 }
export default Contacts;
