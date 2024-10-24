import React from 'react';
import { Upload } from 'lucide-react';

const FileUpload = ({ onFileSelect, accept = ".xlsx, .xls" }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload className="w-8 h-8 mb-4 text-gray-500" />
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500">Excel files only</p>
        </div>
        <input
          type="file"
          className="hidden"
          accept={accept}
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default FileUpload;