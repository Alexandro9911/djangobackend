import '../../styles/admin/auth.sass'
import StyledInput from "./ui/input";
import SimpleButton from "./ui/simpleButton";

export default function AuthCard({
  login,
  passw,
  loginError,
  passwError,
  loginTextError,
  passwTextError,
  
  handleLoginChange,
  handlePasswChange,
  
  globalError,
  textGlobalError,
  
  handleSubmit
}){
  return (
    <div className="auth-card">
      <div className="auth-card__header">
        <div className="auth-card__header__title">Авторизация</div>
        <div className="auth-card__divider"/>
      </div>
      <div className="auth-card__body">
        <div className="auth-card__body__question-item">
          <StyledInput
            value={login}
            label={'Логин'}
            placeholder={'Введите логин'}
            hasError={loginError}
            type={'text'}
            errorText={loginTextError}
            handler={handleLoginChange}
          />
        </div>
        <div className="auth-card__body__question-item">
          <StyledInput
            value={passw}
            label={'Пароль'}
            placeholder={'Введите пароль'}
            hasError={passwError}
            type={'password'}
            errorText={passwTextError}
            handler={handlePasswChange}
          />
        </div>
      </div>
      <SimpleButton text={'Вход'} onClickHandler={handleSubmit} style={"auth-card__body__button-submit"}/>
      {globalError &&
        <div className="auth-card__body__global-error">{textGlobalError}</div>
      }
    </div>
  )
}