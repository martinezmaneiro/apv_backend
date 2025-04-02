import nodemailer from "nodemailer";

const emailOlvidePassword = async (datos) => {

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const { email, nombre, token } = datos;

const info = await transporter.sendMail({
  from: 'Administrador de Pacientes de Veterinaria',
  to: email,
  subject: 'Reestablece tu password',
  text: 'Reestablece tu password',
  html: `<p>Hola: ${nombre}, has solicitado reestablecer tu password.</p>
  <p>Sigue este
  <a href="${process.env.FRONTEND_URL}/olvide-password/${token}"> enlace</a>
  para reestablecer tu password.</p>
  <p>Si tu no solicitaste reestablecer tu password, puedes ignorar este mensaje.</p>`
});
}

export default emailOlvidePassword;
