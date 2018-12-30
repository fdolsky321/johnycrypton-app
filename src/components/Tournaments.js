import React from "react";

const Tournaments = props => (

    <form onSubmit={props.getTournaments}>
        <button>Get Tournaments</button>
    </form>
)
export default Tournaments;