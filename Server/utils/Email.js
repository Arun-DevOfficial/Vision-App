import nodemailer from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

// Get the current file and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure the nodemailer transporter
export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587, // For TLS
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASSWORD, // Your email password
  },
});

// Function to handle email sending
export const handleEmailService = async (to, resetLink, recipients) => {
  try {
    // Read and compile the email template
    const filePath = path.join(__dirname, "..", "template", "template.html");
    const source = fs.readFileSync(filePath, "utf-8");
    const template = handlebars.compile(source);

    // Replace variables in the template
    const replacements = {
      name: recipients,
      resetLink: resetLink,
    };
    const htmlToSend = template(replacements);

    // Send the email
    const info = await transporter.sendMail({
      from: {
        name: "Vision",
        email: process.env.FROM_EMAIL,
      },
      to,
      subject: "Password Recovery Request",
      html: htmlToSend,
    });

    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
