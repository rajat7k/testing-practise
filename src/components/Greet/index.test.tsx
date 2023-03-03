import { render, screen } from "@testing-library/react"
import { Greet } from "./index"


describe("Greet",()=>{

    
    test('Render Correctly',()=>{
        render(<Greet/>)
        const testElement= screen.getByText(/hello/i);
        expect(testElement).toBeInTheDocument()
    })
    
    test('Render with a name',()=>{
        render(<Greet name='Rajat' />)
        const testElement=screen.getByText('Hello Rajat')
        expect(testElement).toBeInTheDocument()
    })
})

export {}