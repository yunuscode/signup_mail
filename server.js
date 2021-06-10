const nodemailer = require("nodemailer");

async function main() {

    let testAccount = await nodemailer.createTestAccount();

    const transport = await nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
    })

    const info = await transport.sendMail({
        from: `"Kimdir" ${testAccount.user}`,
        to: `yunuzmuhammad1@gmail.com`,
        subject: "Test uchun yuborildi",
        text: "test uchun yuborildi"
    })

    console.log(info);
}

main()