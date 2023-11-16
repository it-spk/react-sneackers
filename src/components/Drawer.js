function Drawer() {
    return (
        <div style={{ display: "none" }} className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between mb-30">Корзина
                    <img className="removeBtn cu-p" src="/img/remove.svg" alt="remove" />
                </h2>

                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/sneackers-img/1.png)' }} className="carItemImg">
                        </div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/remove.svg" alt="remove" />
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/sneackers-img/1.png)' }} className="carItemImg">
                        </div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/remove.svg" alt="remove" />
                    </div>
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого</span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%</span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className="greenBtn">Оформить заказ <img src="/img/strelka.svg" alt="strelka" /></button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;