const searchInput = document.getElementById("search-input");
const jobsSearch = document.getElementById("jobs-search");

const locationFilter = document.getElementById("location-filter");
const jobTypeFilter = document.getElementById("job-type-filter");
const searchButton = document.getElementById("search-btn");

const filterLocation = document.getElementById("filter-location");
const filterJobType = document.getElementById("filter-job-type");
const filterExperience = document.getElementById("filter-experience");
const filterSalary = document.getElementById("filter-salary");
const sortJobs = document.getElementById("sort-jobs");

const suggestionBox = document.getElementById("search-suggestions");

let filteredJobs = [...jobs];


/* ===========================
   Category Rules
=========================== */

const categoryRules = {

    frontend: job => {

        const text = (
            job.title + " " +
            job.skills.join(" ")
        ).toLowerCase();

        return (
            text.includes("frontend") ||
            text.includes("react") ||
            text.includes("html") ||
            text.includes("css") ||
            text.includes("javascript")
        );

    },


    backend: job => {

        const text = (
            job.title + " " +
            job.skills.join(" ")
        ).toLowerCase();

        return (
            text.includes("backend") ||
            text.includes("node.js") ||
            text.includes("express") ||
            text.includes("django") ||
            text.includes("spring boot") ||
            text.includes("rest api")
        );

    },


    ai: job => {

        const text = (
            job.title + " " +
            job.skills.join(" ")
        ).toLowerCase();

        return (
            text.includes("ai engineer") ||
            text.includes("machine learning") ||
            text.includes("deep learning") ||
            text.includes("pytorch") ||
            text.includes("tensorflow") ||
            text.includes("llm")
        );

    },


    "data-science": job => {

        const text = (
            job.title + " " +
            job.skills.join(" ")
        ).toLowerCase();

        return (
            text.includes("data scientist") ||
            text.includes("data analyst") ||
            text.includes("data engineer") ||
            text.includes("pandas") ||
            text.includes("power bi") ||
            text.includes("spark")
        );

    },


    "ui-ux": job => {

        const text = (
            job.title + " " +
            job.skills.join(" ")
        ).toLowerCase();

        return (
            text.includes("ui/ux") ||
            text.includes("ui design") ||
            text.includes("ux design") ||
            text.includes("figma") ||
            text.includes("adobe xd")
        );

    },


    cloud: job => {

        const text = (
            job.title + " " +
            job.skills.join(" ") + " " +
            job.industry
        ).toLowerCase();

        return (
            text.includes("cloud") ||
            text.includes("aws") ||
            text.includes("azure") ||
            text.includes("terraform") ||
            text.includes("kubernetes") ||
            text.includes("devops")
        );

    }

};


/* ===========================
   Calculate Category Counts
=========================== */

function updateCategoryCounts(){

    const categoryCountElements = {

        frontend:
            document.getElementById("frontend-count"),

        backend:
            document.getElementById("backend-count"),

        ai:
            document.getElementById("ai-count"),

        "data-science":
            document.getElementById("data-science-count"),

        "ui-ux":
            document.getElementById("ui-ux-count"),

        cloud:
            document.getElementById("cloud-count")

    };


    Object.keys(categoryRules).forEach(category => {

        const count = jobs.filter(
            categoryRules[category]
        ).length;


        const element =
            categoryCountElements[category];


        if(element){

            element.textContent =
                `${count} ${count === 1 ? "Job" : "Jobs"}`;

        }

    });

}


updateCategoryCounts();


/* ===========================
   Home Page Search
=========================== */

function displayJobs(jobList){

    if(!latestJobList) return;


    latestJobList.innerHTML = "";


    if(jobList.length === 0){

        latestJobList.innerHTML = `

            <div class="no-results">

                <h2>No Matching Jobs Found</h2>

                <p>
                    We couldn't find jobs matching your search.
                    Try changing the keyword, location, or job type.
                </p>

            </div>

        `;

        return;

    }


    latestJobList.innerHTML = jobList

        .map(createJobCard)

        .join("");

}


function searchJobs(){

    if(!searchInput) return;


    const keyword = searchInput.value

        .trim()

        .toLowerCase();


    const location = locationFilter

        ? locationFilter.value.toLowerCase()

        : "";


    const jobType = jobTypeFilter

        ? jobTypeFilter.value.toLowerCase()

        : "";


    const filtered = jobs.filter(job => {


        const matchesKeyword =

            keyword === "" ||

            job.title
                .toLowerCase()
                .includes(keyword) ||

            job.company
                .toLowerCase()
                .includes(keyword) ||

            job.skills
                .join(" ")
                .toLowerCase()
                .includes(keyword);


        const matchesLocation =

            location === "" ||

            job.location.toLowerCase() === location;


        const matchesJobType =

            jobType === "" ||

            job.type.toLowerCase() === jobType;


        return (

            matchesKeyword &&

            matchesLocation &&

            matchesJobType

        );

    });


    displayJobs(filtered);


    const latestJobsSection =
        document.getElementById("latest-jobs");


    if(latestJobsSection){

        latestJobsSection.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

}


/* ===========================
   Jobs Page Search
=========================== */

function filterJobs(){

    if(!jobsSearch) return;


    const keyword = jobsSearch.value

        .trim()

        .toLowerCase();


    filteredJobs = jobs.filter(job => {


        const matchesKeyword =

            keyword === "" ||

            job.title
                .toLowerCase()
                .includes(keyword) ||

            job.company
                .toLowerCase()
                .includes(keyword) ||

            job.skills
                .join(" ")
                .toLowerCase()
                .includes(keyword);


        const matchesLocation =

            !filterLocation ||

            filterLocation.value === "" ||

            job.location === filterLocation.value;


        const matchesType =

            !filterJobType ||

            filterJobType.value === "" ||

            job.type === filterJobType.value;


        const matchesExperience =

            !filterExperience ||

            filterExperience.value === "" ||

            job.experience === filterExperience.value;


        let matchesSalary = true;


        if(filterSalary){

            const salary = Number(job.salary);


            switch(filterSalary.value){


                case "Below ₹10 LPA":

                    matchesSalary = salary < 10;

                    break;


                case "₹10-15 LPA":

                    matchesSalary =
                        salary >= 10 &&
                        salary <= 15;

                    break;


                case "Above ₹15 LPA":

                    matchesSalary = salary > 15;

                    break;

            }

        }


        return (

            matchesKeyword &&

            matchesLocation &&

            matchesType &&

            matchesExperience &&

            matchesSalary

        );

    });


    currentPage = 1;

    renderAllJobs(filteredJobs);

    showSuggestions(keyword);

}


/* ===========================
   Search Suggestions
=========================== */

function showSuggestions(keyword){

    if(!suggestionBox) return;


    if(keyword === ""){

        suggestionBox.innerHTML = "";

        return;

    }


    const suggestions = jobs

        .filter(job =>

            job.title
                .toLowerCase()
                .includes(keyword) ||

            job.company
                .toLowerCase()
                .includes(keyword)

        )

        .slice(0,5);


    suggestionBox.innerHTML = suggestions

        .map(job => `

            <div class="suggestion-item">

                ${job.title}

            </div>

        `)

        .join("");


    document

        .querySelectorAll(".suggestion-item")

        .forEach(item => {


            item.addEventListener("click", () => {


                if(jobsSearch){

                    jobsSearch.value =
                        item.textContent.trim();

                }


                suggestionBox.innerHTML = "";


                filterJobs();

            });

        });

}


/* ===========================
   Sorting
=========================== */

function sortJobList(){

    if(!sortJobs) return;


    const sortedJobs = [...filteredJobs];


    switch(sortJobs.value){


        case "company":

            sortedJobs.sort((a,b) =>

                a.company.localeCompare(b.company)

            );

            break;


        case "salary-high":

            sortedJobs.sort((a,b) =>

                Number(b.salary) -
                Number(a.salary)

            );

            break;


        case "salary-low":

            sortedJobs.sort((a,b) =>

                Number(a.salary) -
                Number(b.salary)

            );

            break;


        case "experience":

            sortedJobs.sort((a,b) =>

                parseInt(a.experience) -
                parseInt(b.experience)

            );

            break;


        case "newest":

            sortedJobs.sort((a,b) =>

                b.id - a.id

            );

            break;

    }


    filteredJobs = sortedJobs;

    currentPage = 1;

    renderAllJobs(filteredJobs);

}


/* ===========================
   Events
=========================== */

if(searchButton){

    searchButton.addEventListener(

        "click",

        searchJobs

    );

}


if(searchInput){

    searchInput.addEventListener(

        "keydown",

        event => {

            if(event.key === "Enter"){

                event.preventDefault();

                searchJobs();

            }

        }

    );

}


if(locationFilter){

    locationFilter.addEventListener(

        "change",

        searchJobs

    );

}


if(jobTypeFilter){

    jobTypeFilter.addEventListener(

        "change",

        searchJobs

    );

}


if(jobsSearch){

    jobsSearch.addEventListener(

        "keyup",

        filterJobs

    );

}


if(filterLocation){

    filterLocation.addEventListener(

        "change",

        filterJobs

    );

}


if(filterJobType){

    filterJobType.addEventListener(

        "change",

        filterJobs

    );

}


if(filterExperience){

    filterExperience.addEventListener(

        "change",

        filterJobs

    );

}


if(filterSalary){

    filterSalary.addEventListener(

        "change",

        filterJobs

    );

}


if(sortJobs){

    sortJobs.addEventListener(

        "change",

        sortJobList

    );

}


/* ===========================
   Close Suggestions
=========================== */

document.addEventListener("click", event => {

    if(

        suggestionBox &&

        jobsSearch &&

        !jobsSearch.contains(event.target) &&

        !suggestionBox.contains(event.target)

    ){

        suggestionBox.innerHTML = "";

    }

});


document.addEventListener("keydown", event => {

    if(

        event.key === "Escape" &&

        suggestionBox

    ){

        suggestionBox.innerHTML = "";

    }

});


/* ===========================
   URL Filters
=========================== */

const urlParams =
    new URLSearchParams(window.location.search);


const selectedCompany =
    urlParams.get("company");


const selectedCategory =
    urlParams.get("category");


/* ===========================
   Company Filter
=========================== */

if(selectedCompany && allJobsContainer){


    const companyJobs = jobs.filter(job =>

        job.company.toLowerCase() ===

        selectedCompany.toLowerCase()

    );


    currentPage = 1;


    if(companyJobs.length > 0){


        filteredJobs = companyJobs;

        renderAllJobs(companyJobs);


    }else{


        clearTimeout(jobsTimeout);


        allJobsContainer.innerHTML = `

            <div class="no-results">

                <h2>No Current Openings</h2>

                <p>
                    Sorry, ${selectedCompany} is not hiring currently.
                    Kindly check opportunities from other companies.
                </p>

                <a
                    href="index.html#companies"
                    class="btn-primary"
                >
                    Explore Other Companies
                </a>

            </div>

        `;


        if(pagination){

            pagination.innerHTML = "";

        }

    }

}


/* ===========================
   Category Filter
=========================== */

if(

    selectedCategory &&

    allJobsContainer &&

    categoryRules[selectedCategory]

){


    const categoryJobs = jobs.filter(

        categoryRules[selectedCategory]

    );


    currentPage = 1;


    if(categoryJobs.length > 0){


        filteredJobs = categoryJobs;

        renderAllJobs(categoryJobs);


    }else{


        clearTimeout(jobsTimeout);


        allJobsContainer.innerHTML = `

            <div class="no-results">

                <h2>No Jobs Available</h2>

                <p>
                    Sorry, there are currently no jobs
                    available in this category.
                    Please explore other job categories.
                </p>

                <a
                    href="index.html#categories"
                    class="btn-primary"
                >
                    Explore Other Categories
                </a>

            </div>

        `;


        if(pagination){

            pagination.innerHTML = "";

        }

    }

}