import nodemailer from "nodemailer";

const emailRegistro = async (datos) => {

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
  subject: 'Comprueba tu cuenta',
  text: 'Comprueba tu cuenta en el administrador de pacientes de Veterinaria',
  html: `<p>Hola: ${nombre}, comprueba tu cuenta</p>
  <p>Tu cuenta ya está lista, solo debes comprobarla dando click 
  <a href="${process.env.FRONTEND_URL}/confirmar/${token}"> aquí</a></p>
  <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje.</p>`
});
}

export default emailRegistro;
