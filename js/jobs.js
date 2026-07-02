const featuredJobList = document.getElementById("featured-job-list");
const latestJobList = document.getElementById("latest-job-list");
const allJobsContainer = document.getElementById("all-jobs");

function createJobCard(job){

    return `
        <div class="job-card">

            <div class="job-header">

                <div>

                    <h3>${job.title}</h3>

                    <p class="company-name">${job.company}</p>

                </div>

                <div class="job-badges">

                    ${job.featured ? `<span class="badge featured">🔥 Featured</span>` : ""}

                    <span class="badge rating">⭐ ${job.rating || "4.5"}</span>

                </div>

            </div>

            <div class="job-info">

                <p>📍 ${job.location}</p>

                <p>💰 ${job.salary}</p>

                <p>💼 ${job.type}</p>

                <p>🎓 ${job.experience}</p>

            </div>

            <div class="skills">

                ${job.skills.map(skill=>`
                    <span class="skill-tag">${skill}</span>
                `).join("")}

            </div>

            <div class="job-footer">

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