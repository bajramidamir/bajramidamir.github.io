import Welcome from "./pages/Welcome";
import Templates from "./pages/Templates";
import Components from "./pages/Components";
import ContactForm from "./pages/ContactForm";
import { Spacer } from "tempest-ui";
import ComponentsGrid from "./pages/ComponentsGrid";

function App() {
  return (
    <>
      <Welcome />
      <Spacer space={64} />
      <Components />
      <ComponentsGrid />
      <Spacer space={64} />
      <Templates />
      <ContactForm />
    </>
  );
}

export default App;
