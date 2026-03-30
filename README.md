
  
  
  

# ACADEMIC STAFF APPLICATION SYSTEM
The system allows applicants to apply for academic positions, while admins, managers, and jury members manage announcements, application criteria, document review, and evaluation workflows.
> Academic Staff Application System is a web-based platform developed to manage academic recruitment processes in universities. This project was prepared for Kocaeli University, Department of Information Systems Engineering, TBL331 Software Development Laboratory II.
--------------------------------------------------
## PROJECT OVERVIEW
--------------------------------------------------
  
The main purpose of this project is to digitalize the academic staff application process.
Instead of managing announcements, applications, required documents, jury reports, and final decisions manually, the system provides a centralized and organized platform for all users involved in the process.

The system supports:

   *- academic announcement management*
   *- applicant registration and login*
   *- document upload and application submission*
   *- criteria-based evaluation workflows*
   *- jury assignment and report submission*
   *- final decision tracking and notifications*

  
  
USER ROLES
  

 - Applicant
    - Logs into the system
   - Views available academic announcements
   - Uploads required documents
   - Submits applications
   - Tracks application status

  

 - Admin
   - Creates and edits announcements
   - Manages announcement dates
   - Defines required documents and application conditions
   - Reviews submitted applications

  

 - Manager
   - Defines academic appointment criteria
   - Manages system-level rules
   - Assigns jury members
   - Reviews jury reports
   - Gives the final decision

  

 - Jury Member
   - Reviews applicant documents
   - Evaluates submitted applications
   - Uploads evaluation reports
   - Submits positive or negative decisions

  

## MAIN FEATURES


  

- User authentication and authorization
- Academic announcement creation and management
- Application submission for different academic positions
- Uploading required documents
- Modular criteria management
- Automatic score calculation
- Jury assignment and evaluation workflow
- PDF document generation
- Notification support
- Application result tracking

  

--------------------------------------------------

## ACADEMIC POSITION TYPES

--------------------------------------------------

  

The system supports different academic staff categories such as:
   - Doctor Faculty Member
   - Associate Professor
   - Professor

  

> Each category can have different application criteria and document
> requirements.

  

--------------------------------------------------
## TECHNOLOGIES USED
--------------------------------------------------

  

Frontend:
- React.js
- React Router
- CSS

  

Backend:
- Node.js
- Express.js

  

Database:
- MongoDB or PostgreSQL

  

Authentication:
- JWT

  

Storage:
- Firebase Storage or AWS S3

  

Other Possible Integrations:

- e-Devlet API
- Nufus Mudurlugu API
- Email/ notification services
  



  
--------------------------------------------------

## INSTALLATION

--------------------------------------------------

  

1. Clone the repository
    git clone https://github.com/your-username/academic-staff-application-system.git

  

2. Enter the project folder

  

    cd academic-staff-application-system

  

3. Install dependencies

  

    npm install

  

--------------------------------------------------

## RUNNING THE PROJECT

--------------------------------------------------

  

To start the frontend in development mode:

  

    npm start

  

The application will run at:

  

    http://localhost:3000

  

To create a production build:

  

    npm run build

  

--------------------------------------------------

## BACKEND SETUP

--------------------------------------------------

  



  

    cd backend
    npm install
    npm run dev

  

Example environment variables:

  

    PORT=5000
    
    MONGO_URI=your_database_url
    
    JWT_SECRET=your_secret_key
    
    FIREBASE_API_KEY=your_key

  

Replace these example values with your real backend configuration.

  


- Some integrations listed in the requirements may be planned features if they are not fully implemented yet.

- The system is designed with a modular structure so that academic criteria can be updated in the future.

  


