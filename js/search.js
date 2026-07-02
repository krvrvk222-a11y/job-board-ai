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
   Home Page Search
=========================== */

function displayJobs(jobList){

    if(!latestJobList) return;

    latestJobList.innerHTML = "";

    if(jobList.length === 0){

        latestJobList.innerHTML = `
            <div class="no-results">
                <h2>No matching jobs found</h2>
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

    const filtered = jobs.filter(job=>{

        const matchesKeyword =

            job.title.toLowerCase().includes(keyword) ||

            job.company.toLowerCase().includes(keyword) ||

            job.skills.join(" ").toLowerCase().includes(keyword);

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
    document.getElementById("latest-jobs").scrollIntoView({
    behavior: "smooth"
    });

}

/* ===========================
   Jobs Page Search
=========================== */

function filterJobs(){

    if(!jobsSearch) return;

    const keyword = jobsSearch.value
        .trim()
        .toLowerCase();

    filteredJobs = jobs.filter(job=>{

        const matchesKeyword =

            job.title.toLowerCase().includes(keyword) ||

            job.company.toLowerCase().includes(keyword) ||

            job.skills.join(" ").toLowerCase().includes(keyword);

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

                    matchesSalary = salary >= 10 && salary <= 15;

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

            job.title.toLowerCase().includes(keyword) ||

            job.company.toLowerCase().includes(keyword)

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

        .forEach(item=>{

            item.addEventListener("click",()=>{

                if(jobsSearch){

                    jobsSearch.value = item.textContent.trim();

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

            sortedJobs.sort((a,b)=>

                a.company.localeCompare(b.company)

            );

            break;

        case "salary-high":

            sortedJobs.sort((a,b)=>

                Number(b.salary)-Number(a.salary)

            );

            break;

        case "salary-low":

            sortedJobs.sort((a,b)=>

                Number(a.salary)-Number(b.salary)

            );

            break;

        case "experience":

            sortedJobs.sort((a,b)=>

                parseInt(a.experience)-parseInt(b.experience)

            );

            break;

        case "newest":

            sortedJobs.sort((a,b)=>

                b.id-a.id

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

    searchButton.addEventListener("click",searchJobs);

}

// if(searchInput){

//     searchInput.addEventListener("keyup",searchJobs);

// }

if(locationFilter){

    locationFilter.addEventListener("change",searchJobs);

}

if(jobTypeFilter){

    jobTypeFilter.addEventListener("change",searchJobs);

}

if(jobsSearch){

    jobsSearch.addEventListener("keyup",filterJobs);

}

if(filterLocation){

    filterLocation.addEventListener("change",filterJobs);

}

if(filterJobType){

    filterJobType.addEventListener("change",filterJobs);

}

if(filterExperience){

    filterExperience.addEventListener("change",filterJobs);

}

if(filterSalary){

    filterSalary.addEventListener("change",filterJobs);

}

if(sortJobs){

    sortJobs.addEventListener("change",sortJobList);

}

/* ===========================
   Close Suggestions
=========================== */

document.addEventListener("click",(event)=>{

    if(

        suggestionBox &&

        jobsSearch &&

        !jobsSearch.contains(event.target) &&

        !suggestionBox.contains(event.target)

    ){

        suggestionBox.innerHTML = "";

    }

});

document.addEventListener("keydown",(event)=>{

    if(event.key === "Escape" && suggestionBox){

        suggestionBox.innerHTML = "";

    }

});