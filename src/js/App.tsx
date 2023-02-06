import React from "react";
import Dragdrop from "./Dragdrop";
import Filelist from "./Filelist";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	return (
		<div className="container w-100 h-75 border  border-warning">
			<div className="row w-100 h-100">
				<div className="col w-50 h-100">
					<Dragdrop />
				</div>
				<div className="col w-50 h-100">
					<Filelist />
				</div>
			</div>
		</div>
	);
};

export default App;
