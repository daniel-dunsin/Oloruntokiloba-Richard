import React, { ReactElement } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMap,
  FaPhone,
  FaShare,
  FaSmileWink,
  FaWhatsapp,
} from "react-icons/fa";
import Title from "../components/Title";
import { ContactContainer } from "../styles/pages/Contact.styled";

const contactDetails: {
  icon: ReactElement;
  title: string;
  desc?: string;
  socialIcons?: { icon: ReactElement; url: string }[];
}[] = [
  {
    icon: <FaMap />,
    title: "Address",
    desc: "Federal University of Agriculture Abeokuta",
  },
  {
    icon: <FaPhone />,
    title: "Phone",
    desc: "+2348156261295",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    desc: "tokilobakayode23@gmail.com",
  },
  {
    icon: <FaShare />,
    title: "Social",
    socialIcons: [
      { icon: <FaFacebook />, url: "https://facebook.com" },
      { icon: <FaWhatsapp />, url: "https://wa.me/2348156261295" },
      {
        icon: <FaLinkedin />,
        url: "https://linkedin.com/in/oloruntokiloba-kayode-060099234",
      },
      { icon: <FaInstagram />, url: "https://instagram.com" },
    ],
  },
];

const Contact = () => {
  return (
    <ContactContainer>
      <header>
        <Title text="Contact Me!" />
        <p>
          You're looking for a skilled designer? Well, the struggle is over, i'm
          here{" "}
          <span>
            <FaSmileWink />
          </span>
        </p>
      </header>

      <div className="contacts-container">
        <div className="contact-details">
          {contactDetails.map((contact, index: number) => {
            return (
              <article key={index} className="single-contact-detail">
                <div className="icon-container">{contact.icon}</div>
                <div className="details">
                  <h3>{contact.title}</h3>
                  <p>{contact?.desc}</p>
                  {contact?.socialIcons && (
                    <div className="social-icons-container">
                      {contact.socialIcons.map((icon, index: number) => {
                        return (
                          <a href={icon.url} key={index}>
                            {icon.icon}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
        <div className="inputs-container">
          <div className="input">
            <label>Name</label>
            <input type={"text"} placeholder="Name" />
          </div>
          <div className="input">
            <label>Email</label>
            <input type={"email"} placeholder="Email" />
          </div>
          <div className="input">
            <label>Message</label>
            <textarea placeholder="Message..." />
          </div>
          <button>Send Message</button>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;
