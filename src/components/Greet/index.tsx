
type GreetProps={
    name?:string
}

export const Greet=(props:GreetProps)=>{

    const {name}=props

    return(
        <div>Hello {name} </div>
    )
}