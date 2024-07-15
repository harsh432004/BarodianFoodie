// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/harshvaidya04/"
        target="_blank"
        title="Harsh Vaidya"
      >
        Vadodara Bucket List
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <a
        href="https://github.com/harshvaidya04"
        target="_blank"
        title="Pizza on Wheels Github Repository"
      >
        <strong>
          All Rights Reserved<span>@</span> <a href="#">Vadodara Bucket List </a>
        </strong>
      </a>
    </div>
  );
};

export default Footer;
