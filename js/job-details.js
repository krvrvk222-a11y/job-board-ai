const jobDetailCard = document.getElementById("job-detail-card");

const params = new URLSearchParams(window.location.search);

const jobId = Number(params.get("id"));

const job = jobs.find(item => item.id === jobId);


/* ===========================
   Recently Viewed
=========================== */

let recentlyViewed =
    JSON.parse(localStorage.getItem("recentlyViewed")) || [];


if(job){

    recentlyViewed =
        recentlyViewed.filter(id => id !== jobId);

    recentlyViewed.unshift(jobId);


    if(recentlyViewed.length > 5){

        recentlyViewed.pop();

    }


    localStorage.setItem(
        "recentlyViewed",
        JSON.stringify(recentlyViewed)
    );

}


/* ===========================
   Render Job Details
=========================== */

if(jobDetailCard){

    if(job){

        jobDetailCard.innerHTML = `

            <div class="job-detail-container">

                <h1>${job.title}</h1>

                <h3>${job.company}</h3>

                <p>⭐ ${job.rating || "New"}</p>

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

                    ${(job.skills || [])
                        .map(skill => `

                            <span class="skill-tag">
                                ${skill}
                            </span>

                        `)
                        .join("")}

                </div>


                <h2>Job Description</h2>


                <p>

                    ${
                        job.description ||

                        `We are looking for a passionate ${job.title}
                        to join the ${job.company} team. You will
                        collaborate with talented professionals and
                        contribute to exciting real-world projects.`
                    }

                </p>


                ${
                    job.responsibilities &&
                    job.responsibilities.length > 0

                    ? `

                        <h2>Responsibilities</h2>

                        <ul>

                            ${job.responsibilities
                                .map(item => `

                                    <li>${item}</li>

                                `)
                                .join("")}

                        </ul>

                    `

                    : ""
                }


                ${
                    job.requirements &&
                    job.requirements.length > 0

                    ? `

                        <h2>Requirements</h2>

                        <ul>

                            ${job.requirements
                                .map(item => `

                                    <li>${item}</li>

                                `)
                                .join("")}

                        </ul>

                    `

                    : ""
                }


                <h2>Company Details</h2>


                <p>

                    <strong>Industry:</strong>

                    ${job.industry || "Technology"}

                </p>


                <p>

                    <strong>Employees:</strong>

                    ${job.employees || "Not specified"}

                </p>


                <p>

                    <strong>Applicants:</strong>

                    ${job.applicants ?? 0}

                </p>


                <p>

                    <strong>Status:</strong>

                    ${job.status || "Actively Hiring"}

                </p>


                ${
                    job.website

                    ? `

                        <p>

                            <strong>Website:</strong>

                            <a
                                href="${job.website}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit Company
                            </a>

                        </p>

                    `

                    : ""
                }


                <div class="job-detail-actions">

                    <button
                        id="apply-btn"
                        class="btn-primary"
                        type="button"
                    >
                        Apply Now
                    </button>


                    <button
                        id="share-btn"
                        class="btn-secondary"
                        type="button"
                    >
                        Share Job
                    </button>

                </div>

            </div>

        `;


        /* ===========================
           Apply Modal
        =========================== */

        const modal =
            document.getElementById("apply-modal");

        const closeModal =
            document.querySelector(".close-modal");

        const applyForm =
            document.getElementById("apply-form");

        const applyButton =
            document.getElementById("apply-btn");


        if(
            modal &&
            closeModal &&
            applyForm &&
            applyButton
        ){

            applyButton.addEventListener(
                "click",
                () => {

                    modal.style.display = "flex";

                }
            );


            closeModal.addEventListener(
                "click",
                () => {

                    modal.style.display = "none";

                }
            );


            window.addEventListener(
                "click",
                event => {

                    if(event.target === modal){

                        modal.style.display = "none";

                    }

                }
            );


            document.addEventListener(
                "keydown",
                event => {

                    if(
                        event.key === "Escape" &&
                        modal.style.display === "flex"
                    ){

                        modal.style.display = "none";

                    }

                }
            );


            applyForm.addEventListener(
                "submit",
                event => {

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


                        modal.style.display = "none";

                        applyForm.reset();


                        showToast(
                            "🎉 Application submitted successfully! Your application has been received."
                        );


                        applyButton.textContent = "Applied";

                        applyButton.disabled = true;

                        applyButton.classList.add("applied");


                    }else{


                        modal.style.display = "none";

                        applyForm.reset();


                        showToast(
                            "⚠️ You have already applied for this position."
                        );

                    }

                }
            );


            const appliedJobs =
                JSON.parse(
                    localStorage.getItem("appliedJobs")
                ) || [];


            if(appliedJobs.includes(job.id)){

                applyButton.textContent = "Applied";

                applyButton.disabled = true;

                applyButton.classList.add("applied");

            }

        }


        /* ===========================
           Share Job
        =========================== */

        const shareButton =
            document.getElementById("share-btn");


        if(shareButton){

            shareButton.addEventListener(
                "click",
                async () => {


                    const jobUrl =
                        window.location.href;


                    const shareData = {

                        title:
                            `${job.title} at ${job.company}`,

                        text:
                            `Check out this ${job.title} opportunity at ${job.company}.`,

                        url:
                            jobUrl

                    };


                    try{


                        if(navigator.share){


                            await navigator.share(
                                shareData
                            );


                        }else if(
                            navigator.clipboard &&
                            window.isSecureContext
                        ){


                            await navigator.clipboard.writeText(
                                jobUrl
                            );


                            showToast(
                                "🔗 Job link copied to clipboard."
                            );


                        }else{


                            fallbackCopy(jobUrl);

                        }


                    }catch(error){


                        if(error.name !== "AbortError"){

                            fallbackCopy(jobUrl);

                        }

                    }

                }
            );

        }


        /* ===========================
           Fallback Copy
        =========================== */

        function fallbackCopy(text){


            const textArea =
                document.createElement("textarea");


            textArea.value = text;

            textArea.style.position = "fixed";

            textArea.style.left = "-9999px";

            textArea.style.top = "0";


            document.body.appendChild(textArea);


            textArea.focus();

            textArea.select();


            const copied =
                document.execCommand("copy");


            document.body.removeChild(textArea);


            if(copied){

                showToast(
                    "🔗 Job link copied to clipboard."
                );

            }else{

                showToast(
                    "⚠️ Unable to copy job link."
                );

            }

        }


    }else{


        jobDetailCard.innerHTML = `

            <div class="no-results">

                <h2>Job Not Found</h2>

                <p>
                    This job may no longer be available.
                </p>

                <a
                    href="jobs.html"
                    class="btn-primary"
                >
                    Explore Jobs
                </a>

            </div>

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

        .map(id =>
            jobs.find(job => job.id === id)
        )

        .filter(job =>
            job &&
            job.id !== jobId
        );


    if(viewedJobs.length === 0){


        recentlyViewedList.innerHTML = `

            <div class="no-results">

                <h2>No Recently Viewed Jobs</h2>

                <p>
                    Start exploring jobs to build your history.
                </p>

            </div>

        `;


        return;

    }


    if(typeof createJobCard !== "function"){


        recentlyViewedList.innerHTML = `

            <p>
                Unable to load recently viewed jobs.
            </p>

        `;


        return;

    }


    recentlyViewedList.innerHTML =

        viewedJobs

            .map(createJobCard)

            .join("");

}


loadRecentlyViewed();