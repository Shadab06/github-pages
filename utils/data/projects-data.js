import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Drala',
        description: "Drala is a special cryptocurrency designed for use exclusively within specific private spaces like churches. It runs on a secure website built with MongoDB, Express.js, React, and Node.js. Transactions and interactions within this closed system are safe and confidential. The value of Drala coins is limited to these private locations to ensure privacy and controlled circulation. For security, technologies like Hyperledger Fabric or Quorum, which are known for their secure features in private networks, are used. These technologies provide access control, agreement mechanisms, and data privacy, meeting the strict needs of a private blockchain network. Drala aims to build trust and simplify transactions within its private community while keeping its cryptocurrency ecosystem exclusive and confidential.",
        tools: ['Express', 'MongoDB', 'React', 'Node'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: "/image/crefin.jpg",
    },
    {
        id: 2,
        name: 'InnovacioTech',
        description: 'I have designed and developed a full-stack web app for InnovacioTech, Innovacio Technologies highlights its expertise and innovation through its company website. Focusing on cutting-edge tech, it showcases successful projects in various domains, from web to mobile apps. The site emphasizes its AI and ML solutions, offering insights and decision-making capabilities. It also excels in AR and VR projects, providing immersive experiences. Committed to excellence and innovation, Innovacio continues to push boundaries in digital solutions.',
        tools: ['NextJS', 'Tailwind CSS', "NodeJS", "MySQL", "React"],
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://www.innovaciotech.com/',
        image: travel,
    },
    {
        id: 3,
        name: 'Medicine Stockist',
        description: 'My team built a Medicine Stock Management App. Medicine Stockist is a pharmacy management app with Inventory Management, Sales Tracking, Expiry Alerts, and Advanced Medicine Search features. Its user-friendly interface simplifies operations, while alerts for expiry and low stock levels prompt timely action. With offline access and reporting capabilities, it is a reliable solution for pharmacy management anytime, anywhere.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Nashbud',
        description: "Nashbud is a secure platform for genuine connections based on shared interests and passions. Users can connect authentically and privately, sharing fleeting moments and engaging in real-time conversations. Content security is strict, with no screenshots or downloads allowed. Stay updated on contacts' activities discreetly while controlling your digital footprint.",
        tools: ['NextJS', 'MongoDB', 'Express', 'React', "NodeJS"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
    
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },