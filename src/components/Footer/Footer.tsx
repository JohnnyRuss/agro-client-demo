import { Link } from "react-router-dom";
import * as Styled from "./footer.styled";

type FooterT = {};

const Footer: React.FC<FooterT> = () => {
  return (
    <Styled.Footer>
      <p>&copy;Agro. All Rights Reserved.</p>

      <div>
        <Link to={""}>ჩვენს შესახებ</Link>
      </div>
    </Styled.Footer>
  );
};

export default Footer;
