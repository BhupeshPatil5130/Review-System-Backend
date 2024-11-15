import express from 'express';
import { createAdmin,createAlumni, createstudent, getAllUsers } from '../Controller/userController.js';
import { createCompany, getAllCompanies } from '../Controller/companyController.js';
import { createReview, getAllReviews } from '../Controller/reviewController.js';
import { likeReviews } from '../Controller/likeController.js';
import { isAdmin } from '../middleware/Middleware.js';


const router = express.Router();



router.post("/admin/create",createAdmin);
router.post("/alumni/create",createAlumni);
router.post("/student/create",createstudent);
router.post("/company/create",isAdmin,createCompany);
router.post("/review/create",createReview);
router.post("/like/add",likeReviews);
router.get("/company/get",getAllCompanies);
router.get("/user/get",getAllUsers);

export default router;