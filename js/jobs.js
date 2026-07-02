const featuredJobList = document.getElementById("featured-job-list");
const latestJobList = document.getElementById("latest-job-list");
const allJobsContainer = document.getElementById("all-jobs");

function createJobCard(job){

    return `
        <div class="job-card">

            <h3>${job.title}</h3>

            <p><strong>Company:</strong> ${job.company}</p>

            <p><strong>Location:</strong> ${job.location}</p>

            <p><strong>Salary:</strong> ${job.salary}</p>

            <p><strong>Experience:</strong> ${job.experience}</p>

            <p><strong>Type:</strong> ${job.type}</p>

            <p>
                ${job.skills.map(skill=>`<span class="skill-tag">${skill}</span>`).join("")}
            </p>

            <div class="job-actions">

                <button class="apply-btn">
                    Apply Now
                </button>

                <button
                    class="bookmark-btn"
                    onclick="toggleBookmark(${job.id})">
                    ❤️
                </button>

            </div>

        </div>
    `;
}

function renderFeaturedJobs(){

    if(!featuredJobList) return;

    const featured = jobs.filter(job=>job.featured);

    featuredJobList.innerHTML = featured
        .map(createJobCard)
        .join("");
}

function renderLatestJobs(){

    if(!latestJobList) return;

    latestJobList.innerHTML = jobs
        .slice(0,6)
        .map(createJobCard)
        .join("");
}

const jobsPerPage = 6;
let currentPage = 1;

function renderAllJobs(jobArray = jobs){

    if(!allJobsContainer) return;

    const start = (currentPage - 1) * jobsPerPage;
    const end = start + jobsPerPage;

    const paginatedJobs = jobArray.slice(start, end);

    allJobsContainer.innerHTML = paginatedJobs
        .map(createJobCard)
        .join("");

    renderPagination(jobArray);

}

renderFeaturedJobs();
renderLatestJobs();
renderAllJobs();