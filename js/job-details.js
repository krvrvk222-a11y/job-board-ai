const jobDetailCard = document.getElementById("job-detail-card");

const params = new URLSearchParams(window.location.search);

const jobId = Number(params.get("id"));

const job = jobs.find(item => item.id === jobId);

/* ===========================
   Recently Viewed
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

                <p>⭐ ${job.rating}</p>

                <hr>

                <p>
                    <strong>📍 Location:</strong>
                    ${job.location}
                </p>

                <p>
                    <strong>💰 Salary:</strong>
                    ₹${job.salary} LPA
                </p>

                <p>
                    <strong>💼 Job Type:</strong>
                    ${job.type}
                </p>

                <p>
                    <strong>🎓 Experience:</strong>
                    ${job.experience}
                </p>

                <h2>Skills</h2>

                <div class="skills">

                    ${job.skills
                        .map(skill=>`

                            <span class="skill-tag">

                                ${skill}

                            </span>

                        `)
                        .join("")}

                </div>

                <h2>Job Description</h2>

                <p>

                    ${job.description}

                </p>

                <h2>Responsibilities</h2>

                <ul>

                    ${job.responsibilities
                        .map(item=>`

                            <li>${item}</li>

                        `)
                        .join("")}

                </ul>

                <h2>Requirements</h2>

                <ul>

                    ${job.requirements
                        .map(item=>`

                            <li>${item}</li>

                        `)
                        .join("")}

                </ul>

                <h2>Company Details</h2>

                <p>

                    <strong>Industry:</strong>

                    ${job.industry}

                </p>

                <p>

                    <strong>Employees:</strong>

                    ${job.employees}

                </p>

                <p>

                    <strong>Applicants:</strong>

                    ${job.applicants}

                </p>

                <p>

                    <strong>Status:</strong>

                    ${job.status}

                </p>

                <p>

                    <strong>Website:</strong>

                    <a
                        href="${job.website}"
                        target="_blank">

                        Visit Company

                    </a>

                </p>

                <div class="job-detail-actions">

                    <button
                        id="apply-btn"
                        class="btn-primary">

                        Apply Now

                    </button>

                    <button
                        id="share-btn"
                        class="btn-secondary">

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

        if(modal && closeModal && applyForm){

            document
                .getElementById("apply-btn")
                .addEventListener("click",()=>{

                    modal.style.display = "flex";

                });

            closeModal.addEventListener("click",()=>{

                modal.style.display = "none";

            });

            window.addEventListener("click",(event)=>{

                if(event.target === modal){

                    modal.style.display = "none";

                }

            });

            applyForm.addEventListener("submit",(event)=>{

                event.preventDefault();

                let appliedJobs =

                    JSON.parse(
                        localStorage.getItem("appliedJobs")
                    ) || [];

                if(!appliedJobs.includes(job.id)){

                    appliedJobs.push(job.id);

                    localStorage.setItem(

                        "appliedJobs",

                        JSON.stringify(appliedJobs)

                    );

                    showToast(
                        "✅ Application Submitted Successfully"
                    );

                }else{

                    showToast(
                        "⚠️ You already applied for this job"
                    );

                }

                applyForm.reset();

                modal.style.display = "none";

            });

        }

        /* ===========================
           Share Job
        =========================== */

        const shareButton = document.getElementById("share-btn");

        if(shareButton){

            shareButton.addEventListener("click",()=>{

                const url = window.location.href;

                if(

                    navigator.clipboard &&

                    window.isSecureContext

                ){

                    navigator.clipboard
                        .writeText(url)
                        .then(()=>{

                            showToast(
                                "🔗 Job link copied successfully"
                            );

                        })
                        .catch(()=>{

                            fallbackCopy(url);

                        });

                }else{

                    fallbackCopy(url);

                }

            });

        }

        function fallbackCopy(text){

            const textArea =
                document.createElement("textarea");

            textArea.value = text;

            document.body.appendChild(textArea);

            textArea.select();

            document.execCommand("copy");

            document.body.removeChild(textArea);

            showToast(
                "🔗 Job link copied successfully"
            );

        }

    }else{

        jobDetailCard.innerHTML = `

            <h2>Job not found.</h2>

        `;

    }

}
/* ===========================
   Recently Viewed Jobs
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

            <div class="no-results">

                <h2>No Recently Viewed Jobs</h2>

                <p>Start exploring jobs to build your history.</p>

            </div>

        `;

        return;

    }

    if(typeof createJobCard !== "function"){

        recentlyViewedList.innerHTML = `

            <p>Unable to load recently viewed jobs.</p>

        `;

        return;

    }

    recentlyViewedList.innerHTML =

        viewedJobs

            .map(createJobCard)

            .join("");

}

loadRecentlyViewed();