import React, {Component} from "react";
import css from './Header.module.css';
import Social from "../social/Social";


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scroll: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        if (window.scrollY === 0) {
            this.setState({scroll: false});
        } else {
            this.setState({scroll: true});
        }
    };

    render() {
        return (
            <header>
                <nav onScroll={this.onScroll}
                     className={`navbar navbar-expand-md navbar-dark fixed-top ${this.state.scroll
                         ? css.bgNoOpacity : css.bgOpacity}`}>
                    <a className={`${css.title}`} href="/">Skideo</a>
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarCollapse">
                        <ul className="navbar-nav">
                            <li className={`nav-item active ${css.nav}`}>
                                <a className="nav-link" href="#">Главная</a>
                            </li>
                            <li className={`nav-item active ${css.nav}`}>
                                <a className="nav-link" href="#">Наши партнеры</a>
                            </li>
                            <li className={`nav-item active ${css.nav}`}>
                                <a className="nav-link" href="#">Достижения</a>
                            </li>
                            <li className={`nav-item active ${css.nav}`}   >
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