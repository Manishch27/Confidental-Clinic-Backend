import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";


// nodemailer setup for smtp server
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
}
)

// popup form endpoint

export const popupForm = async(req,res)=>{
    const {fullName, phone, nearestClinic} = req.body;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "manishchaudhary75059@gmail.com",
        subject: "New CTA form submission",
        text: `Full Name: ${fullName}\n\n Phone Number: ${phone}\n\n Nearest Clinic: ${nearestClinic}` 
    };

    try{
        await transporter.sendMail(mailOptions);
        res.status(200).json({message: "Thank you we'll reach out to you!"});
    } catch(err){
        res.status(500).json({message: "error occured, please try again!", err});
    }
};

// Appointment Form endpoint

export const appointmentForm = async(req, res)=>{
    const {location, doctor, appointmentDate, appointmentTime, visited, fullName, phone, email} = req.body;

    const mailOptions ={
    from: process.env.EMAIL_USER,
    to: "manishchaudhary75059@gmail.com",
    subject: "Attention! Appointment Booked",
    text: `Clinic Location: ${location}\n\n Doctor: ${doctor}\n\n Appointment Date: ${appointmentDate}\n\n Appointment Time: ${appointmentTime}\n\n Visited us before: ${visited}\n\n Full Name: ${fullName}\n\n Phone Number: ${phone} ${email!=undefined?("Email: ", email): ""}`
    };

    try {
        transporter.sendMail(mailOptions);
        res.status(200).json({message: "Your appointment booked successfully!"});
    } catch (err) {
        res.status(500).json({message: "error occured, please try again!", err});
    }

}

// Contact Us form

export const contactForm = async(req, res)=>{
    const {fullName, email, phoneNumber, preferredClinic, subject, message} = req.body;
    console.log(req.body);
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "manishchaudhary75059@gmail.com",
        subject: "New Form submission",
        text: `Full Name: ${fullName}\n\n Phone Number: ${phoneNumber}\n\n preferred Clinic: ${preferredClinic}\n\n subject: ${subject}\n\n message: ${message}\n\n ${email!=undefined? ("Email: ", email): ""}`
    };

    try{

        await transporter.sendMail(mailOptions);
        res.status(200).json({message: "Form submitted successfully!"});

    } catch(err){res.status(500).json({message: "error occured, please try again!", err})};
};