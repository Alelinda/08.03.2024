import React from 'react';
import './App.css'
function App(){
  const [nome,setNome] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [sobrenome,setSobrenome] = React.useState('');
  const [CPF,setCPF] = React.useState('');
  const [senha,setSenha] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    //preventDefault impede o comportamento padrão de recarregar a pagina ao clicar no botão.

    alert(`Nome: ${nome}, Email: ${email}, Sobrenome: ${sobrenome},CPF: ${CPF},Senha: ${senha}`)
    //eniva uma mensagem de erro
  };

  return(
    <form onSubmit={handleSubmit}>
      <h1> Formulário</h1>
      <label htmlFor="nome">Nome:</label>
      <input type="text" name="nome" id="nome" value={nome}
      onChange={(e) => setNome(e.target.value)}/>
      <br/>

      <label htmlFor="sobrenome">Sobrenome:</label>
      <input type="text" name="sobrenome" id="sobrenome" value={sobrenome}
      onChange={(e) => setSobrenome(e.target.value)}/>
      <br/>

      <label htmlFor="CPF">CPF:</label>
      <input type="text" name="CPF" id="CPF" value={CPF}
      onChange={(e) => setCPF(e.target.value)}/>
      <br/>

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" value={email}
      onChange={(e) => setEmail(e.target.value)}/>
      <br/>

      <label htmlFor="senha">Senha:</label>
      <input type="password" name="senha" id="senha" value={senha}
      onChange={(e) => setEmail(e.target.value)}/>
      <br/>

      <div className='check'>
        <input type="checkbox" name="checkbox" id="check"/>
        <label htmlFor="checkbox"> Você aceita nossos termos?</label>
      </div>

      <button type="submit">Enviar</button>


    </form>
  );

 }
    
 export default App;