import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./components/Container";

function App() {
  const [form, handleChange] = useFormulario({ name: "", lastName: "" });

  console.log(form);
  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form>
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
          </form>
        </div>
      </Card>
    </Container>
  );
}

export default App;
