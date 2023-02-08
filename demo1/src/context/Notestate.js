import NoteContext from "./Notecontext";

const Notestate = (props)=> {

const state = 
{
    "name": "divyang",
    "classs":"BSC.IT"
}

    return(
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default Notestate;