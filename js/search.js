const searchInput = document.getElementById("search-input");
const locationFilter = document.getElementById("location-filter");
const jobTypeFilter = document.getElementById("job-type-filter");
const searchButton = document.getElementById("search-btn");

function displayJobs(jobList){

    if(!latestJobList) return;

    latestJobList.innerHTML="";

    if(jobList.length===0){

        latestJobList.innerHTML=`
            <div class="no-results">
                <h2>No matching jobs found</h2>
            </div>
        `;

        return;
    }

    latestJobList.innerHTML=jobList
        .map(createJobCard)
        .join("");

}

function searchJobs(){

    const keyword=searchInput.value.toLowerCase().trim();
    const location=locationFilter.value.toLowerCase();
    const jobType=jobTypeFilter.value.toLowerCase();

    const filtered=jobs.filter(job=>{

        const matchesKeyword=
            job.title.toLowerCase().includes(keyword) ||
            job.company.toLowerCase().includes(keyword) ||
            job.skills.join(" ").toLowerCase().includes(keyword);

        const matchesLocation=
            location==="" ||
            job.location.toLowerCase()===location;

        const matchesJobType=
            jobType==="" ||
            job.type.toLowerCase()===jobType;

        return matchesKeyword && matchesLocation && matchesJobType;

    });

    displayJobs(filtered);

}

searchButton.addEventListener("click",searchJobs);
searchInput.addEventListener("keyup",searchJobs);
locationFilter.addEventListener("change",searchJobs);
jobTypeFilter.addEventListener("change",searchJobs);