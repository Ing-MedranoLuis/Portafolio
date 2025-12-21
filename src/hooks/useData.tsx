import React from 'react'

export const useData = () => {

    const images: string[] = [`src/img/Screenshot 2025-12-21 094723.png`, '/src/img/Screenshot 2025-12-21 095326.png', 'src/img/Screenshot 2025-12-21 095517.png', 'src/img/WhatsApp Image 2025-12-21 at 10.39.40 AM.jpeg'];
    const projectsTitles: string[] = ['Task List', 'Gift Search', 'Movies Search', 'Sport Platform']
    const skills: string[] = ["React", "TypeScript", "UI/UX Design", "Animation", 'C#', 'Database', 'Tailwind', 'Git', 'Azure']
    const gitHubLinks: string[] = ["", "", "https://github.com/Ing-MedranoLuis/MoviesAPI", 'https://github.com/Ing-MedranoLuis/Sportplatform']
     const viewLinks: string[] = ["https://taskingmedrano.netlify.app/", "https://preeminent-melba-8c4048.netlify.app/", "https://moviesapiconsult.netlify.app/", '' ]
    
    return { images,projectsTitles,skills ,gitHubLinks,viewLinks}
}
