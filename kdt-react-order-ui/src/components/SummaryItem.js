import React from "react";

export function SummaryItem({name, count}) {
    return(
    <div className="row">
        <h6 className="p-0">{name}<span className="badge bg-dark text-">{count}</span></h6>
    </div>
    )
}