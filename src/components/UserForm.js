import Input from "./Input";
import Button from "./Button";
import useFormulario from "../hooks/useFormulario";

const UserForm = ({submit}) => {
  const [form, handleChange, reset] = useFormulario({
    name: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(form)
    reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nombre"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <Input
        label="Apellido"
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="Apellido"
      />
      <Input
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;
