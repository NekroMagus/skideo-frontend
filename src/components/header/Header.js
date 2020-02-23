import React, {Component} from "react";
import css from './Header.module.css';
import Social from "../social/Social";
import Nav from "../nav/Nav";


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
                      <Nav/>
                      <Social/>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;