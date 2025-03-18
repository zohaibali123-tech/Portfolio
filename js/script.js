$(document).ready(function () {

    /*Skills Data*/
    function loadSkills() {
        $(".skills-grid").html("");

        const skills = [
            {
                icon: "fab fa-html5",
                skill_name: "HTML",
                color_code: "#e34c26",
                proficiency_level: 95
            },
            {
                icon: "fab fa-css3-alt",
                skill_name: "CSS",
                color_code: "#1572b6",
                proficiency_level: 80
            },
            {
                icon: "fab fa-js-square",
                skill_name: "JavaScript",
                color_code: "#f7df1e",
                proficiency_level: 60
            },
            {
                icon: "fas fa-sync-alt",
                skill_name: "AJAX",
                color_code: "#61dafb",
                proficiency_level: 50
            },
            {
                icon: "fab fa-js",
                skill_name: "jQuery",
                color_code: "#0769ad",
                proficiency_level: 40
            },
            {
                icon: "fab fa-bootstrap",
                skill_name: "BootStrap",
                color_code: "#563d7c",
                proficiency_level: 70
            },
            {
                icon: "fab fa-php",
                skill_name: "PHP",
                color_code: "#777bb3",
                proficiency_level: 80
            },
            {
                icon: "fas fa-puzzle-piece",
                skill_name: "OOP",
                color_code: "#555",
                proficiency_level: 50
            },
            {
                icon: "fas fa-database",
                skill_name: "MySQL",
                color_code: "#00758f",
                proficiency_level: 75
            },
        ];

        if (skills.length === 0) {
            $(".skills-grid").append("<p>No skills found.</p>");
        } else {
            $.each(skills, function(key, skill) {
                $(".skills-grid").append(`
                    <div class="col-md-4 text-center mb-4 skill-card">
                        <i class="${skill.icon}" style="font-size: 50px; color: ${skill.color_code};"></i>
                        <h3>${skill.skill_name}</h3>
                        <div class="progress" style="height: 20px;">
                            <div class="progress-bar" role="progressbar" 
                                style="width: ${skill.proficiency_level}%; background-color: ${skill.color_code};" 
                                aria-valuenow="${skill.proficiency_level}" 
                                aria-valuemin="0" 
                                aria-valuemax="100">
                                ${skill.proficiency_level}%
                            </div>
                        </div>
                    </div>
                `);
            });
        }
    }

    /*Load skills on page load*/
    loadSkills();

    /*Sample data for education and experience*/
    const educationData = [
        {
            Degree: "Bachelor of Science in Computer Science",
            Institution: "University of Sindh",
            Start_date: "2020-01-1",
            End_date: "2023-12-31",
            Grade: "2.77 CGPA",
            Certificate: "PassCertificate.jpg"
        },
        {
            Degree: "Intermediate",
            Institution: "S.A.L Degree College Mirpurkhas",
            Start_date: "2016-08-12",
            End_date: "2018-05-20",
            Grade: "C",
            Certificate: ""
        },
        {
            Degree: "Matric",
            Institution: "Govt Boys High School Mirwah Gorchani",
            Start_date: "2014-08-19",
            End_date: "2016-04-29",
            Grade: "B",
            Certificate: "Matric.jpg"
        }
    ];

    const experienceData = [
        {
            Job_title: "Web Development Intern",
            Company: "Hidaya Institute of Science and Technology",
            Location: "Jamshoro Sindh Pakistan",
            Start_date: "2024-02-01",
            End_date: "2024-05-31"
        }
    ];

    /*Load education data dynamically*/
    function loadEducation() {
        const educationContainer = $("#education");
        educationContainer.html("");
        if (educationData.length === 0) {
            educationContainer.append("<p>No education data found.</p>");
        } else {
            educationData.forEach(function(education) {
                educationContainer.append(`
                    <div class="education-card">
                        <h3>${education.Degree}</h3>
                        <p><strong>Institution:</strong> ${education.Institution}</p>
                        <p><strong>Duration:</strong> ${education.Start_date} to ${education.End_date}</p>
                        <p><strong>Grade:</strong> ${education.Grade}</p>
                        <a href="images/${education.Certificate}" target="_blank">View Certificate</a>
                    </div>
                `);
            });
        }
    }

    /*Load experience data dynamically*/
    function loadExperience() {
        const experienceContainer = $("#experience");
        experienceContainer.html("");
        if (experienceData.length === 0) {
            experienceContainer.append("<p>No experience data found.</p>");
        } else {
            experienceData.forEach(function(experience) {
                experienceContainer.append(`
                    <div class="experience-card">
                        <h3>${experience.Job_title}</h3>
                        <p><strong>Company:</strong> ${experience.Company}</p>
                        <p><strong>Location:</strong> ${experience.Location}</p>
                        <p><strong>Duration:</strong> ${experience.Start_date} to ${experience.End_date}</p>
                    </div>
                `);
            });
        }
    }

    /*Load data when the page is ready*/
    loadEducation();

    loadExperience();

    /*Sample project data*/
    const projectsData = [
        {
            image: "onlinebloggingapplication.png",
            project_title: "Online Blogging Application",
            description: "A blog (Short for Web log) is a type of website which has posts (or entries) appearing in reverse chronological order (the most recent post appears first). You can think of it as an online journal or diary, although blogs are used for much more now, like online journalism. A blog is a frequently updated online personal journal or diary. It is a place to express yourself to the world. A place to share your thoughts. A blogger is someone who blogs, or writes content for a blog. Blogging is the act of writing a post for a blog. This Software Application may consist of two types of users. Administrator: Administrator is the controller of all the users and maintaining all content in this site. User: Registered person in this site.",
            technologies: "HTML CSS JAVASCRIPT AJAX BOOTSTRAP PHP and MySQL",
            link: "https://github.com/zohaibali123-tech/21459_Zohaib_Ali"
        },
        {
            image: "mhbs.png",
            project_title: "Marriage Hall Booking System",
            description: "This is a booking system designed with the busy schedules during wedding times in mind. With this system, users can book a hall for their event. Additionally, they can arrange chairs according to the number of guests. If users want to manage catering as well, there are separate third-party links available for that purpose",
            technologies: "HTML CSS JAVASCRIPT BOOTSTRAP PHP and MySQL",
            link: "https://github.com/zohaibali123-tech/MHBS"
        },
        {
            image: "groupchatapp.png",
            project_title: "Group Chat Application",
            description: "This is a chat application similar to WhatsApp groups, where all users can chat together in a group. The login panel is implemented, and users can log in to the chat group using their email and password. The signup feature is still pending, as well as the message editing option",
            technologies: "HTML CSS JAVASCRIPT AJAX PHP and MySQL",
            link: "https://github.com/zohaibali123-tech/AJAX_Chat_Application"
        }
    ];

    /*Function to load projects data dynamically*/
    function loadProjects() {
        const projectsContainer = $("#projects");
        projectsContainer.html("");

        const projectsGrid = $("<div class='projects-grid'></div>");

        if (projectsData.length === 0) {
            projectsContainer.append("<p>No projects found.</p>");
        } else {
            projectsData.forEach(function(project) {
                projectsContainer.append(`
                    <div class="project-card">
                        <img src="images/${project.image}" alt="${project.project_title}">
                        <h3>${project.project_title}</h3>
                        <p>${project.description}</p>
                        <p><strong>Technologies:</strong> ${project.technologies}</p>
                        <a href="${project.link}" target="_blank">View Project</a>
                    </div>
                `);
            });
            projectsContainer.append(projectsGrid);
        }
    }

    /*Load projects data when the page is ready*/
    loadProjects();

});
