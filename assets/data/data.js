import { images } from '..';


const { teacher1, teacher2, teacher3, teacher4, aaitlogo,CEBS, CNS,  welcome,Is} =
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
    name: 'Dr.drage',
    subject: 'information science',
    image: teacher4,
  },
  {
    name: 'Dr. Aray',
    subject: 'Physics',
    image: teacher3,
    },
  {
    name: 'Dr. nahome G /eyasu',
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
        "description": "THis program aims to train Biomedical Engineers adept in designing, developing, installing, operating, and maintaining medical equipment. Graduates will contribute to enhancing the healthcare system, conducting research tailored to the country's needs in the field of biomedical engineering.",
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
        "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "I",
            "Module Name": "General Education Modules",
            "Course Code": "ECTS",
            "Course Name": "Course Code",
            "Module ECTS": "Course Title"
        },
        {
            "Module Code": "1.1",
            "Module Name": "EnLa–M1013",
            "Course Code": "Basic English Skills",
            "Course Name": "10",
            "Module ECTS": "EnLa1011"
        },
        {
            "Module Code": "1.2",
            "Module Name": "CESt–M1023",
            "Course Code": "Civics and Ethics",
            "Course Name": "5",
            "Module ECTS": "CESt1023"
        },
        {
            "Module Code": "1.3",
            "Module Name": "Phil–M1033",
            "Course Code": "Introduction to Logic",
            "Course Name": "5",
            "Module ECTS": "Phil1033"
        },
        {
            "Module Code": "II",
            "Module Name": "Basic Engineering Modules",
            "Course Code": "ECTS",
            "Course Name": "Course Code",
            "Module ECTS": "Course Title"
        },
        {
            "Module Code": "2.1",
            "Module Name": "GEng–M1043",
            "Course Code": "Applied Engineering Mathematics",
            "Course Name": "14",
            "Module ECTS": "Math-1041"
        },
        {
            "Module Code": "2.2",
            "Module Name": "GEng–M1053",
            "Course Code": "Engineering Mechanics",
            "Course Name": "12",
            "Module ECTS": "CEng-1051"
        },
        {
            "Module Code": "2.3",
            "Module Name": "GEng-M1063",
            "Course Code": "Basic Engineering Skill",
            "Course Name": "8",
            "Module ECTS": "GEng-1061"
        },
        {
            "Module Code": "III",
            "Module Name": "Support Modules",
            "Course Code": "ECTS",
            "Course Name": "Course Code",
            "Module ECTS": "Course Title"
        },
        {
            "Module Code": "3.1",
            "Module Name": "BMED-M2072",
            "Course Code": "Basic Electricity and Electronics",
            "Course Name": "12",
            "Module ECTS": "ECEG-1071"
        },
        {
            "Module Code": "3.2",
            "Module Name": "BMED-M2082",
            "Course Code": "Workshop Practice",
            "Course Name": "5",
            "Module ECTS": "BMED-2080"
        },
        {
            "Module Code": "3.3",
            "Module Name": "BMED-M2092",
            "Course Code": "Intermediate Mathematics & Computing",
            "Course Name": "20",
            "Module ECTS": "BMED-2091"
        },
        {
            "Module Code": "3.4",
            "Module Name": "BMED-M3102",
            "Course Code": "Digital Systems and Interfacing",
            "Course Name": "11",
            "Module ECTS": "ECEG-3101"
        },
        {
            "Module Code": "3.5",
            "Module Name": "BMED-M3112",
            "Course Code": "Applied Electronics",
            "Course Name": "12",
            "Module ECTS": "ECEG-3111"
        },
        {
            "Module Code": "3.6",
            "Module Name": "BMED-M3122",
            "Course Code": "Thermodynamics",
            "Course Name": "5",
            "Module ECTS": "BMED-3120"
        },
        {
            "Module Code": "3.7",
            "Module Name": "BMED-M3132",
            "Course Code": "Instrumentation Engineering",
            "Course Name": "5",
            "Module ECTS": "ECEG-3130"
        },
        {
            "Module Code": "3.8",
            "Module Name": "BMED-M3142",
            "Course Code": "Electromagnetics and Electrical Machines",
            "Course Name": "5",
            "Module ECTS": "ECEG-3140"
        },
        {
            "Module Code": "3.9",
            "Module Name": "BMED-M3152",
            "Course Code": "Signals and Systems",
            "Course Name": "5",
            "Module ECTS": "ECEG-3150"
        },
        {
            "Module Code": "3.10",
            "Module Name": "BMED-M4162",
            "Course Code": "Data Structures & OO Programming",
            "Course Name": "5",
            "Module ECTS": "ECEG-4160"
        },
        {
            "Module Code": "3.11",
            "Module Name": "BMED-M4172",
            "Course Code": "Control Engineering",
            "Course Name": "5",
            "Module ECTS": "ECEG-4170"
        },
        {
            "Module Code": "3.12",
            "Module Name": "BMED-M5182",
            "Course Code": "Quality Management",
            "Course Name": "5",
            "Module ECTS": "MEng-5180"
        },
        {
            "Module Code": "3.13",
            "Module Name": "BMED-M5192",
            "Course Code": "Research Methods and Presentation",
            "Course Name": "5",
            "Module ECTS": "BMED-5190"
        },
        {
            "Module Code": "3.14",
            "Module Name": "BMED-M5202",
            "Course Code": "Ethics and Entrepreneurship",
            "Course Name": "7",
            "Module ECTS": "GEng-5201"
        },
        {
            "Module Code": "IV",
            "Module Name": "Core Modules",
            "Course Code": "ECTS",
            "Course Name": "Course Code",
            "Module ECTS": "Course Title"
        },
        {
            "Module Code": "4.1",
            "Module Name": "BMED-M2211",
            "Course Code": "Basic Biomedical Science I",
            "Course Name": "17",
            "Module ECTS": "Anat-1211"
        },
        {
            "Module Code": "4.2",
            "Module Name": "BMED-M2221",
            "Course Code": "Basic Biomedical Science II",
            "Course Name": "20",
            "Module ECTS": "Phys-2221"
        },
        {
            "Module Code": "4.3",
            "Module Name": "BMED-M3231",
            "Course Code": "Basic Biomedical Science III",
            "Course Name": "9",
            "Module ECTS": "BMED-3231"
        },
        {
            "Module Code": "4.4",
            "Module Name": "BMED-M3241",
            "Course Code": "Therapeutic Devices and Systems",
            "Course Name": "5",
            "Module ECTS": "BMED-3240"
        },
        {
            "Module Code": "4.5",
            "Module Name": "BMED-M3251",
            "Course Code": "Biomedical Engineering",
            "Course Name": "5",
            "Module ECTS": "BMED-3250"
        },
        {
            "Module Code": "4.6",
            "Module Name": "BMED-M4261",
            "Course Code": "Biomedical Instrumentation and Imaging",
            "Course Name": "11",
            "Module ECTS": "BMED-4261"
        },
        {
            "Module Code": "4.7",
            "Module Name": "BMED-M4271",
            "Course Code": "Digital Signal and Image Processing",
            "Course Name": "10",
            "Module ECTS": "BMED-4271"
        },
        {
            "Module Code": "4.8",
            "Module Name": "BMED-M4281",
            "Course Code": "Practical Attachment",
            "Course Name": "30",
            "Module ECTS": "BMED-4280"
        },
        {
            "Module Code": "4.9",
            "Module Name": "BMED-M4291",
            "Course Code": "Biomedical Design",
            "Course Name": "8",
            "Module ECTS": "BMED-4291"
        },
        {
            "Module Code": "4.10",
            "Module Name": "BMED-M5301",
            "Course Code": "Healthcare Technology Management",
            "Course Name": "5",
            "Module ECTS": "BMED-5300"
        },
        {
            "Module Code": "4.11",
            "Module Name": "BMED-M5311",
            "Course Code": "Medical Safety and Regulations",
            "Course Name": "5",
            "Module ECTS": "BMED-5310"
        },
        {
            "Module Code": "4.12",
            "Module Name": "BMED-M5321",
            "Course Code": "B.Sc. Thesis",
            "Course Name": "12",
            "Module ECTS": "BMED-5320"
        },
        {
            "Module Code": "V",
            "Module Name": "Elective Modules",
            "Course Code": "ECTS",
            "Course Name": "Course Code",
            "Module ECTS": "Course Title"
        },
        {
            "Module Code": "5.1",
            "Module Name": "BMED-M5330",
            "Course Code": "Elective Module Set I",
            "Course Name": "10",
            "Module ECTS": "BMED-5331"
        },
        {
            "Module Code": "5.2",
            "Module Name": "BMED-M5340",
            "Course Code": "Elective Module Set II",
            "Course Name": "5",
            "Module ECTS": "BMED-5341"
        }
    ]
  },
  {
    "id": 2,
    image : aaitlogo,
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
    "college": 1,
           "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "Category",
            "Module Name": "ModuleNo.",
            "Course Code": "Module Name",
            "Course Name": "ModuleCode",
            "Module ECTS": "ModuleECTS"
        },
        {
            "Module Code": "3Basic",
            "Module Name": "01",
            "Course Code": "Basic English skills",
            "Course Name": "EnLa-M1013",
            "Module ECTS": "10"
        },
        {
            "Module Code": "02",
            "Module Name": "Civics and Ethics",
            "Course Code": "CESt-M1023",
            "Course Name": "5",
            "Module ECTS": "1"
        },
        {
            "Module Code": "03",
            "Module Name": "Introduction to Logic",
            "Course Code": "PHIL-M1033",
            "Course Name": "5",
            "Module ECTS": "1"
        },
        {
            "Module Code": "04",
            "Module Name": "Applied Engineering Mathematics",
            "Course Code": "GEng-M1043",
            "Course Name": "14",
            "Module ECTS": "1"
        },
        {
            "Module Code": "05",
            "Module Name": "Engineering Mechanics",
            "Course Code": "GEng-M1053",
            "Course Name": "12",
            "Module ECTS": "1"
        },
        {
            "Module Code": "06",
            "Module Name": "Basic Engineering Skills",
            "Course Code": "GEng-M1063",
            "Course Name": "8",
            "Module ECTS": "1"
        },
        {
            "Module Code": "1Core",
            "Module Name": "07",
            "Course Code": "Applied Chemistry",
            "Course Name": "CBEg-M1071",
            "Module ECTS": "11"
        },
        {
            "Module Code": "08",
            "Module Name": "Advanced Mathematics and Computational Methods",
            "Course Code": "CBEg-M2081",
            "Course Name": "20",
            "Module ECTS": "1"
        },
        {
            "Module Code": "09",
            "Module Name": "Analytical Techniques",
            "Course Code": "CBEg-M2091",
            "Course Name": "6",
            "Module ECTS": "1"
        },
        {
            "Module Code": "10",
            "Module Name": "Chemical Engineering Basics",
            "Course Code": "CBEg-M2101",
            "Course Name": "28",
            "Module ECTS": "1"
        },
        {
            "Module Code": "1Core",
            "Module Name": "11",
            "Course Code": "Fluid Machines in Chemical Engineering",
            "Course Name": "CBEg-M2111",
            "Module ECTS": "6"
        },
        {
            "Module Code": "12",
            "Module Name": "Practical and Reporting Skills",
            "Course Code": "CBEg-M3121",
            "Course Name": "7",
            "Module ECTS": "1"
        },
        {
            "Module Code": "13",
            "Module Name": "Process Industries",
            "Course Code": "CBEg-M3131",
            "Course Name": "6",
            "Module ECTS": "1"
        },
        {
            "Module Code": "14",
            "Module Name": "Transport Phenomena and Separation Process",
            "Course Code": "CBEg-M3141",
            "Course Name": "16",
            "Module ECTS": "1"
        },
        {
            "Module Code": "15",
            "Module Name": "Chemical Reaction Engineering",
            "Course Code": "CBEg-M3151",
            "Course Name": "13",
            "Module ECTS": "1"
        },
        {
            "Module Code": "16",
            "Module Name": "Process Control and Instrumentation",
            "Course Code": "CBEg-M3161",
            "Course Name": "13",
            "Module ECTS": "1"
        },
        {
            "Module Code": "17",
            "Module Name": "Basic Environmental Engineering",
            "Course Code": "CBEg-M3171",
            "Course Name": "5",
            "Module ECTS": "1"
        },
        {
            "Module Code": "18",
            "Module Name": "Internship",
            "Course Code": "CBEg-M4181",
            "Course Name": "30",
            "Module ECTS": "1"
        },
        {
            "Module Code": "19",
            "Module Name": "Material Science and Engineering",
            "Course Code": "CBEg-M4191",
            "Course Name": "5",
            "Module ECTS": "1"
        },
        {
            "Module Code": "1Core",
            "Module Name": "20",
            "Course Code": "Biochemical Science and Engineering",
            "Course Name": "CBEg-M4201",
            "Module ECTS": "10"
        },
        {
            "Module Code": "21",
            "Module Name": "Chemical Engineering Design",
            "Course Code": "CBEg-M4211",
            "Course Name": "24",
            "Module ECTS": "1"
        },
        {
            "Module Code": "22",
            "Module Name": "Industrial and Business Management",
            "Course Code": "CBEg-M4221",
            "Course Name": "15",
            "Module ECTS": "1"
        },
        {
            "Module Code": "23",
            "Module Name": "Industrial Safety and Maintenance",
            "Course Code": "CBEg-M5231",
            "Course Name": "5",
            "Module ECTS": "1"
        },
        {
            "Module Code": "24",
            "Module Name": "Senior Project",
            "Course Code": "CBEg-M5241",
            "Course Name": "15",
            "Module ECTS": "1"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "Category",
            "Module Name": "Module No.",
            "Course Code": "Module Title",
            "Course Name": "ModuleCode",
            "Module ECTS": "ModuleECTS"
        },
        {
            "Module Code": "2Elective",
            "Module Name": "25",
            "Course Code": "Elective ( Process Engineering)",
            "Course Name": "CBEg-M5252",
            "Module ECTS": "15"
        },
        {
            "Module Code": "2Elective",
            "Module Name": "26",
            "Course Code": "Elective (Environmental     Engineering)",
            "Course Name": "CBEg-M5262",
            "Module ECTS": "15"
        }
    ]
      },
      {
        "id": 3,
        image : aaitlogo,
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
        "college": 1,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "01",
            "Module Name": "Basic English Skills",
            "Course Code": "EnLa-M1013",
            "Course Name": "10",
            "Module ECTS": "270"
        },
        {
            "Module Code": "",
            "Module Name": "Block 1: Communicative English Skills",
            "Course Code": "EnLa1011",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block 2: Basic Writing Skills",
            "Course Code": "EnLa1012",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "02",
            "Module Name": "Fundamentals of Economics",
            "Course Code": "ASM-M1021",
            "Course Name": "10",
            "Module ECTS": "270"
        },
        {
            "Module Code": "",
            "Module Name": "Block 1: Microeconomics I",
            "Course Code": "FNDE2193",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block 2: Macroeconomics",
            "Course Code": "FNDE2194",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "03",
            "Module Name": "Introduction to Logic",
            "Course Code": "Phil-M1033",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block I: Introduction to Logic",
            "Course Code": "Phil 1033",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Civics and Ethics",
            "Course Code": "CESt-M1023",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block I: Civics and Ethics",
            "Course Code": "CESt 1023",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "General Psychology",
            "Course Code": "PSYC-M2013",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block I: Introduction to Psychology",
            "Course Code": "PSYC2011",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "04",
            "Module Name": "Fundamentals of Administrative services management",
            "Course Code": "ASM-M2041",
            "Course Name": "14",
            "Module ECTS": "378"
        },
        {
            "Module Code": "",
            "Module Name": "Block I: Introduction to Management",
            "Course Code": "ASM2041",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block II: Administrative Services Management",
            "Course Code": "ASM2042",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block III: Administrative Business Communication",
            "Course Code": "ASM2043",
            "Course Name": "4",
            "Module ECTS": ""
        },
        {
            "Module Code": "05",
            "Module Name": "Establishing and Managing Small Business",
            "Course Code": "ASM-M2051",
            "Course Name": "14",
            "Module ECTS": "378"
        },
        {
            "Module Code": "",
            "Module Name": "Block I: Entrepreneurship and Small Business Mgt.",
            "Course Code": "ASM2051",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block II: Principles of Marketing",
            "Course Code": "MKTM2052",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block III: Business Environment Studies",
            "Course Code": "ASM2053",
            "Course Name": "4",
            "Module ECTS": ""
        },
        {
            "Module Code": "06",
            "Module Name": "Basic Computer Skills",
            "Course Code": "ASM-M2060",
            "Course Name": "11",
            "Module ECTS": "297"
        },
        {
            "Module Code": "",
            "Module Name": "Block I: Introduction to Information Technology",
            "Course Code": "BAIS2061",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block II: Computer Writing",
            "Course Code": "ASM1062",
            "Course Name": "6",
            "Module ECTS": ""
        },
        {
            "Module Code": "07",
            "Module Name": "Office management and Correspondence Processing",
            "Course Code": "ASM-M2071",
            "Course Name": "9",
            "Module ECTS": "243"
        },
        {
            "Module Code": "",
            "Module Name": "Block I: Office Operations Management",
            "Course Code": "ASM2071",
            "Course Name": "4.5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block II: Text-Processing",
            "Course Code": "ASM2072",
            "Course Name": "4.5",
            "Module ECTS": ""
        },
        {
            "Module Code": "08",
            "Module Name": "Office Automation",
            "Course Code": "ASM-M4081",
            "Course Name": "10",
            "Module ECTS": "270"
        },
        {
            "Module Code": "",
            "Module Name": "Block 1: System Analysis and Design",
            "Course Code": "BAIS4081",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block 2: Computer Networking",
            "Course Code": "BAIS3082",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "09",
            "Module Name": "Data Processing and Office Records Management",
            "Course Code": "ASM-M3091",
            "Course Name": "13.5",
            "Module ECTS": "364.5"
        },
        {
            "Module Code": "",
            "Module Name": "Block I: Integrated Application Software",
            "Course Code": "ASM3091",
            "Course Name": "4.5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block II: Integrated Records Management",
            "Course Code": "ASM3092",
            "Course Name": "4",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block III: Database Management Systems",
            "Course Code": "BAIS3093",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "10",
            "Module Name": "Accounting for Administrative Services Managers",
            "Course Code": "ACCT-M1101",
            "Course Name": "15",
            "Module ECTS": "405"
        },
        {
            "Module Code": "",
            "Module Name": "Block I: Principles of Accounting I",
            "Course Code": "ACCT1101",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block II: Principles of Accounting II",
            "Course Code": "ACCT1102",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block III: Computerized Accounting",
            "Course Code": "ACCT1103",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "11",
            "Module Name": "Managing People",
            "Course Code": "BAIS-M3110",
            "Course Name": "10",
            "Module ECTS": "270"
        },
        {
            "Module Code": "",
            "Module Name": "Block I: Human Resources Management",
            "Course Code": "ASM4063",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block II: Organizational Behavior",
            "Course Code": "ASM4072",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "12",
            "Module Name": "Supply and Property Management",
            "Course Code": "ASM3121",
            "Course Name": "9",
            "Module ECTS": "243"
        },
        {
            "Module Code": "",
            "Module Name": "Block 2: Principles of Procurement Management",
            "Course Code": "LSCM3011",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block 3: Property Management",
            "Course Code": "ASM3122",
            "Course Name": "4",
            "Module ECTS": ""
        },
        {
            "Module Code": "13",
            "Module Name": "Project Analysis and Quantitative Decision Making",
            "Course Code": "ASM2131",
            "Course Name": "15",
            "Module ECTS": "405"
        },
        {
            "Module Code": "",
            "Module Name": "Block 1: Financial Management",
            "Course Code": "ACCT3152",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block 2: Project Management",
            "Course Code": "BAIS4102",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block 3: Math for Management",
            "Course Code": "BAIS3021",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "14",
            "Module Name": "Organizational Development and Leadership",
            "Course Code": "ASM3141",
            "Course Name": "8",
            "Module ECTS": "216"
        },
        {
            "Module Code": "",
            "Module Name": "Block I: Organizational Development",
            "Course Code": "ASM3141",
            "Course Name": "4",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block II: Fundamentals of Leadership",
            "Course Code": "ASM3142",
            "Course Name": "4",
            "Module ECTS": ""
        },
        {
            "Module Code": "15",
            "Module Name": "Contract Formation and Administration",
            "Course Code": "ASM3150",
            "Course Name": "9.5",
            "Module ECTS": "256.5"
        },
        {
            "Module Code": "",
            "Module Name": "Block 1: Business Law",
            "Course Code": "FNDE2196",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block 2: Contract Administration",
            "Course Code": "ASM3152",
            "Course Name": "4.5",
            "Module ECTS": ""
        },
        {
            "Module Code": "16",
            "Module Name": "Research and Senior Essay",
            "Course Code": "ASM3160",
            "Course Name": "14",
            "Module ECTS": "378"
        },
        {
            "Module Code": "",
            "Module Name": "Block 1: Basic Statistics",
            "Course Code": "GCMA2011",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block 2: Business Research Methods",
            "Course Code": "ASM4091",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Block 3: Internship and Final Project",
            "Course Code": "ASM3163",
            "Course Name": "4",
            "Module ECTS": ""
        }
    ]
      },
      {
        "id": 4,
        image : aaitlogo,
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
        "college": 1,
        "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "Category",
            "Module Name": "Module Name",
            "Course Code": "Module Code",
            "Course Name": "Module ECTS",
            "Module ECTS": "Course Code"
        },
        {
            "Module Code": "3General/Support",
            "Module Name": "Basic English Skills",
            "Course Code": "EnLa-M1013",
            "Course Name": "10",
            "Module ECTS": "EnLa1011"
        },
        {
            "Module Code": "Civics and Ethics",
            "Module Name": "CESt-M1023",
            "Course Code": "5",
            "Course Name": "CESt1023",
            "Module ECTS": "Civics and Ethics"
        },
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "PHIL-M1033",
            "Course Code": "5",
            "Course Name": "PHIL-1033",
            "Module ECTS": "Introduction to Logic"
        },
        {
            "Module Code": "Applied Engineering Mathematics",
            "Module Name": "GEng-M1043",
            "Course Code": "14",
            "Course Name": "Math-1041",
            "Module ECTS": "Applied Mathematics I"
        },
        {
            "Module Code": "Engineering Mechanics",
            "Module Name": "GEng-M1053",
            "Course Code": "12",
            "Course Name": "CEng-1051",
            "Module ECTS": "Engineering Mechanics I-Statics"
        },
        {
            "Module Code": "Basic Engineering Skills",
            "Module Name": "GEng-M1063",
            "Course Code": "8",
            "Course Name": "GENG-1061",
            "Module ECTS": "Introduction to Engineering Profession"
        },
        {
            "Module Code": "Basic Economics",
            "Module Name": "GEng-M1073",
            "Course Code": "5",
            "Course Name": "ECON-1071",
            "Module ECTS": "Introduction to Economics"
        },
        {
            "Module Code": "Computing",
            "Module Name": "GEng-M2083",
            "Course Code": "5",
            "Course Name": "ECEG-2081",
            "Module ECTS": "Introduction to Computing"
        },
        {
            "Module Code": "Engineering Thermodynamics",
            "Module Name": "GEng-M2093",
            "Course Code": "4",
            "Course Name": "MEng-2091",
            "Module ECTS": "Engineering Thermodynamics"
        },
        {
            "Module Code": "1Core",
            "Module Name": "Applied Physics",
            "Course Code": "ECEG-M2101",
            "Course Name": "15",
            "Module ECTS": "ECEG-2101"
        },
        {
            "Module Code": "Advanced Engineering Mathematics",
            "Module Name": "ECEG-M2111",
            "Course Code": "18",
            "Course Name": "ECEG-2111",
            "Module ECTS": "Applied Engineering Mathematics III"
        },
        {
            "Module Code": "Basic Electrical Engineering",
            "Module Name": "ECEG-M2121",
            "Course Code": "12",
            "Course Name": "ECEG-2121",
            "Module ECTS": "Fundamental of Electrical Engineering (Circuit)"
        },
        {
            "Module Code": "Applied Electronics",
            "Module Name": "ECEG-M2131",
            "Course Code": "16",
            "Course Name": "ECEG-2131",
            "Module ECTS": "Applied Electronics I"
        },
        {
            "Module Code": "Signals and Networks Analysis",
            "Module Name": "ECEG-M2141",
            "Course Code": "12",
            "Course Name": "ECEG-2141",
            "Module ECTS": "Signals and Systems Analysis"
        },
        {
            "Module Code": "Basic Electrical Machines",
            "Module Name": "ECEG-M3151",
            "Course Code": "13",
            "Course Name": "ECEG-3154",
            "Module ECTS": "Introduction to Electrical Machines"
        },
        {
            "Module Code": "Computer Architecture and Programming",
            "Module Name": "ECEG-M3161",
            "Course Code": "16",
            "Course Name": "ECEG-3161",
            "Module ECTS": "Digital Logic Design"
        },
        {
            "Module Code": "Electrical Systems Engineering",
            "Module Name": "ECEG-M3171",
            "Course Code": "29",
            "Course Name": "ECEG-3171",
            "Module ECTS": "Digital Signal Processing"
        },
        {
            "Module Code": "Microcomputer and Interfacing",
            "Module Name": "ECEG-M4181",
            "Course Code": "6",
            "Course Name": "ECEG-4181",
            "Module ECTS": "Microcomputer and Interfacing"
        },
        {
            "Module Code": "Data Storage and Analysis",
            "Module Name": "ECEG-M4191",
            "Course Code": "14",
            "Course Name": "ECEG-4191",
            "Module ECTS": "Database Systems"
        },
        {
            "Module Code": "Programming Concepts and Software Engineering",
            "Module Name": "ECEG-M4201",
            "Course Code": "15",
            "Course Name": "ECEG-4201",
            "Module ECTS": "Software Engineering"
        },
        {
            "Module Code": "Computer Networks and Security",
            "Module Name": "ECEG-M4211",
            "Course Code": "10",
            "Course Name": "ECEG-4211",
            "Module ECTS": "Data Communication and Computer Networks"
        },
        {
            "Module Code": "Computer System Design and Automation",
            "Module Name": "ECEG-M4221",
            "Course Code": "16",
            "Course Name": "ECEG-4221",
            "Module ECTS": "VLSI Design"
        },
        {
            "Module Code": "Modern Control Systems",
            "Module Name": "ECEG-M4231",
            "Course Code": "5",
            "Course Name": "ECEG-4231",
            "Module ECTS": "Modern Control Systems"
        },
        {
            "Module Code": "Machines and Derives",
            "Module Name": "ECEG-M4241",
            "Course Code": "11",
            "Course Name": "ECEG-4241",
            "Module ECTS": "Electrical Machines"
        },
        {
            "Module Code": "Power Engineering I",
            "Module Name": "ECEG-M4251",
            "Course Code": "10",
            "Course Name": "ECEG-4251",
            "Module ECTS": "Power Systems"
        },
        {
            "Module Code": "Energy Conversion and distribution",
            "Module Name": "ECEG-M4261",
            "Course Code": "15",
            "Course Name": "ECEG-4261",
            "Module ECTS": "Electrical Installation"
        },
        {
            "Module Code": "Power Engineering II",
            "Module Name": "ECEG-M5271",
            "Course Code": "8",
            "Course Name": "ECEG-5271",
            "Module ECTS": "Power System Planning and Operation"
        },
        {
            "Module Code": "Microelectronic Devices and Circuits",
            "Module Name": "ECEG-M4281",
            "Course Code": "5",
            "Course Name": "ECEG-4281",
            "Module ECTS": "Microelectronic Devices and Circuits"
        },
        {
            "Module Code": "Communication System",
            "Module Name": "ECEG-M4301",
            "Course Code": "5",
            "Course Name": "ECEG-4301",
            "Module ECTS": "Communication System"
        },
        {
            "Module Code": "Data and Telecom Network",
            "Module Name": "ECEG-M4311",
            "Course Code": "20",
            "Course Name": "ECEG-4311",
            "Module ECTS": "Data Communication and Computer Networks"
        },
        {
            "Module Code": "Waves and Antennas",
            "Module Name": "ECEG-M4321",
            "Course Code": "10",
            "Course Name": "ECEG-4321",
            "Module ECTS": "EM Waves and Guide Structures"
        },
        {
            "Module Code": "Microwave and Optical Communication",
            "Module Name": "ECEG-M5331",
            "Course Code": "10",
            "Course Name": "ECEG-5331",
            "Module ECTS": "Microwave Devices and Systems"
        },
        {
            "Module Code": "Electric Machines and Derives",
            "Module Name": "ECEG-M4341",
            "Course Code": "16",
            "Course Name": "ECEG-4341",
            "Module ECTS": "Electrical Installation"
        },
        {
            "Module Code": "Instrumentation and Control Engineering",
            "Module Name": "ECEG-M4351",
            "Course Code": "15",
            "Course Name": "ECEG-4351",
            "Module ECTS": "Modern Control systems"
        },
        {
            "Module Code": "Control Applications",
            "Module Name": "ECEG-M5371",
            "Course Code": "16",
            "Course Name": "ECEG-5371",
            "Module ECTS": "Embedded Systems"
        },
        {
            "Module Code": "Electronics Design",
            "Module Name": "ECEG-M4381",
            "Course Code": "20",
            "Course Name": "ECEG-4381",
            "Module ECTS": "Principles of Electronics Design"
        },
        {
            "Module Code": "Microelectronic Systems",
            "Module Name": "ECEG-M4391",
            "Course Code": "10",
            "Course Name": "ECEG-4391",
            "Module ECTS": "Microelectronic Devices and Circuits"
        },
        {
            "Module Code": "Power Electronics Technology",
            "Module Name": "ECEG-M5401",
            "Course Code": "5",
            "Course Name": "ECEG-5401",
            "Module ECTS": "Power Electronics Technology andApplications"
        },
        {
            "Module Code": "Optoelectronics",
            "Module Name": "ECEG-M5411",
            "Course Code": "5",
            "Course Name": "ECEG-5411",
            "Module ECTS": "Optoelectronics"
        },
        {
            "Module Code": "Modern Trends in Electronics Engineering",
            "Module Name": "ECEG-M5421",
            "Course Code": "5",
            "Course Name": "ECEG-5421",
            "Module ECTS": "Modern Trends in Electronics Engineering"
        },
        {
            "Module Code": "Project and Presentation",
            "Module Name": "ECEG-M5431",
            "Course Code": "7",
            "Course Name": "ECEG-5431",
            "Module ECTS": "Research Methods and Presentation"
        },
        {
            "Module Code": "Internship",
            "Module Name": "ECEG-M4441",
            "Course Code": "30",
            "Course Name": "ECEG-4441",
            "Module ECTS": "Industry Internship"
        },
        {
            "Module Code": "Entrepreneurship and Managerial skills",
            "Module Name": "MEng-M5451",
            "Course Code": "9",
            "Course Name": "MENG-5451",
            "Module ECTS": "Entrepreneurship"
        },
        {
            "Module Code": "B.Sc. Thesis",
            "Module Name": "ECEG-M5461",
            "Course Code": "12",
            "Course Name": "ECEG-5461",
            "Module ECTS": "B.Sc. Thesis"
        }
    ]
      },
      {
        "id": 5,
        image : aaitlogo,
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
        "college": 1,
        "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "#",
            "Module Name": "Modules Number",
            "Course Code": "Module Title",
            "Course Name": "ECTS",
            "Module ECTS": "Course Code"
        },
        {
            "Module Code": "01",
            "Module Name": "EnLa-M1013",
            "Course Code": "Basic English Skills",
            "Course Name": "10",
            "Module ECTS": "EnLa-1011"
        },
        {
            "Module Code": "02",
            "Module Name": "CESt-M1023",
            "Course Code": "Civics and Ethics Education",
            "Course Name": "5",
            "Module ECTS": "CESt-1023"
        },
        {
            "Module Code": "03",
            "Module Name": "PHIL-M1033",
            "Course Code": "Introduction to Logic",
            "Course Name": "5",
            "Module ECTS": "PHIL-1033"
        },
        {
            "Module Code": "04",
            "Module Name": "GEng-M1043",
            "Course Code": "Applied Engineering Mathematics",
            "Course Name": "14",
            "Module ECTS": "Math-1041"
        },
        {
            "Module Code": "05",
            "Module Name": "GEng-M1053",
            "Course Code": "Engineering Mechanics",
            "Course Name": "12",
            "Module ECTS": "CEng-1051"
        },
        {
            "Module Code": "06",
            "Module Name": "GEng-M1063",
            "Course Code": "Basic Engineering Skills",
            "Course Name": "8",
            "Module ECTS": "GEng-1061"
        },
        {
            "Module Code": "07",
            "Module Name": "ITSE-M2211",
            "Course Code": "Information Technology Fundamentals",
            "Course Name": "7",
            "Module ECTS": "ITSE-1071"
        },
        {
            "Module Code": "08",
            "Module Name": "ITSE-M5511",
            "Course Code": "Human Computer Interaction",
            "Course Name": "7",
            "Module ECTS": "ITSE-3081"
        },
        {
            "Module Code": "09",
            "Module Name": "ITSE-M7811",
            "Course Code": "Information Assurance and Security",
            "Course Name": "14",
            "Module ECTS": "ITSE-4091"
        },
        {
            "Module Code": "10",
            "Module Name": "ITSE-M4511",
            "Course Code": "Networking",
            "Course Name": "21",
            "Module ECTS": "ITSE-2121"
        },
        {
            "Module Code": "11",
            "Module Name": "ITSE-M2411",
            "Course Code": "Programming Fundamentals I",
            "Course Name": "14",
            "Module ECTS": "ITSE-1131"
        },
        {
            "Module Code": "12",
            "Module Name": "ITSE-M2411",
            "Course Code": "Programming Fundamentals II",
            "Course Name": "14",
            "Module ECTS": "ITSE-2132"
        },
        {
            "Module Code": "13",
            "Module Name": "ITSE-M8811",
            "Course Code": "Social and Professional Issues",
            "Course Name": "12",
            "Module ECTS": "ITSE-4182"
        },
        {
            "Module Code": "14",
            "Module Name": "ITSE-M4811",
            "Course Code": "Web Systems and Technologies I",
            "Course Name": "13",
            "Module ECTS": "ITSE-2192"
        },
        {
            "Module Code": "15",
            "Module Name": "ITSE-M4812",
            "Course Code": "Web Systems and Technologies II",
            "Course Name": "13",
            "Module ECTS": "ITSE-3193"
        },
        {
            "Module Code": "16",
            "Module Name": "ITSE-M4812",
            "Course Code": "System Integration and Architecture",
            "Course Name": "24",
            "Module ECTS": "ITSE-2211"
        },
        {
            "Module Code": "17",
            "Module Name": "ITSE-M3311",
            "Course Code": "Information Management",
            "Course Name": "14",
            "Module ECTS": "ITSE-2221"
        },
        {
            "Module Code": "18",
            "Module Name": "ITSE-M3321",
            "Course Code": "Math and Statistics for IT",
            "Course Name": "12",
            "Module ECTS": "ITSE-2231"
        },
        {
            "Module Code": "19",
            "Module Name": "ITSE-M5911",
            "Course Code": "Advanced Programming I",
            "Course Name": "14",
            "Module ECTS": "ITSE-3241"
        },
        {
            "Module Code": "20",
            "Module Name": "ITSE-M5912",
            "Course Code": "Advanced Programming II",
            "Course Name": "13",
            "Module ECTS": "ITSE-5243"
        },
        {
            "Module Code": "21",
            "Module Name": "ITSE-M2911",
            "Course Code": "Platform Technologies I",
            "Course Name": "20",
            "Module ECTS": "ITSE-3251"
        },
        {
            "Module Code": "22",
            "Module Name": "ITSE-M2912",
            "Course Code": "Platform Technologies II",
            "Course Name": "24",
            "Module ECTS": "ITSE-4254"
        },
        {
            "Module Code": "23",
            "Module Name": "ITSE-M3711",
            "Course Code": "Systems and Application Specialties",
            "Course Name": "12",
            "Module ECTS": "ITSE-1261"
        },
        {
            "Module Code": "24",
            "Module Name": "ITSE-M911",
            "Course Code": "Project",
            "Course Name": "14",
            "Module ECTS": "ITSE-5271"
        },
        {
            "Module Code": "25",
            "Module Name": "ITSE-M5581",
            "Course Code": "Electives",
            "Course Name": "12",
            "Module ECTS": ""
        }
    ]
      },
      {
        "id": 6,
        image : aaitlogo,
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
        "college": 1,
        "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "Category",
            "Module Name": "Module No.",
            "Course Code": "Module name",
            "Course Name": "Module code",
            "Module ECTS": "Module ECTS"
        },
        {
            "Module Code": "3",
            "Module Name": "01",
            "Course Code": "Basic English Skills",
            "Course Name": "EnLa-M1013",
            "Module ECTS": "10"
        },
        {
            "Module Code": "3",
            "Module Name": "02",
            "Course Code": "Civics and Ethical Education",
            "Course Name": "CESt-M1023",
            "Module ECTS": "5"
        },
        {
            "Module Code": "3",
            "Module Name": "03",
            "Course Code": "Introduction to Logic",
            "Course Name": "PHIL-M1033",
            "Module ECTS": "5"
        },
        {
            "Module Code": "3",
            "Module Name": "04",
            "Course Code": "Basic Eng’g Mathematics",
            "Course Name": "GEng-M1043",
            "Module ECTS": "14"
        },
        {
            "Module Code": "3",
            "Module Name": "05",
            "Course Code": "Basic Engineering Mechanics",
            "Course Name": "GEng-M1053",
            "Module ECTS": "12"
        },
        {
            "Module Code": "3",
            "Module Name": "06",
            "Course Code": "Basic Engineering Skills",
            "Course Name": "GEng-M1063",
            "Module ECTS": "8"
        },
        {
            "Module Code": "1",
            "Module Name": "07",
            "Course Code": "Advanced Eng’g Mathematics and Computations",
            "Course Name": "MEng_M2071",
            "Module ECTS": "15"
        },
        {
            "Module Code": "3",
            "Module Name": "08",
            "Course Code": "Introduction to Economics",
            "Course Name": "Econ_M1083",
            "Module ECTS": "5"
        },
        {
            "Module Code": "3",
            "Module Name": "09",
            "Course Code": "Computing and Programming",
            "Course Name": "MEng_M2093",
            "Module ECTS": "5"
        },
        {
            "Module Code": "1",
            "Module Name": "10",
            "Course Code": "Machine Drawing",
            "Course Name": "MEng_M2101",
            "Module ECTS": "10"
        },
        {
            "Module Code": "1",
            "Module Name": "11",
            "Course Code": "Mechanics of Materials",
            "Course Name": "MEng_M2111",
            "Module ECTS": "10"
        },
        {
            "Module Code": "1",
            "Module Name": "12",
            "Course Code": "Engineering Materials",
            "Course Name": "MEng_M2121",
            "Module ECTS": "10"
        },
        {
            "Module Code": "1",
            "Module Name": "13",
            "Course Code": "Eng’g Thermo-Fluids",
            "Course Name": "MEng_M2131",
            "Module ECTS": "15"
        },
        {
            "Module Code": "1",
            "Module Name": "14",
            "Course Code": "General Workshop Practice",
            "Course Name": "MEng_M3141",
            "Module ECTS": "6"
        },
        {
            "Module Code": "1",
            "Module Name": "15",
            "Course Code": "Machine Elements",
            "Course Name": "MEng_M3151",
            "Module ECTS": "10"
        },
        {
            "Module Code": "1",
            "Module Name": "16",
            "Course Code": "Advanced Eng’g Mechanics",
            "Course Name": "MEng_M3161",
            "Module ECTS": "10"
        },
        {
            "Module Code": "1",
            "Module Name": "17",
            "Course Code": "Heat Transfer",
            "Course Name": "MEng_M3171",
            "Module ECTS": "5"
        },
        {
            "Module Code": "1",
            "Module Name": "18",
            "Course Code": "Integrated Machine Design Project",
            "Course Name": "MEng_M4181",
            "Module ECTS": "10"
        },
        {
            "Module Code": "1",
            "Module Name": "19",
            "Course Code": "Manufacturing Engineering",
            "Course Name": "MEng_M3191",
            "Module ECTS": "10"
        },
        {
            "Module Code": "3",
            "Module Name": "20",
            "Course Code": "Electrical Engineering",
            "Course Name": "ECEng_M3203",
            "Module ECTS": "10"
        },
        {
            "Module Code": "1",
            "Module Name": "21",
            "Course Code": "Control Engineering",
            "Course Name": "MEng_M4211",
            "Module ECTS": "15"
        },
        {
            "Module Code": "1",
            "Module Name": "22",
            "Course Code": "Energy Conversion Machines",
            "Course Name": "MEng_M4221",
            "Module ECTS": "10"
        },
        {
            "Module Code": "1",
            "Module Name": "23",
            "Course Code": "Research Methodology",
            "Course Name": "MEng_M3233",
            "Module ECTS": "5"
        },
        {
            "Module Code": "1",
            "Module Name": "24",
            "Course Code": "Materials Handling Equipment",
            "Course Name": "MEng_M4241",
            "Module ECTS": "5"
        },
        {
            "Module Code": "1",
            "Module Name": "25",
            "Course Code": "Maintenance of Machinery",
            "Course Name": "MEng_M4251",
            "Module ECTS": "5"
        },
        {
            "Module Code": "1",
            "Module Name": "26",
            "Course Code": "Industrial Internship",
            "Course Name": "MEng_M4261",
            "Module ECTS": "30"
        },
        {
            "Module Code": "1",
            "Module Name": "27",
            "Course Code": "Fluid Power System",
            "Course Name": "MEng_M5271",
            "Module ECTS": "5"
        },
        {
            "Module Code": "1",
            "Module Name": "28",
            "Course Code": "Introduction to Finite Element Methods",
            "Course Name": "MEng_M5281",
            "Module ECTS": "4"
        },
        {
            "Module Code": "1",
            "Module Name": "29",
            "Course Code": "Thermal Systems Engineering",
            "Course Name": "MEng_M5291",
            "Module ECTS": "10"
        },
        {
            "Module Code": "1",
            "Module Name": "30",
            "Course Code": "Industrial Management and Entrepreneurship",
            "Course Name": "MEng_M5301",
            "Module ECTS": "10"
        },
        {
            "Module Code": "1",
            "Module Name": "31",
            "Course Code": "Metrology",
            "Course Name": "MEng_M5311",
            "Module ECTS": "5"
        },
        {
            "Module Code": "1",
            "Module Name": "32",
            "Course Code": "Quality Management",
            "Course Name": "MEng_M5321",
            "Module ECTS": "5"
        },
        {
            "Module Code": "2",
            "Module Name": "33",
            "Course Code": "Mechanical Design Electives I",
            "Course Name": "MEng_M5332",
            "Module ECTS": "5"
        },
        {
            "Module Code": "2",
            "Module Name": "34",
            "Course Code": "Mechanical Design Electives II",
            "Course Name": "MEng_M5342",
            "Module ECTS": "10"
        },
        {
            "Module Code": "2",
            "Module Name": "35",
            "Course Code": "Mechanical Design Electives III",
            "Course Name": "MEng_M5352",
            "Module ECTS": "5"
        },
        {
            "Module Code": "2",
            "Module Name": "36",
            "Course Code": "Thermal Eng’g Elective I",
            "Course Name": "MEng_M4362",
            "Module ECTS": "5"
        },
        {
            "Module Code": "2",
            "Module Name": "37",
            "Course Code": "Thermal Eng’g Elective II",
            "Course Name": "MEng_M5372",
            "Module ECTS": "10"
        },
        {
            "Module Code": "2",
            "Module Name": "38",
            "Course Code": "Thermal Eng’g Elective III",
            "Course Name": "MEng_M5382",
            "Module ECTS": "5"
        },
        {
            "Module Code": "2",
            "Module Name": "39",
            "Course Code": "Manufacturing Eng’g Elective I",
            "Course Name": "MEng_M4392",
            "Module ECTS": "5"
        },
        {
            "Module Code": "2",
            "Module Name": "40",
            "Course Code": "Manufacturing Eng’g Elective II",
            "Course Name": "MEng_M5402",
            "Module ECTS": "10"
        },
        {
            "Module Code": "2",
            "Module Name": "41",
            "Course Code": "Manufacturing Eng’g Elective III",
            "Course Name": "MEng_M5412",
            "Module ECTS": "5"
        },
        {
            "Module Code": "2",
            "Module Name": "42",
            "Course Code": "Industrial Eng’g Elective I",
            "Course Name": "MEng_M5422",
            "Module ECTS": "5"
        },
        {
            "Module Code": "2",
            "Module Name": "43",
            "Course Code": "Industrial Eng’g Electives II",
            "Course Name": "MEng_M5432",
            "Module ECTS": "10"
        },
        {
            "Module Code": "2",
            "Module Name": "44",
            "Course Code": "Industrial Eng’g Electives III",
            "Course Name": "MEng_M5442",
            "Module ECTS": "5"
        },
        {
            "Module Code": "2",
            "Module Name": "45",
            "Course Code": "Motor Vehicle Eng’g Elective I",
            "Course Name": "MEng_M4452",
            "Module ECTS": "5"
        },
        {
            "Module Code": "2",
            "Module Name": "46",
            "Course Code": "Motor Vehicle Eng’g Elective II",
            "Course Name": "MEng_M5462",
            "Module ECTS": "10"
        },
        {
            "Module Code": "2",
            "Module Name": "47",
            "Course Code": "Motor Vehicle Eng’g Elective III",
            "Course Name": "MEng_M5472",
            "Module ECTS": "5"
        },
        {
            "Module Code": "2",
            "Module Name": "48",
            "Course Code": "Railway Eng’g Electives I",
            "Course Name": "MEng_M5482",
            "Module ECTS": "5"
        },
        {
            "Module Code": "2",
            "Module Name": "49",
            "Course Code": "Railway Eng’g Electives II",
            "Course Name": "MEng_M5492",
            "Module ECTS": "10"
        },
        {
            "Module Code": "2",
            "Module Name": "50",
            "Course Code": "Railway Eng’g Electives III",
            "Course Name": "MEng_M5502",
            "Module ECTS": "5"
        },
        {
            "Module Code": "2",
            "Module Name": "51",
            "Course Code": "Bachelor Thesis",
            "Course Name": "MEng_M5511",
            "Module ECTS": "12"
        }
    ]
      }
    ],
    "freshmanOffice": "Pre-Engineering | AAiT"
  },
 
  {
    "id": 3,
    "name": "College of Natural Science",
    "description": "Explore nature & unravel its secrets! Offers programs in Physics, Chemistry, Biology, Math, Computer Science & more. Dive deep with world-class research & innovation.",
     image: welcome,
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
         image:  welcome,
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
        "college": 3,
        "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "Module Number",
            "Module Name": "Module Title",
            "Course Code": "Module Code",
            "Course Name": "Courses",
            "Module ECTS": "Course Code"
        },
        {
            "Module Code": "01",
            "Module Name": "Cellular biology and Laboratory techniques",
            "Course Code": "Biol-M1011",
            "Course Name": "1.Introduction to Biological Laboratory Techniques",
            "Module ECTS": "Biol1011"
        },
        {
            "Module Code": "02",
            "Module Name": "Botanical Sciences",
            "Course Code": "Biol-M1021",
            "Course Name": "1.Phycology",
            "Module ECTS": "Biol1021"
        },
        {
            "Module Code": "03",
            "Module Name": "Zoological Sciences",
            "Course Code": "Biol-M2031",
            "Course Name": "Invertebrate Zoology",
            "Module ECTS": "Biol2031"
        },
        {
            "Module Code": "04",
            "Module Name": "Microbial Biology",
            "Course Code": "Biol-M2041",
            "Course Name": "General Microbiology",
            "Module ECTS": "Biol2041"
        },
        {
            "Module Code": "05",
            "Module Name": "Ecological  and  Environmental Biology",
            "Course Code": "Biol-M2051",
            "Course Name": "Principles of Ecology",
            "Module ECTS": "Biol2051"
        },
        {
            "Module Code": "06",
            "Module Name": "Genetics and Evolutionary Biology",
            "Course Code": "Biol-M3061",
            "Course Name": "1.Principles of Genetics",
            "Module ECTS": "Biol3061"
        },
        {
            "Module Code": "07",
            "Module Name": "Molecular Biology and Biotechnology",
            "Course Code": "Biol-M3071",
            "Course Name": "Biochemistry",
            "Module ECTS": "Biol3071"
        },
        {
            "Module Code": "08",
            "Module Name": "Biomedical Sciences",
            "Course Code": "Biol-M3081",
            "Course Name": "Principles of Parasitology",
            "Module ECTS": "Biol3081"
        },
        {
            "Module Code": "09",
            "Module Name": "Fisheries and aquatic sciences",
            "Course Code": "Biol-M3091",
            "Course Name": "1.Aquatic Science and Wetland Management",
            "Module ECTS": "Biol3091"
        },
        {
            "Module Code": "10",
            "Module Name": "Biological Research Methods and Applications",
            "Course Code": "Biol-M3101",
            "Course Name": "Research Methods and Reporting in Science",
            "Module ECTS": "Biol3101"
        },
        {
            "Module Code": "Module Number",
            "Module Name": "Module Title",
            "Course Code": "Module Code",
            "Course Name": "Courses",
            "Module ECTS": "Course Code"
        },
        {
            "Module Code": "11",
            "Module Name": "Optional I   (Biological Field Techniques and Experimental Design)",
            "Course Code": "Biol-M3112",
            "Course Name": "1.Field Techniques in Botany and Zoology",
            "Module ECTS": "Biol3111"
        },
        {
            "Module Code": "12",
            "Module Name": "Optional II (Cytogenetics and  Principles of Breeding)",
            "Course Code": "Biol-M3122",
            "Course Name": "1.Cytogenetics",
            "Module ECTS": "Biol3121"
        },
        {
            "Module Code": "13",
            "Module Name": "Optional III(Tissue Culture and Food Biotechnology)",
            "Course Code": "Biol-M3132",
            "Course Name": "1.Int. to Plant Tissue Culture and Propagation",
            "Module ECTS": "Biol3131"
        },
        {
            "Module Code": "14",
            "Module Name": "Optional IV(Developmental Biology and Animal Behaviour)",
            "Course Code": "Biol-M3142",
            "Course Name": "1.Reproductive and Developmental Biology",
            "Module ECTS": "Biol3141"
        },
        {
            "Module Code": "Module Number",
            "Module Name": "Module Title",
            "Course Code": "Module Code",
            "Course Name": "Courses",
            "Module ECTS": "Course Code"
        },
        {
            "Module Code": "01",
            "Module Name": "Fundamental Inorganic chemistry",
            "Course Code": "Chem-M2143",
            "Course Name": "Inorganic Chemistry",
            "Module ECTS": "Chem2141"
        },
        {
            "Module Code": "02",
            "Module Name": "Fundamental  Analytical Chemistry",
            "Course Code": "Chem-M2153",
            "Course Name": "Analytical Chemistry",
            "Module ECTS": "Chem2151"
        },
        {
            "Module Code": "03",
            "Module Name": "Organic Chemistry",
            "Course Code": "Chem-M2163",
            "Course Name": "Fund. of Organic Chemistry",
            "Module ECTS": "Chem2161"
        },
        {
            "Module Code": "04",
            "Module Name": "Statistics for Biostatistics",
            "Course Code": "Stat-M2193",
            "Course Name": "Statistics for Biologists",
            "Module ECTS": "Stat2191"
        },
        {
            "Module Code": "Module Number",
            "Module Name": "Module Title",
            "Course Code": "Module Code",
            "Course Name": "Courses",
            "Module ECTS": "Course Code"
        },
        {
            "Module Code": "01",
            "Module Name": "Basic English Skills",
            "Course Code": "EnLa-M1013",
            "Course Name": "1.Communicative English Skills",
            "Module ECTS": "Enla1011"
        },
        {
            "Module Code": "02",
            "Module Name": "Civics and  Ethics",
            "Course Code": "CESt-M1023",
            "Course Name": "1.Civics and  Ethics",
            "Module ECTS": "CESt1023"
        },
        {
            "Module Code": "03",
            "Module Name": "Computer Application",
            "Course Code": "CoSc-M1203",
            "Course Name": "Introduction to Computer Application",
            "Module ECTS": "CoSc1201"
        }
    ]
      
      },
      {
        "id": 8,
          "name": "Computer Science",
          image: welcome,
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
        "college": 3, "ModulesandCourses": [
        {
            "Module Code": "Module Code",
            "Module Name": "Module Title",
            "Course Code": "Credit Hours",
            "Course Name": "ECTS",
            "Module ECTS": "Lecture hour"
        },
        {
            "Module Code": "CoSc 6001",
            "Module Name": "Research Methods",
            "Course Code": "2",
            "Course Name": "4.7",
            "Module ECTS": "2"
        },
        {
            "Module Code": "CoSc 6003",
            "Module Name": "Distributed Systems",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "CoSc 6301",
            "Module Name": "Computer Security",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "CoSc 6101",
            "Module Name": "Software Project Management",
            "Course Code": "1",
            "Course Name": "2.3",
            "Module ECTS": "1"
        },
        {
            "Module Code": "CoSc 6201",
            "Module Name": "Distributed Database Systems",
            "Course Code": "2",
            "Course Name": "4.7",
            "Module ECTS": "2"
        },
        {
            "Module Code": "CoSc 6405",
            "Module Name": "Natural Language Processing",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "CoSc 7001",
            "Module Name": "Thesis",
            "Course Code": "6",
            "Course Name": "30",
            "Module ECTS": "–"
        },
        {
            "Module Code": "",
            "Module Name": "Sub-Total",
            "Course Code": "20",
            "Course Name": "62.7",
            "Module ECTS": ""
        },
        {
            "Module Code": "Module Code",
            "Module Name": "Module Title",
            "Course Code": "Credit Hours",
            "Course Name": "ECTS",
            "Module ECTS": "Lecture hour"
        },
        {
            "Module Code": "CoSc 6202",
            "Module Name": "Multimedia- and Spatial-Data Management",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "CoSc 6204",
            "Module Name": "Semantic Web Technologies",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "CoSc 6206",
            "Module Name": "Data Mining and Data warehouse",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "CoSc 6208",
            "Module Name": "Seminar in Data & Web Engineering",
            "Course Code": "1",
            "Course Name": "2.3",
            "Module ECTS": "–"
        },
        {
            "Module Code": "",
            "Module Name": "Sub-Total",
            "Course Code": "10",
            "Course Name": "23.3",
            "Module ECTS": ""
        },
        {
            "Module Code": "Module Code",
            "Module Name": "Module Title",
            "Course Code": "Credit Hours",
            "Course Name": "ECTS",
            "Module ECTS": "Lecture hour"
        },
        {
            "Module Code": "CoSc 6012",
            "Module Name": "Digital Image Processing",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "CoSc 6014",
            "Module Name": "Cloud Computing",
            "Course Code": "2",
            "Course Name": "4.7",
            "Module ECTS": "2"
        },
        {
            "Module Code": "CoSc 6304",
            "Module Name": "Pervasive Computing",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "CoSc 6210",
            "Module Name": "Web Retrieval Systems",
            "Course Code": "2",
            "Course Name": "4.7",
            "Module ECTS": "2"
        },
        {
            "Module Code": "CoSc 6209",
            "Module Name": "Big Data",
            "Course Code": "2",
            "Course Name": "4.7",
            "Module ECTS": "2"
        },
        {
            "Module Code": "",
            "Module Name": "Sub-Total",
            "Course Code": "2/3",
            "Course Name": "4.7/7",
            "Module ECTS": ""
        },
        {
            "Module Code": "Module Code",
            "Module Name": "Module Title",
            "Course Code": "Credit Hours",
            "Course Name": "ECTS",
            "Module ECTS": "Lecture hour"
        },
        {
            "Module Code": "CoSc 6102",
            "Module Name": "Software Development and Project Management",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "CoSc 6104",
            "Module Name": "Software Testing and Quality",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "CoSc 6106",
            "Module Name": "Software Architecture and Design",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "CoSc 6108",
            "Module Name": "Seminar in Software Engineering",
            "Course Code": "1",
            "Course Name": "2.3",
            "Module ECTS": "–"
        },
        {
            "Module Code": "",
            "Module Name": "Sub-Total",
            "Course Code": "10",
            "Course Name": "23.3",
            "Module ECTS": ""
        },
        {
            "Module Code": "Module Code",
            "Module Name": "Module Title",
            "Course Code": "Credit Hours",
            "Course Name": "ECTS",
            "Module ECTS": "Lecture hour"
        },
        {
            "Module Code": "CoSc 6110",
            "Module Name": "Usability Engineering",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "CoSc 6112",
            "Module Name": "Enterprise and Service Architecture",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "CoSc 6014",
            "Module Name": "Cloud Computing",
            "Course Code": "2",
            "Course Name": "4.7",
            "Module ECTS": "2"
        },
        {
            "Module Code": "CoSc 6304",
            "Module Name": "Pervasive Computing",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "",
            "Module Name": "Sub-Total",
            "Course Code": "2/3",
            "Course Name": "4.7/7",
            "Module ECTS": ""
        },
        {
            "Module Code": "Module Code",
            "Module Name": "Module Title",
            "Course Code": "Credit Hours",
            "Course Name": "ECTS",
            "Module ECTS": "Lecture hour"
        },
        {
            "Module Code": "CoSc 6302",
            "Module Name": "Advanced Computer Networks",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "CoSc 6304",
            "Module Name": "Pervasive Computing",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "CoSc 6306",
            "Module Name": "Cyber Security",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "CoSc 6308",
            "Module Name": "Seminar in Network and Security",
            "Course Code": "1",
            "Course Name": "2.3",
            "Module ECTS": "–"
        },
        {
            "Module Code": "",
            "Module Name": "Sub-Total",
            "Course Code": "10",
            "Course Name": "23.3",
            "Module ECTS": ""
        },
        {
            "Module Code": "Module Code",
            "Module Name": "Module Title",
            "Course Code": "Credit Hours",
            "Course Name": "ECTS",
            "Module ECTS": "Lecture hour"
        },
        {
            "Module Code": "CoSc  6014",
            "Module Name": "Cloud Computing",
            "Course Code": "2",
            "Course Name": "4.7",
            "Module ECTS": "2"
        },
        {
            "Module Code": "CoSc  6016",
            "Module Name": "Real Time and Embedded Systems",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "",
            "Module Name": "Sub-Total",
            "Course Code": "2/3",
            "Course Name": "4.7/7",
            "Module ECTS": ""
        },
        {
            "Module Code": "Module Code",
            "Module Name": "Module Title",
            "Course Code": "Credit Hours",
            "Course Name": "ECTS",
            "Module ECTS": "Lecture hour"
        },
        {
            "Module Code": "CoSc 6302",
            "Module Name": "Advanced Computer Networks",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "CoSc 6012",
            "Module Name": "Digital Image Processing",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "2"
        },
        {
            "Module Code": "CoSc 6016",
            "Module Name": "Real Time and Embedded Systems",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "CoSc 6002",
            "Module Name": "Seminar in Computer Science",
            "Course Code": "1",
            "Course Name": "2.3",
            "Module ECTS": "–"
        },
        {
            "Module Code": "",
            "Module Name": "Sub-Total",
            "Course Code": "10",
            "Course Name": "23.3",
            "Module ECTS": ""
        },
        {
            "Module Code": "Module Code",
            "Module Name": "Module Title",
            "Course Code": "Credit Hours",
            "Course Name": "ECTS",
            "Module ECTS": "Lecture hour"
        },
        {
            "Module Code": "CoSc 6014",
            "Module Name": "Cloud Computing",
            "Course Code": "2",
            "Course Name": "4.7",
            "Module ECTS": "2"
        },
        {
            "Module Code": "CoSc 6304",
            "Module Name": "Pervasive Computing",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "CoSc 6206",
            "Module Name": "Data Mining and Data warehouse",
            "Course Code": "3",
            "Course Name": "7",
            "Module ECTS": "3"
        },
        {
            "Module Code": "CoSc 6210",
            "Module Name": "Web Retrieval Systems",
            "Course Code": "2",
            "Course Name": "4.7",
            "Module ECTS": "2"
        },
        {
            "Module Code": "",
            "Module Name": "Sub-Total",
            "Course Code": "2/3",
            "Course Name": "4.7/7",
            "Module ECTS": ""
        }
    ]
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
        "college": 3,
          "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
      
        {
            "Module Code": "",
            "Module Name": "Fundamentals of Geology",
            "Course Code": "GEOL-M1011",
            "Course Name": "17",
            "Module ECTS": "Industrial Minerals, Rocks and Gems"
        },
        {
            "Module Code": "",
            "Module Name": "Paleontology and Stratigraphy",
            "Course Code": "GEOL-M2021",
            "Course Name": "18",
            "Module ECTS": "Precambrian Geology"
        },
        {
            "Module Code": "",
            "Module Name": "Crystallography and Mineralogy",
            "Course Code": "GEOL-M2031",
            "Course Name": "19",
            "Module ECTS": "Applied Sedimentology"
        },
        {
            "Module Code": "",
            "Module Name": "Structural Geology and Tectonics",
            "Course Code": "GEOL-M2041",
            "Course Name": "20",
            "Module ECTS": "Groundwater Resources Management"
        },
        {
            "Module Code": "",
            "Module Name": "Petrology",
            "Course Code": "GEOL-M2051",
            "Course Name": "21",
            "Module ECTS": "Quaternary Geology"
        },
        {
            "Module Code": "",
            "Module Name": "Geological mapping Techniques",
            "Course Code": "GEOL-M3061",
            "Course Name": "22",
            "Module ECTS": "Earth History and Global Changes"
        },
        {
            "Module Code": "",
            "Module Name": "Geological Mapping",
            "Course Code": "GEOL-M3071",
            "Course Name": "23",
            "Module ECTS": "Environmental Impact Assessment"
        },
        {
            "Module Code": "",
            "Module Name": "Geochemistry",
            "Course Code": "GEOL-M3081",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Geological Engineering",
            "Course Code": "GEOL-M4111",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Economic and Mining Geology",
            "Course Code": "GEOL-M4121",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Energy Resources",
            "Course Code": "GEOL-M4131",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Environmental Geology",
            "Course Code": "GEOL-M4141",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Geology and Resources of Ethiopia",
            "Course Code": "GEOL-M4151",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "Research Methods and senior project",
            "Course Code": "GEOL-M4161",
            "Course Name": "",
            "Module ECTS": ""
        }
    ]
      },
      {
        "id": 10,
          "name": "Information Systems",
          image: Is,
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
        "college": 3,
        "Mode of delivery": "Program Objective– graduates, in general, will specifically have the chance to have knowledge and understanding in the following major areas:",
        "Program Objective": "Theoretical background on the functionalities of computer and application of computer to businesses;Theories, principles, processes and techniques of organization, storage, retrieval, dissemination and utilization of all forms of information;Understanding of computers and communication systems, including basic software engineering, network design, database development, implementation and management;Knowledge of organizational behaviors and different organizational principles;Various types of academic and business information resources, systems and services;Knowledge of basic principles of ICT-based business information processing techniques;Theories, practices and principles of information systems analysis, design, development and management in the business environment;Principles and different approaches of computer programming and algorithm development to solve real world problems;Theories, practices and principles of business process engineering in a creative manner to solve information related problem of businesses and organizations.",
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "Module Code",
            "Module Name": "Module Title",
            "Course Code": "ModuleCP",
            "Course Name": "Category",
            "Module ECTS": "Course Code"
        },
        {
            "Module Code": "INSY-M1011",
            "Module Name": "Basics of Information Systems and Business",
            "Course Code": "17",
            "Course Name": "Compulsory",
            "Module ECTS": "INSY1011"
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY1012",
            "Course Code": "Information and Society",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "Supportive",
            "Module Name": "INSY1013",
            "Course Code": "Introduction to Business",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "MGMT-M1061",
            "Module Name": "Fundamentals of Management",
            "Course Code": "5",
            "Course Name": "Supportive",
            "Module ECTS": "MGMT 1061"
        },
        {
            "Module Code": "STAT-M2163",
            "Module Name": "Introductory Statistics",
            "Course Code": "5",
            "Course Name": "Supportive",
            "Module ECTS": "Stat 2161"
        },
        {
            "Module Code": "ACFN-M1031",
            "Module Name": "Basics of Accounting and Reporting",
            "Course Code": "5",
            "Course Name": "Supportive",
            "Module ECTS": "AcFn1031"
        },
        {
            "Module Code": "INSY-M1021",
            "Module Name": "Fundamentals of Programming",
            "Course Code": "10",
            "Course Name": "Compulsory",
            "Module ECTS": "INSY1021"
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY1022",
            "Course Code": "Fundamentals of Programming II",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "Math-M2233",
            "Module Name": "Discrete Mathematics",
            "Course Code": "5",
            "Course Name": "Supportive",
            "Module ECTS": "Math 2231"
        },
        {
            "Module Code": "INSY-M2031",
            "Module Name": "Advanced Programming",
            "Course Code": "19",
            "Course Name": "Compulsory",
            "Module ECTS": "INSY2031"
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY2032",
            "Course Code": "Data Structure and Algorithms",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY2033",
            "Course Code": "Event Driven Programming",
            "Course Name": "7",
            "Module ECTS": ""
        },
        {
            "Module Code": "INSY-M2041",
            "Module Name": "Computer Systems",
            "Course Code": "10",
            "Course Name": "Compulsory",
            "Module ECTS": "INSY2041"
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY2042",
            "Course Code": "Operating Systems",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "INSY-M2051",
            "Module Name": "Information Systems Development",
            "Course Code": "15",
            "Course Name": "Compulsory",
            "Module ECTS": "INSY2051"
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY2052",
            "Course Code": "Fundamentals of  System Analysis and Design",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY2053",
            "Course Code": "Object Oriented System Analysis and Design",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "INSY-M2061",
            "Module Name": "Database and Information Management",
            "Course Code": "15",
            "Course Name": "Compulsory",
            "Module ECTS": "INSY2061"
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY2062",
            "Course Code": "Advanced Database Systems",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY2063",
            "Course Code": "Introduction to Information Storage and Retrieval",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "INSY-M3071",
            "Module Name": "Computer Networks,  Administration and Security",
            "Course Code": "20",
            "Course Name": "Compulsory",
            "Module ECTS": "INSY3071"
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY3072",
            "Course Code": "Systems and Network Administration",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY3074",
            "Course Code": "Wireless Networking and Mobile Computing",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY3073",
            "Course Code": "Information System Security",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "INSY-M3081",
            "Module Name": "Internet and Web-Technology",
            "Course Code": "15",
            "Course Name": "Compulsory",
            "Module ECTS": "INSY3081"
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY3082",
            "Course Code": "Advanced Internet Programming",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY3083",
            "Course Code": "E-Commerce",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "INSY-M3091",
            "Module Name": "Intelligent Systems",
            "Course Code": "20",
            "Course Name": "Compulsory",
            "Module ECTS": "INSY3091"
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY3092",
            "Course Code": "Expert Systems",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY3093",
            "Course Code": "Knowledge Management",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY3094",
            "Course Code": "Data Mining and Warehousing",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "INSY-M4101",
            "Module Name": "Information Systems Management",
            "Course Code": "15",
            "Course Name": "Compulsory",
            "Module ECTS": "INSY4101"
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY4102",
            "Course Code": "Information Systems  Project Management",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY4103",
            "Course Code": "Enterprise Systems",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "MGMT-M2081",
            "Module Name": "Human Resource and Organizational Behavior",
            "Course Code": "5",
            "Course Name": "Supportive",
            "Module ECTS": "MGMT 2082"
        },
        {
            "Module Code": "INSY-M4111",
            "Module Name": "Multimedia and Human Computer Interaction",
            "Course Code": "10",
            "Course Name": "Compulsory",
            "Module ECTS": "INSY4111"
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY4112",
            "Course Code": "Human Computer Interaction",
            "Course Name": "5",
            "Module ECTS": ""
        },
      
        {
            "Module Code": "INSY-M4121",
            "Module Name": "Industrial Project and Seminar",
            "Course Code": "14",
            "Course Name": "Compulsory",
            "Module ECTS": "INSY4121"
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY4122",
            "Course Code": "Industrial Project II",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "Compulsory",
            "Module Name": "INSY4123",
            "Course Code": "Seminar in Information System",
            "Course Name": "4",
            "Module ECTS": ""
        },
        {
            "Module Code": "MGMT-M3191",
            "Module Name": "Innovation and Project Management",
            "Course Code": "5",
            "Course Name": "Supportive",
            "Module ECTS": "MGMT 3161"
        },
        {
            "Module Code": "Psyc-M1011",
            "Module Name": "Fundamentals of Psychology",
            "Course Code": "5",
            "Course Name": "Supportive",
            "Module ECTS": "Psyc1011"
        },
        {
            "Module Code": "StatM2163",
            "Module Name": "Introductory Statistics",
            "Course Code": "5",
            "Course Name": "Supportive",
            "Module ECTS": "Stat 2161"
        },
        {
            "Module Code": "Module Code",
            "Module Name": "Module Title",
            "Course Code": "Module CP",
            "Course Name": "Category",
            "Module ECTS": "Course Code"
        },
        {
            "Module Code": "INSY-M3131",
            "Module Name": "GIS and Remote Sensing",
            "Course Code": "5",
            "Course Name": "Elective",
            "Module ECTS": "INSY3131"
        },
        {
            "Module Code": "INSY-M3142",
            "Module Name": "Computer Maintenance and Troubleshooting",
            "Course Code": "5",
            "Course Name": "Elective",
            "Module ECTS": "INSY3141"
        },
        {
            "Module Code": "LING-M1011",
            "Module Name": "Language, Linguistics and Communication",
            "Course Code": "5",
            "Course Name": "Elective",
            "Module ECTS": "LING 1011"
        },
        {
            "Module Code": "Module Code",
            "Module Name": "Module Title",
            "Course Code": "Module CP",
            "Course Name": "Category",
            "Module ECTS": "Course Code"
        },
        {
            "Module Code": "CESt-M1023",
            "Module Name": "Civics and Ethics",
            "Course Code": "5",
            "Course Name": "Common Course",
            "Module ECTS": "CESt1023"
        },
        {
            "Module Code": "Phil-M1033",
            "Module Name": "Introduction to Logic",
            "Course Code": "5",
            "Course Name": "Common Course",
            "Module ECTS": "Phil1033"
        },
        {
            "Module Code": "EnLa-M1013",
            "Module Name": "Basic English Skills",
            "Course Code": "10",
            "Course Name": "Common Course",
            "Module ECTS": "EnLa1011"
        }
    ]
      },
      {
        "id": 11,
          "name": "Mathematics",
         image:  welcome,
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
        "college": 3,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "ModuleCode",
            "Module Name": "Module title",
            "Course Code": "ECTS",
            "Course Name": "CourseCode",
            "Module ECTS": "Course title"
        },
        {
            "Module Code": "Math-M2011",
            "Module Name": "Basic Mathematics",
            "Course Code": "12",
            "Course Name": "Math2011",
            "Module ECTS": "Fundamentals of College Mathematics"
        },
        {
            "Module Code": "Math2012",
            "Module Name": "Fundamental Concepts of Algebra",
            "Course Code": "Math 321",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M2021",
            "Module Name": "Basic Calculus",
            "Course Code": "14",
            "Course Name": "Math2021",
            "Module ECTS": "Calculus I"
        },
        {
            "Module Code": "Math2022",
            "Module Name": "Calculus II",
            "Course Code": "Math 365",
            "Course Name": "4",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M3031",
            "Module Name": "Combinatorics and Graph Theory",
            "Course Code": "10",
            "Course Name": "Math3031",
            "Module ECTS": "Introduction to Combinatorics and Graph Theory"
        },
        {
            "Module Code": "Math-M3041",
            "Module Name": "Linear Algebra",
            "Course Code": "10",
            "Course Name": "Math3041",
            "Module ECTS": "Linear Algebra I"
        },
        {
            "Module Code": "Math3042",
            "Module Name": "Linear Algebra II",
            "Course Code": "Math 326",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M3051",
            "Module Name": "Modern Geometry",
            "Course Code": "10",
            "Course Name": "Math3051",
            "Module ECTS": "Fundamental Concepts of Geometry"
        },
        {
            "Module Code": "Math3052",
            "Module Name": "Transformation Geometry",
            "Course Code": "Math 312",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M3061",
            "Module Name": "Computational Mathematics",
            "Course Code": "10",
            "Course Name": "Math3061",
            "Module ECTS": "Numerical Analysis I"
        },
        {
            "Module Code": "Math3062",
            "Module Name": "Linear Optimization",
            "Course Code": "Math 356",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M3071",
            "Module Name": "Functions of Several and Complex Variables",
            "Course Code": "14",
            "Course Name": "Math3071",
            "Module ECTS": "Calculus of Functions of Several Variables"
        },
        {
            "Module Code": "Math3072",
            "Module Name": "Functions of Complex Variables",
            "Course Code": "Math 464",
            "Course Name": "4",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M4081",
            "Module Name": "Differential Equations",
            "Course Code": "15",
            "Course Name": "Math4081",
            "Module ECTS": "Ordinary Differential Equations"
        },
        {
            "Module Code": "Math4082",
            "Module Name": "Partial Differential Equations",
            "Course Code": "Math 484",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M4091",
            "Module Name": "A First Course in Modern Algebra and Number Theory",
            "Course Code": "10",
            "Course Name": "Math4091",
            "Module ECTS": "Modern Algebra I"
        },
        {
            "Module Code": "Math4092",
            "Module Name": "Theory of Numbers",
            "Course Code": "Math 392",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M4101",
            "Module Name": "Advanced Calculus of  Functions of One Variable",
            "Course Code": "7",
            "Course Name": "Math4101",
            "Module ECTS": "Advanced Calculus of  Functions of One Variable"
        },
        {
            "Module Code": "Math-M4111",
            "Module Name": "Mathematical Modeling and Project",
            "Course Code": "10",
            "Course Name": "Math4111",
            "Module ECTS": "Mathematical Modeling"
        },
        {
            "Module Code": "Math4112",
            "Module Name": "Project I",
            "Course Code": "Math 405",
            "Course Name": "1",
            "Module ECTS": ""
        },
        {
            "Module Code": "Math4113",
            "Module Name": "Project II",
            "Course Code": "Math 406",
            "Course Name": "2",
            "Module ECTS": ""
        },
        {
            "Module Code": "Total",
            "Module Name": "",
            "Course Code": "66",
            "Course Name": "",
            "Module ECTS": "112"
        },
        {
            "Module Code": "Modulecode",
            "Module Name": "Module title",
            "Course Code": "ECTS",
            "Course Name": "Coursecode",
            "Module ECTS": "Course title"
        },
        {
            "Module Code": "Math-M4122",
            "Module Name": "Advanced Courses in Algebra",
            "Course Code": "15",
            "Course Name": "Math4121",
            "Module ECTS": "Logic and  Set Theory"
        },
        {
            "Module Code": "Math4122",
            "Module Name": "Modern Algebra II",
            "Course Code": "Math 424",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math4123",
            "Module Name": "Introduction to  Algebraic  Geometry",
            "Course Code": "Math 426",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M4132",
            "Module Name": "Analysis",
            "Course Code": "15",
            "Course Name": "Math4131",
            "Module ECTS": "Introduction to  Topology"
        },
        {
            "Module Code": "Math4132",
            "Module Name": "Advanced Calculus  of  Several Variables",
            "Course Code": "Math 463",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math4133",
            "Module Name": "Introduction to Real Analysis",
            "Course Code": "Math 462",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M4142",
            "Module Name": "Advanced Discrete Mathematics",
            "Course Code": "15",
            "Course Name": "Math4141",
            "Module ECTS": "Introduction to Cryptography"
        },
        {
            "Module Code": "Math4142",
            "Module Name": "Computational  Number Theory",
            "Course Code": "Math 494",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math4143",
            "Module Name": "Graph Theory",
            "Course Code": "Math 472",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M4152",
            "Module Name": "Advanced Computational Mathematics I",
            "Course Code": "15",
            "Course Name": "Math4151",
            "Module ECTS": "Numerical Analysis  II"
        },
        {
            "Module Code": "Math4152",
            "Module Name": "Operations  Research",
            "Course Code": "Math 451",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math4153",
            "Module Name": "Non linear Optimization",
            "Course Code": "Math 456",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M4162",
            "Module Name": "Advanced Computational Mathematics II",
            "Course Code": "15",
            "Course Name": "Math4161",
            "Module ECTS": "Numerical Analysis  II"
        },
        {
            "Module Code": "Math4162",
            "Module Name": "Fluid  Mechanics",
            "Course Code": "Math 412",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math4163",
            "Module Name": "Nonlinear Optimization",
            "Course Code": "Math 456",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M4172",
            "Module Name": "Advanced Geometry  and Philosophy  of  Mathematics",
            "Course Code": "15",
            "Course Name": "Math4171",
            "Module ECTS": "Projective Geometry"
        },
        {
            "Module Code": "Math4172",
            "Module Name": "Introduction to  Differential Geometry",
            "Course Code": "Math 442",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math4173",
            "Module Name": "History and Philosophy of  Mathematics",
            "Course Code": "Math 408",
            "Course Name": "3",
            "Module ECTS": ""
        },
        {
            "Module Code": "Total",
            "Module Name": "15",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "Modulecode",
            "Module Name": "Module title",
            "Course Code": "ECTS",
            "Course Name": "Coursecode",
            "Module ECTS": "Course title"
        },
        {
            "Module Code": "Stat-M2083",
            "Module Name": "Statistics and Probability",
            "Course Code": "10",
            "Course Name": "Stat2081",
            "Module ECTS": "Introduction to  Statistics"
        },
        {
            "Module Code": "Stat2082",
            "Module Name": "Introduction to Probability Theory",
            "Course Code": "Stat 276",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "CoSc-M1213",
            "Module Name": "Introduction to Programming",
            "Course Code": "13",
            "Course Name": "CoSc1211",
            "Module ECTS": "Introduction to Computer Science"
        },
        {
            "Module Code": "CoSc1212",
            "Module Name": "Fundamentals of Programming",
            "Course Code": "Comp 231",
            "Course Name": "4",
            "Module ECTS": "2"
        },
        {
            "Module Code": "CoSc-M2223",
            "Module Name": "Fundamentals of Database Systems",
            "Course Code": "7",
            "Course Name": "CoSc2221",
            "Module ECTS": "Fundamentals of Database Systems"
        },
        {
            "Module Code": "Phys-M2243",
            "Module Name": "Mechanics and Heat",
            "Course Code": "",
            "Course Name": "Phys2241",
            "Module ECTS": "Mechanics and Heat for Mathematics"
        },
        {
            "Module Code": "EnLa-M1013",
            "Module Name": "Basic English Skills",
            "Course Code": "10",
            "Course Name": "EnLa1011",
            "Module ECTS": "Communicative English Skills"
        },
        {
            "Module Code": "EnLa1012",
            "Module Name": "Basic Writing Skills",
            "Course Code": "EnLa 301",
            "Course Name": "3",
            "Module ECTS": ""
        },
        {
            "Module Code": "CESt-M1023",
            "Module Name": "Civics and Ethics",
            "Course Code": "5",
            "Course Name": "CESt1023",
            "Module ECTS": "Civics and Ethics"
        },
        {
            "Module Code": "Geol-M3023",
            "Module Name": "Environmental Science",
            "Course Code": "5",
            "Course Name": "Geol3023",
            "Module ECTS": "Environmental Science"
        },
        {
            "Module Code": "Total",
            "Module Name": "20",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        }
    ]
      },
      {
        "id": 12,
          "name": "Physics",
         image:  welcome,
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
        "college": 3,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "ModuleCode",
            "Module Name": "Module title",
            "Course Code": "ECTS",
            "Course Name": "CourseCode",
            "Module ECTS": "Course title"
        },
        {
            "Module Code": "Math-M2011",
            "Module Name": "Basic Mathematics",
            "Course Code": "12",
            "Course Name": "Math2011",
            "Module ECTS": "Fundamentals of College Mathematics"
        },
        {
            "Module Code": "Math2012",
            "Module Name": "Fundamental Concepts of Algebra",
            "Course Code": "Math 321",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M2021",
            "Module Name": "Basic Calculus",
            "Course Code": "14",
            "Course Name": "Math2021",
            "Module ECTS": "Calculus I"
        },
        {
            "Module Code": "Math2022",
            "Module Name": "Calculus II",
            "Course Code": "Math 365",
            "Course Name": "4",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M3031",
            "Module Name": "Combinatorics and Graph Theory",
            "Course Code": "10",
            "Course Name": "Math3031",
            "Module ECTS": "Introduction to Combinatorics and Graph Theory"
        },
        {
            "Module Code": "Math-M3041",
            "Module Name": "Linear Algebra",
            "Course Code": "10",
            "Course Name": "Math3041",
            "Module ECTS": "Linear Algebra I"
        },
        {
            "Module Code": "Math3042",
            "Module Name": "Linear Algebra II",
            "Course Code": "Math 326",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M3051",
            "Module Name": "Modern Geometry",
            "Course Code": "10",
            "Course Name": "Math3051",
            "Module ECTS": "Fundamental Concepts of Geometry"
        },
        {
            "Module Code": "Math3052",
            "Module Name": "Transformation Geometry",
            "Course Code": "Math 312",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M3061",
            "Module Name": "Computational Mathematics",
            "Course Code": "10",
            "Course Name": "Math3061",
            "Module ECTS": "Numerical Analysis I"
        },
        {
            "Module Code": "Math3062",
            "Module Name": "Linear Optimization",
            "Course Code": "Math 356",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M3071",
            "Module Name": "Functions of Several and Complex Variables",
            "Course Code": "14",
            "Course Name": "Math3071",
            "Module ECTS": "Calculus of Functions of Several Variables"
        },
        {
            "Module Code": "Math3072",
            "Module Name": "Functions of Complex Variables",
            "Course Code": "Math 464",
            "Course Name": "4",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M4081",
            "Module Name": "Differential Equations",
            "Course Code": "15",
            "Course Name": "Math4081",
            "Module ECTS": "Ordinary Differential Equations"
        },
        {
            "Module Code": "Math4082",
            "Module Name": "Partial Differential Equations",
            "Course Code": "Math 484",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M4091",
            "Module Name": "A First Course in Modern Algebra and Number Theory",
            "Course Code": "10",
            "Course Name": "Math4091",
            "Module ECTS": "Modern Algebra I"
        },
        {
            "Module Code": "Math4092",
            "Module Name": "Theory of Numbers",
            "Course Code": "Math 392",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M4101",
            "Module Name": "Advanced Calculus of  Functions of One Variable",
            "Course Code": "7",
            "Course Name": "Math4101",
            "Module ECTS": "Advanced Calculus of  Functions of One Variable"
        },
        {
            "Module Code": "Math-M4111",
            "Module Name": "Mathematical Modeling and Project",
            "Course Code": "10",
            "Course Name": "Math4111",
            "Module ECTS": "Mathematical Modeling"
        },
        {
            "Module Code": "Math4112",
            "Module Name": "Project I",
            "Course Code": "Math 405",
            "Course Name": "1",
            "Module ECTS": ""
        },
        {
            "Module Code": "Math4113",
            "Module Name": "Project II",
            "Course Code": "Math 406",
            "Course Name": "2",
            "Module ECTS": ""
        },
        {
            "Module Code": "Total",
            "Module Name": "",
            "Course Code": "66",
            "Course Name": "",
            "Module ECTS": "112"
        },
        {
            "Module Code": "Modulecode",
            "Module Name": "Module title",
            "Course Code": "ECTS",
            "Course Name": "Coursecode",
            "Module ECTS": "Course title"
        },
        {
            "Module Code": "Math-M4122",
            "Module Name": "Advanced Courses in Algebra",
            "Course Code": "15",
            "Course Name": "Math4121",
            "Module ECTS": "Logic and  Set Theory"
        },
        {
            "Module Code": "Math4122",
            "Module Name": "Modern Algebra II",
            "Course Code": "Math 424",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math4123",
            "Module Name": "Introduction to  Algebraic  Geometry",
            "Course Code": "Math 426",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M4132",
            "Module Name": "Analysis",
            "Course Code": "15",
            "Course Name": "Math4131",
            "Module ECTS": "Introduction to  Topology"
        },
        {
            "Module Code": "Math4132",
            "Module Name": "Advanced Calculus  of  Several Variables",
            "Course Code": "Math 463",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math4133",
            "Module Name": "Introduction to Real Analysis",
            "Course Code": "Math 462",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M4142",
            "Module Name": "Advanced Discrete Mathematics",
            "Course Code": "15",
            "Course Name": "Math4141",
            "Module ECTS": "Introduction to Cryptography"
        },
        {
            "Module Code": "Math4142",
            "Module Name": "Computational  Number Theory",
            "Course Code": "Math 494",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math4143",
            "Module Name": "Graph Theory",
            "Course Code": "Math 472",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M4152",
            "Module Name": "Advanced Computational Mathematics I",
            "Course Code": "15",
            "Course Name": "Math4151",
            "Module ECTS": "Numerical Analysis  II"
        },
        {
            "Module Code": "Math4152",
            "Module Name": "Operations  Research",
            "Course Code": "Math 451",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math4153",
            "Module Name": "Non linear Optimization",
            "Course Code": "Math 456",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M4162",
            "Module Name": "Advanced Computational Mathematics II",
            "Course Code": "15",
            "Course Name": "Math4161",
            "Module ECTS": "Numerical Analysis  II"
        },
        {
            "Module Code": "Math4162",
            "Module Name": "Fluid  Mechanics",
            "Course Code": "Math 412",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math4163",
            "Module Name": "Nonlinear Optimization",
            "Course Code": "Math 456",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M4172",
            "Module Name": "Advanced Geometry  and Philosophy  of  Mathematics",
            "Course Code": "15",
            "Course Name": "Math4171",
            "Module ECTS": "Projective Geometry"
        },
        {
            "Module Code": "Math4172",
            "Module Name": "Introduction to  Differential Geometry",
            "Course Code": "Math 442",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math4173",
            "Module Name": "History and Philosophy of  Mathematics",
            "Course Code": "Math 408",
            "Course Name": "3",
            "Module ECTS": ""
        },
        {
            "Module Code": "Total",
            "Module Name": "15",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "Modulecode",
            "Module Name": "Module title",
            "Course Code": "ECTS",
            "Course Name": "Coursecode",
            "Module ECTS": "Course title"
        },
        {
            "Module Code": "Stat-M2083",
            "Module Name": "Statistics and Probability",
            "Course Code": "10",
            "Course Name": "Stat2081",
            "Module ECTS": "Introduction to  Statistics"
        },
        {
            "Module Code": "Stat2082",
            "Module Name": "Introduction to Probability Theory",
            "Course Code": "Stat 276",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "CoSc-M1213",
            "Module Name": "Introduction to Programming",
            "Course Code": "13",
            "Course Name": "CoSc1211",
            "Module ECTS": "Introduction to Computer Science"
        },
        {
            "Module Code": "CoSc1212",
            "Module Name": "Fundamentals of Programming",
            "Course Code": "Comp 231",
            "Course Name": "4",
            "Module ECTS": "2"
        },
        {
            "Module Code": "CoSc-M2223",
            "Module Name": "Fundamentals of Database Systems",
            "Course Code": "7",
            "Course Name": "CoSc2221",
            "Module ECTS": "Fundamentals of Database Systems"
        },
        {
            "Module Code": "Phys-M2243",
            "Module Name": "Mechanics and Heat",
            "Course Code": "",
            "Course Name": "Phys2241",
            "Module ECTS": "Mechanics and Heat for Mathematics"
        },
        {
            "Module Code": "EnLa-M1013",
            "Module Name": "Basic English Skills",
            "Course Code": "10",
            "Course Name": "EnLa1011",
            "Module ECTS": "Communicative English Skills"
        },
        {
            "Module Code": "EnLa1012",
            "Module Name": "Basic Writing Skills",
            "Course Code": "EnLa 301",
            "Course Name": "3",
            "Module ECTS": ""
        },
        {
            "Module Code": "CESt-M1023",
            "Module Name": "Civics and Ethics",
            "Course Code": "5",
            "Course Name": "CESt1023",
            "Module ECTS": "Civics and Ethics"
        },
        {
            "Module Code": "Geol-M3023",
            "Module Name": "Environmental Science",
            "Course Code": "5",
            "Course Name": "Geol3023",
            "Module ECTS": "Environmental Science"
        },
        {
            "Module Code": "Total",
            "Module Name": "20",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        }
    ]
      },
      {
        "id": 13,
          "name": "Sport Science",
         image:  welcome,
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
        "college": 3,
        "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "Module code",
            "Module Name": "Module",
            "Course Code": "ECTS",
            "Course Name": "MODULE TITLE",
            "Module ECTS": "Course code"
        },
        {
            "Module Code": "SpSc-M2011",
            "Module Name": "Developmental & Psychological aspects of Sport 01",
            "Course Code": "16",
            "Course Name": "History & Concept of Sports & Physical Education",
            "Module ECTS": "SpSc2011"
        },
        {
            "Module Code": "SpSc-M2021",
            "Module Name": "Athletics – 02",
            "Course Code": "8",
            "Course Name": "1.Athletics I",
            "Module ECTS": "SpSc2021"
        },
        {
            "Module Code": "SpSc-M3031",
            "Module Name": "Exercise Sciences – 03",
            "Course Code": "15",
            "Course Name": "1.Exercise Physiology",
            "Module ECTS": "SpSc3031"
        },
        {
            "Module Code": "SpSc-M3041",
            "Module Name": "Gymnastic – 04",
            "Course Code": "8",
            "Course Name": "1.Basic gymnastic",
            "Module ECTS": "SpSc3041"
        },
        {
            "Module Code": "SpSc-M4051",
            "Module Name": "Therapeutic Science  in sport – 05",
            "Course Code": "20",
            "Course Name": "Sport Nutrition",
            "Module ECTS": "SpSc4051"
        },
        {
            "Module Code": "SpSc-M3061",
            "Module Name": "Ball Games – 06",
            "Course Code": "28",
            "Course Name": "1.Football",
            "Module ECTS": "SpSc3061"
        },
        {
            "Module Code": "SpSc-M3071",
            "Module Name": "Racquet  Sport  – 07",
            "Course Code": "5",
            "Course Name": "Table tennis, Ground tennis & Badminton",
            "Module ECTS": "SpSc3071"
        },
        {
            "Module Code": "SpSc-M4081",
            "Module Name": "Swimming & Recreational  – 08",
            "Course Code": "5",
            "Course Name": "Swimming & Recreational  Activities",
            "Module ECTS": "SpSc4081"
        },
        {
            "Module Code": "SpSc-M4091",
            "Module Name": "Administration & Coaching in Sports – 09",
            "Course Code": "20",
            "Course Name": "1.Introduction to  structure of coaching",
            "Module ECTS": "SpSc4091"
        },
        {
            "Module Code": "SpSc-M4101",
            "Module Name": "Research in Sport – 10",
            "Course Code": "13",
            "Course Name": "1.research method & Report Writing in Sport",
            "Module ECTS": "SpSc4101"
        },
        {
            "Module Code": "No",
            "Module Name": "Module code",
            "Course Code": "Module Title",
            "Course Name": "ECTS",
            "Module ECTS": "Course title"
        },
        {
            "Module Code": "1",
            "Module Name": "SpSc-M4093",
            "Course Code": "Athletics Coaching",
            "Course Name": "8",
            "Module ECTS": "Athletics Coaching"
        },
        {
            "Module Code": "2",
            "Module Name": "SpSc-M4095",
            "Course Code": "Football Coaching",
            "Course Name": "8",
            "Module ECTS": "Football coaching"
        },
        {
            "Module Code": "3",
            "Module Name": "SpSc-M4097",
            "Course Code": "Volleyball  coaching",
            "Course Name": "8",
            "Module ECTS": "Volleyball  coaching"
        },
        {
            "Module Code": "4",
            "Module Name": "SpSc-M4099",
            "Course Code": "Basketball coaching",
            "Course Name": "8",
            "Module ECTS": "Basketball coaching"
        },
        {
            "Module Code": "5",
            "Module Name": "SpSc-M4103",
            "Course Code": "Handball  coaching",
            "Course Name": "8",
            "Module ECTS": "Handball  coaching"
        },
        {
            "Module Code": "6",
            "Module Name": "SpSc-M4105",
            "Course Code": "Badminton  coaching",
            "Course Name": "8",
            "Module ECTS": "Badminton  coaching"
        },
        {
            "Module Code": "7",
            "Module Name": "SpSc-M4107",
            "Course Code": "Table tennis  coaching",
            "Course Name": "8",
            "Module ECTS": "Table tennis  coaching"
        },
        {
            "Module Code": "8",
            "Module Name": "SpSc-M4109",
            "Course Code": "Ground tennis coaching",
            "Course Name": "8",
            "Module ECTS": "Ground tennis coaching"
        },
        {
            "Module Code": "9",
            "Module Name": "SpSc-M4111",
            "Course Code": "Bicycle coaching",
            "Course Name": "8",
            "Module ECTS": "Bicycle coaching"
        },
        {
            "Module Code": "10",
            "Module Name": "SpSc-M4113",
            "Course Code": "Boxing  coaching",
            "Course Name": "8",
            "Module ECTS": "Boxing  coaching"
        },
        {
            "Module Code": "11",
            "Module Name": "SpSc-M4115",
            "Course Code": "Paralympics coaching",
            "Course Name": "8",
            "Module ECTS": "Paralympics coaching"
        },
        {
            "Module Code": "12",
            "Module Name": "SpSc-M4117",
            "Course Code": "Gymnastics coaching",
            "Course Name": "8",
            "Module ECTS": "Gymnastics coaching"
        },
        {
            "Module Code": "13",
            "Module Name": "SpSc-M4119",
            "Course Code": "World taekwondo  coaching",
            "Course Name": "8",
            "Module ECTS": "World taekwondo  coaching"
        },
        {
            "Module Code": "14",
            "Module Name": "SpSc-M4121",
            "Course Code": "Fitness instruction",
            "Course Name": "8",
            "Module ECTS": "Fitness instruction"
        },
        {
            "Module Code": "8",
            "Module Name": "Practice in fitness instruction",
            "Course Code": "SpSc4122",
            "Course Name": "3",
            "Module ECTS": "5"
        },
        {
            "Module Code": "15",
            "Module Name": "SpSc-M4123",
            "Course Code": "Swimming coaching",
            "Course Name": "8",
            "Module ECTS": "Swimming coaching"
        },
        {
            "Module Code": "MODULE CODE",
            "Module Name": "Module",
            "Course Code": "ECTS",
            "Course Name": "MODULE TITLE",
            "Module ECTS": "COURSE Code"
        },
        {
            "Module Code": "EnLa-M1013",
            "Module Name": "Basic English Skills",
            "Course Code": "10",
            "Course Name": "Communicative English  Skills",
            "Module ECTS": "EnLa1011"
        },
        {
            "Module Code": "CESt-M1023",
            "Module Name": "Civics & Ethics",
            "Course Code": "5",
            "Course Name": "Civics & Ethics",
            "Module ECTS": "CESt1023"
        },
        {
            "Module Code": "CoSc-M1203",
            "Module Name": "Computer Application",
            "Course Code": "5",
            "Course Name": "Introduction to computer application",
            "Module ECTS": "CoSc1201"
        },
        {
            "Module Code": "Stat-M2163",
            "Module Name": "Introductory statistics",
            "Course Code": "5",
            "Course Name": "Introductory Statistics",
            "Module ECTS": "Stat2161"
        },
        {
            "Module Code": "MODULE CODE",
            "Module Name": "Module",
            "Course Code": "ECTS",
            "Course Name": "MODULE TITLE",
            "Module ECTS": "COURSE Code"
        },
        {
            "Module Code": "SpSc-M2223",
            "Module Name": "Human Biology",
            "Course Code": "10",
            "Course Name": "Human Anatomy",
            "Module ECTS": "SpSc 2222"
        },
        {
            "Module Code": "PSYC-M2013",
            "Module Name": "General psychology",
            "Course Code": "5",
            "Course Name": "Introduction to psychology",
            "Module ECTS": "Psyc2011"
        },
        {
            "Module Code": "Biol-M3071",
            "Module Name": "Molecular Biology and Biotechnology",
            "Course Code": "5",
            "Course Name": "Biochemistry",
            "Module ECTS": "Biol3071"
        }
    ]
      },
      {
        "id": 14,
          "name": "Statistics",
         image:  welcome,
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
        "college": 3,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "ModuleCode",
            "Module Name": "Module title",
            "Course Code": "ECTS",
            "Course Name": "CourseCode",
            "Module ECTS": "Course title"
        },
        {
            "Module Code": "Math-M2011",
            "Module Name": "Basic Mathematics",
            "Course Code": "12",
            "Course Name": "Math2011",
            "Module ECTS": "Fundamentals of College Mathematics"
        },
        {
            "Module Code": "Math2012",
            "Module Name": "Fundamental Concepts of Algebra",
            "Course Code": "Math 321",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M2021",
            "Module Name": "Basic Calculus",
            "Course Code": "14",
            "Course Name": "Math2021",
            "Module ECTS": "Calculus I"
        },
        {
            "Module Code": "Math2022",
            "Module Name": "Calculus II",
            "Course Code": "Math 365",
            "Course Name": "4",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M3031",
            "Module Name": "Combinatorics and Graph Theory",
            "Course Code": "10",
            "Course Name": "Math3031",
            "Module ECTS": "Introduction to Combinatorics and Graph Theory"
        },
        {
            "Module Code": "Math-M3041",
            "Module Name": "Linear Algebra",
            "Course Code": "10",
            "Course Name": "Math3041",
            "Module ECTS": "Linear Algebra I"
        },
        {
            "Module Code": "Math3042",
            "Module Name": "Linear Algebra II",
            "Course Code": "Math 326",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M3051",
            "Module Name": "Modern Geometry",
            "Course Code": "10",
            "Course Name": "Math3051",
            "Module ECTS": "Fundamental Concepts of Geometry"
        },
        {
            "Module Code": "Math3052",
            "Module Name": "Transformation Geometry",
            "Course Code": "Math 312",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M3061",
            "Module Name": "Computational Mathematics",
            "Course Code": "10",
            "Course Name": "Math3061",
            "Module ECTS": "Numerical Analysis I"
        },
        {
            "Module Code": "Math3062",
            "Module Name": "Linear Optimization",
            "Course Code": "Math 356",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M3071",
            "Module Name": "Functions of Several and Complex Variables",
            "Course Code": "14",
            "Course Name": "Math3071",
            "Module ECTS": "Calculus of Functions of Several Variables"
        },
        {
            "Module Code": "Math3072",
            "Module Name": "Functions of Complex Variables",
            "Course Code": "Math 464",
            "Course Name": "4",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M4081",
            "Module Name": "Differential Equations",
            "Course Code": "15",
            "Course Name": "Math4081",
            "Module ECTS": "Ordinary Differential Equations"
        },
        {
            "Module Code": "Math4082",
            "Module Name": "Partial Differential Equations",
            "Course Code": "Math 484",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M4091",
            "Module Name": "A First Course in Modern Algebra and Number Theory",
            "Course Code": "10",
            "Course Name": "Math4091",
            "Module ECTS": "Modern Algebra I"
        },
        {
            "Module Code": "Math4092",
            "Module Name": "Theory of Numbers",
            "Course Code": "Math 392",
            "Course Name": "3",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Math-M4101",
            "Module Name": "Advanced Calculus of  Functions of One Variable",
            "Course Code": "7",
            "Course Name": "Math4101",
            "Module ECTS": "Advanced Calculus of  Functions of One Variable"
        },
        {
            "Module Code": "Math-M4111",
            "Module Name": "Mathematical Modeling and Project",
            "Course Code": "10",
            "Course Name": "Math4111",
            "Module ECTS": "Mathematical Modeling"
        },
        {
            "Module Code": "Math4112",
            "Module Name": "Project I",
            "Course Code": "Math 405",
            "Course Name": "1",
            "Module ECTS": ""
        },
        {
            "Module Code": "Math4113",
            "Module Name": "Project II",
            "Course Code": "Math 406",
            "Course Name": "2",
            "Module ECTS": ""
        },
        {
            "Module Code": "Total",
            "Module Name": "",
            "Course Code": "66",
            "Course Name": "",
            "Module ECTS": "112"
        },
        {
            "Module Code": "Modulecode",
            "Module Name": "Module title",
            "Course Code": "ECTS",
            "Course Name": "Coursecode",
            "Module ECTS": "Course title"
        }
    ]
      }
    ],
    "freshmanOffice": "Any Natural"
  },
  {
    "id": 4,
    "name": "College of Health Science",
    "description": "Be a health hero! Doctors, nurses, pharmacists, & more. Train to heal, improve health, & advance Ethiopia's well-being.",
     image:  welcome,
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
         image:  welcome,
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
        "college": 4,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "No",
            "Module Name": "ModuleCode",
            "Course Code": "Module Title",
            "Course Name": "ModuleECTS",
            "Module ECTS": "Course Code"
        },
        {
            "Module Code": "1",
            "Module Name": "Enla-M1013",
            "Course Code": "Basic English Skills",
            "Course Name": "10",
            "Module ECTS": "EnLa1011"
        },
        {
            "Module Code": "EnLa1012",
            "Module Name": "Basic Writing Skill",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "2",
            "Module Name": "CESt-M1023",
            "Course Code": "Civics and Ethics",
            "Course Name": "",
            "Module ECTS": "CESt1023"
        },
        {
            "Module Code": "3",
            "Module Name": "PsyS-M1034",
            "Course Code": "Psychosocial module",
            "Course Name": "6",
            "Module ECTS": "Soci1031"
        },
        {
            "Module Code": "Psyc1034",
            "Module Name": "Introduction to Sociology",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "4",
            "Module Name": "Comp-M1043",
            "Course Code": "Computer application",
            "Course Name": "3",
            "Module ECTS": "Hinf1041"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "Phys1052",
            "Module ECTS": "Human Physiology"
        },
        {
            "Module Code": "Bioc1053",
            "Module Name": "Biochemistry",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        }
    ]
      },
      {
        "id": 16,
          "name": "Doctor of Dental Medicine",
         image:  welcome,
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
        "college": 4,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "No",
            "Module Name": "ModuleCode",
            "Course Code": "Module Title",
            "Course Name": "ModuleECTS",
            "Module ECTS": "Course Code"
        },
        {
            "Module Code": "1",
            "Module Name": "Enla-M1013",
            "Course Code": "Basic English Skills",
            "Course Name": "10",
            "Module ECTS": "EnLa1011"
        },
        {
            "Module Code": "EnLa1012",
            "Module Name": "Basic Writing Skill",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "2",
            "Module Name": "CESt-M1023",
            "Course Code": "Civics and Ethics",
            "Course Name": "",
            "Module ECTS": "CESt1023"
        },
        {
            "Module Code": "3",
            "Module Name": "PsyS-M1034",
            "Course Code": "Psychosocial module",
            "Course Name": "6",
            "Module ECTS": "Soci1031"
        },
        {
            "Module Code": "Psyc1034",
            "Module Name": "Introduction to Sociology",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "4",
            "Module Name": "Comp-M1043",
            "Course Code": "Computer application",
            "Course Name": "3",
            "Module ECTS": "Hinf1041"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "Phys1052",
            "Module ECTS": "Human Physiology"
        },
        {
            "Module Code": "Bioc1053",
            "Module Name": "Biochemistry",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "Para1062",
            "Module Name": "Medical Parasitology",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "CLab1063",
            "Module Name": "Clinical Laboratory Method",
            "Course Code": "2",
            "Course Name": "1",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Nurs1064",
            "Module Name": "Pathophysiology",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "Nurs2072",
            "Module Name": "Nursing health assessment",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "Nurs2073",
            "Module Name": "First Aid & accident prevention",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "Nurs2074",
            "Module Name": "Fundamentals of nursing",
            "Course Code": "13",
            "Course Name": "8",
            "Module ECTS": "35"
        },
        {
            "Module Code": "Nurs2075",
            "Module Name": "operation room techniques",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "Nurs 2076",
            "Module Name": "Fundamentals of nursing practicum",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "18"
        },
        {
            "Module Code": "8",
            "Module Name": "Phar-M2083",
            "Course Code": "Pharmacology",
            "Course Name": "7",
            "Module ECTS": "Phar2081"
        },
        {
            "Module Code": "Enva2092",
            "Module Name": "Environmental health",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "ComH2093",
            "Module Name": "Health education",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "Nurs2094",
            "Module Name": "Communicable disease control",
            "Course Code": "7",
            "Course Name": "4",
            "Module ECTS": "19"
        },
        {
            "Module Code": "10",
            "Module Name": "Nurs-M2101",
            "Course Code": "Health system research",
            "Course Name": "13",
            "Module ECTS": "ComH2101"
        },
        {
            "Module Code": "ComH2102",
            "Module Name": "Epidemiology",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "Nurs2103",
            "Module Name": "Nursing research methodology",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "11",
            "Module Name": "Nurs-M2111",
            "Course Code": "Nursing education",
            "Course Name": "7",
            "Module ECTS": "Nurs2111"
        },
        {
            "Module Code": "Nurs3122",
            "Module Name": "Medical surgical nursing",
            "Course Code": "17",
            "Course Name": "10",
            "Module ECTS": "46"
        },
        {
            "Module Code": "Nurs3123",
            "Module Name": "Medical surgical nursing practice",
            "Course Code": "10",
            "Course Name": "6",
            "Module ECTS": "61"
        },
        {
            "Module Code": "Nurs3132",
            "Module Name": "Obstetrics & Gynecology Nursing",
            "Course Code": "8",
            "Course Name": "5",
            "Module ECTS": "22"
        },
        {
            "Module Code": "Nurs3133",
            "Module Name": "Obstetrics & Gynaecology Nursing practice",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "30"
        },
        {
            "Module Code": "14",
            "Module Name": "Nurs-M3141",
            "Course Code": "Child health and pediatric nursing",
            "Course Name": "12",
            "Module ECTS": "Nurs3141"
        }]
      },
      {
        "id": 17,
          "name": "Doctor of Medicine",
         image:  welcome,
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
        "college": 4,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "No",
            "Module Name": "ModuleCode",
            "Course Code": "Module Title",
            "Course Name": "ModuleECTS",
            "Module ECTS": "Course Code"
        },
        {
            "Module Code": "1",
            "Module Name": "Enla-M1013",
            "Course Code": "Basic English Skills",
            "Course Name": "10",
            "Module ECTS": "EnLa1011"
        },
        {
            "Module Code": "EnLa1012",
            "Module Name": "Basic Writing Skill",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "2",
            "Module Name": "CESt-M1023",
            "Course Code": "Civics and Ethics",
            "Course Name": "",
            "Module ECTS": "CESt1023"
        },
        {
            "Module Code": "3",
            "Module Name": "PsyS-M1034",
            "Course Code": "Psychosocial module",
            "Course Name": "6",
            "Module ECTS": "Soci1031"
        },
        {
            "Module Code": "Psyc1034",
            "Module Name": "Introduction to Sociology",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "4",
            "Module Name": "Comp-M1043",
            "Course Code": "Computer application",
            "Course Name": "3",
            "Module ECTS": "Hinf1041"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "Phys1052",
            "Module ECTS": "Human Physiology"
        },
        {
            "Module Code": "Bioc1053",
            "Module Name": "Biochemistry",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "Para1062",
            "Module Name": "Medical Parasitology",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "CLab1063",
            "Module Name": "Clinical Laboratory Method",
            "Course Code": "2",
            "Course Name": "1",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Nurs1064",
            "Module Name": "Pathophysiology",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "Nurs2072",
            "Module Name": "Nursing health assessment",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "Nurs2073",
            "Module Name": "First Aid & accident prevention",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "Nurs2074",
            "Module Name": "Fundamentals of nursing",
            "Course Code": "13",
            "Course Name": "8",
            "Module ECTS": "35"
        },
        {
            "Module Code": "Nurs2075",
            "Module Name": "operation room techniques",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "Nurs 2076",
            "Module Name": "Fundamentals of nursing practicum",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "18"
        },
        {
            "Module Code": "8",
            "Module Name": "Phar-M2083",
            "Course Code": "Pharmacology",
            "Course Name": "7",
            "Module ECTS": "Phar2081"
        },
        {
            "Module Code": "Enva2092",
            "Module Name": "Environmental health",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "ComH2093",
            "Module Name": "Health education",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "Nurs2094",
            "Module Name": "Communicable disease control",
            "Course Code": "7",
            "Course Name": "4",
            "Module ECTS": "19"
        }
    ]
      },
      {
        "id": 18,
          "name": "Physiotherapy",
         image:  welcome,
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
        "college": 4,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "No",
            "Module Name": "ModuleCode",
            "Course Code": "Module Title",
            "Course Name": "ModuleECTS",
            "Module ECTS": "Course Code"
        },
        {
            "Module Code": "1",
            "Module Name": "Enla-M1013",
            "Course Code": "Basic English Skills",
            "Course Name": "10",
            "Module ECTS": "EnLa1011"
        },
        {
            "Module Code": "EnLa1012",
            "Module Name": "Basic Writing Skill",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "2",
            "Module Name": "CESt-M1023",
            "Course Code": "Civics and Ethics",
            "Course Name": "",
            "Module ECTS": "CESt1023"
        },
        {
            "Module Code": "3",
            "Module Name": "PsyS-M1034",
            "Course Code": "Psychosocial module",
            "Course Name": "6",
            "Module ECTS": "Soci1031"
        },
        {
            "Module Code": "Psyc1034",
            "Module Name": "Introduction to Sociology",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "4",
            "Module Name": "Comp-M1043",
            "Course Code": "Computer application",
            "Course Name": "3",
            "Module ECTS": "Hinf1041"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "Phys1052",
            "Module ECTS": "Human Physiology"
        },
        {
            "Module Code": "Bioc1053",
            "Module Name": "Biochemistry",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "Para1062",
            "Module Name": "Medical Parasitology",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "CLab1063",
            "Module Name": "Clinical Laboratory Method",
            "Course Code": "2",
            "Course Name": "1",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Nurs1064",
            "Module Name": "Pathophysiology",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "Nurs2072",
            "Module Name": "Nursing health assessment",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "Nurs2073",
            "Module Name": "First Aid & accident prevention",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "Nurs2074",
            "Module Name": "Fundamentals of nursing",
            "Course Code": "13",
            "Course Name": "8",
            "Module ECTS": "35"
        },
        {
            "Module Code": "Nurs2075",
            "Module Name": "operation room techniques",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "Nurs 2076",
            "Module Name": "Fundamentals of nursing practicum",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "18"
        },
        {
            "Module Code": "8",
            "Module Name": "Phar-M2083",
            "Course Code": "Pharmacology",
            "Course Name": "7",
            "Module ECTS": "Phar2081"
        },
        {
            "Module Code": "Enva2092",
            "Module Name": "Environmental health",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "ComH2093",
            "Module Name": "Health education",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "Nurs2094",
            "Module Name": "Communicable disease control",
            "Course Code": "7",
            "Course Name": "4",
            "Module ECTS": "19"
        },
        {
            "Module Code": "10",
            "Module Name": "Nurs-M2101",
            "Course Code": "Health system research",
            "Course Name": "13",
            "Module ECTS": "ComH2101"
        },
        {
            "Module Code": "ComH2102",
            "Module Name": "Epidemiology",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "Nurs2103",
            "Module Name": "Nursing research methodology",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
       
    ]
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
        "college": 4,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "No",
            "Module Name": "ModuleCode",
            "Course Code": "Module Title",
            "Course Name": "ModuleECTS",
            "Module ECTS": "Course Code"
        },
        {
            "Module Code": "1",
            "Module Name": "Enla-M1013",
            "Course Code": "Basic English Skills",
            "Course Name": "10",
            "Module ECTS": "EnLa1011"
        },
        {
            "Module Code": "EnLa1012",
            "Module Name": "Basic Writing Skill",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "2",
            "Module Name": "CESt-M1023",
            "Course Code": "Civics and Ethics",
            "Course Name": "",
            "Module ECTS": "CESt1023"
        },
        {
            "Module Code": "3",
            "Module Name": "PsyS-M1034",
            "Course Code": "Psychosocial module",
            "Course Name": "6",
            "Module ECTS": "Soci1031"
        },
        {
            "Module Code": "Psyc1034",
            "Module Name": "Introduction to Sociology",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "4",
            "Module Name": "Comp-M1043",
            "Course Code": "Computer application",
            "Course Name": "3",
            "Module ECTS": "Hinf1041"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "Phys1052",
            "Module ECTS": "Human Physiology"
        }
    ]
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
        "college": 4,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "No",
            "Module Name": "ModuleCode",
            "Course Code": "Module Title",
            "Course Name": "ModuleECTS",
            "Module ECTS": "Course Code"
        },
        {
            "Module Code": "1",
            "Module Name": "Enla-M1013",
            "Course Code": "Basic English Skills",
            "Course Name": "10",
            "Module ECTS": "EnLa1011"
        },
        {
            "Module Code": "EnLa1012",
            "Module Name": "Basic Writing Skill",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "2",
            "Module Name": "CESt-M1023",
            "Course Code": "Civics and Ethics",
            "Course Name": "",
            "Module ECTS": "CESt1023"
        },
        {
            "Module Code": "3",
            "Module Name": "PsyS-M1034",
            "Course Code": "Psychosocial module",
            "Course Name": "6",
            "Module ECTS": "Soci1031"
        },
        {
            "Module Code": "Psyc1034",
            "Module Name": "Introduction to Sociology",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "4",
            "Module Name": "Comp-M1043",
            "Course Code": "Computer application",
            "Course Name": "3",
            "Module ECTS": "Hinf1041"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "Phys1052",
            "Module ECTS": "Human Physiology"
        },]
      },
      {
        "id": 21,
          "name": "Nursing",
         image:  welcome,
        "description": "Provide nursing care based on sound scientific processes. Demonstrate competence in nursing skills from physical, biological, and behavioral sciences. Participate in the full healthcare system. Demonstrate leadership, decision-making, teaching, management, and ethical values.",
        "gpaEntry": "3.40",
        "Admission requirements": "Meet the set criteria of the Ministry of Education (MoE) for degree students to join higher learning institutions;Physically and mentally fit for nursing service;Preferably those who choose to enter the profession.",
        "Graduation requirement": "Complete a total of 247 ECTS; CGPA and MGPA of 2.00 and above; No F grade; and Pass the national qualifying exam."
   ,
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
        "college": 4,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "No",
            "Module Name": "ModuleCode",
            "Course Code": "Module Title",
            "Course Name": "ModuleECTS",
            "Module ECTS": "Course Code"
        },
        {
            "Module Code": "1",
            "Module Name": "Enla-M1013",
            "Course Code": "Basic English Skills",
            "Course Name": "10",
            "Module ECTS": "EnLa1011"
        },
        {
            "Module Code": "EnLa1012",
            "Module Name": "Basic Writing Skill",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "2",
            "Module Name": "CESt-M1023",
            "Course Code": "Civics and Ethics",
            "Course Name": "",
            "Module ECTS": "CESt1023"
        },
        {
            "Module Code": "3",
            "Module Name": "PsyS-M1034",
            "Course Code": "Psychosocial module",
            "Course Name": "6",
            "Module ECTS": "Soci1031"
        },
        {
            "Module Code": "Psyc1034",
            "Module Name": "Introduction to Sociology",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "4",
            "Module Name": "Comp-M1043",
            "Course Code": "Computer application",
            "Course Name": "3",
            "Module ECTS": "Hinf1041"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "Phys1052",
            "Module ECTS": "Human Physiology"
        },
        {
            "Module Code": "Bioc1053",
            "Module Name": "Biochemistry",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "Para1062",
            "Module Name": "Medical Parasitology",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "CLab1063",
            "Module Name": "Clinical Laboratory Method",
            "Course Code": "2",
            "Course Name": "1",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Nurs1064",
            "Module Name": "Pathophysiology",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "Nurs2072",
            "Module Name": "Nursing health assessment",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        },
        {
            "Module Code": "Nurs2073",
            "Module Name": "First Aid & accident prevention",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "Nurs2074",
            "Module Name": "Fundamentals of nursing",
            "Course Code": "13",
            "Course Name": "8",
            "Module ECTS": "35"
        },
        {
            "Module Code": "Nurs2075",
            "Module Name": "operation room techniques",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "8"
        },
        {
            "Module Code": "Nurs 2076",
            "Module Name": "Fundamentals of nursing practicum",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "18"
        },
        {
            "Module Code": "Nurs4183",
            "Module Name": "Student research Project",
            "Course Code": "5",
            "Course Name": "3",
            "Module ECTS": "14"
        }
    ]
      }
    ],
    "freshmanOffice": "Any Natural"
  },
  {
    "id": 5,
    "name": "College of Veterinary Medicine and Agriculture",
    "description": "Nurture animals, nourish lives! Train vets, agronomists, & food scientists. Ensure animal health, food security & sustainable agriculture.",
     image:  welcome,
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
         image:  welcome,
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
        "college": 5,
         "Program Objective": "Specific objectives are to:",
        "Admission requirements": "Natural science students who pass the Ethiopian Higher Education Entrance Certificate Examination and without major disabilities, which would hinder the individual’s ability to deliver his/her professional services, and assigned by the Ministry of Education are accepted.Advance standing (for diploma holders)Candidates who graduated from recognized academic institutions in Animal health, Animal production and related natural science fields andWho passed CoC examination andWho pass the entrance examination",
        "Graduation requirement": "A minimum total credit point/ ECTS of 360A minimum CGPA and MGPA of 2.00No “F”, “I” and “NG” gradesWith a minimum of ‘C’ grades in practical courses (Vetm4181, Vetm4182, Vetm5241, Vetm5242, Vetm6261, Vetm6262, Vetm6263, Vetm6264, Vetm6267, Vetm6268 Vetm6271, Vetm6272)"
        ,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "No",
            "Module Name": "Course Code",
            "Course Code": "Course Title",
            "Course Name": "ECTS",
            "Module ECTS": "Module Name"
        },
        {
            "Module Code": "1",
            "Module Name": "Vetm1031",
            "Course Code": "Veterinary Embryology",
            "Course Name": "3",
            "Module ECTS": "Vet Anatomy & Embryology"
        },
        {
            "Module Code": "6",
            "Module Name": "Vetm1041",
            "Course Code": "Veterinary Physiology I",
            "Course Name": "5",
            "Module ECTS": "Vet Physiology"
        },
        {
            "Module Code": "8",
            "Module Name": "Vetm2072",
            "Course Code": "Veterinary Biochemistry I",
            "Course Name": "5",
            "Module ECTS": "Biochemistry & Molecular biology (Vetm-M2071)"
        },
        {
            "Module Code": "10",
            "Module Name": "Vetm2081",
            "Course Code": "Veterinary Parasitology I",
            "Course Name": "7",
            "Module ECTS": "Animal Pathogens & Host Defense (Vetm-M2081)"
        },
        {
            "Module Code": "14",
            "Module Name": "Vetm3111",
            "Course Code": "Veterinary General Pathology",
            "Course Name": "7",
            "Module ECTS": "Vet Pathology"
        },
        {
            "Module Code": "17",
            "Module Name": "Vetm3121",
            "Course Code": "Veterinary Pharmacology & Therapeutics I",
            "Course Name": "5",
            "Module ECTS": "Vet Pharmacology & Toxicology"
        },
        {
            "Module Code": "20",
            "Module Name": "Vetm3131",
            "Course Code": "Veterinary Clinical diagnosis",
            "Course Name": "5",
            "Module ECTS": "Vet General Medicine & Clinical Diagnosis (Vetm-M3131)"
        },
        {
            "Module Code": "22",
            "Module Name": "Vetm4141",
            "Course Code": "Large Animal Medicine",
            "Course Name": "7",
            "Module ECTS": "Vet Clinical Medicine"
        },
        {
            "Module Code": "28",
            "Module Name": "Vetm4151",
            "Course Code": "Veterinary General Surgery and Anesthesiology",
            "Course Name": "5",
            "Module ECTS": "Vet Surgery & Diagnostic Imaging (Vetm-M4151)"
        },
        {
            "Module Code": "29",
            "Module Name": "Vetm4152",
            "Course Code": "Veterinary Operative Surgery",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "30",
            "Module Name": "Vetm4153",
            "Course Code": "Veterinary Diagnostic Imaging",
            "Course Name": "3",
            "Module ECTS": ""
        },
        {
            "Module Code": "31",
            "Module Name": "Vetm4161",
            "Course Code": "Theriogenology I",
            "Course Name": "5",
            "Module ECTS": "Theriogenology"
        },
        {
            "Module Code": "32",
            "Module Name": "Vetm4162",
            "Course Code": "Theriogenology II",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "33",
            "Module Name": "Vetm4171",
            "Course Code": "Veterinary Public Health I",
            "Course Name": "5",
            "Module ECTS": "Vet Public Health"
        },
        {
            "Module Code": "35",
            "Module Name": "Vetm4181",
            "Course Code": "Clinical Practice I",
            "Course Name": "2",
            "Module ECTS": "Basic Vet Clinical Practice (Vetm-M4181)"
        },
        {
            "Module Code": "36",
            "Module Name": "Vetm4182",
            "Course Code": "Clinical Practice II",
            "Course Name": "2",
            "Module ECTS": ""
        },]
      },
      {
        "id": 24,
          "name": "Animal Science",
         image:  welcome,
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
        "college": 5,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "No",
            "Module Name": "Course Code",
            "Course Code": "Course Title",
            "Course Name": "ECTS",
            "Module ECTS": "Module Name"
        },
        {
            "Module Code": "1",
            "Module Name": "Vetm1031",
            "Course Code": "Veterinary Embryology",
            "Course Name": "3",
            "Module ECTS": "Vet Anatomy & Embryology"
        },
        {
            "Module Code": "6",
            "Module Name": "Vetm1041",
            "Course Code": "Veterinary Physiology I",
            "Course Name": "5",
            "Module ECTS": "Vet Physiology"
        },
        {
            "Module Code": "8",
            "Module Name": "Vetm2072",
            "Course Code": "Veterinary Biochemistry I",
            "Course Name": "5",
            "Module ECTS": "Biochemistry & Molecular biology (Vetm-M2071)"
        },
        {
            "Module Code": "10",
            "Module Name": "Vetm2081",
            "Course Code": "Veterinary Parasitology I",
            "Course Name": "7",
            "Module ECTS": "Animal Pathogens & Host Defense (Vetm-M2081)"
        },
        {
            "Module Code": "14",
            "Module Name": "Vetm3111",
            "Course Code": "Veterinary General Pathology",
            "Course Name": "7",
            "Module ECTS": "Vet Pathology"
        },
        {
            "Module Code": "17",
            "Module Name": "Vetm3121",
            "Course Code": "Veterinary Pharmacology & Therapeutics I",
            "Course Name": "5",
            "Module ECTS": "Vet Pharmacology & Toxicology"
        },
        {
            "Module Code": "20",
            "Module Name": "Vetm3131",
            "Course Code": "Veterinary Clinical diagnosis",
            "Course Name": "5",
            "Module ECTS": "Vet General Medicine & Clinical Diagnosis (Vetm-M3131)"
        },
        {
            "Module Code": "22",
            "Module Name": "Vetm4141",
            "Course Code": "Large Animal Medicine",
            "Course Name": "7",
            "Module ECTS": "Vet Clinical Medicine"
        },
        {
            "Module Code": "28",
            "Module Name": "Vetm4151",
            "Course Code": "Veterinary General Surgery and Anesthesiology",
            "Course Name": "5",
            "Module ECTS": "Vet Surgery & Diagnostic Imaging (Vetm-M4151)"
        },
        {
            "Module Code": "29",
            "Module Name": "Vetm4152",
            "Course Code": "Veterinary Operative Surgery",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "30",
            "Module Name": "Vetm4153",
            "Course Code": "Veterinary Diagnostic Imaging",
            "Course Name": "3",
            "Module ECTS": ""
        },
        {
            "Module Code": "31",
            "Module Name": "Vetm4161",
            "Course Code": "Theriogenology I",
            "Course Name": "5",
            "Module ECTS": "Theriogenology"
        },
        {
            "Module Code": "32",
            "Module Name": "Vetm4162",
            "Course Code": "Theriogenology II",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "33",
            "Module Name": "Vetm4171",
            "Course Code": "Veterinary Public Health I",
            "Course Name": "5",
            "Module ECTS": "Vet Public Health"
        },
        {
            "Module Code": "35",
            "Module Name": "Vetm4181",
            "Course Code": "Clinical Practice I",
            "Course Name": "2",
            "Module ECTS": "Basic Vet Clinical Practice (Vetm-M4181)"
        },
        {
            "Module Code": "36",
            "Module Name": "Vetm4182",
            "Course Code": "Clinical Practice II",
            "Course Name": "2",
            "Module ECTS": ""
        },]
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
        "college": 5,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "No",
            "Module Name": "Course Code",
            "Course Code": "Course Title",
            "Course Name": "ECTS",
            "Module ECTS": "Module Name"
        },
        {
            "Module Code": "1",
            "Module Name": "Vetm1031",
            "Course Code": "Veterinary Embryology",
            "Course Name": "3",
            "Module ECTS": "Vet Anatomy & Embryology"
        },
        {
            "Module Code": "6",
            "Module Name": "Vetm1041",
            "Course Code": "Veterinary Physiology I",
            "Course Name": "5",
            "Module ECTS": "Vet Physiology"
        },
        {
            "Module Code": "8",
            "Module Name": "Vetm2072",
            "Course Code": "Veterinary Biochemistry I",
            "Course Name": "5",
            "Module ECTS": "Biochemistry & Molecular biology (Vetm-M2071)"
        },
        {
            "Module Code": "10",
            "Module Name": "Vetm2081",
            "Course Code": "Veterinary Parasitology I",
            "Course Name": "7",
            "Module ECTS": "Animal Pathogens & Host Defense (Vetm-M2081)"
        },
        {
            "Module Code": "14",
            "Module Name": "Vetm3111",
            "Course Code": "Veterinary General Pathology",
            "Course Name": "7",
            "Module ECTS": "Vet Pathology"
        },
        {
            "Module Code": "17",
            "Module Name": "Vetm3121",
            "Course Code": "Veterinary Pharmacology & Therapeutics I",
            "Course Name": "5",
            "Module ECTS": "Vet Pharmacology & Toxicology"
        },
        {
            "Module Code": "20",
            "Module Name": "Vetm3131",
            "Course Code": "Veterinary Clinical diagnosis",
            "Course Name": "5",
            "Module ECTS": "Vet General Medicine & Clinical Diagnosis (Vetm-M3131)"
        },
        {
            "Module Code": "22",
            "Module Name": "Vetm4141",
            "Course Code": "Large Animal Medicine",
            "Course Name": "7",
            "Module ECTS": "Vet Clinical Medicine"
        },
        {
            "Module Code": "28",
            "Module Name": "Vetm4151",
            "Course Code": "Veterinary General Surgery and Anesthesiology",
            "Course Name": "5",
            "Module ECTS": "Vet Surgery & Diagnostic Imaging (Vetm-M4151)"
        },
        {
            "Module Code": "29",
            "Module Name": "Vetm4152",
            "Course Code": "Veterinary Operative Surgery",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "30",
            "Module Name": "Vetm4153",
            "Course Code": "Veterinary Diagnostic Imaging",
            "Course Name": "3",
            "Module ECTS": ""
        },
        {
            "Module Code": "31",
            "Module Name": "Vetm4161",
            "Course Code": "Theriogenology I",
            "Course Name": "5",
            "Module ECTS": "Theriogenology"
        },
        {
            "Module Code": "32",
            "Module Name": "Vetm4162",
            "Course Code": "Theriogenology II",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "33",
            "Module Name": "Vetm4171",
            "Course Code": "Veterinary Public Health I",
            "Course Name": "5",
            "Module ECTS": "Vet Public Health"
        },
        {
            "Module Code": "35",
            "Module Name": "Vetm4181",
            "Course Code": "Clinical Practice I",
            "Course Name": "2",
            "Module ECTS": "Basic Vet Clinical Practice (Vetm-M4181)"
        },
        {
            "Module Code": "36",
            "Module Name": "Vetm4182",
            "Course Code": "Clinical Practice II",
            "Course Name": "2",
            "Module ECTS": ""
        },]
      },
      {
        "id": 26,
          "name": "Plant Science",
         image:  welcome,
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
        "college": 5,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "No",
            "Module Name": "Course Code",
            "Course Code": "Course Title",
            "Course Name": "ECTS",
            "Module ECTS": "Module Name"
        },
        {
            "Module Code": "1",
            "Module Name": "Vetm1031",
            "Course Code": "Veterinary Embryology",
            "Course Name": "3",
            "Module ECTS": "Vet Anatomy & Embryology"
        },
        {
            "Module Code": "6",
            "Module Name": "Vetm1041",
            "Course Code": "Veterinary Physiology I",
            "Course Name": "5",
            "Module ECTS": "Vet Physiology"
        },
        {
            "Module Code": "8",
            "Module Name": "Vetm2072",
            "Course Code": "Veterinary Biochemistry I",
            "Course Name": "5",
            "Module ECTS": "Biochemistry & Molecular biology (Vetm-M2071)"
        },
        {
            "Module Code": "10",
            "Module Name": "Vetm2081",
            "Course Code": "Veterinary Parasitology I",
            "Course Name": "7",
            "Module ECTS": "Animal Pathogens & Host Defense (Vetm-M2081)"
        },
        {
            "Module Code": "14",
            "Module Name": "Vetm3111",
            "Course Code": "Veterinary General Pathology",
            "Course Name": "7",
            "Module ECTS": "Vet Pathology"
        },
        {
            "Module Code": "17",
            "Module Name": "Vetm3121",
            "Course Code": "Veterinary Pharmacology & Therapeutics I",
            "Course Name": "5",
            "Module ECTS": "Vet Pharmacology & Toxicology"
        },
        {
            "Module Code": "20",
            "Module Name": "Vetm3131",
            "Course Code": "Veterinary Clinical diagnosis",
            "Course Name": "5",
            "Module ECTS": "Vet General Medicine & Clinical Diagnosis (Vetm-M3131)"
        },
        {
            "Module Code": "22",
            "Module Name": "Vetm4141",
            "Course Code": "Large Animal Medicine",
            "Course Name": "7",
            "Module ECTS": "Vet Clinical Medicine"
        },
        {
            "Module Code": "28",
            "Module Name": "Vetm4151",
            "Course Code": "Veterinary General Surgery and Anesthesiology",
            "Course Name": "5",
            "Module ECTS": "Vet Surgery & Diagnostic Imaging (Vetm-M4151)"
        },
        {
            "Module Code": "29",
            "Module Name": "Vetm4152",
            "Course Code": "Veterinary Operative Surgery",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "30",
            "Module Name": "Vetm4153",
            "Course Code": "Veterinary Diagnostic Imaging",
            "Course Name": "3",
            "Module ECTS": ""
        },
        {
            "Module Code": "31",
            "Module Name": "Vetm4161",
            "Course Code": "Theriogenology I",
            "Course Name": "5",
            "Module ECTS": "Theriogenology"
        },
        {
            "Module Code": "32",
            "Module Name": "Vetm4162",
            "Course Code": "Theriogenology II",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "33",
            "Module Name": "Vetm4171",
            "Course Code": "Veterinary Public Health I",
            "Course Name": "5",
            "Module ECTS": "Vet Public Health"
        },
        {
            "Module Code": "35",
            "Module Name": "Vetm4181",
            "Course Code": "Clinical Practice I",
            "Course Name": "2",
            "Module ECTS": "Basic Vet Clinical Practice (Vetm-M4181)"
        },
        {
            "Module Code": "36",
            "Module Name": "Vetm4182",
            "Course Code": "Clinical Practice II",
            "Course Name": "2",
            "Module ECTS": ""
        },]
      },
      {
        "id": 27,
          "name": "Veterinary Medicine",
         image:  welcome,
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
        "college": 5,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "No",
            "Module Name": "Course Code",
            "Course Code": "Course Title",
            "Course Name": "ECTS",
            "Module ECTS": "Module Name"
        },
        {
            "Module Code": "1",
            "Module Name": "Vetm1031",
            "Course Code": "Veterinary Embryology",
            "Course Name": "3",
            "Module ECTS": "Vet Anatomy & Embryology"
        },
        {
            "Module Code": "6",
            "Module Name": "Vetm1041",
            "Course Code": "Veterinary Physiology I",
            "Course Name": "5",
            "Module ECTS": "Vet Physiology"
        },
        {
            "Module Code": "8",
            "Module Name": "Vetm2072",
            "Course Code": "Veterinary Biochemistry I",
            "Course Name": "5",
            "Module ECTS": "Biochemistry & Molecular biology (Vetm-M2071)"
        },
        {
            "Module Code": "10",
            "Module Name": "Vetm2081",
            "Course Code": "Veterinary Parasitology I",
            "Course Name": "7",
            "Module ECTS": "Animal Pathogens & Host Defense (Vetm-M2081)"
        },
        {
            "Module Code": "14",
            "Module Name": "Vetm3111",
            "Course Code": "Veterinary General Pathology",
            "Course Name": "7",
            "Module ECTS": "Vet Pathology"
        },
        {
            "Module Code": "17",
            "Module Name": "Vetm3121",
            "Course Code": "Veterinary Pharmacology & Therapeutics I",
            "Course Name": "5",
            "Module ECTS": "Vet Pharmacology & Toxicology"
        },
        {
            "Module Code": "20",
            "Module Name": "Vetm3131",
            "Course Code": "Veterinary Clinical diagnosis",
            "Course Name": "5",
            "Module ECTS": "Vet General Medicine & Clinical Diagnosis (Vetm-M3131)"
        },
        {
            "Module Code": "22",
            "Module Name": "Vetm4141",
            "Course Code": "Large Animal Medicine",
            "Course Name": "7",
            "Module ECTS": "Vet Clinical Medicine"
        },
        {
            "Module Code": "28",
            "Module Name": "Vetm4151",
            "Course Code": "Veterinary General Surgery and Anesthesiology",
            "Course Name": "5",
            "Module ECTS": "Vet Surgery & Diagnostic Imaging (Vetm-M4151)"
        },
        {
            "Module Code": "29",
            "Module Name": "Vetm4152",
            "Course Code": "Veterinary Operative Surgery",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "30",
            "Module Name": "Vetm4153",
            "Course Code": "Veterinary Diagnostic Imaging",
            "Course Name": "3",
            "Module ECTS": ""
        },
        {
            "Module Code": "31",
            "Module Name": "Vetm4161",
            "Course Code": "Theriogenology I",
            "Course Name": "5",
            "Module ECTS": "Theriogenology"
        },
        {
            "Module Code": "32",
            "Module Name": "Vetm4162",
            "Course Code": "Theriogenology II",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "33",
            "Module Name": "Vetm4171",
            "Course Code": "Veterinary Public Health I",
            "Course Name": "5",
            "Module ECTS": "Vet Public Health"
        },
        {
            "Module Code": "35",
            "Module Name": "Vetm4181",
            "Course Code": "Clinical Practice I",
            "Course Name": "2",
            "Module ECTS": "Basic Vet Clinical Practice (Vetm-M4181)"
        },
        {
            "Module Code": "36",
            "Module Name": "Vetm4182",
            "Course Code": "Clinical Practice II",
            "Course Name": "2",
            "Module ECTS": ""
        },
        {
            "Module Code": "37",
            "Module Name": "Vetm5191",
            "Course Code": "Fisheries & Fish diseases",
            "Course Name": "3",
            "Module ECTS": "Fish & Honey bee production & Diseases (Vetm-M5191)"
        },
        {
            "Module Code": "39",
            "Module Name": "Vetm5201",
            "Course Code": "Veterinary Ethics & Jurisprudence",
            "Course Name": "3",
            "Module ECTS": "Animal Welfare & Vet Ethics (Vetm-M5201)"
        },
        {
            "Module Code": "41",
            "Module Name": "Vetm5211",
            "Course Code": "Veterinary Clinical Pathology I",
            "Course Name": "5",
            "Module ECTS": "Vet Clinical Pathology"
        },
        {
            "Module Code": "43",
            "Module Name": "Vetm5222",
            "Course Code": "Biostatistics & Research Methodology",
            "Course Name": "5",
            "Module ECTS": "Research Methods"
        },
        {
            "Module Code": "45",
            "Module Name": "Vetm5232",
            "Course Code": "Veterinary Epidemiology",
            "Course Name": "5",
            "Module ECTS": "Vet Epidemiology & Animal Health Economics"
        },
        {
            "Module Code": "48",
            "Module Name": "Vetm5241",
            "Course Code": "Clinical Practice III",
            "Course Name": "2",
            "Module ECTS": "Advanced Vet Clinical Practice (Vetm-M5241)"
        },
        {
            "Module Code": "50",
            "Module Name": "Vetm5251",
            "Course Code": "Animal Health Extension & Pastoralism",
            "Course Name": "3",
            "Module ECTS": "Animal Health extension & Business Mng’t (Vetm-M5254)"
        },
        {
            "Module Code": "51",
            "Module Name": "Vetm6261",
            "Course Code": "Laboratory work experience I",
            "Course Name": "6",
            "Module ECTS": "Externship"
        },
        {
            "Module Code": "59",
            "Module Name": "Vetm6271",
            "Course Code": "DVM thesis I",
            "Course Name": "6",
            "Module ECTS": "DVM Thesis"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "Subtotal",
            "Course Name": "287",
            "Module ECTS": ""
        },
        {
            "Module Code": "No",
            "Module Name": "Course Code",
            "Course Code": "Course Title",
            "Course Name": "ECTS",
            "Module ECTS": "Module name"
        },
        {
            "Module Code": "61",
            "Module Name": "Soci2032",
            "Course Code": "Introduction to Sociology",
            "Course Name": "4",
            "Module ECTS": "Introduction to Sociology (Vetm-M1064)"
        },
        {
            "Module Code": "62",
            "Module Name": "Vetm2071",
            "Course Code": "Organic Chemistry",
            "Course Name": "5",
            "Module ECTS": "Biochemistry & Molecular biology (Vetm-M2071)"
        },
        {
            "Module Code": "64",
            "Module Name": "AnPS2091",
            "Course Code": "Principles of Animal Genetics & Breeding",
            "Course Name": "4",
            "Module ECTS": "Animal Genetics & Nutrition (Vetm-M2094)"
        },
        {
            "Module Code": "66",
            "Module Name": "AnPS3101",
            "Course Code": "Poultry & Swine Production",
            "Course Name": "4",
            "Module ECTS": "Animal production & Management"
        },
        {
            "Module Code": "72",
            "Module Name": "Vetm-M5221",
            "Course Code": "Introduction to Statistics",
            "Course Name": "5",
            "Module ECTS": "Research Methods"
        },
        {
            "Module Code": "73",
            "Module Name": "Vetm-M5231",
            "Course Code": "Ethiopian Geography and Introduction to GIS",
            "Course Name": "4",
            "Module ECTS": "Veterinary Epidemiology & Animal Health Economics (Vetm-M5231)"
        },
        {
            "Module Code": "74",
            "Module Name": "Vetm-M5251",
            "Course Code": "Entrepreneurship & Small Business Management",
            "Course Name": "3",
            "Module ECTS": "Animal Health Extension and Business Mang’t (Vetm-M5254)"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "Subtotal",
            "Course Name": "53",
            "Module ECTS": ""
        },
        {
            "Module Code": "No.",
            "Module Name": "Course code",
            "Course Code": "Course Title",
            "Course Name": "ECTS",
            "Module ECTS": "Module name"
        },
        {
            "Module Code": "75",
            "Module Name": "EnLa1011",
            "Course Code": "Communicative English",
            "Course Name": "5",
            "Module ECTS": "Basic English skills (EnLa-M1013)"
        },
        {
            "Module Code": "77",
            "Module Name": "CoSc1201",
            "Course Code": "Introduction to Information and Communication Technologies (Introduction to ICT)",
            "Course Name": "5",
            "Module ECTS": "Basics of Information System (Vetm-M1054)"
        },
        {
            "Module Code": "78",
            "Module Name": "CESt1023",
            "Course Code": "Civics & Ethics",
            "Course Name": "5",
            "Module ECTS": "Civics and Ethics (CESt-M1023)"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "Subtotal",
            "Course Name": "20",
            "Module ECTS": ""
        }
    ]
      },
      {
        "id": 28,
          "name": "Veterinary Laboratory Technology",
         image:  welcome,
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
        "college": 5,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "No",
            "Module Name": "Course Code",
            "Course Code": "Course Title",
            "Course Name": "ECTS",
            "Module ECTS": "Module Name"
        },
        {
            "Module Code": "1",
            "Module Name": "Vetm1031",
            "Course Code": "Veterinary Embryology",
            "Course Name": "3",
            "Module ECTS": "Vet Anatomy & Embryology"
        },
        {
            "Module Code": "6",
            "Module Name": "Vetm1041",
            "Course Code": "Veterinary Physiology I",
            "Course Name": "5",
            "Module ECTS": "Vet Physiology"
        },
        {
            "Module Code": "8",
            "Module Name": "Vetm2072",
            "Course Code": "Veterinary Biochemistry I",
            "Course Name": "5",
            "Module ECTS": "Biochemistry & Molecular biology (Vetm-M2071)"
        },
        {
            "Module Code": "10",
            "Module Name": "Vetm2081",
            "Course Code": "Veterinary Parasitology I",
            "Course Name": "7",
            "Module ECTS": "Animal Pathogens & Host Defense (Vetm-M2081)"
        },
        {
            "Module Code": "14",
            "Module Name": "Vetm3111",
            "Course Code": "Veterinary General Pathology",
            "Course Name": "7",
            "Module ECTS": "Vet Pathology"
        },
        {
            "Module Code": "17",
            "Module Name": "Vetm3121",
            "Course Code": "Veterinary Pharmacology & Therapeutics I",
            "Course Name": "5",
            "Module ECTS": "Vet Pharmacology & Toxicology"
        },
        {
            "Module Code": "20",
            "Module Name": "Vetm3131",
            "Course Code": "Veterinary Clinical diagnosis",
            "Course Name": "5",
            "Module ECTS": "Vet General Medicine & Clinical Diagnosis (Vetm-M3131)"
        },
        {
            "Module Code": "22",
            "Module Name": "Vetm4141",
            "Course Code": "Large Animal Medicine",
            "Course Name": "7",
            "Module ECTS": "Vet Clinical Medicine"
        },
        {
            "Module Code": "28",
            "Module Name": "Vetm4151",
            "Course Code": "Veterinary General Surgery and Anesthesiology",
            "Course Name": "5",
            "Module ECTS": "Vet Surgery & Diagnostic Imaging (Vetm-M4151)"
        },
        {
            "Module Code": "29",
            "Module Name": "Vetm4152",
            "Course Code": "Veterinary Operative Surgery",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "30",
            "Module Name": "Vetm4153",
            "Course Code": "Veterinary Diagnostic Imaging",
            "Course Name": "3",
            "Module ECTS": ""
        },
        {
            "Module Code": "31",
            "Module Name": "Vetm4161",
            "Course Code": "Theriogenology I",
            "Course Name": "5",
            "Module ECTS": "Theriogenology"
        },
        {
            "Module Code": "32",
            "Module Name": "Vetm4162",
            "Course Code": "Theriogenology II",
            "Course Name": "5",
            "Module ECTS": ""
        },
        {
            "Module Code": "33",
            "Module Name": "Vetm4171",
            "Course Code": "Veterinary Public Health I",
            "Course Name": "5",
            "Module ECTS": "Vet Public Health"
        },
        {
            "Module Code": "35",
            "Module Name": "Vetm4181",
            "Course Code": "Clinical Practice I",
            "Course Name": "2",
            "Module ECTS": "Basic Vet Clinical Practice (Vetm-M4181)"
        },
        {
            "Module Code": "36",
            "Module Name": "Vetm4182",
            "Course Code": "Clinical Practice II",
            "Course Name": "2",
            "Module ECTS": ""
        },
        {
            "Module Code": "37",
            "Module Name": "Vetm5191",
            "Course Code": "Fisheries & Fish diseases",
            "Course Name": "3",
            "Module ECTS": "Fish & Honey bee production & Diseases (Vetm-M5191)"
        },
        {
            "Module Code": "39",
            "Module Name": "Vetm5201",
            "Course Code": "Veterinary Ethics & Jurisprudence",
            "Course Name": "3",
            "Module ECTS": "Animal Welfare & Vet Ethics (Vetm-M5201)"
        },
        {
            "Module Code": "41",
            "Module Name": "Vetm5211",
            "Course Code": "Veterinary Clinical Pathology I",
            "Course Name": "5",
            "Module ECTS": "Vet Clinical Pathology"
        },
        {
            "Module Code": "43",
            "Module Name": "Vetm5222",
            "Course Code": "Biostatistics & Research Methodology",
            "Course Name": "5",
            "Module ECTS": "Research Methods"
        },
        {
            "Module Code": "45",
            "Module Name": "Vetm5232",
            "Course Code": "Veterinary Epidemiology",
            "Course Name": "5",
            "Module ECTS": "Vet Epidemiology & Animal Health Economics"
        },
        {
            "Module Code": "48",
            "Module Name": "Vetm5241",
            "Course Code": "Clinical Practice III",
            "Course Name": "2",
            "Module ECTS": "Advanced Vet Clinical Practice (Vetm-M5241)"
        },
        {
            "Module Code": "50",
            "Module Name": "Vetm5251",
            "Course Code": "Animal Health Extension & Pastoralism",
            "Course Name": "3",
            "Module ECTS": "Animal Health extension & Business Mng’t (Vetm-M5254)"
        },
        {
            "Module Code": "51",
            "Module Name": "Vetm6261",
            "Course Code": "Laboratory work experience I",
            "Course Name": "6",
            "Module ECTS": "Externship"
        },
        {
            "Module Code": "59",
            "Module Name": "Vetm6271",
            "Course Code": "DVM thesis I",
            "Course Name": "6",
            "Module ECTS": "DVM Thesis"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "Subtotal",
            "Course Name": "287",
            "Module ECTS": ""
        },
        {
            "Module Code": "No",
            "Module Name": "Course Code",
            "Course Code": "Course Title",
            "Course Name": "ECTS",
            "Module ECTS": "Module name"
        },
        {
            "Module Code": "61",
            "Module Name": "Soci2032",
            "Course Code": "Introduction to Sociology",
            "Course Name": "4",
            "Module ECTS": "Introduction to Sociology (Vetm-M1064)"
        },
        {
            "Module Code": "62",
            "Module Name": "Vetm2071",
            "Course Code": "Organic Chemistry",
            "Course Name": "5",
            "Module ECTS": "Biochemistry & Molecular biology (Vetm-M2071)"
        },
        {
            "Module Code": "64",
            "Module Name": "AnPS2091",
            "Course Code": "Principles of Animal Genetics & Breeding",
            "Course Name": "4",
            "Module ECTS": "Animal Genetics & Nutrition (Vetm-M2094)"
        },
        {
            "Module Code": "66",
            "Module Name": "AnPS3101",
            "Course Code": "Poultry & Swine Production",
            "Course Name": "4",
            "Module ECTS": "Animal production & Management"
        },
        {
            "Module Code": "72",
            "Module Name": "Vetm-M5221",
            "Course Code": "Introduction to Statistics",
            "Course Name": "5",
            "Module ECTS": "Research Methods"
        },
        {
            "Module Code": "73",
            "Module Name": "Vetm-M5231",
            "Course Code": "Ethiopian Geography and Introduction to GIS",
            "Course Name": "4",
            "Module ECTS": "Veterinary Epidemiology & Animal Health Economics (Vetm-M5231)"
        },
        {
            "Module Code": "74",
            "Module Name": "Vetm-M5251",
            "Course Code": "Entrepreneurship & Small Business Management",
            "Course Name": "3",
            "Module ECTS": "Animal Health Extension and Business Mang’t (Vetm-M5254)"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "Subtotal",
            "Course Name": "53",
            "Module ECTS": ""
        },
        {
            "Module Code": "No.",
            "Module Name": "Course code",
            "Course Code": "Course Title",
            "Course Name": "ECTS",
            "Module ECTS": "Module name"
        },
        {
            "Module Code": "75",
            "Module Name": "EnLa1011",
            "Course Code": "Communicative English",
            "Course Name": "5",
            "Module ECTS": "Basic English skills (EnLa-M1013)"
        },
        {
            "Module Code": "77",
            "Module Name": "CoSc1201",
            "Course Code": "Introduction to Information and Communication Technologies (Introduction to ICT)",
            "Course Name": "5",
            "Module ECTS": "Basics of Information System (Vetm-M1054)"
        },
        {
            "Module Code": "78",
            "Module Name": "CESt1023",
            "Course Code": "Civics & Ethics",
            "Course Name": "5",
            "Module ECTS": "Civics and Ethics (CESt-M1023)"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "Subtotal",
            "Course Name": "20",
            "Module ECTS": ""
        }
    ]
      }
    ],
    "freshmanOffice": "Any Natural"
  },
  {
    "id": 6,
    "name": "College of Business and Economics",
    "description": "Ethiopia's top biz school since 1943!  Offers undergrad, grad & PhD programs in Accounting, Finance, Economics, Management, Public Admin & more.  Strong research & industry ties.",
  image:  welcome,
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
        "college": 6,
         "ModulesandCourses": [
        {
            "Module Code": "ModuleNo",
            "Module Name": "ModuleTitle",
            "Course Code": "Modulecode",
            "Course Name": "CourseTitle",
            "Module ECTS": "CourseCode"
        },
        {
            "Module Code": "M3",
            "Module Name": "Basics of Accounting and Reporting",
            "Course Code": "AcFn-M1031",
            "Course Name": "Principles of Accounting I",
            "Module ECTS": "AcFn1031"
        },
        {
            "Module Code": "Principles of Accounting II",
            "Module Name": "AcFn1032",
            "Course Code": "4",
            "Course Name": "6",
            "Module ECTS": "162"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": "8"
        },
        {
            "Module Code": "M8",
            "Module Name": "Financial Accounting and Reporting",
            "Course Code": "AcFn-M2081",
            "Course Name": "Financial Accounting I",
            "Module ECTS": "AcFn2081"
        },
        {
            "Module Code": "Financial Accounting II",
            "Module Name": "AcFn2082",
            "Course Code": "4",
            "Course Name": "6",
            "Module ECTS": "162"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "M9",
            "Module Name": "Cost and Managerial Accounting",
            "Course Code": "AcFn-M2091",
            "Course Name": "Cost and Management Accounting I",
            "Module ECTS": "AcFn2091"
        },
        {
            "Module Code": "Cost and Management Accounting II",
            "Module Name": "AcFn2092",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "135"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "M10",
            "Module Name": "Corporate Finance",
            "Course Code": "AcFn-M2101",
            "Course Name": "Financial management I",
            "Module ECTS": "AcFn2101"
        },
        {
            "Module Code": "Financial management II",
            "Module Name": "AcFn2102",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "135"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "M20",
            "Module Name": "Project and Investment Analysis",
            "Course Code": "AcFn-M3201",
            "Course Name": "Project Analysis and Evaluation",
            "Module ECTS": "AcFn3202"
        },
        {
            "Module Code": "",
            "Module Name": "Investment analysis and portfolio management",
            "Course Code": "AcFn3201",
            "Course Name": "2",
            "Module ECTS": "3"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "M16",
            "Module Name": "Auditing and Assurance Services",
            "Course Code": "AcFn-M3161",
            "Course Name": "Auditing Principles and Practices I",
            "Module ECTS": "AcFn3161"
        },
        {
            "Module Code": "Auditing Principles and Practices II",
            "Module Name": "AcFn3162",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "135"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "M12",
            "Module Name": "Non-Profit Sector Accounting",
            "Course Code": "AcFn-M2121",
            "Course Name": "Government and Non-profit Accounting",
            "Module ECTS": "AcFn2121"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "Ethiopian Government Accounting",
            "Module ECTS": "AcFn3122"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "M11",
            "Module Name": "Financial Institutions",
            "Course Code": "AcFn-M2111",
            "Course Name": "Financial Markets and Institutions",
            "Module ECTS": "AcFn2112"
        },
        {
            "Module Code": "Banking Principles and Practices",
            "Module Name": "AcFn2113",
            "Course Code": "2",
            "Course Name": "3",
            "Module ECTS": "81"
        },
        {
            "Module Code": "Risk Management and Insurance",
            "Module Name": "AcFn2111",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "135"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "M17",
            "Module Name": "Public Finance and Taxation",
            "Course Code": "AcFn-M3171",
            "Course Name": "Public Finance and Taxation",
            "Module ECTS": "AcFn3171"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "M15",
            "Module Name": "Advanced Financial Accounting",
            "Course Code": "AcFn-M3151",
            "Course Name": "Advanced Financial Accounting",
            "Module ECTS": "AcFn3151"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "M13",
            "Module Name": "Research in Accounting and Finance",
            "Course Code": "AcFn-M2131",
            "Course Name": "Research methods in Accounting & Finance",
            "Module ECTS": "AcFn2131"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "M21",
            "Module Name": "Senior Research",
            "Course Code": "AcFn-M3211",
            "Course Name": "Senior Research Project I",
            "Module ECTS": "AcFn3211"
        },
        {
            "Module Code": "Senior Research Project II",
            "Module Name": "AcFn3212",
            "Course Code": "2",
            "Course Name": "3",
            "Module ECTS": "81"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "M18",
            "Module Name": "Accounting Information Systems",
            "Course Code": "AcFn-M3181",
            "Course Name": "Accounting Information Systems",
            "Module ECTS": "AcFn3181"
        },
        {
            "Module Code": "Accounting Software Application",
            "Module Name": "AcFn3182",
            "Course Code": "2",
            "Course Name": "3",
            "Module ECTS": "81"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "M4",
            "Module Name": "Quantitative and Computing Methods for Finance",
            "Course Code": "AcFn-M1041",
            "Course Name": "Mathematics for Finance",
            "Module ECTS": "AcFn1041"
        },
        {
            "Module Code": "Statistics for Finance",
            "Module Name": "AcFn1043",
            "Course Code": "4",
            "Course Name": "6",
            "Module ECTS": "162"
        },
        {
            "Module Code": "Fundamentals of Information Systems",
            "Module Name": "AcFn1042",
            "Course Code": "2",
            "Course Name": "3",
            "Module ECTS": "81"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "SUBTOTALFORMAJORCOURSES",
            "Course Code": "78",
            "Course Name": "123",
            "Module ECTS": "3321"
        },
        {
            "Module Code": "ModulesNo",
            "Module Name": "ModuleTitle",
            "Course Code": "Modulecode",
            "Course Name": "CourseTitle",
            "Module ECTS": "CourseCode"
        },
        {
            "Module Code": "M5",
            "Module Name": "Basic Management Concepts",
            "Course Code": "Mgmt-M1052",
            "Course Name": "Introduction to Management",
            "Module ECTS": "Mgmt1051"
        },
        {
            "Module Code": "Principles of Marketing",
            "Module Name": "Mgmt1052",
            "Course Code": "2",
            "Course Name": "3",
            "Module ECTS": "81"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "M20",
            "Module Name": "Business Law",
            "Course Code": "Law-M3202",
            "Course Name": "Business Law",
            "Module ECTS": "Law3201"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "M14",
            "Module Name": "Entrepreneurship and Strategy",
            "Course Code": "Mgmt-M2142",
            "Course Name": "Entrepreneurship",
            "Module ECTS": "Mgmt2141"
        },
        {
            "Module Code": "Strategic Management",
            "Module Name": "Mgmt2142",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "135"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "M19",
            "Module Name": "Operations Management",
            "Course Code": "Mgmt-M3192",
            "Course Name": "Operation Management",
            "Module ECTS": "Mgmt3191"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "M7",
            "Module Name": "Economics",
            "Course Code": "Econ-M1072",
            "Course Name": "Microeconomics",
            "Module ECTS": "Econ1071"
        },
        {
            "Module Code": "Macroeconomics",
            "Module Name": "Econ2072",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "135"
        },
        {
            "Module Code": "M22",
            "Module Name": "Econometrics",
            "Course Code": "Econ-M3222",
            "Course Name": "Introduction to Econometrics",
            "Module ECTS": "ECON 3221"
        },
        {
            "Module Code": "",
            "Module Name": "SUBTOTALFORSUPPORTIVECOURSES",
            "Course Code": "26",
            "Course Name": "42",
            "Module ECTS": "1134"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "ModulesNo",
            "Module Name": "ModuleTitle",
            "Course Code": "Modulecode",
            "Course Name": "CourseTitle",
            "Module ECTS": "CourseCode"
        },
        {
            "Module Code": "M1",
            "Module Name": "Basic English Skills",
            "Course Code": "EnLa-M1013",
            "Course Name": "Communicative English Skills",
            "Module ECTS": "EnLa1011"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "Basic Writing Skills",
            "Course Name": "EnLa1012",
            "Module ECTS": "3"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "M2",
            "Module Name": "Civics and Ethics",
            "Course Code": "CvEt-M1023",
            "Course Name": "Civics and Ethical Education",
            "Module ECTS": "CvEt1021"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "M6",
            "Module Name": "Psychology",
            "Course Code": "Psyc-M1063",
            "Course Name": "Introduction to Psychology",
            "Module ECTS": "Psyc1061"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "",
            "Module Name": "SUBTOTALFORFOUNDATIONCOURSES",
            "Course Code": "12",
            "Course Name": "20",
            "Module ECTS": "540"
        }
    ]
      },
      {
        "id": 30,
          "name": "Economics",
         image:  welcome,
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
         "Courses": [
      {
        "Number": 1,
        "ModuleName": "Mathematical Methods in Economics",
        "ModuleCode": "Econ-M1011",
        "CourseName": "Calculus for Economists",
        "CourseCode": "Econ 1011",
        "CreditHours": 3,
        "ECTS": 5
      },
      {
        "Number": 2,
        "ModuleName": "Microeconomics",
        "ModuleCode": "Econ-M1021",
        "CourseName": "Microeconomics I",
        "CourseCode": "Econ 1021",
        "CreditHours": 3,
        "ECTS": 5
      },
      {
        "Number": 3,
        "ModuleName": "Macroeconomics",
        "ModuleCode": "Econ-M1031",
        "CourseName": "Macroeconomics I",
        "CourseCode": "Econ 1031",
        "CreditHours": 4,
        "ECTS": 6
      },
      {
        "Number": 16,
        "ModuleName": "Basic English Skills",
        "ModuleCode": "EnLa-M1013",
        "CourseName": "Communicative English Skills",
        "CourseCode": "EnLa 1011",
        "CreditHours": 3,
        "ECTS": 5
      },
      {
        "Number": 16,
        "ModuleName": "Basic English Skills",
        "ModuleCode": "EnLa-M1013",
        "CourseName": "Introduction to Logic",
        "CourseCode": "Phil 1013",
        "CreditHours": 3,
        "ECTS": 5
      },
      {
        "Number": 16,
        "ModuleName": "Basic English Skills",
        "ModuleCode": "EnLa-M1013",
        "CourseName": "Civics and Ethics",
        "CourseCode": "CESt 1023",
        "CreditHours": 3,
        "ECTS": 5
      },
      {
        "Number": 16,
        "ModuleName": "Basic English Skills",
        "ModuleCode": "EnLa-M1013",
        "CourseName": "Introduction to computer application",
        "CourseCode": "CoSc 1201",
        "CreditHours": 3,
        "ECTS": 5
      },
      {
        "Number": 20,
        "ModuleName": "Principle of Accounting",
        "ModuleCode": "Acct-M 2203",
        "CourseName": "Principle of Accounting I",
        "CourseCode": "Acct 2201",
        "CreditHours": 3,
        "ECTS": 5
      },
      {
        "Number": 20,
        "ModuleName": "Principle of Accounting",
        "ModuleCode": "Acct-M 2203",
        "CourseName": "Entrepreneurship and Enterprise Development",
        "CourseCode": "MGMT 3212",
        "CreditHours": 3,
        "ECTS": 4
      }
         ]
        
      },
      {
        "id": 31,
          "name": "Public Administration & Development Management",
         image:  welcome,
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
        "college": 6,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "M.No",
            "Module Name": "Module Name",
            "Course Code": "Module code",
            "Course Name": "Cr.Hrs",
            "Module ECTS": "ECTS"
        },
        {
            "Module Code": "01",
            "Module Name": "Foundations of Public Administration",
            "Course Code": "PADM-M1011",
            "Course Name": "6",
            "Module ECTS": "10"
        },
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT1012",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "02",
            "Module Name": "Civics and Ethics",
            "Course Code": "CESt-M1023",
            "Course Name": "3",
            "Module ECTS": "5"
        },
        {
            "Module Code": "03",
            "Module Name": "Introduction to Logic",
            "Course Code": "Phil-M1033",
            "Course Name": "3",
            "Module ECTS": "5"
        },
        {
            "Module Code": "04",
            "Module Name": "Basic English Skills",
            "Course Code": "EnLa-M1013",
            "Course Name": "6",
            "Module ECTS": "10"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "Enla1012",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "05",
            "Module Name": "Quantitative Skills for Public Administration",
            "Course Code": "PADM-M1042",
            "Course Name": "9",
            "Module ECTS": "15"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT1042",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "Mathematics for Management",
            "Module Name": "MGMT1043",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "06",
            "Module Name": "Development Management",
            "Course Code": "PADM-M1051",
            "Course Name": "13",
            "Module ECTS": "21"
        },
        {
            "Module Code": "Macroeconomics",
            "Module Name": "Econ1052",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "Theories & politics of development",
            "Module Name": "PADM1053",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "Development Administration",
            "Module Name": "PADM1054",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "07",
            "Module Name": "Communication Skills",
            "Course Code": "PADM-M2061",
            "Course Name": "6",
            "Module ECTS": "10"
        },
        {
            "Module Code": "Introduction to Computer Application",
            "Module Name": "COSC2062",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "08",
            "Module Name": "Public finance administration",
            "Course Code": "PADM-M2071",
            "Course Name": "12",
            "Module ECTS": "20"
        },
        {
            "Module Code": "Principles of Accounting II",
            "Module Name": "AcFn2072",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "Public Finance & Taxation",
            "Module Name": "PADM2073",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "Public Budgeting and FinancialAdministration",
            "Module Name": "PADM2074",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "09",
            "Module Name": "Government andGovernance",
            "Course Code": "PADM-M2081",
            "Course Name": "14",
            "Module ECTS": "23"
        },
        {
            "Module Code": "Local Government and Administration",
            "Module Name": "PADM2082",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "Urban Governance & Administration",
            "Module Name": "PADM2083",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "Public Service Delivery",
            "Module Name": "PADM2084",
            "Course Code": "2",
            "Course Name": "3",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "Administrative Law",
            "Module Name": "PADM2085",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "10",
            "Module Name": "Research methodology",
            "Course Code": "PADM-M2091",
            "Course Name": "3",
            "Module ECTS": "5"
        },
        {
            "Module Code": "11",
            "Module Name": "Human resource administration",
            "Course Code": "PADM-M3101",
            "Course Name": "6",
            "Module ECTS": "10"
        },
        {
            "Module Code": "Public personnel Administration",
            "Module Name": "PADM3102",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "12",
            "Module Name": "Organizational Theory and Leadership",
            "Course Code": "PADM-M3111",
            "Course Name": "6",
            "Module ECTS": "10"
        },
        {
            "Module Code": "Leadership and change management",
            "Module Name": "PADM3112",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "13",
            "Module Name": "Management of public enterprises and non-governmental organizations",
            "Course Code": "PADM-M3121",
            "Course Name": "10",
            "Module ECTS": "16"
        },
        {
            "Module Code": "Principles of Marketing",
            "Module Name": "MKMT3122",
            "Course Code": "2",
            "Course Name": "3",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "Management of Public Enterprises",
            "Module Name": "PADM3123",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "Management of NGO’s",
            "Module Name": "PADM3124",
            "Course Code": "2",
            "Course Name": "3",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "14",
            "Module Name": "Public policy, programs and projects",
            "Course Code": "PADM-M3131",
            "Course Name": "12",
            "Module ECTS": "19"
        },
        {
            "Module Code": "Strategic Management",
            "Module Name": "PADM3132",
            "Course Code": "3",
            "Course Name": "4",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "Project Planning and Management",
            "Module Name": "PADM3133",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "Entrepreneurship",
            "Module Name": "MGMT3134",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "15",
            "Module Name": "Seminar in Public Administration",
            "Course Code": "PADM-M3141",
            "Course Name": "4",
            "Module ECTS": "6"
        },
        {
            "Module Code": "Seminar 2",
            "Module Name": "PADM3142",
            "Course Code": "2",
            "Course Name": "3",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "Total",
            "Module Name": "113",
            "Course Code": "185",
            "Course Name": "",
            "Module ECTS": ""
        }
    ]
      },
      {
        "id": 32,
          "name": "Logistics and Supply Chain Management",
         image:  welcome,
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
        "college": 6,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "M.No",
            "Module Name": "Module Name",
            "Course Code": "Module code",
            "Course Name": "Cr.Hrs",
            "Module ECTS": "ECTS"
        },
        {
            "Module Code": "01",
            "Module Name": "Foundations of Public Administration",
            "Course Code": "PADM-M1011",
            "Course Name": "6",
            "Module ECTS": "10"
        },
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT1012",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "02",
            "Module Name": "Civics and Ethics",
            "Course Code": "CESt-M1023",
            "Course Name": "3",
            "Module ECTS": "5"
        },
        {
            "Module Code": "03",
            "Module Name": "Introduction to Logic",
            "Course Code": "Phil-M1033",
            "Course Name": "3",
            "Module ECTS": "5"
        },
        {
            "Module Code": "04",
            "Module Name": "Basic English Skills",
            "Course Code": "EnLa-M1013",
            "Course Name": "6",
            "Module ECTS": "10"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "Enla1012",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "05",
            "Module Name": "Quantitative Skills for Public Administration",
            "Course Code": "PADM-M1042",
            "Course Name": "9",
            "Module ECTS": "15"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT1042",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "Mathematics for Management",
            "Module Name": "MGMT1043",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "06",
            "Module Name": "Development Management",
            "Course Code": "PADM-M1051",
            "Course Name": "13",
            "Module ECTS": "21"
        },
        {
            "Module Code": "Macroeconomics",
            "Module Name": "Econ1052",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "Theories & politics of development",
            "Module Name": "PADM1053",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "Development Administration",
            "Module Name": "PADM1054",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "07",
            "Module Name": "Communication Skills",
            "Course Code": "PADM-M2061",
            "Course Name": "6",
            "Module ECTS": "10"
        },
        {
            "Module Code": "Introduction to Computer Application",
            "Module Name": "COSC2062",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "08",
            "Module Name": "Public finance administration",
            "Course Code": "PADM-M2071",
            "Course Name": "12",
            "Module ECTS": "20"
        },
        {
            "Module Code": "Principles of Accounting II",
            "Module Name": "AcFn2072",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "Public Finance & Taxation",
            "Module Name": "PADM2073",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "Public Budgeting and FinancialAdministration",
            "Module Name": "PADM2074",
            "Course Code": "3",
            "Course Name": "5",
            "Module ECTS": "Parallel"
        },
        {
            "Module Code": "09",
            "Module Name": "Government andGovernance",
            "Course Code": "PADM-M2081",
            "Course Name": "14",
            "Module ECTS": "23"
        },
        
    ]
      },
      {
        "id": 33,
          "name": "Marketing Management",
         image:  welcome,
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
        "college": 6,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "Module 01",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "Course Title",
            "Module Name": "Course Code",
            "Course Code": "Cr. Hrs.",
            "Course Name": "L",
            "Module ECTS": "L/P"
        },
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "6",
            "Course Code": "4",
            "Course Name": "2",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Course Title",
            "Module Name": "Course Code",
            "Course Code": "Cr. Hrs.",
            "Course Name": "L",
            "Module ECTS": "L/P"
        },
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "3",
            "Course Name": "0",
            "Module ECTS": "0"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "Module 03",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "Course Title",
            "Module Name": "Course Code",
            "Course Code": "Cr. Hrs.",
            "Course Name": "L",
            "Module ECTS": "L/P"
        },
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "3",
            "Course Name": "0",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Module 04",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "Course Title",
            "Module Name": "Course Code",
            "Course Code": "Cr. Hrs.",
            "Course Name": "L",
            "Module ECTS": "L/P"
        },
        
    ]
      },
      {
        "id": 34,
          "name": "Administrative Service Management",
         image:  welcome,
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
         image:  welcome,
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
        "college": 6,
         "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "Module 01",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "Course Title",
            "Module Name": "Course Code",
            "Course Code": "Cr. Hrs.",
            "Course Name": "L",
            "Module ECTS": "L/P"
        },
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "6",
            "Course Code": "4",
            "Course Name": "2",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Course Title",
            "Module Name": "Course Code",
            "Course Code": "Cr. Hrs.",
            "Course Name": "L",
            "Module ECTS": "L/P"
        },
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "3",
            "Course Name": "0",
            "Module ECTS": "0"
        },
        {
            "Module Code": "",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "Module 03",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "Course Title",
            "Module Name": "Course Code",
            "Course Code": "Cr. Hrs.",
            "Course Name": "L",
            "Module ECTS": "L/P"
        },
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "3",
            "Course Name": "0",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Module 04",
            "Module Name": "",
            "Course Code": "",
            "Course Name": "",
            "Module ECTS": ""
        },
        {
            "Module Code": "Course Title",
            "Module Name": "Course Code",
            "Course Code": "Cr. Hrs.",
            "Course Name": "L",
            "Module ECTS": "L/P"
        },
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Course Title",
            "Module Name": "Code",
            "Course Code": "Cr. Hrs.",
            "Course Name": "L",
            "Module ECTS": "L/P"
        },
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
    ]
      }
    ],
    "freshmanOffice": "Any Social"
  },
  {
    "id": 7,
      "name": "College of Law and Governance Studies",
    
    "description": "Shape justice! Law, human rights, & federal studies. Train lawyers, policymakers, & leaders for a just & equitable society.",
 image:  welcome,
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
        "college": 7,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
      }
    ],
    "freshmanOffice": "Any Social"
  },
  {
    "id": 8,
    "name": "College of Social Science",
    "description": "Understand humans & society! Explore History, Philosophy, Geography, Sociology, Politics & more. Shape a just & equitable future.",
   image:  welcome,
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
         image:  welcome,
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
        "college": 8,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
      },
      {
        "id": 38,
          "name": "Geography and Environmental",
         image:  welcome,
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
        "college": 8,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
      },
      {
        "id": 39,
          "name": "History",
         image:  welcome,
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
        "college": 8,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
      },
      {
        "id": 40,
          "name": "Philosophy",
         image:  welcome,
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
        "college": 8,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
      },
      {
        "id": 41,
          "name": "Political Science & International Relations",
         image:  welcome,
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
        "college": 8,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
      },
      {
        "id": 42,
          "name": "Social Anthropology",
         image:  welcome,
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
        "college": 8,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
      },
      {
        "id": 43,
          "name": "Social Work",
         image:  welcome,
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
        "college": 8,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
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
        "college": 8,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
      }
    ],
    "freshmanOffice": "Any Social"
  },
  {
    "id": 9,
    "name": "College of Education and Behavioral Studies",
    "description": "Train teachers, psychologists, education leaders & specialists. Develop high-caliber professionals for Ethiopia's future.",
     image:  welcome,
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
        "college": 9,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
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
        "college": 9,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
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
        "college": 9,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
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
        "college": 9,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
      }
    ],
    "freshmanOffice": "Any Social"
  },
  {
    "id": 10,
    "name": "College of Humanities, Language Studies, Journalism and Communications",
    "description": "Explore languages, history, & cultures! Amharic, English, History, Philosophy & more. Fosters critical thinking & global understanding.",
    image:  welcome,
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
        "college": 10,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
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
        "college": 10,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
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
        "college": 10,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
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
        "college": 10,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
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
        "college": 10,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
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
        "college": 10,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
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
        "college": 10,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
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
        "college": 10,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
      },
      {
        "id": 57,
          "name": "Ethiopian Sign Language and Deaf Culture",
         image:  welcome,
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
        "college": 10,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
      },
      {
        "id": 58,
          "name": "General Linguistics",
         image:  welcome,
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
        "college": 10,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
      },
      {
        "id": 59,
          "name": "Tigrigna Lang. Literature & Folklore",
         image:  welcome,
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
        "college": 10,
        "ModulesandCourses": [
        {
            "Module Code": "Communicative English Skills",
            "Module Name": "EnLa1011",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        {
            "Module Code": "Basic Writing Skills",
            "Module Name": "EnLa1012",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
        
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CEst1023",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
      
     
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil1033",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
       
        {
            "Module Code": "General Psychology",
            "Module Name": "PYCH1051",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "3",
            "Course Code": "2.75",
            "Course Name": "0.25",
            "Module ECTS": "0"
        },
      
        {
            "Module Code": "Introduction to Management",
            "Module Name": "MGMT 1061",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Administrative & Business Communication",
            "Module Name": "MGMT 1063",
            "Course Code": "3",
            "Course Name": "2",
            "Module ECTS": "1"
        },
      
        {
            "Module Code": "Statistics for Management I",
            "Module Name": "MGMT1071",
            "Course Code": "3",
            "Course Name": "3",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Statistics for Management II",
            "Module Name": "MGMT2072",
            "Course Code": "3",
            "Course Name": "2.75",
            "Module ECTS": "0.25"
        },
        
        
        {
            "Module Code": "Human Resource Management",
            "Module Name": "MGMT1081",
            "Course Code": "4",
            "Course Name": "3.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Organizational Behavior",
            "Module Name": "MGMT2082",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Leadership & Change Management",
            "Module Name": "MGMT2083",
            "Course Code": "2",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },
        {
            "Module Code": "Total ECTS in the Module",
            "Module Name": "9",
            "Course Code": "8.5",
            "Course Name": "1.5",
            "Module ECTS": "0"
        },
        {
            "Module Code": "Management Information System",
            "Module Name": "MGMT2091",
            "Course Code": "3",
            "Course Name": "2.5",
            "Module ECTS": "0.5"
        },]
      }
    ],
    "freshmanOffice": "Any Social"
  },
  {
    "id": 11,
    "name": "College of Performing and Visual Arts",

    "description": "Unleash your creativity! Music, Theatre, Fine Arts & Film. Hone your talent, express yourself & shape the future of Ethiopian arts",
    
     image:  welcome,
    
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
         image:  welcome,
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
        "college": 11,
        "ModulesandCourses": [
        {
            "Module Code": "FAPM-M2081",
            "Module Name": "Studio Drawing",
            "Course Code": "12",
            "Course Name": "",
            "Module ECTS": "10"
        }]
      },
      {
        "id": 61,
        "name": "Music",
         image:  welcome,
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
        "college": 11,
        "ModulesandCourses": [
        {
            "Module Code": "FAPM-M2081",
            "Module Name": "Studio Drawing",
            "Course Code": "12",
            "Course Name": "",
            "Module ECTS": "10"
        }]
      },
      {
        "id": 62,
          "name": "Industrial Design",
         image:  welcome,
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
        "college": 11,
        "ModulesandCourses": [
        {
            "Module Code": "FAPM-M2081",
            "Module Name": "Studio Drawing",
            "Course Code": "12",
            "Course Name": "",
            "Module ECTS": "10"
        }]
      }
    ],
   
    },
   {
    "id": 12,
    "name": "Ethiopian Institute of Architecture, Buildings and Construction",
    "description": "Design your future! Shape Ethiopia's built environment & urban spaces. Offers programs in Architecture, Construction & Urban Planning. Fosters innovation & sustainability.",
 image:  welcome,
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
       image:  welcome,
      "description": "Design your future! Shape Ethiopia's built environment & urban spaces. Offers programs"
      , "gpaEntry": "80.25",
      "gpaPercentage": 100,
      "Years": 5,
      "freshmanSemesters": 3,
      "icon_url": null,
      "regular": "Regular",
      "extension": "Extension",
       "Admission requirements": "Graduation requirement",
        "Graduation requirement": "CGPA and MGPA of at least 2.00,Total ECTS of 331 andNo ‘F’ grade in any course taken."
  , "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "Code",
            "Module Name": "Module Name",
            "Course Code": "Course Code",
            "Course Name": "Course Name",
            "Module ECTS": "module ECTS"
        },
        {
            "Module Code": "ARCH-M1014",
            "Module Name": "Applied Engineering Mathematics",
            "Course Code": "Math1041",
            "Course Name": "Applied Mathematics",
            "Module ECTS": "5"
        },
        {
            "Module Code": "EnLa-M1013",
            "Module Name": "Basic English Skills",
            "Course Code": "EnLa1011",
            "Course Name": "Communicative English Skill",
            "Module ECTS": "5"
        },
        {
            "Module Code": "CESt-M1023",
            "Module Name": "Civics and Ethics",
            "Course Code": "CESt1023",
            "Course Name": "Civics and Ethics",
            "Module ECTS": "5"
        },
        {
            "Module Code": "ARCH-M1024",
            "Module Name": "Introduction to Economics",
            "Course Code": "Arch1022",
            "Course Name": "Introduction to Economics",
            "Module ECTS": "3"
        },
        {
            "Module Code": "Phil-M1033",
            "Module Name": "Introduction to Logic",
            "Course Code": "Phil1033",
            "Course Name": "Introduction to Logic",
            "Module ECTS": "5"
        },
        {
            "Module Code": "ARCH-M2031",
            "Module Name": "Urban Sociology",
            "Course Code": "ARCH2031",
            "Course Name": "Urban Sociology I",
            "Module ECTS": "2"
        },
        {
            "Module Code": "ARCH-M1041",
            "Module Name": "Graphic Communications",
            "Course Code": "ARCH1041",
            "Course Name": "Communication Skills I (Sketching I, Drafting & Descriptive Geometry I)",
            "Module ECTS": "5"
        },
        {
            "Module Code": "ARCH-M2051",
            "Module Name": "Visual and History of Arts",
            "Course Code": "ARCH2051",
            "Course Name": "Communication Skills III (Visual & History of Arts I)",
            "Module ECTS": "4"
        },
        {
            "Module Code": "ARCH-M3061",
            "Module Name": "Computer Aided Design",
            "Course Code": "ARCH3061",
            "Course Name": "Professional CAD I",
            "Module ECTS": "4"
        },
        {
            "Module Code": "ARCH-M1071",
            "Module Name": "Basic Architectural Design",
            "Course Code": "ARCH1071",
            "Course Name": "Basic Architectural Design I",
            "Module ECTS": "5"
        },
        {
            "Module Code": "ARCH-M3091",
            "Module Name": "Project I",
            "Course Code": "ARCH3092",
            "Course Name": "Integrated Design Project I",
            "Module ECTS": "12"
        },
        {
            "Module Code": "ARCH-M4101",
            "Module Name": "Project II",
            "Course Code": "ARCH4102",
            "Course Name": "Integrated Design Project II",
            "Module ECTS": "9"
        },
        {
            "Module Code": "ARCH-M3121",
            "Module Name": "Professional Practice",
            "Course Code": "ARCH3121",
            "Course Name": "Professional Practice I",
            "Module ECTS": "3"
        },
        {
            "Module Code": "ARCH-M5132",
            "Module Name": "Interior Design",
            "Course Code": "ARCH5132",
            "Course Name": "Interior Design",
            "Module ECTS": "5"
        },
        {
            "Module Code": "ARCH-M2143",
            "Module Name": "Advanced Model Making Techniques",
            "Course Code": "ARCH2141",
            "Course Name": "Advanced Model Making Techniques",
            "Module ECTS": "2"
        },
        {
            "Module Code": "ARCH-M1153",
            "Module Name": "Workshops",
            "Course Code": "ARCH1151",
            "Course Name": "Building workshop I",
            "Module ECTS": "1"
        },
        {
            "Module Code": "ARCH-M1161",
            "Module Name": "Building Materials",
            "Course Code": "ARCH1161",
            "Course Name": "Building Materials and Construction I",
            "Module ECTS": "5"
        },
        {
            "Module Code": "ARCH-M1181",
            "Module Name": "Theory and Design of Structures I",
            "Course Code": "ARCH1181",
            "Course Name": "Theory and Design of Structures I",
            "Module ECTS": "4"
        },
        {
            "Module Code": "ARCH-M2191",
            "Module Name": "Theory and Design of Structures II",
            "Course Code": "ARCH2191",
            "Course Name": "Theory and Design of Structures III",
            "Module ECTS": "4"
        },
        {
            "Module Code": "ARCH-M2201",
            "Module Name": "Special Structures",
            "Course Code": "ARCH2202",
            "Course Name": "Theory and Design of Structures IV",
            "Module ECTS": "5"
        },
        {
            "Module Code": "ARCH-M5212",
            "Module Name": "Advanced Building Structures",
            "Course Code": "ARCH5212",
            "Course Name": "Advanced Building Structures",
            "Module ECTS": "5"
        },
        {
            "Module Code": "ARCH-M3221",
            "Module Name": "Heat, Cooling and Ventilation",
            "Course Code": "ARCH3221",
            "Course Name": "Architectural Science I",
            "Module ECTS": "4"
        },
        {
            "Module Code": "ARCH-M3231",
            "Module Name": "Water and Sewage",
            "Course Code": "ARCH3232",
            "Course Name": "Architectural Science II",
            "Module ECTS": "4"
        },
        {
            "Module Code": "ARCH-M5251",
            "Module Name": "Acoustics",
            "Course Code": "ARCH5251",
            "Course Name": "Architectural Science IV",
            "Module ECTS": "4"
        },
        {
            "Module Code": "ARCH-M4661",
            "Module Name": "Appropriate Building Technology",
            "Course Code": "ARCH4262",
            "Course Name": "Appropriate Building Technology",
            "Module ECTS": "4"
        },
        {
            "Module Code": "ARCH-M1271",
            "Module Name": "History of Architecture",
            "Course Code": "ARCH1272",
            "Course Name": "History of Architecture I",
            "Module ECTS": "3"
        },
        {
            "Module Code": "ARCH-M3281",
            "Module Name": "Ethiopian History of Architecture",
            "Course Code": "ARCH3281",
            "Course Name": "Ethiopian History of Architecture",
            "Module ECTS": "3"
        },
        {
            "Module Code": "ARCH-M3291",
            "Module Name": "Theory of Architecture",
            "Course Code": "ARCH3291",
            "Course Name": "Theory of Architecture I",
            "Module ECTS": "3"
        },
        {
            "Module Code": "ARCH-M4302",
            "Module Name": "Architectural Heritage",
            "Course Code": "ARCH4302",
            "Course Name": "General Building Heritage",
            "Module ECTS": "3"
        },
        {
            "Module Code": "ARCH-M5312",
            "Module Name": "Restoration and Preservation",
            "Course Code": "ARCH5311",
            "Course Name": "Restoration and Preservation",
            "Module ECTS": "5"
        },
        {
            "Module Code": "ARCH-M4321",
            "Module Name": "Housing and Urban Design",
            "Course Code": "ARCH4322",
            "Course Name": "Basic Urban Design",
            "Module ECTS": "5"
        },
        {
            "Module Code": "ARCH-M3331",
            "Module Name": "Urban planning",
            "Course Code": "ARCH3331",
            "Course Name": "Introduction to Urban planning",
            "Module ECTS": "6"
        },
        {
            "Module Code": "ARCH-M4353",
            "Module Name": "Ecosystem Planning and Management",
            "Course Code": "ARCH4352",
            "Course Name": "General Ecology",
            "Module ECTS": "5"
        },
        {
            "Module Code": "ARCH-M5362",
            "Module Name": "Construction Management",
            "Course Code": "ARCH5362",
            "Course Name": "Construction Management",
            "Module ECTS": "5"
        },
        {
            "Module Code": "ARCH-M4381",
            "Module Name": "Internship",
            "Course Code": "ARCH4381",
            "Course Name": "Internship",
            "Module ECTS": "30"
        },
        {
            "Module Code": "ARCH-M4391",
            "Module Name": "Thesis",
            "Course Code": "ARCH5392",
            "Course Name": "Bachelor Thesis Project",
            "Module ECTS": "15"
        }
    ]
    }, {
      "id": 64,
        "name": "Construction Technology & Management",
       image:  welcome,
      "description": "Design your future! Shape Ethiopia's built environment & urban spaces. Offers programs"
       ,"gpaPercentage": 100,
      "Years": 4,
      "freshmanSemesters": 3,
      "icon_url": null,
      "regular": "Regular",
      "extension": "Extension",
      "Program Objective": "Admission requirements– admissions to all regular undergraduate programs are processed through the Ministry of Education (MoE) of the Federal Democratic Republic of Ethiopia. This is currently true for all public Higher Education Institutes across the whole nation. Admissions to the continuing education program are processed through the registrar office based on the criteria set by respective University.",
      "Admission requirements": "Admission to RegularProgram – students who have successfully completed the 10 plus 2 preparatory education and have secured a minimum cut-off point with high scores in Physics and Mathematics are eligible to join the regular undergraduate BSc degree program of Construction Technology and Management. Depending on available spaces, diploma graduates from TVET (Technical Vocational Education and Training) in the fields of construction technology will be admitted based on grades on competitive basis. Applicants with a minimum cut-off point and with high scores in Physics and Mathematics in foreign countries examinations equivalent to the 10+2 preparatory program are also eligible. The equivalence is determined by the department.",
      "Graduation requirement": "List of ModulesandCourses",
      "ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "Module Name",
            "Module Name": "Module Code",
            "Course Code": "Course Name",
            "Course Name": "Course Code",
            "Module ECTS": "ModuleECTS"
        },
        {
            "Module Code": "Basic English Skills",
            "Module Name": "EnLa-M1013",
            "Course Code": "Communication skills",
            "Course Name": "Enla1011",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CESt-M1023",
            "Course Code": "Civics & Ethics",
            "Course Name": "CESt1023",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Introduction to Logic",
            "Module Name": "Phil-M1033",
            "Course Code": "Introduction to Logic",
            "Course Name": "Phil1033",
            "Module ECTS": "3"
        },
        {
            "Module Code": "Engineering Mechanics",
            "Module Name": "CoTM-M1034",
            "Course Code": "Engineering mechanics I",
            "Course Name": "CoTM1031",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Applied Engineering Mathematics",
            "Module Name": "CoTM-M1044",
            "Course Code": "Applied mathematics I",
            "Course Name": "Math1041",
            "Module ECTS": "6"
        },
        {
            "Module Code": "Basic Engineering Skill",
            "Module Name": "CoTM-M1054",
            "Course Code": "Introduction to Engineering Profession",
            "Course Name": "CoTM1051",
            "Module ECTS": "3"
        },
        {
            "Module Code": "Construction Materials",
            "Module Name": "CoTM-M1061",
            "Course Code": "Construction Materials I",
            "Course Name": "CoTM1061",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Building Construction",
            "Module Name": "CoTM-M2071",
            "Course Code": "Building construction I",
            "Course Name": "CoTM2071",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Drafting and Construction Working Drawing",
            "Module Name": "CoTM-M1081",
            "Course Code": "Construction drafting",
            "Course Name": "CoTM1081",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Architectural planning and design",
            "Module Name": "CoTM-M3093",
            "Course Code": "Architectural planning and design",
            "Course Name": "CoTM3093",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Structural Engineering – I",
            "Module Name": "CoTM-M1101",
            "Course Code": "Strength of materials",
            "Course Name": "CoTM1101",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Structural Engineering – II",
            "Module Name": "CoTM-M2111",
            "Course Code": "Design of Reinforced Concrete Structures",
            "Course Name": "CoTM2111",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Business & Economics",
            "Module Name": "CoTM-M2123",
            "Course Code": "Introduction to Management",
            "Course Name": "COTM2121",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Water Engineering – I",
            "Module Name": "CoTM-M2131",
            "Course Code": "Hydraulics",
            "Course Name": "CoTM2131",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Water   Engineering – II",
            "Module Name": "CoTM-M3141",
            "Course Code": "Sewage Disposal and Treatment",
            "Course Name": "CoTM3141",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Principles of construction management",
            "Module Name": "CoTM-M2151",
            "Course Code": "Principles of construction management",
            "Course Name": "CoTM2151",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Resource Management In Construction",
            "Module Name": "CoTM-M3161",
            "Course Code": "Human resource Management in Construction",
            "Course Name": "CoTM3161",
            "Module ECTS": "4"
        },
        {
            "Module Code": "Soil Mechanics & Foundation Engineering",
            "Module Name": "CoTM-M2171",
            "Course Code": "Soil Mechanics",
            "Course Name": "CoTM2171",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Surveying",
            "Module Name": "CoTM-M3181",
            "Course Code": "Surveying",
            "Course Name": "CoTM3181",
            "Module ECTS": "6"
        },
        {
            "Module Code": "Transport Design & Construction",
            "Module Name": "CoTM-M3191",
            "Course Code": "Highway Engineering I",
            "Course Name": "CoTM3191",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Construction Estimating & Costing",
            "Module Name": "CoTM-M3201",
            "Course Code": "Construction Specification and Quantity Surveying",
            "Course Name": "CoTM3201",
            "Module ECTS": "6"
        },
        {
            "Module Code": "Construction Planning",
            "Module Name": "CoTM-M3211",
            "Course Code": "Construction Planning and Scheduling",
            "Course Name": "CoTM3211",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Construction Site Management",
            "Module Name": "CoTM-M3221",
            "Course Code": "Construction site supervision",
            "Course Name": "CoTM3221",
            "Module ECTS": "4"
        },
        {
            "Module Code": "Procurement and Construction law",
            "Module Name": "CoTM-M4231",
            "Course Code": "Construction law",
            "Course Name": "CoTM4232",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Research Methodology",
            "Module Name": "CoTM-M4243",
            "Course Code": "Technical Report Writing & Research Method",
            "Course Name": "CoTM5241",
            "Module ECTS": "3"
        },
        {
            "Module Code": "Internship",
            "Module Name": "CoTM-M4251",
            "Course Code": "Internship",
            "Course Name": "CoTM4251",
            "Module ECTS": "30"
        },
        {
            "Module Code": "Development   & Entrepreneurship",
            "Module Name": "CoTM-M5261",
            "Course Code": "Development and Construction Economics",
            "Course Name": "CoTM5261",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Appropriate Construction Technology",
            "Module Name": "CoTM-M5271",
            "Course Code": "Cost efficient Construction",
            "Course Name": "CoTM5271",
            "Module ECTS": "4"
        },
        {
            "Module Code": "Elective",
            "Module Name": "CoTM-M5282",
            "Course Code": "Concrete Technology",
            "Course Name": "CoTM5282",
            "Module ECTS": "4"
        },
        {
            "Module Code": "Project",
            "Module Name": "CoTM-M5291",
            "Course Code": "Holistic Project",
            "Course Name": "CoTM5291",
            "Module ECTS": "6"
        }
    ]
    }
      , {
        "id": 65,
          "name": "Urban & Regional Planning",
         image:  welcome,
        "description": "Design your future! Shape Ethiopia's built environment & urban spaces. Offers programs"
        ,
      "Years": 4,
      "freshmanSemesters": 3,
      "icon_url": null,
      "regular": "Regular",
        "extension": "Extension",
       "ProgramObjective": "Admission requirements– the department shall admit between 50 and 100 students depending on current capacity. The candidates should successfully complete the preparatory program (10+2) and pass an entrance examination given by the department.",
        "Admissionrequirements": "Graduation requirement",
        "Graduationrequirement": "Take modules/courses equivalent to 300ECTSCGPA and MGPA of at least 2.00, andNo ‘F’ grade in any course/module taken."
        ,"ModulesandCourses": [
        {
            "Module Code": "Overview",
            "Module Name": "OverviewTikur Anbessaveterinary",
            "Course Code": "BackgroundICT ContactsOverviewOverviewServicesPublished BooksAAUP House StyleContacts",
            "Course Name": "Overview",
            "Module ECTS": "OverviewServicesPublished BooksAAUP House StyleContacts"
        },
        {
            "Module Code": "Module Name",
            "Module Name": "Module Code",
            "Course Code": "Course Name",
            "Course Name": "Course Code",
            "Module ECTS": "Module ECTS"
        },
        {
            "Module Code": "Applied Engineering Mathematics",
            "Module Name": "URPL-M1014",
            "Course Code": "Applied Mathematics",
            "Course Name": "Math1041",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Basic English Skills",
            "Module Name": "EnLa-M1013",
            "Course Code": "Communicative English skills",
            "Course Name": "EnLa 1011",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Civics & Ethics",
            "Module Name": "CESt-M1023",
            "Course Code": "Civics & Ethics",
            "Course Name": "CESt 1023",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Sketching, drafting and descriptive geometry",
            "Module Name": "URPL-M1023",
            "Course Code": "Sketching, Drafting and Descriptive Geometry I",
            "Course Name": "URPL1021",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Computer Aided Design",
            "Module Name": "URPL-M1033",
            "Course Code": "AutoCAD I",
            "Course Name": "URPL1031",
            "Module ECTS": "4"
        },
        {
            "Module Code": "Geo Information System",
            "Module Name": "URPL-M2043",
            "Course Code": "GIS I",
            "Course Name": "URPL2041",
            "Module ECTS": "3"
        },
        {
            "Module Code": "Surveying & photogrammetry",
            "Module Name": "URPL-M2053",
            "Course Code": "Advanced Model Making",
            "Course Name": "URPL2051",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Basic Architectural Design",
            "Module Name": "URPL-M1061",
            "Course Code": "Basic Architectural Design I",
            "Course Name": "URPL1061",
            "Module ECTS": "6"
        },
        {
            "Module Code": "Resource Management",
            "Module Name": "URPL-M1071",
            "Course Code": "Energy & Water Resource Management",
            "Course Name": "URPL1071",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Introduction to the City",
            "Module Name": "URPL-M1081",
            "Course Code": "Introduction to the City & Urban Planning",
            "Course Name": "URPL1081",
            "Module ECTS": "5"
        },
        {
            "Module Code": "Theories & Techniques in Urban Planning",
            "Module Name": "URPL-M1091",
            "Course Code": "Theory of the approaches of Urban planning",
            "Course Name": "URPL1091",
            "Module ECTS": "4"
        },
        {
            "Module Code": "Urban & Regional Planning Strategies",
            "Module Name": "URPL-M3101",
            "Course Code": "Appropriate Planning strategies for Developing Territories",
            "Course Name": "URPL3101",
            "Module ECTS": "4"
        },
        {
            "Module Code": "Elements of Urban Planning",
            "Module Name": "URPL-M3111",
            "Course Code": "Urban& Regional Planning & Mobility",
            "Course Name": "URPL3111",
            "Module ECTS": "3"
        },
        {
            "Module Code": "Laws Affecting Urban & Regional Planning",
            "Module Name": "URPL-M3121",
            "Course Code": "Legal Base of Urban & Regional Planning",
            "Course Name": "URPL3121",
            "Module ECTS": "4"
        },
        {
            "Module Code": "Urban Housing",
            "Module Name": "URPL-M4131",
            "Course Code": "Urban Housing",
            "Course Name": "URPL4131",
            "Module ECTS": "5"
        },
        {
            "Module Code": "History of the Morphology of Cities",
            "Module Name": "URPL-M1141",
            "Course Code": "History of Morphology of Cities I",
            "Course Name": "URPL1141",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Morphology & Transformation of City forms",
            "Module Name": "URPL-M2151",
            "Course Code": "Morphology & Transformation of City forms",
            "Course Name": "URPL2151",
            "Module ECTS": "3"
        },
        {
            "Module Code": "Urban Economics",
            "Module Name": "URPL-M2161",
            "Course Code": "Introduction to Economics",
            "Course Name": "URPL2161",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Urban Sociology",
            "Module Name": "URPL-M3171",
            "Course Code": "Introduction to Urban Sociology",
            "Course Name": "URPL2171",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Urban Environmental Management I",
            "Module Name": "URPL-M2181",
            "Course Code": "Management of the Urban Environment",
            "Course Name": "URPL2181",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Project I",
            "Module Name": "URPL-M1191",
            "Course Code": "Integrated urban Project I( basic urban design)",
            "Course Name": "URPL1191",
            "Module ECTS": "4"
        },
        {
            "Module Code": "Project II",
            "Module Name": "URPL-M2201",
            "Course Code": "Integrated urban Project II (urban design)",
            "Course Name": "URPL2201",
            "Module ECTS": "12"
        },
        {
            "Module Code": "Project III",
            "Module Name": "URPL-M3211",
            "Course Code": "Integrated urban Project IV (extension of an existing city planning)",
            "Course Name": "URPL3211",
            "Module ECTS": "12"
        },
        {
            "Module Code": "Project V",
            "Module Name": "URPL-M4221",
            "Course Code": "Integrated urban Project VI (housing and inner city redevelopment)",
            "Course Name": "URPL4221",
            "Module ECTS": "12"
        },
        {
            "Module Code": "Internship",
            "Module Name": "URPL-M4231",
            "Course Code": "UIL",
            "Course Name": "URPL4231",
            "Module ECTS": "30"
        },
        {
            "Module Code": "Landscape Design",
            "Module Name": "URPL-M3241",
            "Course Code": "Introduction to Landscape Design",
            "Course Name": "URPL3241",
            "Module ECTS": "3"
        },
        {
            "Module Code": "Urban Environnemental Management II",
            "Module Name": "URPL-M4251",
            "Course Code": "Urban Ecology",
            "Course Name": "URPL4251",
            "Module ECTS": "4"
        },
        {
            "Module Code": "Urban Governance and Management",
            "Module Name": "URPL-M5261",
            "Course Code": "Urban Governance and Management I",
            "Course Name": "URPL5261",
            "Module ECTS": "3"
        },
        {
            "Module Code": "Research methods in social science",
            "Module Name": "URPL-M5283",
            "Course Code": "Methods of project formulation and research with case studies",
            "Course Name": "URPL5281",
            "Module ECTS": "2"
        },
        {
            "Module Code": "Thesis",
            "Module Name": "URPL-M5291",
            "Course Code": "Thesis",
            "Course Name": "URPL5291",
            "Module ECTS": "15"
        }]
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
