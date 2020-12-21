import React from "react";
import {useField, Field} from "formik";

const AccountButton = ({...props}) => {

    const [field, meta] = useField(props);
    return (
        <div className="accountSelectButtons">
            <div className="buttonsRow">
                <label className="accountButtons playerButton">
                    <Field className="none" name="role"
                           value="Player" type="radio"/>Player</label>
                <label className="accountButtons scoutButton">
                    <Field className="none" name="role"
                           value="Scout" type="radio"/>Scout</label>
            </div>
            {/*<label><Field className="" name="agent" type="checkbox"/>I have an agent</label>*/}
            <div className="buttonsRow">
                <label className="accountButtons clubButton">
                    <Field className="none" name="role"
                           value="Club" type="radio"/>Club</label>
                <label className="accountButtons academyButton">
                    <Field className="none"
                           name="role"
                           value="Academy" type="radio"/>Academy</label>
            </div>
        </div>

    );
};

export default AccountButton;