"use client";
import React from "react";
import uploadcare from "uploadcare-widget";
import Widget from "uploadcare-widget";
import "uploadcare-widget/uploadcare.lang.en.min.js";

type Props = {
  onUpload: (url: string) => any;
};

const UploadCareButton = ({ onUpload }: Props) => {
  const handleClick = () => {
    (uploadcare as any)
      .openDialog(null, {
        publicKey: "a9428ff5ff90ae7a64eb",
      })
      .done((fileInfo: any) => {
        if (fileInfo && fileInfo.cdnUrl) {
          onUpload(fileInfo.cdnUrl);
        }
      });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{
        padding: "10px 20px",
        background: "#2684FF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Upload File
    </button>
  );
};

export default UploadCareButton;
