const featuredJobList = document.getElementById("featured-job-list");
const latestJobList = document.getElementById("latest-job-list");

function createJobCard(job){

    return `
        <div class="job-card">

            <h3>${job.title}</h3>

            <p><strong>Company:</strong> ${job.company}</p>

            <p><strong>Location:</strong> ${job.location}</p>

            <p><strong>Salary:</strong> ${job.salary}</p>

            <p><strong>Experience:</strong> ${job.experience}</p>

            <p><strong>Type:</strong> ${job.type}</p>
            <div class = "job-actions">

            <button class="apply-btn">
                Apply Now
            </button>

            <button class="bookmark-btn"
        onclick="toggleBookmark(${job.id})">
        ❤️

            </button>
            </div>
            
        </div>
    `;

}

function loadFeaturedJobs(){

    if(!featuredJobList) return;

    const featured = jobs.filter(job => job.featured);

    featuredJobList.innerHTML = featured
        .map(createJobCard)
        .join("");

}

function loadLatestJobs(){

    if(!latestJobList) return;

    latestJobList.innerHTML = jobs
        .map(createJobCard)
        .join("");

}

loadFeaturedJobs();
loadLatestJobs();