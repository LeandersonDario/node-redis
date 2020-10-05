import Mail from '../lib/Mail';

export default{
  key: 'registrationMail',
  option: {
    dalay:500,
    priority: 3,
    
  },
  async handle({ data }) {
     const {user} = data;

     await Mail.sendMail({
     from: 'Teste <contato02@gmail.com>',
     to: `${user.nome} <${user.email}>`,
     subject: 'cadastro de usuário',
     html: `Ola, ${user.nome}, bem vindo!`
   })
  }
}