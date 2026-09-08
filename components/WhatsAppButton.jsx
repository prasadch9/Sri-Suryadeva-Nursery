export default function WhatsAppButton() {
  // Replace the placeholder number with the nursery's real WhatsApp number.
  const whatsappNumber = "919493112522";
  const message = encodeURIComponent(
    "Hello Sri Suryadeva Nursery, I would like to know about your plants."
  );

  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Sri Suryadeva Nursery on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span>◔</span>
    </a>
  );
}