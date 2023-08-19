import { ButtonComposition as Button } from "../../components/Button";
import logo from "../../assets/imgs/logo.png";
import imageCompany from "../../assets/imgs/imgInit.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { Input } from "../../components/Input";
import * as S from "./styles";
import { Form, useForm } from "../../components/Form";
import { z } from "zod";
import { LoginProps } from "../../types/TypeUser";

const LoginFormSchema = z.object({
  email: z.string().email("Por favor entre com um email valido"),
  password: z.string().min(6, "Digite uma senha valida"),
});

const Login = () => {
  const form = useForm({
    schema: LoginFormSchema,
  });

  async function handleLogin(values: LoginProps) {
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
          <h3>Faça login e comece a aprender!</h3>
        </header>

        <Form
          form={form}
          onSubmit={(values) => handleLogin(values)}
          id="formField"
        >
          <Input label="Email" id="InputEmail" {...form.register("email")} />

          <Input
            label="Senha"
            id="InputPass"
            type="password"
            {...form.register("password")}
          />

          <div id="forgot">
            <Link to={"/recoverpass"}>
              <span>Esqueceu a senha?</span>
              <ArrowRight />
            </Link>
          </div>

          <Button.Action type="submit">
            <Button.Title title="Entrar" />
          </Button.Action>

          <div id="signup">
            <span>Não tem uma conta ainda?</span>
            <Link to={"/signup"}>
              <span>Inscrever-se</span>
            </Link>
          </div>
        </Form>
      </S.ContentFormField>
    </S.Container>
  );
};

export default Login;
