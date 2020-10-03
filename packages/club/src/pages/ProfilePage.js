import React from 'react';

const ProfilePage = () => {

  return (
      <section className="profile profile__container">
        <form>
          <div className="profile__input">
            Название клуба:
            <input name={"name"} type={"text"} placeholder={"Название клуба"}/>
          </div>
          <div className="profile__input">
            Имя агента:
            <input name={"name"} type={"text"} placeholder={"Имя агента"}/>
          </div>
          <div className="profile__input">
            Фамилия агента:
            <input name={"name"} type={"text"} placeholder={"Фамилия агента"}/>
          </div>
        </form>
      </section>
  );
};

export default ProfilePage;