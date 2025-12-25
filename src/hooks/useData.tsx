import React from 'react'

export const useData = () => {

    const images: string[] = [`img/Screenshot 2025-12-21 175547.png`, 'img/Screenshot 2025-12-21 175601.png', 'img/Screenshot 2025-12-21 175615.png', 'img/Screenshot 2024-05-26 211211.png','img/Screenshot 2025-12-25 104842.png'];
    const projectsTitles: string[] = ['Task List', 'Gift Search', 'Movies Search', 'Sport Platform','Scrumble Words Game']
    const skills: string[] = ["React", "TypeScript", "UI/UX Design", "Animation", 'C#', 'Database', 'Tailwind', 'Git', 'Azure']
    const gitHubLinks: string[] = ["", "", "https://github.com/Ing-MedranoLuis/MoviesAPI", 'https://github.com/Ing-MedranoLuis/Sportplatform','https://github.com/Ing-MedranoLuis/ScrumbleWordsGame']
     const viewLinks: string[] = ["https://taskingmedrano.netlify.app/", "https://preeminent-melba-8c4048.netlify.app/", "https://moviesapiconsult.netlify.app/", '','https://scrumblewordgames.netlify.app/' ]
        const socialMedias: string[] = ['https://www.linkedin.com/feed/', 'https://github.com/Ing-MedranoLuis?tab=repositories', 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox']
   
    const detailsProjects: string[] = [
        'Simple website designed for saving, completing, and deleting tasks, with a minimalist design but excellent functionality',
        'Custom gitf query, direct API queries, no repeated queries where the cache is managed with previous searches, keeping the app fluid without unnecessary requests',
        'Search for movies by category, with an intuitive and minimalist fully responsive design',
        'Sport Platform, based on the MLB website, full-stack with repository implementation, LINQ queries to databases using C#, JavaScript, Bootstrap, CSS, and .NET 8']
   
    return { images, projectsTitles, skills, gitHubLinks, viewLinks, socialMedias,detailsProjects }
}
