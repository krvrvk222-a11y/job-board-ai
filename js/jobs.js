const featuredJobList = document.getElementById("featured-job-list");
const latestJobList = document.getElementById("latest-job-list");
const allJobsContainer = document.getElementById("all-jobs");
const pagination = document.getElementById("pagination");

const jobsPerPage = 6;
let currentPage = 1;

let featuredTimeout;
let latestTimeout;
let jobsTimeout;

/* ===========================
   Skeleton Loader
=========================== */

function showSkeleton(container, count){

    if(!container) return;

    let skeleton = "";

    for(let i = 0; i < count; i++){

        skeleton += `
            <div class="skeleton-card">
                <div class="skeleton skeleton-title"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-button"></div>
            </div>
        `;

    }

    container.innerHTML = skeleton;

}

/* ===========================
   Job Card
=========================== */

function createJobCard(job){

    return `

        <div class="job-card">

            <div class="job-header">

                <div>

                    <h3>

                        <a href="job-details.html?id=${job.id}">

                            ${job.title}

                        </a>

                    </h3>

                    <p class="company-name">

                        ${job.company}

                    </p>

                </div>

                <div class="job-badges">

                    ${job.featured
                        ? `<span class="badge featured">🔥 Featured</span>`
                        : ""}

                    <span class="badge rating">

                        ⭐ ${job.rating ?? "4.5"}

                    </span>

                </div>

            </div>

            <div class="job-info">

                <p>📍 ${job.location}</p>

                <p>💰 ₹${job.salary} LPA</p>

                <p>💼 ${job.type}</p>

                <p>🎓 ${job.experience}</p>

            </div>

            <div class="skills">

                ${job.skills
                    .map(skill => `
                        <span class="skill-tag">${skill}</span>
                    `)
                    .join("")}

            </div>

            <div class="job-footer">

                <button
                    class="apply-btn"
                    onclick="window.location.href='job-details.html?id=${job.id}'">

                    View Details

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

/* ===========================
   Featured Jobs
=========================== */

function renderFeaturedJobs(){

    if(!featuredJobList) return;

    clearTimeout(featuredTimeout);

    showSkeleton(featuredJobList,3);

    featuredTimeout = setTimeout(()=>{

        const featured = jobs
            .filter(job => job.featured)
            .slice(0,3);

        featuredJobList.innerHTML =
            featured
                .map(createJobCard)
                .join("");

    },700);

}

/* ===========================
   Latest Jobs
=========================== */

function renderLatestJobs(){

    if(!latestJobList) return;

    clearTimeout(latestTimeout);

    showSkeleton(latestJobList,6);

    latestTimeout = setTimeout(()=>{

        latestJobList.innerHTML =
            jobs
                .slice(0,6)
                .map(createJobCard)
                .join("");

    },700);

}

/* ===========================
   All Jobs
=========================== */

function renderAllJobs(jobArray = jobs){

    if(!allJobsContainer) return;

    clearTimeout(jobsTimeout);

    showSkeleton(allJobsContainer,6);

    jobsTimeout = setTimeout(()=>{

        const start = (currentPage - 1) * jobsPerPage;

        const end = start + jobsPerPage;

        const paginatedJobs = jobArray.slice(start,end);

        allJobsContainer.innerHTML =
            paginatedJobs
                .map(createJobCard)
                .join("");

        renderPagination(jobArray);

    },700);

}

/* ===========================
   Pagination
=========================== */

function renderPagination(jobArray){

    if(!pagination) return;

    pagination.innerHTML = "";

    const pages = Math.ceil(jobArray.length / jobsPerPage);

    for(let i = 1; i <= pages; i++){

        const button = document.createElement("button");

        button.textContent = i;

        if(i === currentPage){

            button.classList.add("active-page");

        }

        button.addEventListener("click",()=>{

            currentPage = i;

            renderAllJobs(jobArray);

        });

        pagination.appendChild(button);

    }

}

/* ===========================
   Initialize
=========================== */

renderFeaturedJobs();
renderLatestJobs();
renderAllJobs();