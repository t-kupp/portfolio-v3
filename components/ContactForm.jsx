import { Loader2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Error sending message. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:w-2/3">
      <div className="flex flex-col">
        <label htmlFor="email">Your Email</label>
        <input
          required
          className="border-border border p-1"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message">Message</label>
        <textarea
          required
          className="border-border border p-1"
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-background text-foreground border-border hover:text-background hover:bg-foreground mt-4 cursor-pointer self-start border px-2 py-1 transition-[background-color,color,border-color] duration-500 hover:!duration-200 active:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? (
          <p className="flex items-center gap-4">
            Sending <Loader2 className="animate-spin" />
          </p>
        ) : (
          <p>Send</p>
        )}
      </button>
    </form>
  );
}
