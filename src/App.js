import { useState } from "react";
import "./global.scss";

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();

  const [segundoValor, setSegundoValor] = useState();

  // criando variáveis para guardar os resultados
  const [resultado, setResultado] = useState();

  // adicionar (e)/(event) para marcar o evento do onChange
  // o e é apenas o onChange, ainda não capturou os dados
  // o .target.value extrai apenas o valor
  // o onChange sempre pega como string, independente do tipo de valor na tag
  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };


  // criando as funções das operações
  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multi = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };
  return (
    <main>
      <h1>Calculadora</h1>
      {/* podemos tirar o type="number" pra tirar o menuzinho de subir e descer o número, e adicionar na lógica que os dados são números */}
      {/* onChange é um evento de mudança (assim como o onClick era um evento de clique) */}
      <input
        type="number"
        placeholder="Insira um número"
        onChange={capturandoPrimeiroValor}
      />
      <input
        type="number"
        placeholder="Insira um número"
        onChange={capturandoSegundoValor}
      />

      {/* criando os botões de operações */}
      <section>
        <button onClick={soma}>+</button>
        <button onClick={subtracao}>-</button>
        <button onClick={multi}>x</button>
        <button onClick={divisao}>/</button>
      </section>

      {/* chamando o resultado */}
      <h3>Resultado: {resultado}</h3>
    </main>
  );
}
