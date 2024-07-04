# NodeJS-AssignMentors-Task

This documentation provides details about the Assign-Mentor API, implemented using Node.js and Express. This API allows you to manage mentors and students, assign mentors to students, change mentors, and retrieve mentor-student relationships.

1. **POST Create Mentor**

URL: https://day39-9b1f.onrender.com/api/mentor/create

Description: Creates a new mentor with details about the mentor.

Method: POST


2. **POST Create Student**

URL: https://day39-9b1f.onrender.com/api/student/create

Description: Creates a new student with details about the student.

Method: POST

3. **GET Display All Mentors**

URL: https://day39-9b1f.onrender.com/api/mentor/all-mentors

Description: Retrieves and displays the list of all mentors.

Method: GET

4. **GET Display all Students**

URL: https://day39-9b1f.onrender.com/api/student/all-students

Description: Retrieves and displays the list of all students.

Method: GET

5. **PUT Assign students to mentor**

URL: https://day39-9b1f.onrender.com/api/mentor/assign/6686357d9e7aade64f439f54

Description: Assigns multiple students to a specific mentor.

Method: PUT

6. **PUT Change mentor for one student**

URL: https://day39-9b1f.onrender.com/api/mentor/change-mentor/6686360c9e7aade64f439f56

Description: Changes the mentor for a specific student and records the previous mentor.

Method: PUT

7. **GET Display students of the mentor**

URL: https://day39-9b1f.onrender.com/api/mentor/students/668636859e7aade64f439f5a

Description: Retrieves and displays the list of all students assigned to a specific mentor.

Method: GET

8. **GET Previous Mentor**

URL: https://day39-9b1f.onrender.com/api/mentor/previous-mentors/6686360c9e7aade64f439f56

Description: Retrieves and displays the list of previous mentors for a specific student.

Method: GET


**All the APIs are well documented using Postman Documentation and Published -** [published Postman API documentation link](https://documenter.getpostman.com/view/34880470/2sA3dygADW)

**Deployed my server in Render -** [Deployed API Render URL](https://day39-9b1f.onrender.com)

**Note: Since I'm deployed the apis in render's free tier, The initial request is taking time, Please wait little longer for initial request**