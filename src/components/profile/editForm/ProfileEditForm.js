import React from 'react';
import {Field, reduxForm} from "redux-form";
import FormControl from "../../common/form-control/formControl";
import css from './ProfileEditForm.module.css';
import normalizePhone from "../../../utils/validator/normilizePhone";

const Input = FormControl("input");

const ProfileEditForm = (props) => {
    return (
        <div>
            <h1 className={'alignCenter'}>Основная информация</h1>
            <form onSubmit={props.handleSubmit}>
                <div className={"row"}>
                    <div className={"col-4"}>
                        Имя:
                    </div>
                    <div className={"col-8"}>
                        <Field component={Input} placeholder={"Имя"} name={"name"}/>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-4"}>
                        Фамилия:
                    </div>
                    <div className={"col-8"}>
                        <Field component={Input} placeholder={"Фамилия"} name={"surname"}/>
                    </div>
                </div>
                {/*<div className={"row"}>*/}
                {/*    <div className={"col-4"}>*/}
                {/*        Амплуа:*/}
                {/*    </div>*/}
                {/*    <div className={"col-8"}>*/}
                {/*        <Field component={Input} name={"roleFootball"}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={"row"}>
                    <div className={"col-4"}>
                        <label>Телефон:</label>
                    </div>
                    <div className={"col-8"}>
                        <Field component={"input"}
                               type={"text"}
                               placeholder={"Телефон"}
                               name={"telephoneNumber"}
                               normalize={normalizePhone}
                        />
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-4"}>
                        Страна:
                    </div>
                    <div className={"col-8"}>
                        <Field component={Input} placeholder={"Страна"} name={"country"}/>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-4"}>
                        Город:
                    </div>
                    <div className={"col-8"}>
                        <Field component={Input} placeholder={"Город"} name={"city"}/>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-4"}>
                        Вы в соц.сети:
                    </div>
                    <div className={"col-8"}>
                        <Field component={Input} placeholder={"Соц сеть"} name={"socialNetwork"}/>
                    </div>
                </div>
                <button className={css.button}>Сохранить</button>
            </form>
        </div>
    );
};


export default reduxForm({form: "profile-edit"})(ProfileEditForm);

