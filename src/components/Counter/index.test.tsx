import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event"
import Counter from "."


describe("Counter",()=>{
    test("render correctly",()=>{
        render(<Counter/>)
        const counterElement=screen.getByRole('heading')
        expect(counterElement).toBeInTheDocument()
        
        const incrementBtn=screen.getByRole('button', {  name: /increment/i})
        expect(incrementBtn).toBeInTheDocument()

        const increaseByInputFeild=screen.getByRole('spinbutton');
        expect(increaseByInputFeild).toBeInTheDocument()

        const increaseByBtn=screen.getByRole('button', {  name: /increase by/i});
        expect(increaseByBtn).toBeInTheDocument()
    })


    test("render a count of 0",()=>{
        render(<Counter/>);
        const counterElement=screen.getByRole('heading')
        expect(counterElement).toHaveTextContent('0')
    })

    test("render a count  after multiple clicking the increment btn",async()=>{
        user.setup()
        render(<Counter/>);
        const incrementBtn=screen.getByRole('button', {  name: /increment/i})
        const counterElement=screen.getByRole('heading')
        for(let i=1;i<10;i++){
            await user.click(incrementBtn)
            expect(counterElement).toHaveTextContent(`${i}`)
        }       
    })

    test("render a count after clicking increas By btn",async()=>{
        user.setup();
        render(<Counter/>)
        

        const counterElement=screen.getByRole('heading')
        
        const increaseByInputFeild=screen.getByRole('spinbutton');

        const increaseByBtn=screen.getByRole('button', {  name: /increase by/i});


        await user.type(increaseByInputFeild,"10");
        expect(increaseByInputFeild).toHaveValue(10)

        await user.click(increaseByBtn);

        expect(counterElement).toHaveTextContent("10");

    })

})

export {}