import React from "react"

import Masthead from "./Masthead"
import Footer from "../Layout/Footer"

const Main = (props) => 
    (
        <div>
            <Masthead/>
                {/*{React.cloneElement(props.children, props)}*/}
            <Footer />
        </div>
    );

export default Main;