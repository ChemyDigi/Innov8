export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 px-10">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">

        {/* Logo */}
        <img
          src="/images/innov8logo.png"
          alt="Innov8"
          className="h-6"
        />

        {/* Links */}
        <div className="flex gap-10 text-sm">
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
