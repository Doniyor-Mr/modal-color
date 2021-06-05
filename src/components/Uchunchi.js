import React,{useContext} from 'react';
import {MyContext} from "../App";



function Uchunchi() {

    //todo || value qiymat bop keladi app.jsdan
    // icida active setcolor color bor
    const value = useContext(MyContext)

    // buttonga nom beriladi
    const colors = ['white','green','blue','red','cyan']

    //todo || button bosilganda ozgaradi
    function changeColor(color){
      value.setColor(color)
    }

    const modalStyle ={
        backgroundColor:value.color
    }


    return (
        <div>
            {
                value.active ?
                    <div className={'card'} style={modalStyle}>

                     <div className="card-header">
                         <h1>Active</h1>
                     </div>
                        <div className="card-body">
                            <h1>modal....</h1>
                        </div>
                     </div>
                    : <h1> modal ishlamadi false</h1>
            }
            <br/>
            <hr/>

            {
                colors.map((item,id) =>
                    // change color ichiga itemdan ranglani nomi keladi
                    <button onClick={() =>changeColor(item)} className={'btn btn-dark m-2'} key={id} >{item}</button>
                )
            }
        </div>


    );
}

export default Uchunchi;
