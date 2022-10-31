import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <div className="w-full bg-white sticky top-0 z-50">
      <Navbar fluid={true} rounded={false} className="py-6 w-[90%] mx-auto">
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            BlossomBooks
          </span>
        </Navbar.Brand>
        {/* <div className="flex md:order-2"> */}
        {/* <Button>Get started</Button> */}
        <Navbar.Toggle />
        {/* </div> */}
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
