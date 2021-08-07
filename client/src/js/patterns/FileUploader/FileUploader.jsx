import React, { useRef } from 'react';
import './file-uploader.scss';

const FileUploader = ({ onFileSelectError, onFileSelectSuccess }) => {
  const fileInputRef = useRef(null);

  const handleFileInput = (event) => {
    const file = event.target.files[0];
    if (file.size > 1024)
      onFileSelectError({ error: 'File size cannot exceed more than 1MB' });
    else onFileSelectSuccess(file);
  };

  const handleUploadFileIButtonClick = (event) => {
    event.preventDefault();
    fileInputRef.current && fileInputRef.current.click();
  };

  return (
    <div className='file-uploader'>
      <input
        type='file'
        name='image'
        onChange={handleFileInput}
        ref={fileInputRef}
        className='file-uploader__input'
      />
      <button
        onClick={handleUploadFileIButtonClick}
        className='file-uploader__button'
      >
        Upload Image
      </button>
    </div>
  );
};

export default FileUploader;
