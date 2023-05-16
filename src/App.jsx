import './App.css'
import '../public/style.css'
import {useEffect, useState} from "react"

//For Test

function Title(){
    let countInRow = Math.floor((document.documentElement.clientWidth - 480)/(180));
    let countInColumn = Math.floor((document.documentElement.clientHeight - 180)/(130));
    let arrTitle = [];
    //console.log(countInRow);
    //console.log(countInColumn);
    for (let i=0; i<countInColumn*countInRow; i++){
        arrTitle[i]=i;
    }

    return arrTitle.map((count, index ) => {
            return <div style={{
                flexBasis: `calc(100% / ${countInRow})`,
            }}
            ><div key={index} className="title" >
                <h3 className="h3"> ggggggggggggggggg </h3>
            </div></div>
    })

}

//For API

// function Title(){
//     let countInRow = Math.floor((document.documentElement.clientWidth - 480)/(180));
//     let countInColumn = Math.floor((document.documentElement.clientHeight - 180)/(130));
//     let arrTitle = [];
//     const postData = async () => {
//         try {
//             const response = await axios.post('https://example.com/api', {
//                 limit: countInRow*countInColumn,
//             });
//             arrTitle = response.data.toArray();
//         } catch (error) {
//             console.error(error);
//         }
//     }
//     //console.log(countInRow);
//     //console.log(countInColumn);
//     // for (let i=0; i<countInColumn*countInRow; i++){
//     //     arrTitle[i]=i;
//     // }
//
//     return arrTitle.map((count, index ) => {
//         return <div style={{
//             flexBasis: `calc(100% / ${countInRow})`,
//         }}
//         ><div key={index} className="title" >
//             <h3 className="h3"> {count} </h3>
//         </div></div>
//     })
//
// }

function debounce(fn, ms) {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}

function App() {

    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }, 250)

        window.addEventListener('resize', debouncedHandleResize)

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)

        }
    })


    return (
        <>
            <header className="header">

            </header>

            <div className="main">
            <div className="leftSide">

            </div>
                <div className="flexTitle">

                    <Title/>

            </div>

            <div className="rightSide">

            </div>
            </div>


            <footer className="footer">

            </footer>
        </>

    )
}

export default App
