import "../styles/personalAccount.css"

function PersonalAccount()
{
    return (
        <>
            <div className="login-box">
                <h2>Добавление ученика</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="" required="" />
                        <label>Имя</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="" required="" />
                        <label>Фамилия</label>
                    </div>
                    <div className="user-box">
                        <input type="tel" name="" required="" />
                        <label>Номер телефона</label>
                    </div>
                    <div className="user-box">
                        <input type="email" name="" required="" />
                        <label>Почта</label>
                    </div>
                        <a href="/">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        Добавить
                        </a>
                </form>
            </div>
        </>
    );
}

export {PersonalAccount}