import {useEffect, useRef, useState} from "react"
// UseRefTest auch in App.jsx importieren!

const UseRefTest = () => {
    const inputRef = useRef()
    const divRef = useRef()


    //Bonus wofür nützlich:
    const [refresh, setRefresh] = useState(true)
    const tier = useRef("Hund")
    let tier2 = "Hund"

    
    //==============================================
    
    useEffect(() => {
        console.log(inputRef.current?.value);
        console.log(divRef);  
    }, [])

    //==============================================

    useEffect(() => {
        console.log(tier);
        console.log(tier2);  
    }, [])

    const refreshValues = () => {
        tier.current = "vogel"
        tier2 = "vogel"
        console.log(tier);
        console.log(tier2);
    }

    return(
        <div ref= {divRef}>
            <input ref={inputRef} value="dies ist ein festes value">

            </input>
            <button onClick={()=>setRefresh(prev => !prev)}>Refresh</button>
            <button onClick={refreshValues}>Refresh Values</button>
        </div>
    )
}
export default UseRefTest