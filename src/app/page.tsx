import LandingPage from "./views/LandingPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainLayout from "./components/layouts/MainLayout/MainLayout";
export default function Home() {
  return (
    <MainLayout>
      <LandingPage />
    </MainLayout>
  );
}
