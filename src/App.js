import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input";
import Card from "./components/Card";

function App() {
  const [form, handleChange] = useFormulario({ name: "", lastName: "" });

  console.log(form);
  return (
    <Card>
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
    </Card>
  );
}

export default App;
