import { ButtonComposition as Button } from "../../components/Button";
import logo from "../../assets/imgs/logo.png";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import * as S from "./styles";
import { Form, useForm } from "../../components/Form";
import { z } from "zod";

const recoverFormSchema = z.object({
  email: z.string().email("Por favor entre com um email valido"),
});

const RecoverPass = () => {
  const form = useForm({
    schema: recoverFormSchema,
  });

  async function handleClickOnSendEmail(params: { email: string }) {
    const url = `${window.location.protocol}//${window.location.host}`;

    console.log(url, params);

    // const response = await UserService.emailRecoverPassword({
    //   email: params.email,
    //   url
    // })

    //toast.success(response.message)
  }

  return (
    <S.Container>
      <span className="backgroundImage"></span>
      <S.Wrapper>
        <img src={logo} alt="Speack five languages" className="logo" />
        <section className="inputField">
          <h2>Esqueceu a senha?</h2>
          <p className="textInfo">
            Preencha o campo com o e-mail que você usou para se cadastrar. Você
            receberá as instruções neste mesmo email sobre como redefinir sua
            senha.
          </p>

          <Form
            form={form}
            onSubmit={(values) => handleClickOnSendEmail(values)}
          >
            <Input label="Email" id="InputEmail" {...form.register("email")} />

            <Button.Action type="submit">
              <Button.Title title="Enviar" />
            </Button.Action>
          </Form>
          <Link to="/login" className="linkLogin">
            Lembrou a senha?
          </Link>
        </section>
      </S.Wrapper>
      <span className="backgroundImage"></span>
    </S.Container>
  );
};

export default RecoverPass;
