import { useState } from "react";
import Alert from "./components/alert";
import Button from "./components/button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return <div>
    {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>My Alert</Alert>}
    <Button color="danger" onClick={() => setAlertVisibility(true)}>My Button</Button>
  </div>
}
export default App;
