
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, DarkThemeToggle } from "flowbite-react";
import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";




export function DefaultHeader() {
    return (
        <Navbar  >
            <NavbarBrand as={Link} href="/">

                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-[27px]">Apple Books</span>
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
        <Footer  className=" rounded-none">
            <div className="w-full">
                <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                    <div>
                        <FooterTitle title="Company" />
                        <FooterLinkGroup col>
                            <FooterLink href="#">About</FooterLink>
                            <FooterLink href="#">Careers</FooterLink>
                            <FooterLink href="#">Brand Center</FooterLink>
                            <FooterLink href="#">Blog</FooterLink>
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <FooterTitle title="help center" />
                        <FooterLinkGroup col>
                            <FooterLink href="#">Discord Server</FooterLink>
                            <FooterLink href="#">Twitter</FooterLink>
                            <FooterLink href="#">Facebook</FooterLink>
                            <FooterLink href="#">Contact Us</FooterLink>
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <FooterTitle title="legal" />
                        <FooterLinkGroup col>
                            <FooterLink href="#">Privacy Policy</FooterLink>
                            <FooterLink href="#">Licensing</FooterLink>
                            <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <FooterTitle title="download" />
                        <FooterLinkGroup col>
                            <FooterLink href="#">iOS</FooterLink>
                            <FooterLink href="#">Android</FooterLink>
                            <FooterLink href="#">Windows</FooterLink>
                            <FooterLink href="#">MacOS</FooterLink>
                        </FooterLinkGroup>
                    </div>
                </div>
                <div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-between">
                    <FooterCopyright href="https://www.linkedin.com/in/elmehdi-elgheryb/" by="el mehdi el gheryb" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">

                        <FooterIcon href="https://github.com/77Mehdi" icon={BsGithub} />
                        <FooterIcon href="https://www.linkedin.com/in/elmehdi-elgheryb/" icon={BsLinkedin} />
                        <FooterIcon href="#" icon={BsTwitter} />
                        <FooterIcon href="#" icon={BsFacebook} />
                        <FooterIcon href="#" icon={BsDribbble} />
                    </div>
                </div>
            </div>
           
        </Footer>
    )
}




