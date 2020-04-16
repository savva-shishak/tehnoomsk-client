import { useState } from "react";
import { useRouter } from "next/router";
import Cookie from 'js-cookie'

export let auth = false

export default () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    
    function toAuth() {
        Cookie.set('auth', true, { expires: 10 })
        router.push('/admin')
    }

    return (
        <div className="flex-container">
            <div className="form">
                <div className="form__title">Вход</div>
                <div className="form__body">
                    <div className="form__input">
                        <div className="form__label">Логин</div>
                        <input className="form__control" placeholder="Пока ничего заполнять не надо" value={login} onChange={({target: {value}}) => setLogin(value)} />
                    </div>
                    <div className="form__input">
                        <div className="form__label">Пароль</div>
                        <input className="form__control" placeholder="Просто нажмите кнопку" value={password} onChange={({target: {value}}) => setPassword(value)} />
                    </div>
                </div>
                <div onClick={toAuth} className="form__btn">Войти</div>
            </div>
            <style jsx>{`
                .flex-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%
                }

                .form {
                    text-align: center;
                }

                .form__body {
                    margin: 30px 0;
                }

                .form__title {
                    font-size: 35px;
                    font-weight: 600;
                    margin: 10px 0;
                }

                .form__input {
                    margin: 10px 0;
                }

                .form__control {
                    width: 300px;
                    padding: 5px;
                    text-align: center
                }

                .form__btn {
                    background: #e2e2e2;
                    padding: 10px;
                    border-radius: 5px;
                    cursor: pointer;
                    margin: 10px 0;
                }

                .form__btn:hover {
                    background: #9c9c9c;
                }
            `}</style>
        </div>
    )
}
