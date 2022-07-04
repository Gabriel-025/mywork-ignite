import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Group from "../../assets/Group.png";
import { Logo } from "../../components/Svgs/Logo";
import { useCreateSubcriberMutation } from "../../graphql/generated";

export function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubcriber, { loading }] = useCreateSubcriberMutation();

  async function HandleSubcreible(event: FormEvent) {
    event?.preventDefault();

    await createSubcriber({
      variables: {
        name,
        email,
      },
    });
    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-cover bg-login bg-no-repeat flex  flex-col items-center px-5">
      <div className="max-w-[1100px] w-full flex flex-col justify-between  items-center mt-12 mx-auto md:flex-row  md:items-center">
        <div className="max-w-[660px] text-start md:text-start px-8  ">
          <div className="flex flex-col items-center w-full md:items-start ">
            <Logo />
          </div>
          <h1 className="mt-5 text-[2.35rem] text-start leading-tight md:text-start  md:text-[2.5rem]">
            Construa uma
            <strong className="text-blue-500"> aplicação completa</strong>, do
            zero, com
            <strong className="text-blue-500"> React</strong>
          </h1>
          <p className="mt-2 text-gray-200 leading-relaxed  text-start  md:text-start">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded w-[90%]  mt-5 md:mt-0  md:w-fit">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            onSubmit={HandleSubcreible}
            className="flex flex-col gap-2 w-full"
          >
            <input
              onChange={(event) => setName(event.target.value)}
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
            />
            <input
              onChange={(event) => setEmail(event.target.value)}
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu email"
            />
            <button
              disabled={loading}
              type="submit"
              className="disabled:cursor-not-allowed disabled:opacity-90 mt-4 bg-green-700 uppercase py-4 rounded font-bold text-sm hover:bg-green-500"
            >
              {loading ? (
                <div className="flex-1 flex items-center justify-center ">
                  <div className="border-[4px] border-zinc-500 border-l-green-600 border-t-green-600 rounded-[50%] w-[25px] h-[25px] animate-spin "></div>
                </div>
              ) : (
                "Garantir minha vaga"
              )}
            </button>
          </form>
        </div>
      </div>
      <img
        src={Group}
        className="my-2 px-5 opacity-[0.55] md:px-0 md:opacity-[1]"
      />
    </div>
  );
}
