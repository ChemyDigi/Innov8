export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 px-10">
      <div
        className="
          max-w-7xl mx-auto 
          flex flex-col md:flex-row 
          items-center md:items-center 
          justify-between 
          gap-6 md:gap-10
        "
      >
        {/* Logo */}
        <img src="/images/innov8logo.png" alt="Innov8" className="h-10" />

        {/* Links */}
        <div
          className="
          flex flex-col md:flex-row 
          items-center 
          gap-4 md:gap-10 
          text-sm
        "
        >
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/code-of-conduct" className="hover:underline">
            Code of Conduct
          </a>
          <a href="/terms-conditions" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
