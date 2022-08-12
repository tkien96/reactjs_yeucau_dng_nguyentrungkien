import Input from "../components/shared/Input";
import Button from '../components/shared/Button'
import {
  Link
} from "react-router-dom";

function Register() {
  
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Register</h1>
            <div className="form-login-register">
              <form>
                <Input label="Nickname" placeholder="Nhập Nickname ..." />
                <Input label="Tên đăng nhập" placeholder="Nhập tên đăng nhập ..." />
                <Input
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  className="world"
                />
                <Input
                  type="password"
                  label="Xác nhận mật khẩu"
                  placeholder="Xác nhận mật khẩu của bạn ..."
                  className="world"
                />
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">Submit</Button>
                  <Link to="/login">Bạn đã có tài khoản</Link>
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

export default Register