import React from "react";

export function Product(props) {
    const id = props.id;
    const name = props.name;
    const category = props.category;
    const price = props.price;

    const handleAddBtnClicked = e=> {
        props.onAddClick(id);
    }
    return (
        <>
            <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/HKOFQYa.jpeg" alt=""/>
            </div>
            <div className="col">
                <div className="row text-muted">{category}</div>
                <div className="row">{name}</div>
            </div>
            <div className="col text-center price">{price}원</div>
            <div className="col text-end action">
                <button className="btn btn-small btn-outline-dark" onClick={handleAddBtnClicked}>추가</button></div>
        </>
    )
}