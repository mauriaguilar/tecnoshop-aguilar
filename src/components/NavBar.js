import Title from "./title"
import Button from "./button"

const AccountScreen = () => {
    return (
        <div className="row">
            <div className="col">

                <Title />

                <div className="row">
                    <ul className="col d-flex justify-content-center nav nav-pills mb-3 navbar-dark bg-dark" id="pills-tab" role="tablist">
                        <Button text="Celulares"/>
                        <Button text="Smartwatches"/>
                        <Button text="Baterias"/>
                        <Button text="Parlantes"/>
                        <Button text="Accesorios"/>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default AccountScreen;