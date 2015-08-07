var bio = {
    "name": "Abhinav Thukral",
    "role": "Web Developer",
    "pictureURL": "images/me.png",
    "welcomeMessage": "Hi, I am a Web Developer based out of Ottawa",
    "contacts": {
        "mobile": "613-555-5555",
        "email": "abhinav@abhinavthukral.com",
        "github": "abhinavthukral28",
        "twitter": "@thukralabhinav",
        "location": "Ottawa, Canada"
    },
    "skills": ["Programming", "JavaScript", "HTML5", "CSS", "Responsive Design", "Java"]
};

var work = {
    "jobs": [
        {
            "employer": "Espial Group Inc",
            "title": "Software Developer Coop",
            "location": "Ottawa, Canada",
            "dates": "January 2014 to August 2014",
            "description": "Customized ‘Jasmine’ JavaScript Unit Testing Framework to as per the needs of the company leading to automation of testing process of JavaScript Middleware - Extended the functionality of company’s JavaScript Middleware API - Wrote programs in Java to automate the process of download of simulation data from the internet"
        },
        {
            "employer": "Bright Land School",
            "title": "Systems Administrator",
            "location": "Amritsar, India",
            "dates": "July 2013 to August 2013, May 2015 to July 2015",
            "description": "Installed a Linux based Virtual Private Server to host school’s growing web services - Applied HTML and CSS skills to redesign the school website (In Progress) - Trained the staff members to use the new school learning management software"
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "Carleton University",
            "location": "Ottawa, Canada",
            "degree": "Bachelor of Computer Science",
            "majors": [
                "Computer Science"
            ],
            "dates": "September 2011 to Present",
            "url": "http://carleton.ca"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Developer Nanodegree",
            "school": "Udacity",
            "dates": "May 2015 to Present",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};

var projects = {
    "projects": [

        {
            "title": "Homey - Winner of Best Intel Edison App at U of T Hacks 2015",
            "dates": "January 29, 2015 to February 1, 2015",
            "description": " Designed a Home Monitoring System using Intel Edison Platform - Used JavaSctipt collect data from various sensors - Designed a companion Pebble Smart Watch App that received the data from sensors using AJAX - Effectively used NodeJS with Express Framework to transmit the sensor data to the companion Android and Pebble app",
            "images": [],
            "url": "http://github.com/abhinavthukral28/Homey"
        },
        {
            "title": "CarletonRobotics.com",
            "dates": "September 2013 to August 2014",
            "description": "Developed Website for Carleton University Robotics Club",
            "images": [],
            "url": "http://carletonrobotics.com"
        }
    ]
};
projects.display = function () {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#",projects.projects[project].url);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDated = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDated);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);
    };
};

education.display = function () {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        var formattedSchoolDates= HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        for (var i in education.schools[school].majors) {
            var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors[i]);
            $(".education-entry:last").append(formattedSchoolMajors);
        }
    }

    $("#education").append(HTMLonlineClasses);
    for(var c in education.onlineCourses){
        $("#education").append(HTMLschoolStart);
        var formattedOnlineName = HTMLonlineTitle.replace("%data%",education.onlineCourses[c].title).replace("#", education.onlineCourses[c].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[c].school);
        $(".education-entry:last").append(formattedOnlineName + formattedOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[c].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineUrl= HTMLonlineURL.replace("%data%", education.onlineCourses[c].url);
        $(".education-entry:last").append(formattedOnlineUrl);

    }
}
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedContact = [
    HTMLemail.replace("%data%", bio.contacts.email),
    HTMLgithub.replace("%data%", bio.contacts.github),
    HTMLtwitter.replace("%data%", bio.contacts.twitter),
    HTMLlocation.replace("%data%", bio.contacts.location)

];
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPic);
$("#header").append(formattedWelcome);
$("#topContacts").append(formattedContact);
$("#footerContacts").append(formattedContact);
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    };
};


work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (job in work.jobs) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".work-entry:last").append(formattedEmployer + formattedWorkTitle);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedWorkLocation);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedWorkDates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedWorkDescription);
    };
};
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

