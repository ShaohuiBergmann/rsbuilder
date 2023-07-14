import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "bootstrap/dist/css/bootstrap.min.css";
const JSZip = require("jszip");
const zip = new JSZip();

///////////////////////////////
const Dragdrop = () => {
	const [fileNames, setFilenames] = useState([]);
	const onDrop = useCallback((acceptedFiles: File) => {
		console.log(acceptedFiles);
		// acceptedFiles.forEach((file) => {
		// 	const reader = new FileReader();
		// 	reader.onabort = () => console.log("file reading was aborted");
		// 	reader.onerror = () => console.log("file reading has failed");
		// 	reader.onload = () => {
		// 		// Do whatever you want with the file contents
		// 		const binaryStr = reader.result;
		// 		console.log(binaryStr);
		// 		fs.writeFile("test.zip", binaryStr, function (err) {
		// 			if (err === undefined) {
		// 				console.log("Success");
		// 			} else {
		// 				console.log("Oops");
		// 			}
		// 		});
		// 	};
		// 	reader.readAsArrayBuffer(file);
		// });

		console.log("onDrop", acceptedFiles);
		setFilenames(acceptedFiles);
	}, []);
	console.log("onDrop", fileNames);
	const { acceptedFiles, getRootProps, getInputProps, open } = useDropzone({
		onDrop,
		multiple: true,
		noDragEventsBubbling: true,
		noClick: true,
	});

	// const unzipFile = (file: File) => {
	// 	console.log(file);
	// 	zip.loadAsync(file).then((zipFile: { files: any }) => {
	// 		Object.keys(zipFile.files).forEach((fileName) => {
	// 			zipFile.files[fileName].async("string").then((fileData: String) => {
	// 				console.log("fileData", fileData); // These are your file contents
	// 			});
	// 		});
	// 	});
	// };
	// unzipFile(acceptedFiles);
	return (
		<section
			{...getRootProps()}
			className="col-4 d-flex flex-column text-center justify-content-center align-items-center shadow  rounded "
		>
			<input {...getInputProps()} />
			<p>
				Drag 'n' drop some files here,
				<button className="btn btn-secondary" type="button" onClick={open}>
					or click here to open File Dialog
					see some changes
				</button>
			</p>

			{fileNames.length > 0 &&
				fileNames.map((fileName, i) => {
					return (
						<label key={i}>
							<input type={"checkbox"} key={i} />
							{fileName.name}
						</label>
					);
				})}
		</section>
	);
};

export default Dragdrop;
