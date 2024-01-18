import UploadForm from "@/components/UploadForm";
import PageHeaders from "@/components/PageHeaders";
import DemoSection from "@/components/DemoSection";
import { CrispProvider } from "@/components/Crisp-Provider";
import Footer from "@/components/Footer";

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
      <div style={{ paddingTop: "1.5rem" }}>
        <Footer />
      </div>
    </>
  );
}
