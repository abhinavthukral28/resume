var bio = {
    "name": "Abhinav Thukral",
    "role": "Web Developer",
    "pictureURL": "images/me.png",
    "welcomeMessage": "Hi, I am a Web Developer based out of Ottawa",
    "contacts":{
        "mobile": "613-555-5555",
        "email": "abhinav@abhinavthukral.com",
        "github": "abhinavthukral28",
        "twitter": "@thukralabhinav",
        "location": "Ottawa, Canada"
    },
    "skills": ["programming", "JavaScript", "HTML5", "CSS", "Responsive Design", "Java"]
};

var work = {
    "jobs": [
        {
            "employer": "Espial Group Inc",
            "title": "Software Developer Coop",
            "location": "Ottawa",
            "dates": "January 2014 to August 2014",
            "description": "• Customized ‘Jasmine’ JavaScript Unit Testing Framework to as per the needs of the company leading to automation of testing process of JavaScript Middleware - Extended the functionality of company’s JavaScript Middleware API - Wrote programs in Java to automate the process of download of simulation data from the internet"
        },
        {
            "employer": "Bright Land School",
            "title": "Systems Administrator",
            "location": "Amritsar",
            "dated": "July 2013 to August 2013, May 2015 to July 2015",
            "description": "Installed a Linux based Virtual Private Server to host school’s growing web services - Applied HTML and CSS skills to redesign the school website (In Progress) - Trained the staff members to use the new school learning management software"
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "Carleton University",
            "location": "Ottawa",
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
            "title": "Front End D eveloper Nanodegree",
            "school": "Udacity",
            "dates": "May 2015 to Present",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};

var projects = [
    {
        "title": "Homey - Winner of Best Intel Edison App at U of T Hacks 2015",
        "dates": "January 29, 2015 to February 1, 2015",
        "description": " Designed a Home Monitoring System using Intel Edison Platform - Used JavaSctipt collect data from various sensors - Designed a companion Pebble Smart Watch App that received the data from sensors using AJAX - Effectively used NodeJS with Express Framework to transmit the sensor data to the companion Android and Pebble app",
        "images": []
    },
    {
        "title": "CarletonRobotics.com",
        "dates": "September 2013 to August 2014",
        "description": "Developed Website for Carleton University Robotics Club",
        "images": []
    }
];

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
if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    for(var skill in bio.skills){
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
}
$("#workExperience").append(HTMLworkStart);
for(job in work.jobs){
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    $("#workExperience").append(formattedEmployer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $("#workExperience").append(formattedWorkTitle);

}



