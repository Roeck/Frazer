import UploadForm from "@/components/UploadForm";
import PageHeaders from "@/components/PageHeaders";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";
import { CrispProvider } from "@/components/Crisp-Provider";

export default function Home() {
  return (
    <>
      <PageHeaders
        h1Text={"ADD SUBTITLES TO YOUR VIDEOS FOR FREE!"}
        h2Text={"Upload, edit and download your favorite result :)"}
      />
      <div className="text-center">
        <UploadForm />
      </div>
      <DemoSection />
      <CrispProvider />
      <div className="sm:mt-20 mt-4">
        <Footer />
      </div>
    </>
  );
}
