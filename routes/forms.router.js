import express from 'express';
import {popupForm} from "../controllers/forms.controller.js";
// import { appointmentForm } from '../controllers/forms.controller.js';
import { contactForm } from '../controllers/forms.controller.js';

const formsRouter = express.Router();

formsRouter.post("/popup-form", popupForm);
// formsRouter.post("/appointment-form", appointmentForm);
formsRouter.post("/contact-form", contactForm);


export default formsRouter;