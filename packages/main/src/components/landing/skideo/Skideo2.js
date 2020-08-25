import React, {Component} from 'react';
import css from './Skideo2.module.css';
import landingLocalize from "../../../store/localize/landing";

class Skideo2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  render() {
    return (
        <section className={css.slideSection}>
          <div className={css.overlay}>
            <div className="container">
              <div className={css.content}>
                <h1 className="content--title">Skideo</h1>
                <p className="content--text">{landingLocalize.upload}</p>
                <button
                    onClick={this.props.isAuth ? this.props.redirect : this.props.onOpenModal}
                    className="btn open-modal">{landingLocalize.addVideo}
                </button>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Skideo2;