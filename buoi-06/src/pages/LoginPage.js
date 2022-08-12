import Input from "../components/shared/Input";
import Button from '../components/shared/Button'
import {
  Link
} from "react-router-dom"

function LoginPage() {
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Login</h1>
            <div className="form-login-register">
              <form>
                <Input label="Username" placeholder="Enter Username ..." />
                <Input
                  type="password"
                  label="Password"
                  placeholder="Enter Password ..."
                  onChange={(evt) => {
                    console.log('evt', evt.target.value)
                  }}
                  className="world"
                />
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">Submit</Button>
                  <Link to="/register">Regiter</Link>
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

export default LoginPage