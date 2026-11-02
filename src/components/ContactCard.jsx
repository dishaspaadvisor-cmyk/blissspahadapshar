    "use client";

    import { useState } from "react";
    import { MapPin, Phone, Mail, Clock } from "lucide-react";
    import { FaWhatsapp } from "react-icons/fa";

    export default function ContactCard() {
        const [formData, setFormData] = useState({
            name: "",
            phone: "",
            address: "",
            notes: "",
        });

        const [loading, setLoading] = useState(false);

        const handleChange = (e) => {
            setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
            }));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            setLoading(true);

            try {
                const response = await fetch(
                    "https://apibackend.mastercall.in/api/v1/web-leads/submit/",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            form_key: "frm_blissspa_970948",
                            name: formData.name,
                            phone: formData.phone,
                            address: formData.address,
                            notes: formData.notes,
                            submitted_from_url: window.location.href,
                        }),
                    }
                );

                const data = await response.json();

                if (response.ok) {
                    alert("Message sent successfully!");

                    setFormData({
                        name: "",
                        phone: "",
                        address: "",
                        notes: "",
                    });
                } else {
                    alert(data.message || "Something went wrong.");
                }
            } catch (error) {
                console.error(error);
                alert("Failed to submit form.");
            }

            setLoading(false);
        };

        return (
            <>
                {/* Form + Map */}
                <section className="max-w-7xl mx-auto bg-[#F8F3ED] px-6 py-20">
                    {/* Heading */}
                    <div className="mb-14 flex items-center gap-5">

                        <div className="h-px flex-1 bg-sky-500" />
                        <h2 className="text-3xl font-semibold uppercase tracking-[4px] text-blue-600">
                            CONTACT
                        </h2>
                        <div className="h-px flex-1 bg-sky-500" />
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-[#f5ece7] rounded-3xl shadow-xl p-8">
                            <h2 className="text-3xl font-bold text-blue-600 mb-8">
                                Send us a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border rounded-xl px-5 py-4 text-sky-500  outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full border rounded-xl px-5 py-4 text-sky-500  outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                                />

                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full border rounded-xl px-5 py-4 text-sky-500 outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                                />

                                <textarea
                                    rows={5}
                                    name="notes"
                                    placeholder="Your Message"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    required
                                    className="w-full border rounded-xl px-5 py-4 text-sky-500  outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-sky-500 hover:bg-black transition text-white py-4 rounded-xl font-semibold text-lg disabled:opacity-60"
                                >
                                    {loading ? "Sending..." : "Book Now"}
                                </button>
                            </form>
                        </div>

                        {/* Google Map */}
                        <div className="rounded-3xl overflow-hidden shadow-xl min-h-[400px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74496.14497560266!2d73.89719706729664!3d18.486776543039632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c39130eb8e81%3A0x97e96416e3248b1f!2sBlue%20Bliss%20Spa%20(Spa%20In%20Hadapsar)!5e1!3m2!1sen!2sin!4v1785161580790!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                className="border-0 w-full h-full"
                            />
                        </div>
                    </div>
                </section>

                {/* Contact Cards */}
                <section className="pb-10 px-6">
                    <div className="max-w-7xl mx-auto">

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

                            {/* Address */}
                            <div className="bg-white rounded-2xl shadow-md p-5 text-center border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#8B5A2B] flex items-center justify-center text-white">
                                    <MapPin size={22} />
                                </div>

                                <h3 className="text-lg font-semibold text-black mb-2">
                                    Address
                                </h3>

                                <p className="text-sm text-gray-600 leading-6">
                                    Shop No 43, FORTUNE ESTATES, Solapur Rd, Indraprashtha Society, Hadapsar, Pune, Maharashtra 411028
                                </p>

                            </div>

                            {/* Phone */}
                            <div className="bg-white rounded-2xl shadow-md p-5 text-center border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-600 flex items-center justify-center text-white">
                                    <Phone size={22} />
                                </div>

                                <h3 className="text-lg font-semibold text-black mb-2">
                                    Phone
                                </h3>

                                <a
                                    href="tel:+919970002561"
                                    className="block text-sm text-gray-600 hover:text-sky-500"
                                >
                                    +919970002561

                                </a>

                                <a
                                    href="https://wa.me/919970002561
    "
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1.5 text-sm font-medium text-green-700 hover:bg-green-600 hover:text-white transition"
                                >
                                    <FaWhatsapp size={16} />
                                    WhatsApp
                                </a>

                            </div>
                            <div className="bg-white rounded-2xl shadow-md p-5 text-center border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                    <Mail size={22} />
                                </div>

                                <h3 className="text-lg font-semibold text-black mb-2">
                                    Email
                                </h3>

                                <a
                                    href="mailto:bluelotusspa.hadapsar1@gmail.com"
                                    className="block w-full text-sm font-medium text-gray-600 break-all hover:text-sky-500"
                                >
                                    bluelotusspa.hadapsar1@gmail.com
                                </a>
                            </div>
                            {/* Opening Hours */}
                            <div className="bg-white rounded-2xl shadow-md p-5 text-center border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white flex items-center justify-center text-[#6D4A39]">
                                    <Clock size={22} />
                                </div>

                                <h3 className="text-lg font-semibold text-black mb-2">
                                    Hours
                                </h3>

                                <p className="text-sm text-gray-600">
                                    Monday - Sunday
                                </p>

                                <p className="mt-2 text-sm font-semibold text-black">
                                    10:00 AM - 11:00 PM
                                </p>

                            </div>

                        </div>

                    </div>
                </section>
            </>
        );
    }