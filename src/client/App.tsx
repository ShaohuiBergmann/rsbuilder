import React from "react";
import Dragdrop from "../client/Dragdrop";
import Filelist from "../client/Filelist";
import Buttons from "../client/Buttons";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	return (
		<div className="container vw-100 vh-100 ">
			<div className="row mt-3 mb-3 w-100 h-75 d-flex justify-content-evenly ">
				<Dragdrop />
				<Filelist />
			</div>
			<div className="row">
				<Buttons />
			</div>
		</div>
	);
};

export default App;
