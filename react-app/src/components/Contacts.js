import React from "react";
import "../components/Contacts.css";
import "../components/Media.css";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <div className="Contact">
            <section>
                <div class="container border_sec">
                    <div class="row">
                        <div class="col-md-4 contacts_text">
                            <h2>Контакти</h2>
                            <p>Україна, 79060, м.Львів, вул.І.Пулюя, 42</p>
                            <p>Тел. (032) 263-62-61, (032) 234-26-08</p>
                            <p>E-mail: ldkhp@ukr.net</p>
                            <a href="http://lfkhp.com.ua/"></a>
                        </div>
                        <div class="col-md-8 contacts_map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20608.497348811758!2d24.006242319604503!3d49.78489581688578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb98db7a96b9ec12!2z0JvQlNCa0KXQn9Cf!5e0!3m2!1suk!2sua!4v1612696394973!5m2!1suk!2sua" width="100%" height="450"
                                frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}