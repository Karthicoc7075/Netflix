import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import profileImg from "../../assets/images/profile.webp";
import { AiOutlineCaretDown } from "react-icons/ai";
import { signIn } from "../../api";
import { logout } from "../../action/auth";
import { useDispatch } from "react-redux";
import decode from "jwt-decode"
function Navbar() {
  const [showInput, setShowInput] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showNoti, setShowNoti] = useState(false);
  const [showBrower, setShowBrower] = useState(false);
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('authReducer')))
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function showMenuBtn() {
    if (showNoti) {
      setShowNoti(false);
    }
    setShowMenu((preValue) => !preValue);
  }

  function showNotiBtn() {
    if (showMenu) {
      setShowMenu(false);
    }
    setShowNoti((preValue) => !preValue);
  }

  function showBrowerBtn() {
    console.log("Clicked");
    if (showMenu) {
      setShowMenu(false);
    }
    setShowBrower((preValue) => !preValue);
  }

  function Logout(){
    dispatch(logout());
    navigate('/')

  }

  useEffect(()=>{
      const token = decode(user.token)
      if(token){
        const expireDate = new Date(token.exp*1000)
        if(new Date > expireDate) dispatch(logout())
      }
  })
  return (
    <div className="main__header__wrapper">
      <div className="main__header">
        <div className="left">
          <a href="/" className="svg-icon main__header__logo">
            {" "}
            <svg
              fill="#e50914"
              viewBox="0 0 111 30"
              data-uia="netflix-logo"
              aria-hidden="true"
              focusable="false"
            >
              <g id="netflix-logo">
                <path
                  d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                  id="Fill-14"
                ></path>
              </g>
            </svg>
          </a>

          <div className="header__brower__link" onClick={() => showBrowerBtn()}>
            <AiOutlineCaretDown />
          </div>

          <div
            className={
              showBrower
                ? "dropdown__brower__menu show"
                : "dropdown__brower__menu"
            }
          >
            <Link to='/brower' className="header__link">
              <span>Home</span>
            </Link>
            <Link to='/brower/Movies' className="header__link">
              <span>Movies</span>
            </Link>
            <Link to='/brower/Series'  className="header__link">
              <span>Series</span>
            </Link>
            <Link to='/brower/New'  className="header__link">
              <span>New and Popular</span>
            </Link>

            <Link to='/brower/List'  className="header__link">
              <span>List</span>
            </Link>
          </div>
        </div>
        <div className="right">
          <div
            className={
              showInput ? "input__container show__input" : "input__container"
            }
            onClick={() => setShowInput(true)}
          >
            <FaSearch />
            <input
              className={showInput ? "input__focus" : ""}
              placeholder="Title"
            />
          </div>
          <Link to='/brower/Kids' className="header__link__kids" >
          <span>KIDS</span>
          </Link>
          <div
            className="dropdown__noti__toggle "
            onClick={() => showNotiBtn()}
          >
            <IoMdNotifications />
            <div
              className={
                showNoti ? "dropdown__noti__menu show" : "dropdown__noti__menu "
              }
            >
              <p>There are no notifications.</p>
            </div>
          </div>

          <div className="dropdown" onClick={() => showMenuBtn()}>
            <div className="dropdown__toggle">
              <img src={profileImg} className="profile__img" />
              <AiOutlineCaretDown />
            </div>

            <div
              className={showMenu ? "dropdown__menu show" : "dropdown__menu"}
            >
              <div className="menu__profile__card">
                <div className="menu__profile__content">
                  <img src={profileImg} />
                  <p>Username</p>
                </div>
                <Link to="/manage-profiles" >Manage Profile</Link>
              </div>

              <p className="dropdown__underline"></p>
              <Link to='/brower/Account'  className="dropdown__item">Account</Link>
              <Link to='/brower/Payment_History'  className="dropdown__item">Payment History</Link>
              <button  onClick={Logout} className="dropdown__item">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
