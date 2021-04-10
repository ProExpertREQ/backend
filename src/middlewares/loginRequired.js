import jwt from 'jsonwebtoken';

require('dotenv').config();

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Não autorizado. Você precisa estar logado.'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    const { matricula, email } = dados;

    req.userMatricula = matricula;
    req.userEmail = email;

    return next();
  } catch (e) {
    console.log(e);

    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
