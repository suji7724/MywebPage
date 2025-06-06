function Footer() {
  return (
    <footer className="bg-primary text-white py-4 shadow-t">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-200 dark:text-gray-100">© 2025 Sujit Shah. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a
            href="https://github.com/suji7724"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition"
            title="GitHub"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a
            href="https://x.com/SujitSh69511458"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition"
            title="Twitter"
          >
            <i className="fab fa-x-twitter text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sujit-shah-965247251/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;