import React, {Component} from 'react';
import css from './ModalVideo.module.css';
import {connect} from "react-redux";

class ModalVideo extends Component {

  render() {
    if (!this.props.isModalVideoShow) {
      return null;
    }

    return (

        <div>
          <div className={css.authModalWindow}>
            <div className={css.modalInner}>

              <button className={css.button} onClick={this.props.toggleModalVideo}>Закрыть</button>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(ModalVideo);