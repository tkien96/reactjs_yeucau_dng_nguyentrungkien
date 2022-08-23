import './LoginPage/login.css'
import { Link, useHistory } from "react-router-dom"
import Input from '../components/shared/Input'
import Button from '../components/shared/Button'
import { useState } from 'react'
import { validateFormRegister } from '../helpers'
import { useDispatch } from 'react-redux'
import { actRegisterAsync } from '../store/auth/actions'

function RegisterPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isFormDirty, setIsFormDirty] = useState(true);
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nickname: {
      value: '',
      error: ''
    },
    username: {
      value: '',
      error: ''
    },
    email: {
      value: '',
      error: ''
    },
    password: {
      value: '',
      error: ''
    }
  });

  function handleOnChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value.trim();

    const error = validateFormRegister({ value, name });

    setFormData({
      ...formData,
      [name]: {
        value,
        error
      }
    });
    setIsFormDirty(false);
  }

  function checkFormIsValid() {
    if (isFormDirty) {
      setFormData({
        nickname: {
          value: ''
        }, 
        username: {
          value: '',
          error: validateFormRegister({
            value: '',
            name: 'username'
          })
        },
        password: {
          value: '',
          error: validateFormRegister({
            value: '',
            name: 'password'
          })
        },
        email: {
          value: '',
          error: validateFormRegister({
            value: '',
            name: 'email'
          })
        }
      })

      return false;
    };

    if (formData.username.error || formData.password.error || formData.email.error) return false;

    return true;
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const isValid = checkFormIsValid();
    if (!isValid) {
      console.log('form error');
      return;
    }
    const { nickname, username, password, email } = formData;
    if (loading) return;
    setLoading(true);
    setFormError('');

    const registerData = {
      nickname: nickname.value, 
      username: username.value, 
      email: email.value, 
      password: password.value
    }

    dispatch(actRegisterAsync(registerData)).
      then(res => {
        if (res.ok) {
          history.push('/');
        } else {
          setFormError(res.error);
          setLoading(false);
        }
      })
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng ký</h1>
            <div className="form-login-register">
              {formError && <p className="form-login__error">{formError}</p>}
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Input 
                  label="Nickname" 
                  placeholder="Nhập Nickname"
                  autoComplete="off"
                />
                <Input 
                  label="Tên đăng nhập (*)" 
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                  value={formData.username.value}
                  error={formData.username.error}
                  name="username"
                  onChange={handleOnChange}
                />
                <Input 
                  label="Email (*)" 
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                  value={formData.email.value}
                  error={formData.email.error}
                  name="email"
                  onChange={handleOnChange}
                />
                <Input 
                  type="password" 
                  label="Mật khẩu" 
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  value={formData.password.value}
                  error={formData.password.error}
                  name="password"
                  onChange={handleOnChange}
                />
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large" loading={loading}>Đăng ký</Button>
                  <Link to="/login">Bạn đã có tài khoản?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>

  )
}

export default RegisterPage