"use client";

export default function ContactForm() {
  return (
    <div>
      {/* Title */}
      <h2 className="text-3xl font-bold text-brand mb-6">Inquiry Form</h2>

      {/* Subtitle */}
      <p className="text-lg leading-relaxed text-black mt-3 mb-12">
        We appreciate your interest in enterprise. For inquiries, kindly use the
        contact form below.
      </p>

      {/* Form */}
      <form className="space-y-10 text-black">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <label className="block text-sm font-medium mb-2">
              First Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:outline-none py-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Last Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:outline-none py-1"
              required
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <label className="block text-sm font-medium mb-2">
              Country <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:outline-none py-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              City <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:outline-none py-1"
              required
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <label className="block text-sm font-medium mb-2">
              Company <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:outline-none py-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Interested In <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:outline-none py-1"
              required
            />
          </div>
        </div>

        {/* Inquiry Message */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Type the Inquiry
          </label>
          <textarea
            rows={8}
            className="w-full border border-gray-300 focus:outline-none p-3"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-black text-white px-8 py-2 rounded-sm cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
