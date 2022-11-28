import React from 'react';
import "./footer.css";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer id="footer" className="bg-white">
            <div className="tcl-container">
                <div className="footer">
                    <div className="tcl-row">
                        <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
                            <div className="footer-logo">
                                <img src="assets/images/logo.png" alt="NuxtBlog Logo" />
                            </div>
                            <p>© 2020, All Rights Reserved.</p>
                            <p>Created by <Link to="/" target="_blank">ZendVN</Link></p>
                        </div>
                        <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-2">
                            <div className="footer-title">
                                <p>Categories</p>
                            </div>
                            <ul className="footer-content__list">
                                <li><Link to="/">ReactJs</Link></li>
                                <li><Link to="/">Javascript</Link></li>
                                <li><Link to="/">Angular</Link></li>
                                <li><Link to="/">HTML, HTML5</Link></li>
                            </ul>
                        </div>
                        <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
                            <div className="footer-title">
                                <p>Liên hệ</p>
                            </div>
                            <ul className="footer-content__list">
                                <li>Số 01, Khối A1, Toà nhà Đạt Gia, 43 Đường Cây Keo, Tam Phú, Thủ Đức, Hồ Chí Minh</li>
                                <li>0383 308 983</li>
                            </ul>
                        </div>
                        <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-4">
                            <div className="footer-title">
                                <p>Fanpage</p>
                            </div>
                            <div className="footer-facebook">
                                <div className="fb-page" data-to="https://zendvn.com/" data-tabs data-width data-height data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                                    <blockquote cite="https://zendvn.com/" className="fb-xfbml-parse-ignore">
                                        <Link to="https://zendvn.com/">Học Lập Trình Web Thông Qua
                                            Projects Thực Tế</Link>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
