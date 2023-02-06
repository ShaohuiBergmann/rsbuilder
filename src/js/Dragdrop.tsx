import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "bootstrap/dist/css/bootstrap.min.css";
const JSZip = require("jszip");
const zip = new JSZip();
const unzipFile = (fileName: File[]) => {
	zip.loadSync(fileName).then((result: []) => {
		// zip.file(result)
		console.log(result);
	});
};

///////////////////////////////
const Dragdrop = () => {
	const [fileCollects, setFilesCollects] = useState([]);
	const onDrop = useCallback((files: object) => {
		console.log(files);
	}, []);

	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
		onDrop,
		multiple: false,
	});

	unzipFile(acceptedFiles);

	const files = acceptedFiles.map((file) => (
		<li key={file.name}>{file.name}</li>
	));
	return (
		<section
			{...getRootProps()}
			className={
				"d-flex flex-column h-75 justify-content-center align-items-center border-dashed border-2 border-warning rounded-2 "
			}
		>
			<input {...getInputProps()} />
			<p>Drag 'n' drop some files here, or click to select files</p>
			<ul>{files}</ul>
			<button>unzip</button>
		</section>
	);
};

export default Dragdrop;
