import React, {createContext, useState} from "react";
import Birinchi from "./components/Birinchi";


export const MyContext = createContext ();


function App() {
    //todo || usestate hooks
    const [active, setActive] = useState (true)
    const [color, setColor] = useState ('white')

    //todo eski qiymati true bolmasin
    function toggleModal() {
        setActive (prev => !prev)
    }


    return (



            <MyContext.Provider value={{active:active,color:color,setColor:setColor}}>


                <div className={'container mt-3'}>
                    <button className={'btn btn-danger my-3'} onClick={toggleModal}>Toggle</button>
                    <div className="col-md-6">
                        <Birinchi/>
                    </div>

                </div>
            </MyContext.Provider>


    )
}

export default App;
