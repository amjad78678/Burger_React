import { render,screen } from "@testing-library/react"
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"


test('should contact page load', () => { 

    render(<ContactUs/>);

    const heading=screen.getByRole('heading');


    //ASSERTION
    expect(heading).toBeInTheDocument();

 })