import React from 'react';
import {Field, reduxForm} from "redux-form";
import FormControl from "../../common/form-control/formControl";
import css from './ProfileEditForm.module.css';
import normalizePhone from "../../../utils/validator/normilizePhone";
import {connect} from "react-redux";
import {compose} from "redux";
import {requiredField} from "../../../utils/validator/Validator";

const Input = FormControl("input");

const ProfileEditForm = (props) => {
  return (
      <>
        <form onSubmit={props.handleSubmit}>
          {props.error && <div className={css.error}>{props.error}</div>}
          <div className="input edit">
            <div className="blockinput">
              <div className="col-4 col-md-4">
                <p>Имя:</p>
              </div>
              <div className="col-8">
                <Field component={Input}
                       placeholder={"Ваше имя"}
                       name={"name"}/>
              </div>
            </div>
            <div className="blockinput">
              <div className="col-4 col-md-4">
                <p>Фамилия:</p>
              </div>
              <div className="col-8">
                <Field component={Input} placeholder={"Ваша фамилия"} name={"surname"}/>
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
                    <p>Амплуа:</p>
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
                <p>E-mail:</p>
              </div>
              <div className="col-8">
                <Field
                    component={Input}
                    type="email"
                    name="email"
                    placeholder="Ваш E-mail"/>
              </div>
            </div>
            <div className="blockinput">
              <div className="col-4 col-md-4">
                <p>Телефон:</p>
              </div>
              <div className="col-8">
                <Field component={"input"}
                       type={"text"}
                       placeholder={"Ваш телефон"}
                       name={"telephoneNumber"}
                       normalize={normalizePhone}
                />
              </div>
            </div>
            <div className="blockinput">
              <div className="col-4 col-md-4">
                <p>Дата рождения:</p>
              </div>
              <div className="col-8">
                <Field component={"input"}
                       type={"date"}
                       name="dateOfBirth"
                       validate={requiredField}
                       placeholder="Дата рождения"/>
              </div>
            </div>
            <div className="blockinput">
              <div className="col-4 col-md-4">
                <p>Страна:</p>
              </div>
              <div className="col-8">
                <Field component={Input} placeholder={"Ваша страна"} name={"country"}/>
              </div>
            </div>
            <div className="blockinput">
              <div className="col-4 col-md-4">
                <p>Город:</p>
              </div>
              <div className="col-8">
                <Field component={Input} placeholder={"Ваш город"} name={"city"}/>
              </div>
            </div>
            <div className="blockinput">
              <div className="col-4 col-md-4">
                <p>Вы в соц. сети:</p>
              </div>
              <div className="col-8">
                <Field component={Input} placeholder={"Ваша соц. сеть"} name={"socialNetwork"}/>
              </div>
            </div>
          </div>
          <div className="push20"></div>
          <div className="text-center">
            <button type="submit" className="btn btn-save">Сохранить</button>
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

