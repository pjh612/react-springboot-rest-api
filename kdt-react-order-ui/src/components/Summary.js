import {SummaryItem} from "./SummaryItem";
import React, {useState} from "react";

export function Summary({items = [], onOrderSubmit}) {
    const [order, setOrder] = useState({
        email:"",address:"",postcode:""
    });
    const totalPrice = items.reduce((prev, curr) => prev + (curr.price * curr.count), 0);
    const handleEmailChanged = (e) => {setOrder({...order, email : e.target.value})}
    const handleAddressChanged = (e) => {setOrder({...order, address : e.target.value})}
    const handlePostcodeChanged = (e) => {setOrder({...order, postcode : e.target.value})}

    const handleSubmit = (e) => {
       if (order.address === "" || order.email === "" || order.postcode ==="") {
           alert("입력값을 확인해 주세요!");
       }else {
           onOrderSubmit(order);
       }
    }

    return (<>
            <div>
                <h5 className="m-0 p-0"><b>Summary</b></h5>
            </div>
            {
                items.map(v => <SummaryItem key={v.id} name={v.name} count={v.count}/>)
            }
            <hr/>

            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">이메일</label>
                    <input type="email" className="form-control mb-1" value={order.email} onChange= {handleEmailChanged} id="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">주소</label>
                    <input type="text" className="form-control mb-1" value={order.address} onChange= {handleAddressChanged}  id="address"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="postcode" className="form-label">우편번호</label>
                    <input type="text" className="form-control" value={order.postcode} onChange= {handlePostcodeChanged} id="postcode"/>
                </div>
                <div>당일 오후 2시 이후의 주문은 다음날 배송을 시작합니다.</div>
            </form>
            <div className="row pt-2 pb-2 border-top">
                <h5 className="col">총금액</h5>
                <h5 className="col text-end">{totalPrice}</h5>
            </div>
            <button className="btn btn-dark col-12" onClick={handleSubmit}>결제하기</button>
        </>
    );
}