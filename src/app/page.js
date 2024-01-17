import UploadForm from "@/components/UploadForm";
import PageHeaders from "@/components/PageHeaders";
import DemoSection from "@/components/DemoSection";

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
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "17.6rem",
          fontStyle: "italic",
        }}
      >
        Made with 💙 by Rony Martins @ 2024
      </h1>
    </>
  );
}
