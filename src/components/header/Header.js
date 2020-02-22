import React, {Component} from "react";
import css from './Header.module.css';
import Social from "../social/Social";


class Header extends Component {
    onScroll = (event) => {
        let scrollTop = event.current;
        console.log(123);
    };

    render() {
        return (
            <header>
                <nav onScroll={this.onScroll}
                     className={`navbar navbar-expand-md navbar-dark fixed-top ${css.bgOpacity}`}>
                    <a className={`navbar-brand ${css.title}`} href="/">Skideo</a>
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarCollapse">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Главная</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Наши партнеры</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Достижения</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Регистрация</a>
                            </li>
                            <Social/>
                        </ul>

                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;