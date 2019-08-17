import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <h2 className="footer-title">Lorem ipsum dolor sit.</h2>
                                <h4 className="footer-phone">+991234567654</h4>
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="/">Facebook</a></li>
                                        <li><a href="/">Youtube</a></li>
                                        <li><a href="/">Twitter</a></li>
                                        <li><a href="/">Linkdin</a></li>
                                    </ul>
                                </div>
                                <div className="copyright-text">&copy; 2019 | FreePhotos</div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Footer