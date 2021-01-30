import React from "react";
import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
// import React from 'react'
import CollaborativeNotebook from "./interview-doc/collaborative-notebook";
function InterviewList ()  {
    return (
        <div >
            {/* ??? */}
            {/* {CollaborativeNotebook} */}
            {/* <CollaborativeNotebook/> */}
            <Link to={`/interview-doc/collaborative-notebook`} innerRef={CollaborativeNotebook}>Collaborative notebook</Link>
            {/* <Route path='/interview-doc/collaborative-notebook' component={CollaborativeNotebook}></Route> */}
        </div>
    );
};

export default InterviewList;