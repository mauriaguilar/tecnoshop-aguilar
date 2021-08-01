import Title from "./title"
import Button from "./button"

const AccountScreen = () => {
    return (
        <div className="row">
            <div className="col">

                <Title />

                <div className="row">
                    <ul className="col d-flex justify-content-center nav nav-pills mb-3 navbar-dark bg-dark" id="pills-tab" role="tablist">
                        <Button text="Smartphones"/>
                        <Button text="Smartwatches"/>
                        <Button text="Batteries"/>
                        <Button text="Speakers"/>
                        <Button text="Accessories"/>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default AccountScreen;