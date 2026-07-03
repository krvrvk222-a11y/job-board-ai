# 🚀 JobBoard AI

A modern, responsive, and interactive job board web application that helps users discover job opportunities, search and filter jobs, bookmark interesting positions, view detailed job information, apply for jobs, and post new opportunities.

The project focuses on providing a clean user experience, responsive design, useful job discovery features, and an automated CI/CD workflow.

---

## 🔗 Project Links

### 🌐 Live Demo
https://job-board-ai-topaz.vercel.app

### 💻 GitHub Repository
https://github.com/krvrvk222-a11y/job-board-ai

---

## 📌 Project Overview

JobBoard AI is a frontend job search platform built using HTML, CSS, and Vanilla JavaScript.

The application provides a complete job browsing experience where users can:

- Search for jobs
- Filter jobs by different criteria
- Sort job listings
- Browse jobs by category
- Explore jobs by company
- View complete job details
- Bookmark jobs
- Apply for jobs
- Share job links
- View recently visited jobs
- Post new jobs
- Delete user-posted jobs
- Switch between light and dark mode

The application uses browser LocalStorage to persist user-generated and user-specific data.

---

## ✨ Features

### 🔍 Job Search

Users can search for jobs using:

- Job title
- Company name
- Skills

The home page search also supports:

- Location filtering
- Job type filtering

Search results are displayed in the Latest Jobs section and the page smoothly scrolls to the results after the user submits a search.

---

### 💼 Browse Jobs

The Browse Jobs page provides a dedicated interface for exploring available job opportunities.

Users can filter jobs based on:

- Location
- Job type
- Experience level
- Salary range

The interface is designed to make job discovery simple and organized.

---

### ↕️ Job Sorting

Users can sort job listings using different options:

- Newest jobs
- Highest salary
- Lowest salary
- Company name
- Experience level

Sorting works together with the active search and filter results.

---

### 📄 Pagination

The job listing page uses pagination to avoid displaying every job at once.

Jobs are divided across multiple pages, helping improve:

- Readability
- Navigation
- Page organization
- User experience

---

### 🏷️ Popular Job Categories

The homepage includes popular job categories such as:

- Frontend Development
- Backend Development
- Artificial Intelligence
- Data Science
- UI / UX Design
- Cloud Computing

Category job counts are calculated dynamically from the available job data.

When users select a category, they are redirected to the jobs page where matching jobs are displayed.

If no jobs are available for the selected category, the application displays a clear empty-state message.

---

### 🏢 Company-Based Job Discovery

The Top Companies Hiring section allows users to explore opportunities from individual companies.

When a company is selected:

- The user is redirected to the jobs page
- Jobs from the selected company are filtered and displayed
- If no openings are available, a professional empty-state message is shown

This prevents users from reaching an empty or confusing page without feedback.

---

### ❤️ Job Bookmarks

Users can save interesting jobs using the bookmark button.

Bookmark functionality includes:

- Save a job
- Remove a saved job
- Visual bookmark state change
- Toast notification feedback
- Dedicated Bookmarks page

Bookmarks are stored using browser LocalStorage and remain available after page refresh.

---

### 📋 Detailed Job Information

Each job has a dedicated details page containing information such as:

- Job title
- Company
- Rating
- Location
- Salary
- Job type
- Experience
- Required skills
- Job description
- Responsibilities
- Requirements
- Industry
- Company size
- Applicant count
- Hiring status
- Company website

This gives users detailed information before applying for a position.

---

### 📝 Apply for Jobs

Users can apply for jobs through an application modal.

The application flow includes:

- Applicant form
- Form submission handling
- Duplicate application prevention

Applied job IDs are stored using LocalStorage.

---

### 🔗 Share Jobs

The job details page includes a Share Job feature.

The application:

1. Gets the current job page URL
2. Copies the URL to the clipboard
3. Displays a confirmation notification

A fallback copy method is included for environments where the modern Clipboard API is unavailable.

---

### 🕘 Recently Viewed Jobs

The application tracks jobs recently opened by the user.

Features include:

- Stores recently viewed job IDs
- Avoids duplicate entries
- Maintains a limited history
- Displays recently viewed job cards
- Excludes the currently viewed job

The browsing history is stored using LocalStorage.

---

### ➕ Post a Job

Users can create their own job listings using the Post a Job page.

The form collects information including:

- Job title
- Company name
- Location
- Job type
- Salary
- Experience
- Required skills
- Job description

New jobs are stored using LocalStorage and added to the application job listings.

---

### 🗑️ Delete User-Posted Jobs

Jobs created by users can be deleted.

The deletion flow includes:

- Confirmation before deletion
- Removal from LocalStorage
- Removal from the current jobs array
- Removal from bookmarks
- Automatic job list refresh
- Pagination adjustment
- Success notification

Only user-posted jobs display the delete option.

---

### 🌙 Dark Mode

The application includes a light and dark theme toggle.

The dark theme has been designed to maintain:

- Good text contrast
- Clear cards
- Visible form controls
- Readable filters
- Consistent buttons
- Accessible job details
- Professional empty states

The theme preference is handled through JavaScript.

---

### 🔔 Toast Notifications

Professional toast notifications provide immediate feedback for actions such as:

- Job saved
- Bookmark removed
- Job deleted
- Application submitted
- Duplicate application detected
- Job link copied

This improves usability by clearly confirming user actions.

---

### 💀 Skeleton Loading UI

Skeleton loaders are displayed before job cards are rendered.

They are used for:

- Featured Jobs
- Latest Jobs
- Browse Jobs

This creates a smoother loading experience and improves perceived performance.

---

### 🔎 Search Suggestions

The Browse Jobs page provides search suggestions while the user types.

Suggestions are generated using available:

- Job titles
- Company names

Users can select a suggestion to immediately filter the job results.

Suggestions can also be closed by:

- Clicking outside the suggestion area
- Pressing the Escape key

---

### 📱 Responsive Design

The application is designed to work across different screen sizes.

Responsive behavior includes:

- Flexible layouts
- Responsive job cards
- Adaptive grids
- Responsive forms
- Mobile-friendly buttons
- Flexible navigation structure
- Responsive job filters

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Styling, layouts, responsiveness, and dark mode |
| JavaScript | Search, filtering, sorting, pagination, bookmarks, and interactions |
| LocalStorage | Persistent browser-side storage |
| Git | Version control |
| GitHub | Source code hosting and CI workflow |
| GitHub Actions | Continuous Integration |
| Vercel | Application deployment |

---

## 📂 Project Structure

```text
job-board-ai/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── css/
│   ├── style.css
│   └── responsive.css
│
├── images/
│   └── Hero-image.png
│
├── js/
│   ├── app.js
│   ├── bookmarks.js
│   ├── data.js
│   ├── job-details.js
│   ├── jobs.js
│   ├── post-job.js
│   └── search.js
│
├── about.html
├── bookmarks.html
├── index.html
├── job-details.html
├── jobs.html
├── post-job.html
│
├── .gitignore
└── README.md
