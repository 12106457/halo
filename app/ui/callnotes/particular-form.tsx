"use client";

import React, { useRef, useState } from "react";
import { poppins } from "@/app/fonts/fonts";
import { AddCallNotesProps, CallNotesDataModel } from "@/app/models/callnotes";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

interface FileData {
  name: string;
  file: File;
  url: string;
}

const ParticularForm: React.FC<AddCallNotesProps> = ({ notes, onSave }) => {
  const [particular, setParticular] = useState(notes.particulars.details);

  const handleDataChange = (event: any, editor: any) => {
    const data = editor.getData(); // Use the editor parameter to get the data
    setParticular(data); // Update the state with CKEditor data
  };

  const saveForm = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Save Particular Form ", particular);

    const newData: CallNotesDataModel = {
      ...notes,
      particulars: {
        details: particular, // Update only the details
      },
    };
    console.log(newData);
    onSave(newData);
  };

  const [files, setFiles] = useState<FileData[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Ref for the file input

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(Array.from(event.target.files));
    }
  };

  const handleFileUpload = () => {
    const uploadedFiles = selectedFiles.map((file) => ({
      name: file.name,
      file: file,
      url: URL.createObjectURL(file),
    }));
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    setSelectedFiles([]); // Clear the selected files state
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the file input field
    }
  };

  const handleFileDelete = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const handleFileOpen = (fileUrl: string) => {
    window.open(fileUrl, "_blank");
  };

  const handleFileDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };

  const columns: ColDef[] = [
    {
      headerName: "File Name",
      field: "name",
      sortable: true,
      filter: true,
      flex: 1,
    },
    {
      headerName: "Open",
      field: "open",
      cellRenderer: (params: any) => (
        <button onClick={() => handleFileOpen(params.data.url)}>Open</button>
      ),
      flex: 1,
    },
    {
      headerName: "Download",
      field: "download",
      cellRenderer: (params: any) => (
        <button
          onClick={() => handleFileDownload(params.data.url, params.data.name)}
        >
          Download
        </button>
      ),
      flex: 1,
    },
    {
      headerName: "Delete",
      field: "delete",
      cellRenderer: (params: any) => (
        <button onClick={() => handleFileDelete(params.data.name)}>
          Delete
        </button>
      ),
      flex: 1,
    },
  ];

  return (
    <div className="flex-row pl-[20px] pr-[20px] h-fit relative">
      <div className="w-full mb-[40px]">
        <CKEditor
          editor={ClassicEditor}
          data={particular}
          onChange={handleDataChange}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "|",
              "link",
              "bulletedList",
              "numberedList",
              "|",
              "blockQuote",
              "insertTable",
              "|",
              "undo",
              "redo",
            ],
          }}
        />
      </div>
      <div className="flex justify-center items-center relative bottom-0 left-1 right-1 w-full h-[50px] mb-[40px]">
        <button
          className={`${poppins.className} antialiased w-[150px] h-12 rounded-[25px] font-medium text-white bg-bgColor2 hover:bg-bgColor1`}
          onClick={saveForm}
        >
          Save
        </button>
      </div>

      <div>
        <div className="flex justify-center items-center">

        <input
          type="file"
          multiple
          onChange={handleFileSelect}
          ref={fileInputRef} // Attach the ref to the input field
          />
        <button onClick={handleFileUpload} className={`${poppins.className} antialiased w-[150px] h-12 rounded-[25px] font-medium text-white bg-lime-600 hover:bg-lime-800`}>Upload Files</button>

          </div>
        {files.length > 0 && (
          <div
            className="ag-theme-alpine"
            style={{ width: "100%", marginTop: "20px" }}
          >
            <AgGridReact
              rowData={files}
              columnDefs={columns}
              domLayout="autoHeight"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ParticularForm;
