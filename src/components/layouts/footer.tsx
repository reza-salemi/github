const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-4 dark:bg-gray-700 bg-blue-600 text-primary-content">
      <div>
        <p>Copyright © {footerYear} - All right reserved by Mohammad Reza Salemi</p>
      </div>
    </footer>
  );
};

export default Footer;