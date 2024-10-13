
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle ,DarkThemeToggle} from "flowbite-react";


export function DefaultHeader() {
    return (
        <Navbar  >
            <NavbarBrand as={Link} href="https://flowbite-react.com">
                
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="#" active>
                    Home
                </NavbarLink>
                <NavbarLink as={Link} href="#">
                    About
                </NavbarLink>
                <NavbarLink href="#">Services</NavbarLink>
                <NavbarLink href="#">Pricing</NavbarLink>
                <NavbarLink href="#">Contact</NavbarLink>
            </NavbarCollapse>
            <DarkThemeToggle />
        </Navbar>
    )
}







export function DefaultFooter() {
    return (
        <h1>FOOTER</h1>
    )
}