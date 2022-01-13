import { BrowserRouter, Route, Switch } from "react-router-dom"
import Mounting from "./Mounting"
import Unmounting from "./Unmounting";
import Updating from "./Updating"
import Header from "./Header";

  
function Apps() {
  return (
    <div>

      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/updating" component={Updating} />
          <Route path="/unmounting" component={Unmounting} />
          <Route path="/" component={Mounting} />
        </Switch>
      </BrowserRouter>

    </div >
  )

}

export default Apps;