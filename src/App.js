import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input";

function App() {
  const [form, handleChange] = useFormulario({ name: "", lastName: "" });

  console.log(form);
  return (
    <form>
      <Input label="Nombre" name="name" value={form.name} onChange={handleChange} />
      <Input label="Apellido" name="lastName" value={form.lastName} onChange={handleChange} />
    </form>
  );
}

export default App;
