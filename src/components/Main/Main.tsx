import React, {CSSProperties, useState} from "react";
import "./Main.scss";
import {PropagateLoader} from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const Main: React.FC = () => {
    let [loading, setLoading] = useState(true);

    const hidePreloader = () => {
        setLoading(false)
    }

    return <>
        <PropagateLoader
            className={loading ? "": "hidden"}
            color={"#3f37c7"}
            loading={loading}
            size={20}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
        <iframe
            className={loading ? "hidden": ""}
            onLoad={hidePreloader}
            width="100%"
            height="100%"
            src="https://script.google.com/macros/s/AKfycbwy3ne6DgPHtq_bBEXA7vBYE4IZZWNcMs5CHThnSZPSn3D3mROsGmg-fB9Qu0frfyb5/exec"
        ></iframe>
    </>;
}

export default Main;