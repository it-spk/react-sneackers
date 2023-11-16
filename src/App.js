function App() {
  return <div className="wrapper clear">
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div>
          <h3 className="mb-0 text-uppercase">React Sneackers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30"> 
        <svg width="18" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="1" id="_1"><path d="M397.78,316H192.65A15,15,0,0,1,178,304.33L143.46,153.85a15,15,0,0,1,14.62-18.36H432.35A15,15,0,0,1,447,153.85L412.4,304.33A15,15,0,0,1,397.78,316ZM204.59,286H385.84l27.67-120.48H176.91Z"/><path d="M222,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,222,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,222,365.05Z"/><path d="M368.42,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,368.42,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,368.42,365.05Z"/><path d="M158.08,165.49a15,15,0,0,1-14.23-10.26L118.14,78H70.7a15,15,0,1,1,0-30H129a15,15,0,0,1,14.23,10.26l29.13,87.49a15,15,0,0,1-14.23,19.74Z"/></g></svg>
          <span> 1205 руб. </span> 
        </li>
        <li>
          <svg fill="none" widths="18" height="18" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g id="User"><path clip-rule="evenodd" d="M0.25 20C0.25 16.2721 3.27208 13.25 7 13.25H17C20.7279 13.25 23.75 16.2721 23.75 20V22C23.75 22.9665 22.9665 23.75 22 23.75H2C1.0335 23.75 0.25 22.9665 0.25 22V20ZM7 14.75C4.10051 14.75 1.75 17.1005 1.75 20V22C1.75 22.1381 1.86193 22.25 2 22.25H22C22.1381 22.25 22.25 22.1381 22.25 22V20C22.25 17.1005 19.8995 14.75 17 14.75H7Z" fill="black" fill-rule="evenodd" id="Rectangle 39 (Stroke)"/><path clip-rule="evenodd" d="M11.5 1.75C8.87665 1.75 6.75 3.87665 6.75 6.5C6.75 9.12335 8.87665 11.25 11.5 11.25C14.1234 11.25 16.25 9.12335 16.25 6.5C16.25 3.87665 14.1234 1.75 11.5 1.75ZM5.25 6.5C5.25 3.04822 8.04822 0.25 11.5 0.25C14.9518 0.25 17.75 3.04822 17.75 6.5C17.75 9.95178 14.9518 12.75 11.5 12.75C8.04822 12.75 5.25 9.95178 5.25 6.5Z" fill="black" fill-rule="evenodd" id="Ellipse 21 (Stroke)"/></g></svg>
        </li>
      </ul>
    </header>
    <div className="content p-40">
      <h1 className="mb-40">Все кроссовки</h1>
      

      <div className="d-flex">
        <div className="card">
          <img width={133} height={112} src="/img/img-card/sneackers-1.png" alt="sneackers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/img-card/sneackers-2.png" alt="sneackers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/img-card/sneackers-3.png" alt="sneackers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/img-card/sneackers-4.png" alt="sneackers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>;
}

export default App;
