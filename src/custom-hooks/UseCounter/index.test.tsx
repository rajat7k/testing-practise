import {  act, renderHook } from "@testing-library/react"
import { useCounter } from "."



describe("useCounter",()=>{


    test("should render the initial count",()=>{
        const {result}=renderHook(useCounter)
        expect(result.current.count).toBe(0)
    })

    test("should acept and render same initial count",()=>{
        const {result}=renderHook(useCounter,{
            initialProps:{
                initialCount:100
            }
        })

        expect(result.current.count).toBe(100)
    })

    test("should increment the count",()=>{
        const {result}=renderHook(useCounter)

        act(()=>result.current.increment())

        expect(result.current.count).toBe(1)
    })

    test("should decrement the count",()=>{
        const {result}=renderHook(useCounter,{
            initialProps:{
                initialCount:10
            }
        })

        act(()=>result.current.decrement())

        expect(result.current.count).toBe(9)
    })

})

export {}