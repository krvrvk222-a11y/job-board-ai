const jobDetailCard = document.getElementById("job-detail-card");

const params = new URLSearchParams(window.location.search);

const jobId = Number(params.get("id"));

const job = jobs.find(item => item.id === jobId);

/* ===========================
   Recently Viewed Jobs
=========================== */

let recentlyViewed =
    JSON.parse(localStorage.getItem("recentlyViewed")) || [];

recentlyViewed = recentlyViewed.filter(id => id !== jobId);

recentlyViewed.unshift(jobId);

if(recentlyViewed.length > 5){
    recentlyViewed.pop();
}

localStorage.setItem(
    "recentlyViewed",
    JSON.stringify(recentlyViewed)
);

/* ===========================
   Render Job Details
=========================== */

if(jobDetailCard){

    if(job){

        jobDetailCard.innerHTML = `

            <div class="job-detail-container">

                <h1>${job.title}</h1>

                <h3>${job.company}</h3>

                <p>⭐ Rating: ${job.rating || "4.5"}</p>

                <hr>

                <p><strong>📍 Location:</strong> ${job.location}</p>

                <p><strong>💰 Salary:</strong> ${job.salary}</p>

                <p><strong>💼 Job Type:</strong> ${job.type}</p>

                <p><strong>🎓 Experience:</strong> ${job.experience}</p>

                <h2>Skills</h2>

                <div class="skills">

                    ${job.skills.map(skill => `
                        <span class="skill-tag">${skill}</span>
                    `).join("")}

                </div>

                <h2>Job Description</h2>

                <p>

                    We are looking for a passionate
                    <strong>${job.title}</strong>
                    to join the
                    <strong>${job.company}</strong>
                    team.

                    You will collaborate with talented engineers,
                    build high-quality software,
                    and contribute to exciting real-world projects.

                </p>

                <h2>Company Details</h2>

                <p><strong>Industry:</strong> Technology</p>

                <p><strong>Employees:</strong> 10000+</p>

                <p><strong>Applicants:</strong> 120</p>

                <p><strong>Status:</strong> Actively Hiring</p>

                <div class="job-detail-actions">

                    <button id="apply-btn" class="btn-primary">
                        Apply Now
                    </button>

                    <button id="share-btn" class="btn-secondary">
                        Share Job
                    </button>

                </div>

            </div>

        `;

        /* ===========================
           Apply Modal
        =========================== */

        const modal = document.getElementById("apply-modal");
        const closeModal = document.querySelector(".close-modal");
        const applyForm = document.getElementById("apply-form");

        document
        .getElementById("apply-btn")
        .addEventListener("click", () => {

            modal.style.display = "flex";

        });

        closeModal.addEventListener("click", () => {

            modal.style.display = "none";

        });

        window.addEventListener("click", (e) => {

            if(e.target === modal){

                modal.style.display = "none";

            }

        });

        applyForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const appliedJobs =
                JSON.parse(localStorage.getItem("appliedJobs")) || [];

            if(!appliedJobs.includes(job.id)){

                appliedJobs.push(job.id);

                localStorage.setItem(
                    "appliedJobs",
                    JSON.stringify(appliedJobs)
                );

                showToast("✅ Application Submitted Successfully");

            }else{

                showToast("⚠️ You already applied for this job");

            }

            modal.style.display = "none";

            applyForm.reset();

        });

        /* ===========================
           Share Job
        =========================== */

        document
        .getElementById("share-btn")
        .addEventListener("click", async () => {

            try{

                await navigator.clipboard.writeText(window.location.href);

                showToast("🔗 Job link copied successfully");

            }catch(error){

                showToast("❌ Unable to copy link");

            }

        });

    }else{

        jobDetailCard.innerHTML = `
            <h2>Job not found.</h2>
        `;

    }

}

/* ===========================
   Display Recently Viewed
=========================== */

const recentlyViewedList =
    document.getElementById("recently-viewed-list");

function loadRecentlyViewed(){

    if(!recentlyViewedList) return;

    const viewedJobs = recentlyViewed
        .map(id => jobs.find(job => job.id === id))
        .filter(job => job && job.id !== jobId);

    if(viewedJobs.length === 0){

        recentlyViewedList.innerHTML = `
            <p>No recently viewed jobs.</p>
        `;

        return;

    }

    recentlyViewedList.innerHTML =
        viewedJobs
            .map(createJobCard)
            .join("");

}

loadRecentlyViewed();