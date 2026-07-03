const jobs = [

{
    id:1,
    title:"Frontend Developer",
    company:"Google",
    location:"Hyderabad",
    salary:"12",
    type:"Full Time",
    experience:"0-2 Years",
    skills:["HTML","CSS","JavaScript","React"],
    featured:true,
    rating:4.8,
    applicants:120,
    status:"Actively Hiring",
    industry:"Technology",
    employees:"180000+",
    website:"https://careers.google.com",
    description:"Build responsive web applications for millions of users.",
    responsibilities:[
        "Develop UI components",
        "Integrate REST APIs",
        "Fix UI bugs",
        "Optimize performance"
    ],
    requirements:[
        "HTML",
        "CSS",
        "JavaScript",
        "React"
    ],
    easyApply:true
},

{
    id:2,
    title:"Backend Developer",
    company:"Microsoft",
    location:"Bengaluru",
    salary:"15",
    type:"Full Time",
    experience:"1-3 Years",
    skills:["Node.js","Express","MongoDB","REST API"],
    featured:true,
    rating:4.7,
    applicants:98,
    status:"Actively Hiring",
    industry:"Technology",
    employees:"220000+",
    website:"https://careers.microsoft.com",
    description:"Build scalable backend services and APIs.",
    responsibilities:[
        "Develop APIs",
        "Database design",
        "Authentication",
        "Performance optimization"
    ],
    requirements:[
        "Node.js",
        "MongoDB",
        "Express",
        "Git"
    ],
    easyApply:true
},

{
    id:3,
    title:"Full Stack Developer",
    company:"Amazon",
    location:"Hyderabad",
    salary:"18",
    type:"Full Time",
    experience:"2-4 Years",
    skills:["HTML","CSS","JavaScript","Node.js"],
    featured:true,
    rating:4.6,
    applicants:145,
    status:"Actively Hiring",
    industry:"E-Commerce",
    employees:"1500000+",
    website:"https://www.amazon.jobs",
    description:"Develop end-to-end scalable web applications.",
    responsibilities:[
        "Frontend development",
        "Backend APIs",
        "Testing",
        "Deployment"
    ],
    requirements:[
        "JavaScript",
        "Node.js",
        "SQL",
        "Git"
    ],
    easyApply:true
},

{
    id:4,
    title:"React Developer",
    company:"Adobe",
    location:"Noida",
    salary:"16",
    type:"Full Time",
    experience:"1-3 Years",
    skills:["React","JavaScript","Redux","CSS"],
    featured:false,
    rating:4.7,
    applicants:76,
    status:"Hiring",
    industry:"Software",
    employees:"29000+",
    website:"https://careers.adobe.com",
    description:"Build modern React applications.",
    responsibilities:[
        "Create components",
        "State management",
        "Responsive design",
        "Testing"
    ],
    requirements:[
        "React",
        "Redux",
        "CSS",
        "JavaScript"
    ],
    easyApply:true
},

{
    id:5,
    title:"Python Developer",
    company:"Infosys",
    location:"Pune",
    salary:"8",
    type:"Full Time",
    experience:"0-2 Years",
    skills:["Python","Django","MySQL","REST API"],
    featured:false,
    rating:4.4,
    applicants:110,
    status:"Hiring",
    industry:"IT Services",
    employees:"340000+",
    website:"https://www.infosys.com/careers",
    description:"Develop enterprise Python applications.",
    responsibilities:[
        "Backend development",
        "API development",
        "Database integration",
        "Bug fixing"
    ],
    requirements:[
        "Python",
        "Django",
        "MySQL",
        "Git"
    ],
    easyApply:true
},

{
    id:6,
    title:"Java Developer",
    company:"TCS",
    location:"Chennai",
    salary:"7",
    type:"Full Time",
    experience:"0-2 Years",
    skills:["Java","Spring Boot","SQL","Git"],
    featured:false,
    rating:4.3,
    applicants:160,
    status:"Hiring",
    industry:"IT Services",
    employees:"600000+",
    website:"https://www.tcs.com/careers",
    description:"Develop enterprise Java applications.",
    responsibilities:[
        "Spring Boot development",
        "API creation",
        "Database queries",
        "Code reviews"
    ],
    requirements:[
        "Java",
        "Spring Boot",
        "SQL",
        "Git"
    ],
    easyApply:true
},

{
    id:7,
    title:"Software Engineer",
    company:"IBM",
    location:"Bengaluru",
    salary:"14",
    type:"Full Time",
    experience:"1-3 Years",
    skills:["Java","Python","Cloud","Git"],
    featured:true,
    rating:4.6,
    applicants:134,
    status:"Actively Hiring",
    industry:"Technology",
    employees:"300000+",
    website:"https://www.ibm.com/careers",
    description:"Develop cloud-native enterprise applications.",
    responsibilities:[
        "Software development",
        "Cloud deployment",
        "Testing",
        "Documentation"
    ],
    requirements:[
        "Java",
        "Python",
        "Cloud",
        "Git"
    ],
    easyApply:true
},

{
    id:8,
    title:"UI/UX Designer",
    company:"Zoho",
    location:"Chennai",
    salary:"10",
    type:"Full Time",
    experience:"1-2 Years",
    skills:["Figma","Adobe XD","UI","UX"],
    featured:false,
    rating:4.5,
    applicants:67,
    status:"Hiring",
    industry:"Software",
    employees:"15000+",
    website:"https://www.zoho.com/careers",
    description:"Design intuitive user experiences.",
    responsibilities:[
        "Wireframes",
        "Mockups",
        "Prototypes",
        "User research"
    ],
    requirements:[
        "Figma",
        "UI Design",
        "UX Design",
        "Creativity"
    ],
    easyApply:true
},

{
    id:9,
    title:"DevOps Engineer",
    company:"Oracle",
    location:"Hyderabad",
    salary:"17",
    type:"Full Time",
    experience:"2-5 Years",
    skills:["Docker","Kubernetes","AWS","CI/CD"],
    featured:true,
    rating:4.7,
    applicants:88,
    status:"Actively Hiring",
    industry:"Cloud",
    employees:"160000+",
    website:"https://www.oracle.com/careers",
    description:"Manage cloud infrastructure and CI/CD pipelines.",
    responsibilities:[
        "Deploy applications",
        "Infrastructure automation",
        "Monitoring",
        "Security"
    ],
    requirements:[
        "Docker",
        "AWS",
        "Kubernetes",
        "Linux"
    ],
    easyApply:true
},

{
    id:10,
    title:"Data Analyst",
    company:"Accenture",
    location:"Mumbai",
    salary:"11",
    type:"Full Time",
    experience:"0-2 Years",
    skills:["SQL","Excel","Power BI","Python"],
    featured:false,
    rating:4.4,
    applicants:103,
    status:"Hiring",
    industry:"Consulting",
    employees:"790000+",
    website:"https://www.accenture.com/careers",
    description:"Analyze business data and create dashboards.",
    responsibilities:[
        "Data analysis",
        "Dashboard creation",
        "SQL queries",
        "Reporting"
    ],
    requirements:[
        "SQL",
        "Power BI",
        "Excel",
        "Python"
    ],
    easyApply:true
}
,
{
    id:11,
    title:"Cloud Engineer",
    company:"Capgemini",
    location:"Hyderabad",
    salary:"13",
    type:"Full Time",
    experience:"1-3 Years",
    skills:["AWS","Linux","Docker","Terraform"],
    featured:true,
    rating:4.5,
    applicants:91,
    status:"Actively Hiring",
    industry:"IT Services",
    employees:"340000+",
    website:"https://www.capgemini.com/careers",
    description:"Build and maintain cloud infrastructure.",
    responsibilities:[
        "Cloud deployment",
        "Infrastructure automation",
        "Monitoring",
        "Security"
    ],
    requirements:[
        "AWS",
        "Linux",
        "Docker",
        "Terraform"
    ],
    easyApply:true
},

{
    id:12,
    title:"Cyber Security Analyst",
    company:"Deloitte",
    location:"Hyderabad",
    salary:"14",
    type:"Full Time",
    experience:"1-3 Years",
    skills:["Network Security","SIEM","Linux","Python"],
    featured:false,
    rating:4.6,
    applicants:83,
    status:"Hiring",
    industry:"Consulting",
    employees:"450000+",
    website:"https://www2.deloitte.com",
    description:"Protect enterprise systems from cyber threats.",
    responsibilities:[
        "Security monitoring",
        "Threat analysis",
        "Incident response",
        "Risk assessment"
    ],
    requirements:[
        "Networking",
        "Linux",
        "Python",
        "Security Fundamentals"
    ],
    easyApply:true
},

{
    id:13,
    title:"Android Developer",
    company:"Samsung",
    location:"Bengaluru",
    salary:"15",
    type:"Full Time",
    experience:"1-3 Years",
    skills:["Kotlin","Android","Firebase","REST API"],
    featured:false,
    rating:4.5,
    applicants:74,
    status:"Hiring",
    industry:"Electronics",
    employees:"267000+",
    website:"https://www.samsung.com",
    description:"Develop Android applications.",
    responsibilities:[
        "App development",
        "API integration",
        "Testing",
        "Performance optimization"
    ],
    requirements:[
        "Kotlin",
        "Android Studio",
        "Firebase",
        "Git"
    ],
    easyApply:true
},

{
    id:14,
    title:"iOS Developer",
    company:"Apple",
    location:"Hyderabad",
    salary:"22",
    type:"Full Time",
    experience:"2-5 Years",
    skills:["Swift","UIKit","Xcode","REST API"],
    featured:true,
    rating:4.9,
    applicants:115,
    status:"Actively Hiring",
    industry:"Technology",
    employees:"164000+",
    website:"https://www.apple.com/careers",
    description:"Develop world-class iOS applications.",
    responsibilities:[
        "Build iOS apps",
        "Testing",
        "Bug fixing",
        "Performance optimization"
    ],
    requirements:[
        "Swift",
        "UIKit",
        "Xcode",
        "Git"
    ],
    easyApply:true
},

{
    id:15,
    title:"AI Engineer",
    company:"OpenAI",
    location:"Remote",
    salary:"30",
    type:"Full Time",
    experience:"2-5 Years",
    skills:["Python","Machine Learning","PyTorch","LLMs"],
    featured:true,
    rating:5.0,
    applicants:210,
    status:"Actively Hiring",
    industry:"Artificial Intelligence",
    employees:"2000+",
    website:"https://openai.com/careers",
    description:"Develop next-generation AI systems.",
    responsibilities:[
        "Train models",
        "Optimize inference",
        "Research",
        "Deploy AI systems"
    ],
    requirements:[
        "Python",
        "PyTorch",
        "Machine Learning",
        "Deep Learning"
    ],
    easyApply:true
},

{
    id:16,
    title:"Machine Learning Engineer",
    company:"NVIDIA",
    location:"Pune",
    salary:"26",
    type:"Full Time",
    experience:"2-4 Years",
    skills:["Python","TensorFlow","CUDA","Deep Learning"],
    featured:true,
    rating:4.9,
    applicants:166,
    status:"Actively Hiring",
    industry:"Semiconductors",
    employees:"30000+",
    website:"https://www.nvidia.com",
    description:"Build GPU accelerated AI solutions.",
    responsibilities:[
        "Model development",
        "GPU optimization",
        "Research",
        "Deployment"
    ],
    requirements:[
        "Python",
        "TensorFlow",
        "CUDA",
        "Linux"
    ],
    easyApply:true
},

{
    id:17,
    title:"Software Tester",
    company:"Cognizant",
    location:"Chennai",
    salary:"8",
    type:"Full Time",
    experience:"0-2 Years",
    skills:["Manual Testing","Selenium","Java","SQL"],
    featured:false,
    rating:4.3,
    applicants:118,
    status:"Hiring",
    industry:"IT Services",
    employees:"350000+",
    website:"https://careers.cognizant.com",
    description:"Test enterprise software applications.",
    responsibilities:[
        "Execute test cases",
        "Automation",
        "Bug reporting",
        "Regression testing"
    ],
    requirements:[
        "Testing",
        "Java",
        "SQL",
        "Selenium"
    ],
    easyApply:true
},

{
    id:18,
    title:"Data Engineer",
    company:"Intel",
    location:"Bengaluru",
    salary:"20",
    type:"Full Time",
    experience:"2-4 Years",
    skills:["Python","SQL","Spark","Azure"],
    featured:true,
    rating:4.8,
    applicants:96,
    status:"Actively Hiring",
    industry:"Semiconductors",
    employees:"124000+",
    website:"https://jobs.intel.com",
    description:"Build scalable data pipelines.",
    responsibilities:[
        "ETL",
        "Data pipelines",
        "Optimization",
        "Analytics"
    ],
    requirements:[
        "Python",
        "SQL",
        "Spark",
        "Azure"
    ],
    easyApply:true
},

{
    id:19,
    title:"Network Engineer",
    company:"Cisco",
    location:"Bengaluru",
    salary:"16",
    type:"Full Time",
    experience:"1-3 Years",
    skills:["Networking","Cisco","Linux","Firewalls"],
    featured:false,
    rating:4.6,
    applicants:77,
    status:"Hiring",
    industry:"Networking",
    employees:"84000+",
    website:"https://jobs.cisco.com",
    description:"Manage enterprise network infrastructure.",
    responsibilities:[
        "Configure routers",
        "Troubleshooting",
        "Network security",
        "Documentation"
    ],
    requirements:[
        "CCNA",
        "Networking",
        "Linux",
        "Firewalls"
    ],
    easyApply:true
},

{
    id:20,
    title:"Salesforce Developer",
    company:"Salesforce",
    location:"Hyderabad",
    salary:"18",
    type:"Full Time",
    experience:"2-4 Years",
    skills:["Apex","LWC","SOQL","Salesforce"],
    featured:true,
    rating:4.8,
    applicants:89,
    status:"Actively Hiring",
    industry:"CRM",
    employees:"79000+",
    website:"https://careers.salesforce.com",
    description:"Develop Salesforce CRM solutions.",
    responsibilities:[
        "Apex development",
        "LWC",
        "Integrations",
        "Testing"
    ],
    requirements:[
        "Salesforce",
        "Apex",
        "SOQL",
        "LWC"
    ],
    easyApply:true
}
,
{
    id:21,
    title:"Frontend Engineer",
    company:"Flipkart",
    location:"Bengaluru",
    salary:"14",
    type:"Full Time",
    experience:"1-3 Years",
    skills:["HTML","CSS","JavaScript","React"],
    featured:false,
    rating:4.5,
    applicants:92,
    status:"Hiring",
    industry:"E-Commerce",
    employees:"35000+",
    website:"https://www.flipkartcareers.com",
    description:"Build scalable e-commerce frontends.",
    responsibilities:[
        "Develop UI",
        "Responsive design",
        "API integration",
        "Bug fixing"
    ],
    requirements:[
        "HTML",
        "CSS",
        "JavaScript",
        "React"
    ],
    easyApply:true
},

{
    id:22,
    title:"Python Full Stack Developer",
    company:"Tech Mahindra",
    location:"Hyderabad",
    salary:"10",
    type:"Full Time",
    experience:"0-2 Years",
    skills:["Python","Django","HTML","JavaScript"],
    featured:false,
    rating:4.3,
    applicants:142,
    status:"Hiring",
    industry:"IT Services",
    employees:"150000+",
    website:"https://careers.techmahindra.com",
    description:"Develop full-stack web applications.",
    responsibilities:[
        "Backend APIs",
        "Frontend development",
        "Database integration",
        "Testing"
    ],
    requirements:[
        "Python",
        "Django",
        "MySQL",
        "Git"
    ],
    easyApply:true
},

{
    id:23,
    title:"Java Full Stack Developer",
    company:"HCLTech",
    location:"Noida",
    salary:"12",
    type:"Full Time",
    experience:"1-3 Years",
    skills:["Java","Spring Boot","React","SQL"],
    featured:true,
    rating:4.5,
    applicants:101,
    status:"Actively Hiring",
    industry:"IT Services",
    employees:"220000+",
    website:"https://www.hcltech.com/careers",
    description:"Develop enterprise Java applications.",
    responsibilities:[
        "Spring Boot",
        "React",
        "REST APIs",
        "Testing"
    ],
    requirements:[
        "Java",
        "Spring Boot",
        "React",
        "SQL"
    ],
    easyApply:true
},

{
    id:24,
    title:"Business Analyst",
    company:"EY",
    location:"Hyderabad",
    salary:"11",
    type:"Full Time",
    experience:"1-3 Years",
    skills:["Excel","SQL","Power BI","Communication"],
    featured:false,
    rating:4.4,
    applicants:75,
    status:"Hiring",
    industry:"Consulting",
    employees:"400000+",
    website:"https://careers.ey.com",
    description:"Analyze business requirements and improve processes.",
    responsibilities:[
        "Requirement gathering",
        "Documentation",
        "Reporting",
        "Client meetings"
    ],
    requirements:[
        "SQL",
        "Excel",
        "Power BI",
        "Communication"
    ],
    easyApply:true
},

{
    id:25,
    title:"Cloud Support Engineer",
    company:"AWS",
    location:"Hyderabad",
    salary:"17",
    type:"Full Time",
    experience:"1-3 Years",
    skills:["AWS","Linux","Networking","Python"],
    featured:true,
    rating:4.8,
    applicants:128,
    status:"Actively Hiring",
    industry:"Cloud",
    employees:"1500000+",
    website:"https://www.amazon.jobs",
    description:"Support AWS cloud customers worldwide.",
    responsibilities:[
        "Cloud support",
        "Troubleshooting",
        "Documentation",
        "Monitoring"
    ],
    requirements:[
        "AWS",
        "Linux",
        "Networking",
        "Python"
    ],
    easyApply:true
},

{
    id:26,
    title:"QA Automation Engineer",
    company:"Wipro",
    location:"Pune",
    salary:"9",
    type:"Full Time",
    experience:"0-2 Years",
    skills:["Selenium","Java","TestNG","SQL"],
    featured:false,
    rating:4.2,
    applicants:95,
    status:"Hiring",
    industry:"IT Services",
    employees:"240000+",
    website:"https://careers.wipro.com",
    description:"Automate software testing processes.",
    responsibilities:[
        "Automation",
        "Regression testing",
        "Bug reporting",
        "Framework maintenance"
    ],
    requirements:[
        "Java",
        "Selenium",
        "SQL",
        "Testing"
    ],
    easyApply:true
},

{
    id:27,
    title:"Mobile App Developer",
    company:"Paytm",
    location:"Noida",
    salary:"13",
    type:"Full Time",
    experience:"1-3 Years",
    skills:["Flutter","Firebase","Dart","REST API"],
    featured:false,
    rating:4.3,
    applicants:88,
    status:"Hiring",
    industry:"FinTech",
    employees:"30000+",
    website:"https://paytm.com/careers",
    description:"Develop cross-platform mobile applications.",
    responsibilities:[
        "Flutter development",
        "API integration",
        "Testing",
        "Deployment"
    ],
    requirements:[
        "Flutter",
        "Dart",
        "Firebase",
        "Git"
    ],
    easyApply:true
},

{
    id:28,
    title:"Software Engineer",
    company:"ServiceNow",
    location:"Hyderabad",
    salary:"19",
    type:"Full Time",
    experience:"2-4 Years",
    skills:["Java","JavaScript","REST API","SQL"],
    featured:true,
    rating:4.8,
    applicants:112,
    status:"Actively Hiring",
    industry:"Enterprise Software",
    employees:"26000+",
    website:"https://careers.servicenow.com",
    description:"Develop enterprise workflow solutions.",
    responsibilities:[
        "Application development",
        "Platform customization",
        "API integration",
        "Testing"
    ],
    requirements:[
        "JavaScript",
        "Java",
        "SQL",
        "REST API"
    ],
    easyApply:true
},

{
    id:29,
    title:"Data Scientist",
    company:"Uber",
    location:"Bengaluru",
    salary:"24",
    type:"Full Time",
    experience:"2-5 Years",
    skills:["Python","Machine Learning","SQL","Pandas"],
    featured:true,
    rating:4.9,
    applicants:165,
    status:"Actively Hiring",
    industry:"Technology",
    employees:"32000+",
    website:"https://www.uber.com/careers",
    description:"Build machine learning models for business insights.",
    responsibilities:[
        "Data analysis",
        "ML model development",
        "Visualization",
        "Deployment"
    ],
    requirements:[
        "Python",
        "Machine Learning",
        "SQL",
        "Statistics"
    ],
    easyApply:true
},

{
    id:30,
    title:"Graduate Software Engineer",
    company:"Infosys BPM",
    location:"Hyderabad",
    salary:"6",
    type:"Full Time",
    experience:"0-1 Years",
    skills:["HTML","CSS","JavaScript","SQL"],
    featured:false,
    rating:4.2,
    applicants:220,
    status:"Hiring",
    industry:"IT Services",
    employees:"340000+",
    website:"https://www.infosysbpm.com/careers",
    description:"Entry-level software engineering role for fresh graduates.",
    responsibilities:[
        "Write code",
        "Fix bugs",
        "Participate in code reviews",
        "Learn new technologies"
    ],
    requirements:[
        "HTML",
        "CSS",
        "JavaScript",
        "SQL"
    ],
    easyApply:true
}

];

/* ===========================
   Load User Posted Jobs
=========================== */

const postedJobs =
    JSON.parse(
        localStorage.getItem("postedJobs")
    ) || [];


if(postedJobs.length > 0){

    jobs.unshift(...postedJobs);

}