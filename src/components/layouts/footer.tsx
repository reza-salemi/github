const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-4 bg-gray-700 text-primary-content">
      <div>
        <p>Copyright © {footerYear} - All right reserved by Mohammad Reza Salemi</p>
      </div>
    </footer>
  );
};

export default Footer;