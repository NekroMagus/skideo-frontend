import React, {Component} from "react";
import css from './Skideo.module.css';
import {connect} from "react-redux";
import ModalAuth from "../modalAuth/ModalAuth";

class Skideo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalAuthShow: false
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.isAuth) {
      this.setState({
        ...this.state,
        isModalAuthShow: false
      })
    }
  }

  toggleModalAuth = () => {
    this.setState({
      isModalAuthShow: !this.state.isModalAuthShow
    })
  };

  toggleAddVideoModal = () => {
    this.setState({
      ...this.state,
      isModalShow: !this.state.isModalShow
    });
  };


  render() {
    return (
        <section>
          <div className={css.background}>
            <div className={css.darkTheme}>
              <div className={`alignCenter ${css.center}`}>
                <h1 className={css.title}>Skideo</h1>
                <p className={css.text}>UPLOAD YOUR SKILLS AND GET A CHANCE</p>
                {this.props.isAuth
                    ? <button className={css.button} onClick={this.toggleAddVideoModal}>Добавить
                      видео</button>
                    : <button onClick={this.toggleModalAuth} className={css.button}>Добавить
                      видео</button>
                }
              </div>
            </div>
          </div>

          <ModalAuth
              isModalShow={this.state.isModalAuthShow}
              toggleModalAuth={this.toggleModalAuth}/>
        </section>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps)(Skideo);