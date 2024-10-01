'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
// import 'react-quill/dist/quill.snow.css'; // Import Quill styles


// const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });


export default function HtmlEditor() {
  const [content, setContent] = useState('');


  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      [{ align: [] }],
      [{ color: [] }],
      ['code-block'],
      ['clean'],
    ],
  };


  const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'align',
    'color',
    'code-block',
  ];


  const handleEditorChange = (newContent: React.SetStateAction<string>) => {
    setContent(newContent);
  };


  return (
      <div className="h-96 w-auto flex items-center flex-col">
        {/* <QuillEditor */}
          {/* //   value={content}
          //   onChange={handleEditorChange}
          //   modules={quillModules}
          //   formats={quillFormats}
          //   className=" rounded-md border-gray-50  w-[50%] h-[50%] mt-10 bg-white"
          // /> */}
      </div>
  );
}