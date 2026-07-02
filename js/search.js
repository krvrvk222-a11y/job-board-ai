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

    const keyword = searchInput.value.toLowerCase().trim();
    const location = locationFilter.value.toLowerCase();
    const jobType = jobTypeFilter.value.toLowerCase();

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

        return matchesKeyword && matchesLocation && matchesJobType;

    });

    displayJobs(filtered);

}

if(searchButton){
    searchButton.addEventListener("click",searchJobs);
}

if(searchInput){
    searchInput.addEventListener("keyup",searchJobs);
}

if(locationFilter){
    locationFilter.addEventListener("change",searchJobs);
}

if(jobTypeFilter){
    jobTypeFilter.addEventListener("change",searchJobs);
}

/* ===========================
   Jobs Page Search & Filters
=========================== */

let filteredJobs = [...jobs];

function filterJobs(){

    if(!jobsSearch) return;

    const keyword = jobsSearch.value.toLowerCase().trim();

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

            const salary = parseInt(job.salary);

            if(filterSalary.value === "Below ₹10 LPA"){
                matchesSalary = salary < 10;
            }

            if(filterSalary.value === "₹10-15 LPA"){
                matchesSalary = salary >= 10 && salary <= 15;
            }

            if(filterSalary.value === "Above ₹15 LPA"){
                matchesSalary = salary > 15;
            }

        }

        return matchesKeyword &&
               matchesLocation &&
               matchesType &&
               matchesExperience &&
               matchesSalary;

    });

    currentPage = 1;

    renderAllJobs(filteredJobs);

}

function sortJobList(){

    if(!sortJobs) return;

    switch(sortJobs.value){

        case "company":

            filteredJobs.sort((a,b)=>
                a.company.localeCompare(b.company)
            );

            break;

        case "salary-high":

            filteredJobs.sort((a,b)=>
                parseInt(b.salary)-parseInt(a.salary)
            );

            break;

        case "salary-low":

            filteredJobs.sort((a,b)=>
                parseInt(a.salary)-parseInt(b.salary)
            );

            break;

        case "experience":

            filteredJobs.sort((a,b)=>
                parseInt(a.experience)-parseInt(b.experience)
            );

            break;

        case "newest":

            filteredJobs.sort((a,b)=>b.id-a.id);

            break;

    }

    currentPage = 1;

    renderAllJobs(filteredJobs);

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