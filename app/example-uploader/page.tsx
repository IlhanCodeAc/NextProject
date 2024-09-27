"use client";

import { UploadButton } from "@/utils/uploadthing";
import { ClientUploadedFileData } from "uploadthing/types";

type Props = {
  onUploadComplete: (url: string) => void;
};

export default function Uploader({ onUploadComplete }: Props) {
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        if (res && res.length > 0) {
          const fileUrl = res[0].url;
          onUploadComplete(fileUrl); // Pass the uploaded file URL back to the parent form
        }
      }}
      onUploadError={(error: Error) => {
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}
