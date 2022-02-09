import { useState } from "react";
import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./components/Container";
import Button from "./components/Button";

function App() {
  const [users, setUsers] = useState([]);
  const [form, handleChange, reset] = useFormulario({
    name: "",
    lastName: "",
    email: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setUsers([...users, form]);
    reset();
  };

  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form onSubmit={submit}>
            <Input
              label="Nombre"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              label="Apellido"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
            <Input
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <Button>Enviar</Button>
          </form>
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
  );
}

export default App;
