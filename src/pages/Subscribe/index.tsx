import { ButtonComposition as Button } from "../../components/Button";
import { Link } from "react-router-dom";
import * as S from "./styles";
import imageCompany from "../../assets/imgs/imgInit.png";
import logo from "../../assets/imgs/logo.png";
import { Input } from "../../components/Input";
import { Form, useForm } from "../../components/Form";
import { z } from "zod";

const signUpFormSchema = z
  .object({
    name: z.string().min(3, "Por favor entre com um nome valido"),
    email: z.string().email("Por favor entre com um email valido"),
    phone: z.string().min(11, "Por favor entre com um numero valido + DDD"),
    password: z.string().min(8, "Digite uma senha valida de no minimo 8 dig."),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

const Subscribe = () => {
  const form = useForm({
    schema: signUpFormSchema,
  });

  async function handleSignIn(values: any) {
    console.log(values);
  }

  return (
    <S.Container>
      <S.BannerCampany>
        <img src={imageCompany} alt="" />
      </S.BannerCampany>
      <S.ContentFormField>
        <header>
          <img src={logo} alt="logo" />
          <h3>Faça sua conta e comece a aprender!</h3>
        </header>
        <Form
          form={form}
          onSubmit={(values) => handleSignIn(values)}
          id="formField"
        >
          <Input label="Nome" id="Nome" {...form.register("name")} />
          <Input label="Email" id="Email" {...form.register("email")} />
          <Input
            label="Telefone"
            type="text"
            id="Telefone"
            {...form.register("phone")}
          />
          <Input
            label="Senha"
            type="password"
            id="Senha"
            {...form.register("password")}
          />
          <Input
            label="Repita a Senha"
            type="password"
            id="Repita a Senha"
            {...form.register("confirmPassword")}
          />

          <div className="btnField">
            <Button.Action type="submit">
              <Button.Title title="Cadastrar" />
            </Button.Action>
          </div>

          <div id="login">
            <span>Já tem uma conta?</span>
            <Link to={"/login"}>
              <span>Entrar</span>
            </Link>
          </div>
        </Form>
      </S.ContentFormField>
    </S.Container>
  );
};

export default Subscribe;
