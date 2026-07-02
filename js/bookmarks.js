function getBookmarks(){

    return JSON.parse(localStorage.getItem("bookmarks")) || [];

}

function saveBookmarks(bookmarks){

    localStorage.setItem(
        "bookmarks",
        JSON.stringify(bookmarks)
    );

}

function toggleBookmark(id){

    let bookmarks = getBookmarks();

    if(bookmarks.includes(id)){

        bookmarks = bookmarks.filter(jobId => jobId !== id);

        showToast("❤️ Bookmark Removed");

    }else{

        bookmarks.push(id);

        showToast("✅ Job Saved Successfully");

    }

    saveBookmarks(bookmarks);

    loadBookmarks();

}

const bookmarkList = document.getElementById("bookmark-list");

function loadBookmarks(){

    if(!bookmarkList) return;

    const saved = getBookmarks();

    const savedJobs = jobs.filter(job => saved.includes(job.id));

    if(savedJobs.length === 0){

        bookmarkList.innerHTML = `

            <div class="no-results">

                <h2>No Bookmarked Jobs</h2>

                <p>Save jobs by clicking ❤️.</p>

            </div>

        `;

        return;

    }

    bookmarkList.innerHTML = savedJobs
        .map(createJobCard)
        .join("");

}

loadBookmarks();