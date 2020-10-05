import passwordGenerator from 'password-generator';
import Queue from '../lib/Queue';

import Queue from '../lib/Queue';

export default {
  async store(req, res) {
    const {nome, email } = req.bady;

    const user = {
      nome, 
      email,
      password: passwordGenerator(15, false)
    }       
    
    await Queue.add('registrationMail', { user})

    return res.json(user);
  }
}