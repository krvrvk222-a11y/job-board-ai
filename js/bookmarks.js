function getBookmarks(){

    return JSON.parse(
        localStorage.getItem("bookmarks")
    ) || [];

}


function saveBookmarks(bookmarks){

    localStorage.setItem(
        "bookmarks",
        JSON.stringify(bookmarks)
    );

}


function toggleBookmark(id, button){

    let bookmarks = getBookmarks();

    const isSaved = bookmarks.includes(id);


    if(isSaved){

        bookmarks = bookmarks.filter(
            jobId => jobId !== id
        );

        showToast("Bookmark removed");

        if(button){

            button.textContent = "♡";

            button.classList.remove("saved");

            button.setAttribute(
                "aria-label",
                "Save job"
            );

        }

    }else{

        bookmarks.push(id);

        showToast("Job added to bookmarks");

        if(button){

            button.textContent = "♥";

            button.classList.add("saved");

            button.setAttribute(
                "aria-label",
                "Remove bookmark"
            );

        }

    }


    saveBookmarks(bookmarks);


    if(bookmarkList){

        loadBookmarks();

    }

}


const bookmarkList =
    document.getElementById("bookmark-list");


function loadBookmarks(){

    if(!bookmarkList) return;


    const saved = getBookmarks();


    const savedJobs = jobs.filter(job =>
        saved.includes(job.id)
    );


    if(savedJobs.length === 0){

        bookmarkList.innerHTML = `

            <div class="no-results">

                <h2>No Bookmarked Jobs</h2>

                <p>
                    Save jobs by clicking the bookmark icon
                    on any job card.
                </p>

            </div>

        `;

        return;

    }


    if(typeof createJobCard !== "function"){

        bookmarkList.innerHTML = `

            <p>
                Unable to load bookmarked jobs.
            </p>

        `;

        return;

    }


    bookmarkList.innerHTML = savedJobs

        .map(createJobCard)

        .join("");

}


loadBookmarks();