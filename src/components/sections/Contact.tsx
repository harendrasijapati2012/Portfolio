import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
        <ContactForm />
      </div>
    </section>
  );
}