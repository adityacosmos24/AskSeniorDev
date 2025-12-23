export type AskASeniorTab = {
    id: string;
    title: string;
    leftContent: {
        description?: string;
        type: "image"|"visualizer";
        image: string;
    };
    rightContent: {
        items: {
            image: string;
            title: string;
            description: string;
        }[];
        
        button:{
            ctaText: string;
            image:string;
        }
    };
};

export const askASeniorData: AskASeniorTab[] = [
    {
        id: "dsa",
        title: "Online Assessment (DSA)",
        leftContent: {
            type: "visualizer",
            image: "/dfsbfsgraph.png"
        },
        rightContent: {
           
            items: [
                { 
                     image: "/AI.png",
                    title: "AI Roadmaps",
                    description: `Topic-wise paths covering every concept to finish a topic.`,
                },
                {
                     image: "/Ccode.png",
                    title: "Concepts + Code",
                    description: "Clear explanations with runnable code.",
                },
                {
                     image: "/problemc.png",
                    title: "Problems by Concept",
                    description: "Curated sets to master each idea.",
                },
                {
                     image: "/OAc.png",
                    title: "Final OA Challenge",
                    description: "A topic-specific assessment to validate mastery.",
                },
            ],
            button:{
                ctaText: "Explore DSA Roadmaps",
                image:"/whitestar.png"
            }
        },
    },
    {
        id: "system",
        title: "Dev & System Design",
        leftContent: {
            type:"image",
            image: "/apiimg.png",
        },
        rightContent: {
            
            items: [
                {
                    image: "/mtrack.png",
                    title: "Mentor-Led Tracks",
                    description: "Backend & System Design guided by industry mentors.",
                },
                {
                    image: "/roadmap.png",
                    title: "Roadmaps per Topic",
                    description: "APIs, databases, caching, messaging, scaling.",
                },
                {
                    image: "/ccomcept.png",
                    title: "Concepts + Code",
                    description: "Practical walkthroughs from theory to implementation.",
                },
                {
                    image: "/project.png",
                    title: "Projects",
                    description: "Portfolio-ready builds with best practices.",
                },
            ],
             button:{
                 ctaText: "Build with Mentors",
                image:"/whitestar.png"
             }
           
        },
    },
    {
        id: "premium",
        title: "Premium Membership",
        leftContent: {
            type:"image",
            image: "/images/coming-soon.png",
        },
        rightContent: {
            items: [],
             button:{
                ctaText: "Explore DSA Roadmaps",
                image:""
             }
            
        },
    },
];
