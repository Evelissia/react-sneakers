function Header(props) {
    return(
        <header className="d-flex justify-between align-center">
        <div className="d-flex align-center">
          <img
            className="mr-15"
            width={40}
            height={40}
            src="/img/logo.svg"
            alt="нету ее(("
          />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className="user">
          <ul className="d-flex">
            <li onClick={props.onClickCart} className="mr-30 cu-p">
              <img
                className="mr-10 "
                width={18}
                height={18}
                src="/img/cart.svg"
                alt="нету ее(("
              />
              <span>1205 руб.</span>
            </li>
            <li>
              <img width={18} height={18} src="/img/user.svg" alt="нету ее((" />
            </li>
          </ul>
        </div>
      </header>
    );
}

export default Header;