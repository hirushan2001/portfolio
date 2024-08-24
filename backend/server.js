require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || 'http://localhost:5173'
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  console.log("Received request:", req.body);
  const { name, email, subject, message } = req.body;
 
  console.log("Received request:", { name, email, subject, message });

  // Input validation
  if (!name || !email || !subject || !message) {
    console.log("Validation failed: Missing fields");
    return res.status(400).json({ error: "All fields are required" });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    console.log("Validation failed: Invalid email format");
    return res.status(400).json({ error: "Invalid email format" });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New message: ${subject}`,
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f4f4f4;
            }
            .container {
                background-color: #ffffff;
                border-radius: 5px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                padding: 30px;
            }
            h2 {
                color: #2c3e50;
                border-bottom: 2px solid #3498db;
                padding-bottom: 10px;
                margin-top: 0;
            }
            h3 {
                color: #2980b9;
            }
            p {
                margin-bottom: 15px;
            }
            .label {
                font-weight: bold;
                color: #34495e;
            }
            .message {
                background-color: #ecf0f1;
                border-left: 4px solid #3498db;
                padding: 15px;
                margin-top: 20px;
            }
            .footer {
                margin-top: 20px;
                font-size: 0.8em;
                text-align: center;
                color: #7f8c8d;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>New Contact Form Submission</h2>
            <p><span class="label">From:</span> ${name}</p>
            <p><span class="label">Email:</span> ${email}</p>
            <p><span class="label">Subject:</span> ${subject}</p>
            <h3>Message:</h3>
            <div class="message">
                <p>${message}</p>
            </div>
            <div class="footer">
                <p>This email was sent from your website's contact form.</p>
            </div>
        </div>
    </body>
    </html>
    `,
  };

  try {
    console.log("Attempting to send email...");
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email", details: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('Server is running and ready to handle email requests');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});