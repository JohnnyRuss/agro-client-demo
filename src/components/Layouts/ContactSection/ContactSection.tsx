import {
  LocationIcon,
  EmailIcon,
  ViberIcon,
  WhatsUpIcon,
  PhoneIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
} from "@/components/Layouts/Icons";
import * as Styled from "./contactSection.styled";

type ContactT = {};

const ContactSection: React.FC<ContactT> = () => {
  return (
    <Styled.ContactSection>
      <div className="contact-box col-2">
        <span className="contact-box__icon">
          <LocationIcon />
        </span>

        <div className="contact-box__detail">
          <span>2715 ash dr. san jose, south dakota 83475</span>
        </div>
      </div>

      <div className="contact-box col-2">
        <span className="contact-box__icon">
          <EmailIcon />
        </span>

        <div className="contact-box__detail">
          <span>support@example.com</span>
        </div>
      </div>

      <div className="contact-box col-2">
        <span className="contact-box__icon">
          <PhoneIcon />
        </span>

        <div className="contact-box__detail">
          <span>+01234567889</span>
        </div>
      </div>

      <div className="contact-box col-2">
        <span className="contact-box__icon">
          <WhatsUpIcon />
        </span>

        <div className="contact-box__detail">
          <span>WhatsUp</span>
        </div>
      </div>

      <div className="contact-box col-2">
        <span className="contact-box__icon">
          <ViberIcon />
        </span>

        <div className="contact-box__detail">
          <span>Viber</span>
        </div>
      </div>

      <div className="contact-box col-2">
        <span className="contact-box__icon">
          <FacebookIcon />
        </span>

        <div className="contact-box__detail">
          <span>Facebook</span>
        </div>
      </div>

      <div className="contact-box col-3">
        <span className="contact-box__icon">
          <TwitterIcon />
        </span>

        <div className="contact-box__detail">
          <span>Twitter</span>
        </div>
      </div>

      <div className="contact-box col-3">
        <span className="contact-box__icon">
          <InstagramIcon />
        </span>

        <div className="contact-box__detail">
          <span>Instagram</span>
        </div>
      </div>
    </Styled.ContactSection>
  );
};

export default ContactSection;
