export default function Contact() {
  return (
    <section className="py-16 px-6 max-w-3xl mx-auto" id="contact">
      <h3 className="text-2xl font-bold">Contact Us</h3>

      <form className="mt-6 grid gap-4">
        <input className="p-3 border rounded" placeholder="Your Name" />
        <input className="p-3 border rounded" placeholder="Email" />
        <textarea
          rows="4"
          className="p-3 border rounded"
          placeholder="Message"
        ></textarea>
        <button className="py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
