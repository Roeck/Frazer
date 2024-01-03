import Image from "next/image";
import UploadForm from "@/components/UploadForm";
import PageHeaders from "@/components/PageHeaders";
import DemoSection from "@/components/DemoSection";

export default function Home() {
  return (
    <>
      <PageHeaders
        h1Text={"Add epic captions to your videos"}
        h2Text={"Just upload your video and we will do the rest"}
      />
      <div className="text-center">
        <UploadForm />
      </div>
      <DemoSection />
    </>
  );
}
