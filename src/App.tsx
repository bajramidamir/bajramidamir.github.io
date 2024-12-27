import Welcome from "./pages/Welcome";
import Templates from "./pages/Templates";
import Components from "./pages/Components";
import ContactForm from "./pages/ContactForm";
import { Spacer } from "tempest-ui";
import LoginForm from "./pages/LoginForm";
import UnderConstruction from "./pages/UnderConstruction";
//import FourOhFour from "./pages/FourOhFour";

function App() {
  return (
    <>
      <Welcome />
      <Spacer space={64} />
      <Components />
      <Spacer space={64} />
      <Templates />
      <ContactForm />
      <Spacer space={64} />
      <hr />
      <LoginForm />
      <Spacer space={64} />
      <Spacer space={512} />
      <UnderConstruction />
    </>
  );
}

export default App;
