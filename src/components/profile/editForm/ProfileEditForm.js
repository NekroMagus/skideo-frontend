import React from 'react';
import {Field, reduxForm} from "redux-form";
import FormControl from "../../common/form-control/formControl";
import css from './ProfileEditForm.module.css';
import normalizePhone from "../../../utils/validator/normilizePhone";
import {connect} from "react-redux";
import {compose} from "redux";
import {requiredField} from "../../../utils/validator/Validator";
import profileLocalize from "../../../store/localize/profile";

const Input = FormControl("input");

const ProfileEditForm = (props) => {
  return (
      <>
        <form onSubmit={props.handleSubmit}>
          {props.error && <div className={css.error}>{props.error}</div>}
          <div className="input edit">
            <div className="blockinput">
              <div className="col-4 col-md-4">
                <p>{profileLocalize.firstName}:</p>
              </div>
              <div className="col-8">
                <Field component={Input}
                       placeholder={profileLocalize.firstName}
                       name={"name"}/>
              </div>
            </div>
            <div className="blockinput">
              <div className="col-4 col-md-4">
                <p>{profileLocalize.lastName}:</p>
              </div>
              <div className="col-8">
                <Field component={Input} placeholder={profileLocalize.lastName} name={"surname"}/>
              </div>
            </div>
            {/*<div className="blockinput">*/}
            {/*  <div className="col-4 col-md-4">*/}
            {/*    <p>Ваше фото:</p>*/}
            {/*  </div>*/}
            {/*  <div className="col-8">*/}
            {/*    <input type="file" id="file-input" name="INPUT_FIELD" accept="image/*"/>*/}
            {/*    <span id="output"></span>*/}
            {/*    <label className="file-input" type="file" accept="image/*" htmlFor="file-input"><b>Выберите*/}
            {/*      файл</b>*/}
            {/*    </label>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className="blockinput">
              <div className="col-4 col-md-4">
                <div className="input-group-prepend">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">
                    <p>{profileLocalize.position}:</p>
                  </label>
                </div>
              </div>
              <div className="col-8">
                <Field className="custom-select" id="inputGroupSelect01" name="roleFootball" component={"select"}>
                  <option value={""}>Ничего не выбрано</option>
                  <option value="GK">Вратарь</option>
                  <option value="SW">Свободный защитник</option>
                  <option value="RB">Правый защитник</option>
                  <option value="LB">Левый защитник</option>
                  <option value="CB">Центр защитник</option>
                  <option value="RBW">Правый атакующий защитник</option>
                  <option value="LBW">Левый атакующий защитник</option>
                  <option value="CDM">Опорный/оборонительный полузащитник</option>
                  <option value="RM">Правый полузащитник</option>
                  <option value="CM">Центральный полузащитник</option>
                  <option value="LM">Левый полузащитник</option>
                  <option value="RMM">Правый атакующий полузащитник</option>
                  <option value="LMM">Левый атакующий полузащитник</option>
                  <option value="CAM">Центральный атакующий полузащитник</option>
                  <option value="RF">Правый отянутый форвард</option>
                  <option value="CF">Центральный отянутый форвард</option>
                  <option value="LF">Левый отянутый форвард</option>
                  <option value="RS">Правый конечный форвард</option>
                  <option value="LS">Левый конечный форвард</option>
                  <option value="ST">Центр форвард</option>
                </Field>
              </div>
            </div>
            <div className="blockinput">
              <div className="col-4 col-md-4">
                <p>{profileLocalize.email}:</p>
              </div>
              <div className="col-8">
                <Field
                    component={Input}
                    type="email"
                    name="email"
                    placeholder={profileLocalize.email}/>
              </div>
            </div>
            <div className="blockinput">
              <div className="col-4 col-md-4">
                <p>{profileLocalize.phoneNumber}:</p>
              </div>
              <div className="col-8">
                <Field component={"input"}
                       type={"text"}
                       placeholder={profileLocalize.phoneNumber}
                       name={"telephoneNumber"}
                       normalize={normalizePhone}
                />
              </div>
            </div>
            <div className="blockinput">
              <div className="col-4 col-md-4">
                <p>{profileLocalize.birthday}:</p>
              </div>
              <div className="col-8">
                <Field component={"input"}
                       type={"date"}
                       name="dateOfBirth"
                       validate={requiredField}
                       placeholder={profileLocalize.birthday}/>
              </div>
            </div>
            <div className="blockinput">
              <div className="col-4 col-md-4">
                <p>{profileLocalize.country}:</p>
              </div>
              <div className="col-8">
                <Field component={Input} placeholder={profileLocalize.country} name={"country"}/>
              </div>
            </div>
            <div className="blockinput">
              <div className="col-4 col-md-4">
                <p>{profileLocalize.city}:</p>
              </div>
              <div className="col-8">
                <Field component={Input} placeholder={profileLocalize.city} name={"city"}/>
              </div>
            </div>
            <div className="blockinput">
              <div className="col-4 col-md-4">
                <p>{profileLocalize.socialNetwork}:</p>
              </div>
              <div className="col-8">
                <Field component={Input} placeholder={profileLocalize.socialNetwork} name={"socialNetwork"}/>
              </div>
            </div>
          </div>
          <div className="push20"></div>
          <div className="text-center">
            <button type="submit" className="btn btn-save">{profileLocalize.save}</button>
          </div>
        </form>
      </>
  );
};

const mapStateToProps = state => ({
  initialValues: state.profile
});

export default compose(
    connect(mapStateToProps, {}),
    reduxForm({
      form: "profile-edit", enableReinitialize: true,
    })
)(ProfileEditForm);

