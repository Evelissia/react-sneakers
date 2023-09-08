function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30">Корзина</h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/img/sneakers/1.jpg"
                alt="Sneakers"
              />
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="remove"
              />
            </div>

            <div className="cartItem d-flex align-center">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/img/sneakers/4.jpg"
                alt="Sneakers"
              />
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>8 499 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="remove"
              />
            </div>
          </div>

          <ul>
            <li>
              <span></span>
              <div></div>
              <b></b>
            </li>
            <li></li>
          </ul>
        </div>
      </div>

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
            <li className="mr-30">
              <img
                className="mr-10"
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
      <div className="content ">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"></img>
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-liked.svg" alt="liked" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="none"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">+</button>
            </div>
          </div>

          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/2.jpg"
              alt="none"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">+</button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/3.jpg"
              alt="none"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">+</button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/4.jpg"
              alt="none"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
