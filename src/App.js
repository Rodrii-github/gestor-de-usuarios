import { useState } from "react";

import Card from "./components/Card";
import Container from "./components/Container";
import UserForm from "./components/UserForm";

function App() {
  const [users, setUsers] = useState([]);

  const submit = (user) => {
    setUsers([...users, user]);
  };

  console.log(users)
  return (
    <div style={{ marginTop: "10%" }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit} />
          </div>
        </Card>
        <Card>
          <ul>
            {users.map((users) => (
              <li
                key={users.name}
              >{`${users.name} ${users.lastName}: ${users.email}`}</li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;
