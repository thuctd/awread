import nodemailer from 'nodemailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NodeMailerAddon {
  transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'pro10.emailserver.vn',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'info@awread.vn', // generated ethereal user
        pass: 'Awread2020', // generated ethereal password
      },
    });
  }

  async send(content, mailTo, title = 'Khôi phục mật khẩu tài khoản awread.vn') {
    // send mail with defined transport object
    const info = await this.transporter.sendMail({
      from: 'info@awread.vn', // sender address
      to: mailTo, // list of receivers
      subject: title, // Subject line
      // text: "Hello world?", // plain text body
      // html: "<b>Hello world?</b>", // html body
      text: content,
      html: content,
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    return info.messageId;
  }
}
