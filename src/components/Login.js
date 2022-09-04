import { Link } from 'react-router-dom'
import logo from '../images/logo_lg.png'
import workImg from '../images/workImg.png'

function Login() {
  return (
    <div id="loginPage" class="bg-yellow">
      <div class="container loginPage vhContainer ">
        <div class="side">
          <Link to="/">
            <img
              className="logoImg"
              src={logo}
              alt="logo"
            />
          </Link>
          <img
            class="d-m-n"
            src={workImg}
            alt="workImg"
          />
        </div>
        <div>
          <form class="formControls" action="index.html">
            <h2 class="formControls_txt">最實用的線上代辦事項服務</h2>
            <label class="formControls_label" for="email">
              Email
            </label>
            <input
              class="formControls_input"
              type="text"
              id="email"
              name="email"
              placeholder="請輸入 email"
              required
            />
            <span>此欄位不可留空</span>
            <label class="formControls_label" for="pwd">
              密碼
            </label>
            <input
              class="formControls_input"
              type="password"
              name="pwd"
              id="pwd"
              placeholder="請輸入密碼"
              required
            />
            <input class="formControls_btnSubmit" type="button" value="登入" />
            <a class="formControls_btnLink" href="#signUpPage">
              註冊帳號
            </a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
