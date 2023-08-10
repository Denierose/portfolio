import { FaGithub, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3 text-light">
      <Nav.Link href="https://github.com/Denierose">
        <FaGithub />
      </Nav.Link>
      <Nav.Link href="https://www.facebook.com/denierose.monsanto.9">
        <FaFacebook />
      </Nav.Link>
      <Nav.Link href="https://www.instagram.com/dennnieeee__/">
        <FaInstagram />
      </Nav.Link>
      <Nav.Link href="https://www.tiktok.com/@ooweeiii">
        <FaTiktok />
      </Nav.Link>
    </div>
  );
};

export default SocialLinks;