import Image from "next/image";
import UploadForm from "@/components/UploadForm";

export default function Home() {
  return (
    <>
      <div className="text-center">
        <UploadForm />
      </div>
    </>
  );
}
