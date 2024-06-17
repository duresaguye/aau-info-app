import { images } from '..';


const { teacher1, teacher2, teacher3, teacher4, aaitlogo,CEBS, CNS, school2} =
  images;
export const welcomeScreenData = {
  title: `Welcome to AAU Hub`,
  subtitle: `Your Gateway to AAU's World`,
};
export const teacherData = [
  {
    name: 'Dr.Tasew',
    subject: 'Biology',
    image: teacher1,
  },
  {
    name: 'Dr. wondwossen',
    subject: 'Chemistry',
    image: teacher2,
  },
  {
    name: 'Dr.darge',
    subject: 'information science',
    image: teacher4,
  },
  {
    name: 'Dr. Aray',
    subject: 'Physics',
    image: teacher3,
  },
];

export const institutionData = 
    [
  {
    "id": 1,
    "name": "Addis Ababa Institute of Technology AAIT",
    "description": " Leading the way in Ethiopian engineering since 1965!  Undergraduate & graduate programs in Civil, Electrical, Mechanical, Chemical & more. Fosters innovation & research to power the nation's future.",
    image: aaitlogo,
    "location": "5 Kilo",
    "map_link": "\u003Ciframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2559769273166!2d38.7607419737527!3d9.040398788812999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f642ba9e021%3A0x2321687a606863f3!2sAddis%20Ababa%20Institute%20of%20Technology!5e0!3m2!1sen!2set!4v1711268759693!5m2!1sen!2set\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"\u003E\u003C/iframe\u003E",
    "stream": "Natural",
        "gpa": "3.16",
    "website": "https://portal.aait.edu.et/Web/Guest",
    "Telegram": null,
    "departments": [
      {
        "id": 1,
        image : aaitlogo,
        "name": "Biomedical Engineering",
        "description": "Our program aims to train Biomedical Engineers adept in designing, developing, installing, operating, and maintaining medical equipment. Graduates will contribute to enhancing the healthcare system, conducting research tailored to the country's needs in the field of biomedical engineering.",
        "GeneralObjectives": "Train Biomedical Engineers who can design, develop, install, operate, and maintain biomedical equipments and improve healthcare system in the country and  Train Biomedical Engineers to carry out research in the areas of biomedical engineering which are particularly relevant to the needs of the Country.",
        "gpaEntry": "86.05",
        "gpaPercentage": 100,
      
    "Admissionrequirements": {
    "Regular": "Successful completion of the common first semester pre-engineering program, subject to possible screening on the basis of academic performance.",
    "Evening": "The admission criterion for extension program is similar to other engineering extension programs at the AAiT and in addition to this common requirement, the applicant must have been employed by a healthcare institution (hospital, clinic, etc) as a biomedical technician for a minimum of two years.",
    "Advanced Standing": "In both the regular and evening programs, limited seats are available for applicants with Diploma in Biomedical Technology and two years of relevant experience. The course list for exemption is prepared on a case by case basis depending of the courses taken in a prior study program."
  },
        "Years": 5,
        "freshmanSemesters": 3,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BSc",
        "freshman_office": "Pre-Engineering | AAiT",
        "college_name": "AAiT",
        "stream": "Natural",
        "List of Modules and Courses": {
          "General Education Modules": [
            {
              "Module": "EnLa–M1013",
              "Courses": [
                { "Course Code": "EnLa1011", "Course Title": "Communicative English Skills", "ECTS": 5, "Cr.hr": 3 },
                { "Course Code": "EnLa1012", "Course Title": "Basic Writing Skills", "ECTS": 5, "Cr.hr": 3 }
              ]
            },
            {
              "Module": "CESt–M1023",
              "Courses": [
                { "Course Code": "CESt1023", "Course Title": "Civics and Ethical Education", "ECTS": 5, "Cr.hr": 3 }
              ]
            },
            {
              "Module": "Phil–M1033",
              "Courses": [
                { "Course Code": "Phil1033", "Course Title": "Introduction to Logic", "ECTS": 5, "Cr.hr": 3 }
              ]
            }
          ],
          "Basic Engineering Modules": [
            {
              "Module": "GEng–M1043",
              "Courses": [
                { "Course Code": "Math-1041", "Course Title": "Applied Mathematics I", "ECTS": 7, "Cr.hr": 4 },
                { "Course Code": "Math-1042", "Course Title": "Applied Mathematics II", "ECTS": 7, "Cr.hr": 4 }
              ]
            },
            {
              "Module": "GEng–M1053",
              "Courses": [
                { "Course Code": "CEng-1051", "Course Title": "Engineering Mechanics I (Statics)", "ECTS": 6, "Cr.hr": 3 },
                { "Course Code": "MEng-1052", "Course Title": "Engineering Mechanics II (Dynamics)", "ECTS": 6, "Cr.hr": 3 }
              ]
            },
            {
              "Module": "GEng-M1063",
              "Courses": [
                { "Course Code": "GEng-1061", "Course Title": "Introduction to Engineering Profession", "ECTS": 2, "Cr.hr": 1 },
                { "Course Code": "MEng-1062", "Course Title": "Engineering Drawing", "ECTS": 6, "Cr.hr": 3 }
              ]
            }
          ],
          "Support Modules": [
            {
              "Module": "BMED-M2072",
              "Courses": [
                { "Course Code": "ECEG-1071", "Course Title": "Circuit Theory", "ECTS": 6, "Cr.hr": 4 },
                { "Course Code": "ECEG-2072", "Course Title": "Electronic Devices and Applications", "ECTS": 6, "Cr.hr": 4 }
              ]
            },
            {
              "Module": "BMED-M2082",
              "Courses": [
                { "Course Code": "BMED-2080", "Course Title": "Workshop Practice", "ECTS": 5, "Cr.hr": 3 }
              ]
            },
            {
              "Module": "BMED-M2092",
              "Courses": [
                { "Course Code": "BMED-2091", "Course Title": "Introduction to Computing", "ECTS": 5, "Cr.hr": 3 },
                { "Course Code": "Math-2092", "Course Title": "Applied Mathematics III", "ECTS": 7, "Cr.hr": 4 },
                { "Course Code": "BMED-2093", "Course Title": "Computational Methods", "ECTS": 4, "Cr.hr": 2 },
                { "Course Code": "BMED-2094", "Course Title": "Probability and Statistics", "ECTS": 4, "Cr.hr": 2 }
              ]
            },
            {
              "Module": "BMED-M3102",
              "Courses": [
                { "Course Code": "ECEG-3101", "Course Title": "Logic Circuits and Computer Design", "ECTS": 6, "Cr.hr": 4 },
                { "Course Code": "ECEG-3102", "Course Title": "Microcomputers and Interfacing", "ECTS": 5, "Cr.hr": 3 }
              ]
            },
            {
              "Module": "BMED-M3112",
              "Courses": [
                { "Course Code": "ECEG-3111", "Course Title": "Electronics I", "ECTS": 6, "Cr.hr": 4 },
                { "Course Code": "ECEG-3112", "Course Title": "Electronics II", "ECTS": 6, "Cr.hr": 4 }
              ]
            },
            {
              "Module": "BMED-M3122",
              "Courses": [
                { "Course Code": "BMED-3120", "Course Title": "Thermodynamics", "ECTS": 5, "Cr.hr": 3 }
              ]
            },
            {
              "Module": "BMED-M3132",
              "Courses": [
                { "Course Code": "ECEG-3130", "Course Title": "Instrumentation Engineering", "ECTS": 5, "Cr.hr": 3 }
              ]
            },
            {
              "Module": "BMED-M3142",
              "Courses": [
                { "Course Code": "ECEG-3140", "Course Title": "Electromagnetics and Electrical Machines", "ECTS": 5, "Cr.hr": 3 }
              ]
            },
            {
              "Module": "BMED-M3152",
              "Courses": [
                { "Course Code": "ECEG-3150", "Course Title": "Signals and Systems", "ECTS": 5, "Cr.hr": 3 }
              ]
            },
            {
              "Module": "BMED-M4162",
              "Courses": [
                { "Course Code": "ECEG-4160", "Course Title": "Data Structures & OO Programming", "ECTS": 5, "Cr.hr": 3 }
              ]
            },
            {
              "Module": "BMED-M4172",
              "Courses": [
                { "Course Code": "ECEG-4170", "Course Title": "Control Engineering", "ECTS": 5, "Cr.hr": 3 }
              ]
            },
            {
              "Module": "BMED-M5182",
              "Courses": [
                { "Course Code": "MEng-5180", "Course Title": "Quality Management", "ECTS": 5, "Cr.hr": 3 }
              ]
            },
            {
              "Module": "BMED-M5192",
              "Courses": [
                { "Course Code": "BMED-5190", "Course Title": "Research Methods and Presentation", "ECTS": 5, "Cr.hr": 3 }
              ]
            },
            {
              "Module": "BMED-M5202",
              "Courses": [
                { "Course Code": "GEng-5201", "Course Title": "Engineering and Medical Ethics", "ECTS": 2, "Cr.hr": 1 },
                { "Course Code": "GEng-5202", "Course Title": "Entrepreneurship", "ECTS": 5, "Cr.hr": 3 }
              ]
            }
          ],
          "Core Modules": [
            {
              "Module": "BMED-M2211",
              "Courses": [
                { "Course Code": "Anat-1211", "Course Title": "Human Anatomy", "ECTS": 4, "Cr.hr": 2 },
                { "Course Code": "Phy-2212", "Course Title": "Human Physiology", "ECTS": 4, "Cr.hr": 2 },
                { "Course Code": "Chem-2213", "Course Title": "Fundamentals of Bio-Chemistry", "ECTS": 5, "Cr.hr": 3 },
                { "Course Code": "Biol-2214", "Course Title": "Cell Biology and Genetics", "ECTS": 4, "Cr.hr": 2 }
              ]
            },
            {
              "Module": "BMED-M2221",
              "Courses": [
                { "Course Code": "Phys-2221", "Course Title": "Bio-physics", "ECTS": 5, "Cr.hr": 3 },
                { "Course Code": "Phys-2222", "Course Title": "Bio-optics", "ECTS": 5, "Cr.hr": 3 },
                { "Course Code": "Phys-2223", "Course Title": "Medical Radiation Physics", "ECTS": 5, "Cr.hr": 3 },
                { "Course Code": "BMED-2224", "Course Title": "Biomechanics", "ECTS": 5, "Cr.hr": 3 }
              ]
            },
            {
              "Module": "BMED-M3231",
              "Courses": [
                { "Course Code": "BMED-3231", "Course Title": "Biomaterials", "ECTS": 5, "Cr.hr": 3 },
                { "Course Code": "BMED-3232", "Course Title": "Biofluid Mechanics and Bio-transport", "ECTS": 4, "Cr.hr": 2 }
              ]
            },
            {
              "Module": "BMED-M3241",
              "Courses": [
                { "Course Code": "BMED-3240", "Course Title": "Therapeutic Devices and Systems", "ECTS": 5, "Cr.hr": 3 }
              ]
            },
            {
              "Module": "BMED-M3251",
              "Courses": [
                { "Course Code": "BMED-3250", "Course Title": "Biomedical Engineering", "ECTS": 5, "Cr.hr": 3 }
              ]
            },
            {
              "Module": "BMED-M4261",
              "Courses": [
                { "Course Code": "BMED-4261", "Course Title": "Biomedical Instrumentation & Processing", "ECTS": 6, "Cr.hr": 4 },
                { "Course Code": "BMED-4262", "Course Title": "Biomedical Imaging Systems", "ECTS": 5, "Cr.hr": 3 }
              ]
            },
            {
              "Module": "BMED-M4271",
              "Courses": [
                { "Course Code": "BMED-4271", "Course Title": "Digital Signal Processing", "ECTS": 5, "Cr.hr": 3 },
                { "Course Code": "BMED-5272", "Course Title": "Digital Image Processing", "ECTS": 5, "Cr.hr": 3 }
              ]
            },
            {
              "Module": "BMED-M4281",
              "Courses": [
                { "Course Code": "BMED-4280", "Course Title": "Practical Attachment", "ECTS": 30 }
              ]
            },
            {
              "Module": "BMED-M4291",
              "Courses": [
                { "Course Code": "BMED-4291", "Course Title": "Biomedical Design I", "ECTS": 4, "Cr.hr": 2 },
                { "Course Code": "BMED-5292", "Course Title": "Biomedical Design II", "ECTS": 4, "Cr.hr": 2 }
              ]
            },
            {
              "Module": "BMED-M5301",
              "Courses": [
                { "Course Code": "BMED-5300", "Course Title": "Healthcare Technology Management", "ECTS": 5, "Cr.hr": 3 }
              ]
            },
            {
              "Module": "BMED-M5311",
              "Courses": [
                { "Course Code": "BMED-5310", "Course Title": "Medical Safety and Regulation", "ECTS": 5, "Cr.hr": 3 }
              ]
            },
            {
              "Module": "BMED-M5321",
              "Courses": [
                { "Course Code": "BMED-5320", "Course Title": "B.Sc. Thesis", "ECTS": 12, "Cr.hr": 6 }
              ]
            }
          ],
          "Elective Modules": [
            {
              "Module Set I": [
                { "Course Code": "BMED-5331", "Course Title": "Hospital Engineering", "ECTS": 5, "Cr.hr": 3 },
                { "Course Code": "BMED-5332", "Course Title": "Health Informatics and Telemedicine", "ECTS": 5, "Cr.hr": 3 },
                { "Course Code": "BMED-5333", "Course Title": "Database Systems & Software Engineering", "ECTS": 5, "Cr.hr": 3 }
              ]
            },
            {
              "Module Set II": [
                { "Course Code": "BMED-5341", "Course Title": "Rehabilitation Eng’g Assistive Technology", "ECTS": 5, "Cr.hr": 3 },
                { "Course Code": "BMED-5342", "Course Title": "Biomedical Modeling & Simulation", "ECTS": 5, "Cr.hr": 3 }
              ]
            }
          ]
        }
  },
  {
        "id": 2,
    "name": "Chemical Engineering",
        "description": "Our program fosters deep understanding of chemical engineering principles, hands-on experience, and proficiency in modern tools. Graduates excel in problem-solving, communication, teamwork, and designing efficient process units with a focus on safety and environmental awareness.",
        "gpaEntry": "76.48",
        "gpaPercentage": 100,
        "entrancePercentage": 0,
        "Telegram": null,
        "Years": 5,
        "freshmanSemesters": 3,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BSc",
        "freshman_office": "Pre-Engineering | AAiT",
        "college_name": "AAiT",
        "stream": "Natural",
        "college": 1
      },
      {
        "id": 3,
        "name": "Civil Engineering",
        "description": "Civil Engineering at AAiT (Addis Ababa Institute of Technology) is a specialized discipline offered within the university's engineering and technology programs.",
        "gpaEntry": "75.93",
        "gpaPercentage": 100,
        "entrancePercentage": 0,
        "Telegram": null,
        "Years": 5,
        "freshmanSemesters": 3,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BSc",
        "freshman_office": "Pre-Engineering | AAiT",
        "college_name": "AAiT",
        "stream": "Natural",
        "college": 1
      },
      {
        "id": 4,
        "name": "Electrical and Computer Engineering",
        "description": "Given under School of Electrical and computer Engineering, to train high level technical manpower which can participate in the national development activities.",
        "gpaEntry": "88.98",
        "gpaPercentage": 100,
        "entrancePercentage": 0,
        "Telegram": null,
        "Years": 5,
        "freshmanSemesters": 3,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BSc",
        "freshman_office": "Pre-Engineering | AAiT",
        "college_name": "AAiT",
        "stream": "Natural",
        "college": 1
      },
      {
        "id": 5,
        "name": "Software Engineering",
        "description": "Our course ensures graduates master methodologies and tools for high-standard software development. With global competence, they design, develop, and maintain industrial-grade software. The program fosters ICT research skills, creating versatile Software Engineers.",
        "gpaEntry": "94.65",
        "gpaPercentage": 100,
        "entrancePercentage": 0,
        "Telegram": null,
        "Years": 5,
        "freshmanSemesters": 3,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BSc",
        "freshman_office": "Pre-Engineering | AAiT",
        "college_name": "AAiT",
        "stream": "Natural",
        "college": 1
      },
      {
        "id": 6,
        "name": "Mechanical Engineering",
        "description": "Under the School of Mechanical and Industrial Engineering, educate trainable, broad based mechanical engineers that can fit in the different application areas of mechanical engineering after given on job training for about a year.",
        "gpaEntry": "80.25",
        "gpaPercentage": 100,
        "entrancePercentage": 0,
        "Telegram": null,
        "Years": 5,
        "freshmanSemesters": 3,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BSc",
        "freshman_office": "Pre-Engineering | AAiT",
        "college_name": "AAiT",
        "stream": "Natural",
        "college": 1
      }
    ],
    "freshmanOffice": "Pre-Engineering | AAiT"
  },
 
  {
    "id": 3,
    "name": "College of Natural Science",
    "description": "Explore nature & unravel its secrets! Offers programs in Physics, Chemistry, Biology, Math, Computer Science & more. Dive deep with world-class research & innovation.",
     image: school2,
    "location": "4 Kilo",
    "map_link": "\u003Ciframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3313651961985!2d38.76368169999999!3d9.033506299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8589e4c4a803%3A0xbae724e3b927f424!2sAddis%20Ababa%20University%20%7C%20Natural%20Sciences%20Campus!5e0!3m2!1sen!2set!4v1711270726114!5m2!1sen!2set\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"\u003E\u003C/iframe\u003E",
    "stream": "Natural",
    "gpa": "3.00",
    "website": "http://www.aau.edu.et/cns/",
    "Telegram": null,
    "departments": [
      {
        "id": 7,
        "name": "Biology",
        "description": "Enable students to acquire practical and technical skills in biological tools. Produce responsible graduates committed to the profession. Train students to apply biology principles to solve societal problems. Prepare candidates for teaching biology. Establish a tradition of research-oriented and practical biology education. Produce trainable manpower for advanced biological fields. Develop graduates capable of analyzing and presenting biological data.",
        "gpaEntry": null,
        "gpaPercentage": null,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 5,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CNS",
        "stream": "Natural",
        "college": 3
      },
      {
        "id": 8,
        "name": "Computer Science",
        "description": "Educate students for the dynamic science and tech market. Foster lifelong learning through computer science, basic sciences, and general education. Encourage innovation to tackle new challenges. Establish a robust foundation for potential post-graduate studies, instilling confidence in students.",
        "gpaEntry": "87.00",
        "gpaPercentage": 50,
        "entrancePercentage": 50,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CNS",
        "stream": "Natural",
        "college": 3
      },
      {
        "id": 9,
        "name": "Geology",
        "description": "Carry out professional work in various ministries, institutions and companies engaged in activities related to the broad fields of the geosciences and Identify geological problems and work towards their solution through independent or collaborative research.",
        "gpaEntry": null,
        "gpaPercentage": null,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CNS",
        "stream": "Natural",
        "college": 3
      },
      {
        "id": 10,
        "name": "Information Systems",
        "description": "Gain theoretical knowledge in computer functionalities and its application to businesses. Acquire expertise in information organization, storage, retrieval, and dissemination. Understand computers, communication systems, software engineering, network design, and database management. Develop skills in organizational behavior, business information processing, information systems analysis and design, programming, and business process engineering.",
        "gpaEntry": "82.30",
        "gpaPercentage": 50,
        "entrancePercentage": 50,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CNS",
        "stream": "Natural",
        "college": 3
      },
      {
        "id": 11,
        "name": "Mathematics",
        "description": "Train qualified mathematicians for Ethiopia's scientific and technological development. Impart knowledge through teaching and advance knowledge through research.",
        "gpaEntry": null,
        "gpaPercentage": null,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CNS",
        "stream": "Natural",
        "college": 3
      },
      {
        "id": 12,
        "name": "Physics",
        "description": "Prepare graduates for advanced physics studies, diverse careers, and societal responsibilities. Produce skilled physicists for various sectors, disseminate knowledge, and contribute to professional activities and publications. Develop capabilities for consultancy, training, and job creation.",
        "gpaEntry": null,
        "gpaPercentage": null,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CNS",
        "stream": "Natural",
        "college": 3
      },
      {
        "id": 13,
        "name": "Sport Science",
        "description": "Train students in sports, exercise science, and coaching, ensuring quality education. Develop academically competent professionals for diverse sectors. Enhance coaching skills, organize activities, provide advisory services, and foster national and international collaboration.",
        "gpaEntry": null,
        "gpaPercentage": null,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CNS",
        "stream": "Natural",
        "college": 3
      },
      {
        "id": 14,
        "name": "Statistics",
        "description": "Train statisticians for socio-economic, business, and development sectors. Equip them with middle-level skills to meet national demands. The program emphasizes practical applications for effective contribution to diverse fields.",
        "gpaEntry": null,
        "gpaPercentage": null,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CNS",
        "stream": "Natural",
        "college": 3
      }
    ],
    "freshmanOffice": "Any Natural"
  },
  {
    "id": 4,
    "name": "College of Health Science",
    "description": "Be a health hero! Doctors, nurses, pharmacists, & more. Train to heal, improve health, & advance Ethiopia's well-being.",
    image: school2,
    "location": "6-Kilo",
    "map_link": "\u003Ciframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.485997042251!2d38.7500691!3d9.0193525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85e9acff7407%3A0xdf23914d2ec9ac57!2sCollege%20of%20Health%20Sciences%2C%20AAU!5e0!3m2!1sen!2set!4v1711271128785!5m2!1sen!2set\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"\u003E\u003C/iframe\u003E",
    "stream": "Natural",
    "gpa": "3.90",
    "website": "http://www.aau.edu.et/chs/",
    "Telegram": null,
    "departments": [
      {
        "id": 15,
        "name": "Anesthesia",
        "description": "Train students in diverse anesthesia administration, CPR, pain management, and complication recognition. Ensure optimal patient safety, hazard management, and resourceful airway support. Foster effective teamwork and organizational skills for anesthetic care.",
        "gpaEntry": "86.00",
        "gpaPercentage": 50,
        "entrancePercentage": 50,
        "Telegram": null,
        "Years": 7,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CHS",
        "stream": "Natural",
        "college": 4
      },
      {
        "id": 16,
        "name": "Doctor of Dental Medicine",
        "description": "Train professionals for community oral education and health promotion. Develop competence in epidemiological prophylaxis and primary dental care. Enhance understanding of oral health practitioner roles. Apply knowledge in diagnosis and treatment, comply with ethical codes, and strengthen research skills for community projects.",
        "gpaEntry": "93.00",
        "gpaPercentage": 50,
        "entrancePercentage": 50,
        "Telegram": null,
        "Years": 7,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CHS",
        "stream": "Natural",
        "college": 4
      },
      {
        "id": 17,
        "name": "Doctor of Medicine",
        "description": "Teach medical students lifelong learning, communication, and resource management. Enable high standards of clinical service and ethical behavior. Train for scholarly research and active community health involvement.",
        "gpaEntry": "89.00",
        "gpaPercentage": 50,
        "entrancePercentage": 50,
        "Telegram": null,
        "Years": 7,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CHS",
        "stream": "Natural",
        "college": 4
      },
      {
        "id": 18,
        "name": "Physiotherapy",
        "description": "Produce primary care physiotherapists addressing diverse patient needs. Cultivate leaders advocating for practice standards and professional excellence. Foster autonomous practice and collaboration. Emphasize critical thinking and evidence-based approaches in examination, intervention, and outcomes. Prepare for future studies and business involvement in a changing healthcare system. Contribute to capacity building in modern physical medicine",
        "gpaEntry": "87.00",
        "gpaPercentage": 50,
        "entrancePercentage": 50,
        "Telegram": null,
        "Years": 5,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CHS",
        "stream": "Natural",
        "college": 4
      },
      {
        "id": 19,
        "name": "Radiology",
        "description": "Our team of highly skilled radiologists and technologists leverages their expertise in X-ray, CT scans, MRI, ultrasound, fluoroscopy, mammography, and nuclear medicine to provide a comprehensive suite of diagnostic services for various medical specialties.",
        "gpaEntry": "87.00",
        "gpaPercentage": 50,
        "entrancePercentage": 50,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CHS",
        "stream": "Natural",
        "college": 4
      },
      {
        "id": 20,
        "name": "Midwifery",
        "description": "Produce competent midwifery professionals as practitioners, leaders, and researchers in reproductive health services at all healthcare levels.",
        "gpaEntry": "3.40",
        "gpaPercentage": 50,
        "entrancePercentage": 50,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CHS",
        "stream": "Natural",
        "college": 4
      },
      {
        "id": 21,
        "name": "Nursing",
        "description": "Provide nursing care based on sound scientific processes. Demonstrate competence in nursing skills from physical, biological, and behavioral sciences. Participate in the full healthcare system. Demonstrate leadership, decision-making, teaching, management, and ethical values.",
        "gpaEntry": "3.40",
        "gpaPercentage": 50,
        "entrancePercentage": 50,
        "Telegram": null,
        "Years": 5,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CHS",
        "stream": "Natural",
        "college": 4
      },
      {
        "id": 22,
        "name": "Pharmacy",
        "description": "Train patient-oriented pharmacists with broad knowledge adaptable to diverse pharmaceutical services. Provide practice-based training for problem-solving skills. Aim to produce highly qualified pharmacists meeting global healthcare expectations while addressing local needs.",
        "gpaEntry": "3.80",
        "gpaPercentage": 50,
        "entrancePercentage": 50,
        "Telegram": null,
        "Years": 6,
        "freshmanSemesters": 1,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CHS",
        "stream": "Natural",
        "college": 4
      }
    ],
    "freshmanOffice": "Any Natural"
  },
  {
    "id": 5,
    "name": "College of Veterinary Medicine and Agriculture",
    "description": "Nurture animals, nourish lives! Train vets, agronomists, & food scientists. Ensure animal health, food security & sustainable agriculture.",
    image: school2,
    "location": "Bushoftu",
    "map_link": "\u003Ciframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.2712519561333!2d38.999992!3d8.7605297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b0cdaf70240ef%3A0xba5b4e96d683f6da!2sCollege%20of%20Veterinary%20Medicine%20and%20Agriculture%20Library!5e0!3m2!1sen!2set!4v1711271279957!5m2!1sen!2set\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"\u003E\u003C/iframe\u003E",
    "stream": "Natural",
    "gpa": "3.40",
    "website": "http://www.aau.edu.et/cvma/",
    "Telegram": null,
    "departments": [
      {
        "id": 23,
        "name": "Agricultural Economics",
        "description": "Produce Agricultural Economics graduates for efficient resource use. Cultivate committed, socially accountable economists for socio-economic research. Engage in community services. Offer consultancy for governmental and non-governmental organizations.",
        "gpaEntry": "3.40",
        "gpaPercentage": 50,
        "entrancePercentage": 50,
        "Telegram": null,
        "Years": 5,
        "freshmanSemesters": 1,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CSS",
        "stream": "Natural",
        "college": 5
      },
      {
        "id": 24,
        "name": "Animal Science",
        "description": "Produce animal sciences professionals for expertise and entrepreneurship. Train for extension activities and research. Develop dedicated, accurate, team-oriented experts with a positive attitude towards rural development. Provide consultative services, foster technical innovation, and instill good professional ethics for national development goals.",
        "gpaEntry": "3.80",
        "gpaPercentage": 50,
        "entrancePercentage": 50,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 1,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CSS",
        "stream": "Natural",
        "college": 5
      },
      {
        "id": 25,
        "name": "Horticulture",
        "description": "Equip students with horticultural knowledge and skills, focusing on production, breeding, protection, and soil fertility. Foster problem-solving through research and extension. Provide expertise in handling fruit plants. Integrate teaching, research, and extension to disseminate improved technologies to farmers.",
        "gpaEntry": "3.40",
        "gpaPercentage": 50,
        "entrancePercentage": 50,
        "Telegram": null,
        "Years": 5,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CSS",
        "stream": "Natural",
        "college": 5
      },
      {
        "id": 26,
        "name": "Plant Science",
        "description": "Produce skilled manpower for global plant tech contribution. Provide knowledge in natural resources, crop production, and protection. Foster problem-solving through research and extension. Develop skills for environmental conservation. Integrate training, research, and extension for efficient technology dissemination. Enable relevant plant science research. Offer professional services to the community and policymakers.",
        "gpaEntry": "3.30",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CSS",
        "stream": "Natural",
        "college": 5
      },
      {
        "id": 27,
        "name": "Veterinary Medicine",
        "description": "Produce versatile veterinarians skilled in general practice, food and companion animal care, and public health. Equip with expertise in disease diagnosis, treatment, prevention, and research. Enhance food resources through effective disease monitoring and control. Improve livestock production, considering environmental and cultural factors. Conduct ongoing education for animal health personnel. Promote problem-solving research and disseminate findings. Offer public and consultancy services in animal health and production.",
        "gpaEntry": "3.70",
        "gpaPercentage": 50,
        "entrancePercentage": 50,
        "Telegram": null,
        "Years": 6,
        "freshmanSemesters": 1,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CSS",
        "stream": "Natural",
        "college": 5
      },
      {
        "id": 28,
        "name": "Veterinary Laboratory Technology",
        "description": "Produce qualified Veterinary Laboratory Technology graduates for diverse livestock sectors. Equip with knowledge and skills for veterinary medicine and public health. Develop expertise in laboratory analysis for disease diagnosis and control. Cultivate logical thinking, communication, and research skills. Enhance graduates' attitudes and management skills for various animal settings. Foster self-employment and employment readiness in private clinics, farms, pharmaceutical companies, and more.",
        "gpaEntry": "3.40",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BSc",
        "freshman_office": "Any Natural",
        "college_name": "CSS",
        "stream": "Natural",
        "college": 5
      }
    ],
    "freshmanOffice": "Any Natural"
  },
  {
    "id": 6,
    "name": "College of Business and Economics",
    "description": "Ethiopia's top biz school since 1943!  Offers undergrad, grad & PhD programs in Accounting, Finance, Economics, Management, Public Admin & more.  Strong research & industry ties.",
    image: school2,
    "location": "FBE",
    "map_link": "\u003Ciframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1819143875296!2d38.762658699999996!3d9.047164999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f69515f1f37%3A0xea0356fa18a10b52!2sAddis%20Ababa%20University%20College%20of%20Business%20and%20Economics!5e0!3m2!1sen!2set!4v1711271455126!5m2!1sen!2set\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"\u003E\u003C/iframe\u003E",
    "stream": "Social",
    "gpa": "3.44",
    "website": "http://www.aau.edu.et/cbe/",
    "Telegram": null,
    "departments": [
      {
        "id": 29,
        "name": "Accounting and Finance",
        "description": "Produce graduates for accounting and finance demand. Enhance instruction through applied research. Provide a strong academic and professional base. Be a major consultancy provider. Ensure 80% of second and third-year students participate in internships. Establish linkage programs with stakeholders for resources and experiences.",
        "gpaEntry": "3.50",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CBE",
        "stream": "Social",
        "college": 6
      },
      {
        "id": 30,
        "name": "Economics",
        "description": "Produce high-level economics professionals for sustainable development. Offer a comprehensive foundation for careers and further studies. Equip students with economic theory applied to development and global issues. Generate qualified experts, research findings, and consultancy for national development. Contribute to Ethiopia's Growth and Transformation Plan.",
        "gpaEntry": "3.40",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CBE",
        "stream": "Social",
        "college": 6,
        
      },
      {
        "id": 31,
        "name": "Public Administration & Development Management",
        "description": "Develop analytical skills for public administration. Equip students for ethical, effective management. Foster critical analysis of policy, program formulation, and resource management. Prepare mid-level professionals for public sector. Address gaps in Ethiopia's public sector. Provide skills for effective institution management. Build foundation for graduate study.",
        "gpaEntry": "3.50",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CBE",
        "stream": "Social",
        "college": 6
      },
      {
        "id": 32,
        "name": "Logistics and Supply Chain Management",
        "description": "Produce skilled logistics graduates with updated knowledge. Develop production planning, supply chain management, and negotiation skills. Equip students for domestic and foreign purchasing, banking, and customs clearance. Advance knowledge through research in logistics and supply chain management.",
        "gpaEntry": "3.40",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CBE",
        "stream": "Social",
        "college": 6
      },
      {
        "id": 33,
        "name": "Marketing Management",
        "description": "Understand marketing theories, apply concepts in various situations. Comprehend customer behavior for decision-making. Execute global marketing management functions. Conduct ethical marketing research. Manipulate marketing mix for organizational goals. Contribute to marketing practices.",
        "gpaEntry": "3.40",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CBE",
        "stream": "Social",
        "college": 6
      },
      {
        "id": 34,
        "name": "Administrative Service Management",
        "description": "Understand Admin Services Management. Develop effective communication skills. Establish productive relationships. Execute administrative tasks. Apply business functions and economic principles. Manage human resources. Prepare reports and consolidate data. Familiarity with procurement and logistics. Apply ergonomic office management. Utilize office machines and ICT.",
        "gpaEntry": "3.56",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CBE",
        "stream": "Social",
        "college": 6
      },
      {
        "id": 35,
        "name": "Business Administration and Information Systems",
        "description": "Develop business-oriented systems professionals with problem-solving skills. Identify opportunities for IT enhancement. Cultivate communication competence for liaising between technical and non-technical teams. Design diverse information system components collaboratively. Lead and manage teams in system development. Participate in IT-driven product innovation. Prepare students for Information Systems consultancy.",
        "gpaEntry": "3.67",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CBE",
        "stream": "Social",
        "college": 6
      }
    ],
    "freshmanOffice": "Any Social"
  },
  {
    "id": 7,
    "name": "College of Law and Governance Studies",
    "description": "Shape justice! Law, human rights, & federal studies. Train lawyers, policymakers, & leaders for a just & equitable society.",
    image: school2,
    "location": "6 Kilo",
    "map_link": "\u003Ciframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2004980942042!2d38.758440900000004!3d9.045467699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f5b64661d07%3A0xdd07ff946c329c10!2sLaw%20school!5e0!3m2!1sen!2set!4v1711271607791!5m2!1sen!2set\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"\u003E\u003C/iframe\u003E",
    "stream": "Social",
    "gpa": "3.80",
    "website": "http://www.aau.edu.et/clgs",
    "Telegram": null,
    "departments": [
      {
        "id": 36,
        "name": "Law",
        "description": "To equip students with basic knowledge of major national legislations and procedures, along with the skills of legal interpretation required to solve legal problems;",
        "gpaEntry": "3.89",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CLGS",
        "stream": "Social",
        "college": 7
      }
    ],
    "freshmanOffice": "Any Social"
  },
  {
    "id": 8,
    "name": "College of Social Science",
    "description": "Understand humans & society! Explore History, Philosophy, Geography, Sociology, Politics & more. Shape a just & equitable future.",
    image: school2,
    "location": "6 Kilo",
    "map_link": "\u003Ciframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1856285585873!2d38.75906919999999!3d9.046825799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f69f1dbdf67%3A0xb8a418693b6edef9!2z4Yqg4Yuy4Yi1IOGKoOGJoOGJoyDhi6nhipLhiajhiK3hiLLhibI!5e0!3m2!1sen!2set!4v1711275571007!5m2!1sen!2set\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"\u003E\u003C/iframe\u003E",
    "stream": "Social",
    "gpa": "3.44",
    "website": "http://www.aau.edu.et/css",
    "Telegram": null,
    "departments": [
      {
        "id": 37,
        "name": "Archaeology and Heritage Management",
        "description": "Train professionals in Archaeology and Heritage Management for diverse roles. Develop skills for heritage management, planning, and policy-making. Prepare instructors for higher education. Equip graduates for impactful roles in public and private sectors, focusing on archaeology, heritage management, and tourism.",
        "gpaEntry": "3.43",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CSS",
        "stream": "Social",
        "college": 8
      },
      {
        "id": 38,
        "name": "Geography and Environmental",
        "description": "Train well-rounded professionals in spatiotemporal processes, problem-solving, and data analysis for environmental understanding. Foster confidence, commitment to societal change, and community development. Conduct impactful research, provide professional training and consultancy services, contributing to environmental, social, and economic development.",
        "gpaEntry": "3.50",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CSS",
        "stream": "Social",
        "college": 8
      },
      {
        "id": 39,
        "name": "History",
        "description": "The objectives are to train historians for societal problem-solving, research Ethiopia's history comprehensively, foster understanding of the Horn of Africa's past, promote tolerance and diversity appreciation, instill a global perspective, prepare students for diverse careers, and train qualified History teachers for secondary education.",
        "gpaEntry": "3.54",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CSS",
        "stream": "Social",
        "college": 8
      },
      {
        "id": 40,
        "name": "Philosophy",
        "description": "Promote philosophy study and research, enhance department faculty profile, and encourage interdisciplinary research and exchange by reflecting on philosophical perspectives",
        "gpaEntry": "3.65",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CSS",
        "stream": "Social",
        "college": 8
      },
      {
        "id": 41,
        "name": "Political Science & International Relations",
        "description": "Build teaching and research capacity in political science and international relations. Offer undergraduate and graduate training. Produce skilled professionals for various sectors. Cultivate intellectually competent graduates. Encourage interdisciplinary research, focusing on contemporary political developments globally, especially in Ethiopia and Africa.",
        "gpaEntry": "3.40",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CSS",
        "stream": "Social",
        "college": 8
      },
      {
        "id": 42,
        "name": "Social Anthropology",
        "description": "Produce graduates with anthropological knowledge and research skills. Integrate theoretical and practical aspects for original research. Prepare competent managers for cultural heritage, tourism, research, youth, and culture sectors. Document and study Ethiopian cultures. Conduct training programs. Engage in policy debates, collaborate nationally and internationally. Contribute to development through community services, cultural heritage preservation, and interdisciplinary research.",
        "gpaEntry": "3.40",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CSS",
        "stream": "Social",
        "college": 8
      },
      {
        "id": 43,
        "name": "Social Work",
        "description": "Produce students with foundational knowledge and skills for social interventions. Enhance critical thinking and communication in Social Work. Equip with research methods, ethics, and practices for effective problem mitigation. Foster appreciation for diversity and mutual respect.",
        "gpaEntry": "3.45",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CSS",
        "stream": "Social",
        "college": 8
      },
      {
        "id": 44,
        "name": "Sociology",
        "description": "Produce Sociology graduates adept at integrating theory, research, and practice. Train manpower understanding and contributing to the country's conditions. Equip graduates to participate in research on poverty's causes and consequences.",
        "gpaEntry": "3.45",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CSS",
        "stream": "Social",
        "college": 8
      }
    ],
    "freshmanOffice": "Any Social"
  },
  {
    "id": 9,
    "name": "College of Education and Behavioral Studies",
    "description": "Train teachers, psychologists, education leaders & specialists. Develop high-caliber professionals for Ethiopia's future.",
     image: school2,
    "location": "6 Kilo",
    "map_link": "\u003Ciframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63043.2299353495!2d38.72566997910155!3d9.045342300000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8fdb2389dd71%3A0x6db6508891768de1!2sAAU%20education%20and%20behavioral%20studies%20office!5e0!3m2!1sen!2set!4v1711276014722!5m2!1sen!2set\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"\u003E\u003C/iframe\u003E",
    "stream": "Social",
    "gpa": "3.60",
    "website": "http://www.aau.edu.et/cebs/",
    "Telegram": null,
    "departments": [
      {
        "id": 45,
        "name": "Educational Planning and Management",
        "description": "Produce educational leaders and researchers who can address educational demands and challenges through critical analysis of educational institutions’ environment (political, economic, socio-cultural, and technological).",
        "gpaEntry": "3.32",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CEBS",
        "stream": "Social",
        "college": 9
      },
      {
        "id": 46,
        "name": "Psychology",
        "description": "Produce qualified psychologists who work in various governmental, non-governmental, and private agencies; carry out quality research on various psychological, educational and social issues.",
        "gpaEntry": "3.34",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CEBS",
        "stream": "Social",
        "college": 9
      },
      {
        "id": 47,
        "name": "Special Needs and Inclusive Education",
        "description": "To respond to and support the implementation of GTP and ESDP (2010) that has given high emphasis for the implementation of special needs education.",
        "gpaEntry": "3.54",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CEBS",
        "stream": "Social",
        "college": 9
      },
      {
        "id": 48,
        "name": "Speech Language therapy",
        "description": "To alleviate the burden of the country in the area of communication and swallowing disabilities and provide evidence based support to children and adults with speech, language, communication and swallowing difficulties.",
        "gpaEntry": "3.43",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CEBS",
        "stream": "Social",
        "college": 9
      }
    ],
    "freshmanOffice": "Any Social"
  },
  {
    "id": 10,
    "name": "College of Humanities, Language Studies, Journalism and Communications",
    "description": "Explore languages, history, & cultures! Amharic, English, History, Philosophy & more. Fosters critical thinking & global understanding.",
     image: school2,
    "location": "6 Kilo",
    "map_link": "\u003Ciframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63042.970056937396!2d38.724050279101576!3d9.046825800000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f69f1dbdf67%3A0xb8a418693b6edef9!2z4Yqg4Yuy4Yi1IOGKoOGJoOGJoyDhi6nhipLhiajhiK3hiLLhibI!5e0!3m2!1sen!2set!4v1711276449331!5m2!1sen!2set\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"\u003E\u003C/iframe\u003E",
    "stream": "Social",
    "gpa": "3.60",
    "website": "http://www.aau.edu.et/chls/",
    "Telegram": null,
    "departments": [
      {
        "id": 49,
        "name": "Afan Oromo and Literature",
        "description": "Equip learners with foundational professional knowledge and skills for diverse settings. Provide general language rules in literature, mass media, PR, and communication. Foster collaborative and student-centered learning with problem-solving techniques.",
        "gpaEntry": "3.65",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CHLSJC",
        "stream": "Social",
        "college": 10
      },
      {
        "id": 50,
        "name": "Afan Oromo and Literature",
        "description": "Equip learners with foundational professional knowledge and skills for diverse settings. Provide general language rules in literature, mass media, PR, and communication. Foster collaborative and student-centered learning with problem-solving techniques.",
        "gpaEntry": "3.65",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CHLSJC",
        "stream": "Social",
        "college": 10
      },
      {
        "id": 51,
        "name": "Ethiopian Language(s) & Literature – Amharic",
        "description": "Train professionals in writing, criticism, PR, editing, and translation. Develop researchers in literature and human concerns. Conduct short-term training and workshops on language skills, report writing, literature principles, and translation. Provide language services like translation, editing, and curriculum preparation. Conduct research on Ethiopian languages and literatures, offering consultancy on organizational issues and participating in regional/national forums.",
        "gpaEntry": "3.56",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CHLSJC",
        "stream": "Social",
        "college": 10
      },
      {
        "id": 52,
        "name": "Arabic Language and Communication",
        "description": "Train Arabic language professionals for roles in government, NGOs, international organizations, and education. Provide intensive courses in Arabic language and literature, emphasizing cultural awareness. Foster scholarly research and conduct basic research initiatives",
        "gpaEntry": "3.45",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CHLSJC",
        "stream": "Social",
        "college": 10
      },
      {
        "id": 53,
        "name": "Journalism and Communication (Broadcast Journalism)",
        "description": "AAU's BA Journalism and Communication program aims to impart media knowledge, journalism skills, and mass communication theories. Emphasizing broadcast media, students specialize in Radio/TV journalism, integrating critical journalism with media, democracy, and development theories.",
        "gpaEntry": "3.43",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CHLSJC",
        "stream": "Social",
        "college": 10
      },
      {
        "id": 54,
        "name": "Chinese Language",
        "description": "The B.A. Program in Chinese Language integrates language and culture, producing graduates with a strong Chinese language foundation, deep cultural knowledge, understanding of modern Chinese society, and readiness for employment and further China-related study. Key points: Chinese language, culture, strong foundation, cultural knowledge, modern Chinese society, employment readiness.",
        "gpaEntry": "3.50",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CHLSJC",
        "stream": "Social",
        "college": 10
      },
      {
        "id": 55,
        "name": "English Language and Literature",
        "description": "Equip students with fundamental English language skills for diverse purposes. Provide knowledge of language functions, linguistic study, literary appreciation, and criticism. Enable research and develop communication, PR, media use, translation, and interpretation skills. Key points: English language skills, linguistic study, literary appreciation, research, communication skills, translation.",
        "gpaEntry": "3.50",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CHLSJC",
        "stream": "Social",
        "college": 10
      },
      {
        "id": 56,
        "name": "French Language and Professional skills",
        "description": "Intensive French courses, cultural awareness, and intercultural attitudes. Train high-level French language professionals for international organizations. Develop students' planning and execution skills in French. Emphasize multimedia tools, build confidence, autonomy, and stimulate creative thinking. Offer practical courses for career readiness. Foster scholarly research.",
        "gpaEntry": "3.64",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CHLSJC",
        "stream": "Social",
        "college": 10
      },
      {
        "id": 57,
        "name": "Ethiopian Sign Language and Deaf Culture",
        "description": "Train Sign Language teachers, linguists, and interpreters. Empower the Deaf, promote EthSL research, collaboration, and consultancy. Address student demands, fostering inclusivity and combating discrimination.",
        "gpaEntry": "3.54",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CHLSJC",
        "stream": "Social",
        "college": 10
      },
      {
        "id": 58,
        "name": "General Linguistics",
        "description": "Train medium-level personnel for diverse roles. Provide consultancy for language and culture promotion. Create awareness about linguistic and cultural values in a multicultural society.",
        "gpaEntry": "3.43",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CHLSJC",
        "stream": "Social",
        "college": 10
      },
      {
        "id": 59,
        "name": "Tigrigna Lang. Literature & Folklore",
        "description": "Produce graduates integrating social science, linguistic, and literary theories. Conduct and document research on cultural phenomena. Equip graduates with language skills to analyze social problems. Develop competency in language policy formulation, evaluation, and analysis. Provide professional communication skills and foster cultural diversity understanding.",
        "gpaEntry": "3.64",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": "Extension",
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CHLSJC",
        "stream": "Social",
        "college": 10
      }
    ],
    "freshmanOffice": "Any Social"
  },
  {
    "id": 11,
    "name": "College of Performing and Visual Arts",

    "description": "Unleash your creativity! Music, Theatre, Fine Arts & Film. Hone your talent, express yourself & shape the future of Ethiopian arts",
    image: school2
    ,
      "freshmanOffice": "Any Social",
    "location": "Yared",
    "map_link": "\u003Ciframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63042.970056937396!2d38.724050279101576!3d9.046825800000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f630948238f%3A0x18cbf4daf2a2e3e2!2sAll%C3%A9%20School%20of%20Fine%20Arts%20%26%20Design!5e0!3m2!1sen!2set!4v1711276614341!5m2!1sen!2set\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"\u003E\u003C/iframe\u003E",
    "stream": "Social",
    "gpa": "3.00",
    "website": "http://www.aau.edu.et/cpva/",
    "Telegram": null,
    "departments": [
      {
        "id": 60,
        "name": "Theatre Arts",
        "description": "Provides students with a comprehensive education in the art of theatre. It typically combines coursework in acting, directing, design, and theatrical history and literature.",
        "gpaEntry": "3.45",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CPVA",
        "stream": "Social",
        "college": 11
      },
      {
        "id": 61,
        "name": "Music",
        "description": "fantastic option for students with a love for music who want a well-rounded education that goes beyond just performance",
        "gpaEntry": "3.40",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CPVA",
        "stream": "Social",
        "college": 11
      },
      {
        "id": 62,
        "name": "Industrial Design",
        "description": "The program centers around the design process, where you'll learn to translate user needs into tangible products. This involves user research, brainstorming, creating prototypes, and refining your ideas until you have a functional and aesthetically pleasing design.",
        "gpaEntry": "3.54",
        "gpaPercentage": 100,
        "entrancePercentage": null,
        "Telegram": null,
        "Years": 4,
        "freshmanSemesters": 2,
        "icon_url": null,
        "regular": "Regular",
        "extension": null,
        "degree": "BA",
        "freshman_office": "Any Social",
        "college_name": "CPVA",
        "stream": "Social",
        "college": 11
      }
    ],
   
    },
   {
    "id": 12,
    "name": "Ethiopian Institute of Architecture, Buildings and Construction",
    "description": "Design your future! Shape Ethiopia's built environment & urban spaces. Offers programs in Architecture, Construction & Urban Planning. Fosters innovation & sustainability.",
    image: school2,
    "location": "Lideta",
    "map_link": "\u003Ciframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5559795338904!2d38.7306003!3d9.0129396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8670e075fc17%3A0xf364f12cf2df2d35!2sEthiopian%20Institute%20of%20Architecture%20%2C%20Building%20Construction%20and%20City%20Development!5e0!3m2!1sen!2set!4v1711270406998!5m2!1sen!2set\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"\u003E\u003C/iframe\u003E",
     "stream": "Natural",
     "freshmanOffice": "Pre-Engineering | EiABC",
    "gpa": "3.44",
    "website": "http://www.aau.edu.et/eiabc/",
    "Telegram": null,
    "departments": [{
      "id": 63,
      "name": "Architecture",
      "description": "Design your future! Shape Ethiopia's built environment & urban spaces. Offers programs"
      , "gpaEntry": "80.25",
      "gpaPercentage": 100,
      "Years": 5,
      "freshmanSemesters": 3,
      "icon_url": null,
      "regular": "Regular",
      "extension": "Extension",
    }, {
      "id": 64,
      "name": "Construction Technology & Management",
      "description": "Design your future! Shape Ethiopia's built environment & urban spaces. Offers programs"
       ,"gpaPercentage": 100,
      "Years": 4,
      "freshmanSemesters": 3,
      "icon_url": null,
      "regular": "Regular",
      "extension": "Extension",
    }
      , {
        "id": 65,
        "name": "Urban & Regional Planning",
        "description": "Design your future! Shape Ethiopia's built environment & urban spaces. Offers programs"
        ,
      "Years": 4,
      "freshmanSemesters": 3,
      "icon_url": null,
      "regular": "Regular",
      "extension": "Extension",


}
],
   
  },
    ]

export const areaFilters = ['SAfer Selam', 'Ledat', 'yeka subscite'];

export const subjectFilters = [
  'All Subjects',
  'Biology',
  'Chemistry',
  'Physics',
  'Science for Technology',
];
