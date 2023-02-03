import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "bootstrap/dist/css/bootstrap.min.css";

const Dragdrop = () => {
	const onDrop = useCallback((files: object) => {
		console.log(files);
	}, []);
	const {
		acceptedFiles,
		getRootProps,
		getInputProps,
		isDragAccept,
		isDragReject,
	} = useDropzone({
		onDrop,
		multiple: false,
		accept: {
			"application/zip": [".zip"],
		},
	});
	return (
		<section
			{...getRootProps()}
			className={
				"d-flex flex-column h-full justify-content-center align-items-center border-dashed border-2 border-warning rounded-2 " +
				(isDragReject === true ? "border-danger" : "") +
				(isDragAccept === true ? "border-safe" : "")
			}
		>
			<input {...getInputProps()} />
			{isDragReject ? (
				<p>Sorry, only ZIP files supported</p>
			) : (
				<p>Drag 'n' drop some files here, or click to select files</p>
			)}

			<button>unzip</button>
		</section>
	);
};

export default Dragdrop;
