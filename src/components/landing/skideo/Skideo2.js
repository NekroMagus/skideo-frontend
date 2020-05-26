import React, {Component} from 'react';
import css from './Skideo2.module.css';

class Skideo2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
  }

  render() {
    return (
        <section className={css.slideSection}>
          <div className={css.overlay}>
            <div className="container">
              <div className={css.content}>
                <h1 className="content--title">Skideo</h1>
                <p className="content--text">Upload your skills and get a chance</p>
                <button
                    onClick={this.props.isAuth ? this.props.redirect : this.props.onOpenModal}
                    className="btn open-modal">Добавить видео
                </button>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Skideo2;