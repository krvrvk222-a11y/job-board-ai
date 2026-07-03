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

    const isBookmarked = getBookmarks().includes(job.id);

    return `

        <div class="job-card" data-job-id="${job.id}">

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
                        ? `<span class="badge featured">
                               🔥 Featured
                           </span>`
                        : ""
                    }

                    <span class="badge rating">

                        ⭐ ${job.rating ?? "4.5"}

                    </span>

                </div>

            </div>


            <div class="job-info">

                <p>📍 ${job.location}</p>

                <p>💰 ${job.salary}</p>

                <p>💼 ${job.type}</p>

                <p>🎓 ${job.experience}</p>

            </div>


            <div class="skills">

                ${(job.skills || [])
                    .map(skill => `

                        <span class="skill-tag">
                            ${skill}
                        </span>

                    `)
                    .join("")
                }

            </div>


            <div class="job-footer">

                <button
                    class="apply-btn"
                    onclick="window.location.href='job-details.html?id=${job.id}'">

                    View Details

                </button>


                <button
                    class="bookmark-btn ${isBookmarked ? "saved" : ""}"
                    onclick="toggleBookmark(${job.id}, this)"
                    aria-label="${isBookmarked
                        ? "Remove bookmark"
                        : "Save job"
                    }">

                    ${isBookmarked ? "♥" : "♡"}

                </button>

            </div>


            ${job.userPosted
                ? `

                    <button
                        class="delete-job-btn"
                        onclick="deletePostedJob(${job.id})">

                        Delete Job

                    </button>

                `
                : ""
            }

        </div>

    `;

}

/* ===========================
   Delete Posted Job
=========================== */

function deletePostedJob(id){

    const shouldDelete = confirm(
        "Are you sure you want to delete this job?"
    );

    if(!shouldDelete) return;


    let postedJobs = JSON.parse(
        localStorage.getItem("postedJobs")
    ) || [];


    postedJobs = postedJobs.filter(
        job => job.id !== id
    );


    localStorage.setItem(
        "postedJobs",
        JSON.stringify(postedJobs)
    );


    const jobIndex = jobs.findIndex(
        job => job.id === id
    );


    if(jobIndex !== -1){

        jobs.splice(jobIndex, 1);

    }


    let bookmarks = getBookmarks();

    bookmarks = bookmarks.filter(
        jobId => jobId !== id
    );

    saveBookmarks(bookmarks);


    if(
        typeof filteredJobs !== "undefined" &&
        Array.isArray(filteredJobs)
    ){

        filteredJobs = filteredJobs.filter(
            job => job.id !== id
        );

    }


    showToast("Job deleted successfully");


    if(allJobsContainer){

        const activeJobs =
            typeof filteredJobs !== "undefined"
                ? filteredJobs
                : jobs;


        const totalPages = Math.ceil(
            activeJobs.length / jobsPerPage
        );


        if(currentPage > totalPages){

            currentPage = Math.max(totalPages, 1);

        }


        renderAllJobs(activeJobs, false);

    }


    renderLatestJobs(false);

    renderFeaturedJobs(false);

}


/* ===========================
   Featured Jobs
=========================== */

function renderFeaturedJobs(showLoader = true){

    if(!featuredJobList) return;

    clearTimeout(featuredTimeout);


    const render = ()=>{

        const featured = jobs
            .filter(job => job.featured)
            .slice(0,3);


        featuredJobList.innerHTML = featured
            .map(createJobCard)
            .join("");

    };


    if(showLoader){

        showSkeleton(featuredJobList, 3);

        featuredTimeout = setTimeout(
            render,
            700
        );

    }else{

        render();

    }

}


/* ===========================
   Latest Jobs
=========================== */

function renderLatestJobs(showLoader = true){

    if(!latestJobList) return;

    clearTimeout(latestTimeout);


    const render = ()=>{

        latestJobList.innerHTML = jobs
            .slice(0,6)
            .map(createJobCard)
            .join("");

    };


    if(showLoader){

        showSkeleton(latestJobList, 6);

        latestTimeout = setTimeout(
            render,
            700
        );

    }else{

        render();

    }

}


/* ===========================
   All Jobs
=========================== */

function renderAllJobs(
    jobArray = jobs,
    showLoader = true
){

    if(!allJobsContainer) return;

    clearTimeout(jobsTimeout);


    const render = ()=>{

        const start =
            (currentPage - 1) * jobsPerPage;

        const end =
            start + jobsPerPage;


        const paginatedJobs =
            jobArray.slice(start, end);


        allJobsContainer.innerHTML = paginatedJobs
            .map(createJobCard)
            .join("");


        renderPagination(jobArray);

    };


    if(showLoader){

        showSkeleton(allJobsContainer, 6);

        jobsTimeout = setTimeout(
            render,
            700
        );

    }else{

        render();

    }

}


/* ===========================
   Pagination
=========================== */

function renderPagination(jobArray){

    if(!pagination) return;

    pagination.innerHTML = "";


    const pages = Math.ceil(
        jobArray.length / jobsPerPage
    );


    for(let i = 1; i <= pages; i++){

        const button =
            document.createElement("button");


        button.textContent = i;


        if(i === currentPage){

            button.classList.add(
                "active-page"
            );

        }


        button.addEventListener(
            "click",
            ()=>{

                currentPage = i;

                renderAllJobs(jobArray);

            }
        );


        pagination.appendChild(button);

    }

}


/* ===========================
   Initialize
=========================== */

renderFeaturedJobs();

renderLatestJobs();

renderAllJobs();