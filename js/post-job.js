const postJobForm =
    document.getElementById("post-job-form");


if(postJobForm){

    postJobForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const title =
            document.getElementById("job-title")
            .value.trim();


        const company =
            document.getElementById("company-name")
            .value.trim();


        const location =
            document.getElementById("job-location")
            .value.trim();


        const type =
            document.getElementById("job-type")
            .value;


        const salary =
            document.getElementById("job-salary")
            .value.trim();


        const experience =
            document.getElementById("job-experience")
            .value.trim();


        const skillsInput =
            document.getElementById("job-skills")
            .value.trim();


        const description =
            document.getElementById("job-description")
            .value.trim();


        const skills = skillsInput
            .split(",")
            .map(skill => skill.trim())
            .filter(skill => skill !== "");


        const postedJobs =
            JSON.parse(
                localStorage.getItem("postedJobs")
            ) || [];


        const newJob = {

            id: Date.now(),

            title: title,

            company: company,

            location: location,

            type: type,

            salary: salary,

            experience: experience,

            skills: skills,

            description: description,

            rating: "New",

            featured: false,

            industry: "Technology",

            employees: "Not specified",

            applicants: 0,

            status: "Actively Hiring",

            userPosted: true


        };


        postedJobs.unshift(newJob);


        localStorage.setItem(

            "postedJobs",

            JSON.stringify(postedJobs)

        );


        showToast(
            "Job posted successfully"
        );


        postJobForm.reset();


        setTimeout(() => {

            window.location.href = "jobs.html";

        }, 1200);

    });

}