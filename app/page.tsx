import BottomNavigation from "@/components/navigation/BottomNavigation";
import TopNavigation from "@/components/navigation/TopNavigation";
import MainSection from "@/components/section/MainSection";

export default function Home() {
  return (
    <main className="h-screen">
      <TopNavigation />
      <MainSection />
      <BottomNavigation />
    </main>
  );
}
