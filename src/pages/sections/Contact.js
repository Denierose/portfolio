import { Container } from "react-bootstrap";
import SocialLinks from "../../components/SocialLinks";
import { FaMagento} from "react-icons/fa";


const Contact = ()=> {

    return (
        <Container className="my-5 d-flex flex-column align-items-center text-center">
            <h1 className="fw-bold display-4">Message<span style={{color: "#F5F5DC"}}>Me</span></h1>
            <p>Feel free to reach out to me on my social media below.</p>
            <a href="mailto:dele.monsanto.up@phinmaed.com" className="text-decoration-none text-light">
                <FaMagento/> dele.monsanto.up@phinmaed.com
            </a>
            <SocialLinks />
        </Container>
    );
}

export default Contact;