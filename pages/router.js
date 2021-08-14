import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default function Router() {
    return(
        <BrowserRouter basename="/item">
            <Switch>
                <Route exact path="/stock"><div>Mi Stock</div></Route>
                <Route exact path="/detail"><div>Mi Detail</div></Route>
                <Route path="/:id"></Route>
                <Route path="/:id/detail"></Route>
            </Switch>
        </BrowserRouter>
    )
};

import { useParams } from "react-router";

export default function MyStock () {
    const { id } = useParams();
    const item = getItem(id);

    return(
        <div>Mi Stock</div>
    )
};

import { useRouteMatch } from "react-router";

return(

);
