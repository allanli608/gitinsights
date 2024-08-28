## Inspiration 🌈
Our team has all experienced the struggle of jumping into a pre-existing codebase and having to process how everything works before starting to add our own changes. This can be a daunting task, especially when commit messages lack detail or context. We also know that when it comes time to push our changes, we often gloss over the commit message to get the change out as soon as possible, not helping any future collaborators or even our future selves. We wanted to create a web app that allows users to better understand the journey of the product, allowing users to comprehend previous design decisions and see how a codebase has evolved over time. GitInsights aims to bridge the gap between hastily written commit messages and clear, comprehensive documentation, making collaboration and onboarding smoother and more efficient.


## What it does 💻
- Summarizes commits and tracks individual files in each commit, and suggests more accurate commit messages. 
- The app automatically suggests tags for commits, with the option for users to add their own custom tags for further sorting of data.
- Provides a visual timeline of user activity through commits, across all branches of a repository
Allows filtering commit data by user, highlighting the contributions of individuals


## How we built it ⚒️
The frontend is developed with Next.js, using TypeScript and various libraries for UI/UX enhancement. The backend uses Express.js , which handles our  API calls to GitHub and OpenAI. We used Prisma as our ORM to connect to a PostgreSQL database for CRUD operations. For authentication, we utilized GitHub OAuth to generate JWT access tokens, securely accessing and managing users' GitHub information. The JWT is  stored in cookie storage and sent to the backend API for authentication. We created a github application that users must all add onto their accounts when signing up. This allowed us to not only authenticate as our application on the backend, but also as the end user who provides access to this app. 


## Challenges we ran into ☣️☢️⚠️
Originally, we wanted to use an open source LLM, like LLaMa, since we were parsing through a lot of data but we quickly realized it was too inefficient, taking over 10 seconds to analyze each commit message. We also learned to use new technologies like d3.js, the github api, prisma, yeah honestly everything for me

## What we learned 🧠
Running LLMs locally saves you money, but LLMs require lots of computation (wow) and are thus very slow when running locally


## What's next for GitInsights
- Filter by tags, more advanced filtering and visualizations
- Adding webhooks to the github repository to enable automatic analysis and real time changes
- Implementing CRON background jobs, especially with the analysis the application needs to do when it first signs on an user, possibly done with RabbitMQ
- Creating native .gitignore files to refine the summarization process by ignoring files unrelated to development (i.e., package.json, package-lock.json, __pycache__). 
