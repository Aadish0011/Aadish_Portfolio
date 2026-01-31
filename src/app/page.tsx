import GalaxyBackground from "@/components/GalaxyBackground";
import ChapterNav from "@/components/ChapterNav";
import ChapterIntro from "@/components/ChapterIntro";
import ChapterEducation from "@/components/ChapterEducation";
import ChapterSkills from "@/components/ChapterSkills";
import ChapterProjects from "@/components/ChapterProjects";
import ChapterExperience from "@/components/ChapterExperience";
import ChapterAchievements from "@/components/ChapterAchievements";
import ChapterClosing from "@/components/ChapterClosing";
import StoryProgress from "@/components/StoryProgress";
import AIAssistant from "@/components/AIAssistant";

export default function Home() {
    return (
        <main className="relative min-h-screen text-foreground bg-transparent selection:bg-accent-gold selection:text-black">
            {/* Animated Canvas Background */}
            <GalaxyBackground />

            <ChapterNav />
            <StoryProgress />

            <div className="relative z-10 scroll-container">
                <ChapterIntro />
                <ChapterEducation />
                <ChapterSkills />
                <ChapterProjects />
                <ChapterExperience />
                <ChapterAchievements />
                <ChapterClosing />
            </div>

            <AIAssistant />
        </main>
    );
}
