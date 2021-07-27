import Title from "./title"
import Button from "./button"

const AccountScreen = () => {
    return (
        <>
            <Title />
            <ul className="nav nav-pills mb-3 navbar-dark bg-dark center" id="pills-tab" role="tablist">
                <Button text="Celulares"/>
                <Button text="Smartwatches"/>
                <Button text="Baterias"/>
                <Button text="Parlantes"/>
                <Button text="Accesorios"/>
            </ul>
        </>
    );
}

export default AccountScreen;