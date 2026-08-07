export const metadata = {
  title: "Privacy Policy & Terms & Conditions | Bliss spa Hadapsar Pune",
  description:
    "Read the Privacy Policy and Terms & Conditions of Bliss spa, Hadapsar Pune. Learn how we collect, use, and protect your information, along with our booking, cancellation, and service policies.",
};

export default function PrivacyTermsPage() {
  return (
    <main className="bg-white min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold uppercase tracking-[3px] text-white">
            Bliss spa
          </span>

          <h1 className="mt-6 text-5xl font-bold text-blue-600">
            Privacy Policy & Terms
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-600">
            Please read our Privacy Policy and Terms & Conditions before
            booking any spa or wellness services at Bliss spa,
            Hadapsar Pune.
          </p>
        </div>

        {/* Content */}

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Privacy Policy */}

          <section className="rounded-3xl bg-white p-10 shadow-xl">
            <h2 className="mb-8 border-b border-stone-300 pb-4 text-3xl font-bold text-blue-600">
              Privacy Policy
            </h2>

            <div className="space-y-6 text-gray-700 leading-8">

              <div>
                <h3 className="font-semibold text-blue-600">
                  Information We Collect
                </h3>

                <p>
                  We may collect your name, phone number, email address,
                  appointment details, and any information you voluntarily
                  provide while booking our spa services.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-600">
                  How We Use Your Information
                </h3>

                <p>
                  Your information is used only for appointment scheduling,
                  customer support, booking confirmations, promotional offers,
                  and improving our spa services.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-600">
                  Data Protection
                </h3>

                <p>
                  We maintain reasonable security measures to protect your
                  personal information from unauthorized access or disclosure.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-600">
                  Third-Party Services
                </h3>

                <p>
                  We do not sell or rent your personal information. Trusted
                  third-party providers may process booking or communication
                  services on our behalf.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-600">
                  Contact
                </h3>

                <p>
                  If you have any questions regarding this Privacy Policy,
                  please contact Bliss spa directly.
                </p>
              </div>

            </div>
          </section>

          {/* Terms */}

          <section className="rounded-3xl bg-white p-10 shadow-xl">
            <h2 className="mb-8 border-b border-stone-300 pb-4 text-3xl font-bold text-blue-600">
              Terms & Conditions
            </h2>

            <div className="space-y-6 text-gray-700 leading-8">

              <div>
                <h3 className="font-semibold text-blue-600">
                  Appointments
                </h3>

                <p>
                  We recommend booking appointments in advance to ensure your
                  preferred date and therapist are available.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-600">
                  Arrival Time
                </h3>

                <p>
                  Please arrive at least 10–15 minutes before your scheduled
                  appointment to complete the check-in process.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-600">
                  Cancellation Policy
                </h3>

                <p>
                  Appointments cancelled less than 2 hours before the scheduled
                  time may not be eligible for rescheduling.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-600">
                  Health Information
                </h3>

                <p>
                  Guests should inform therapists about any medical conditions,
                  allergies, pregnancy, or injuries before the treatment.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-600">
                  Personal Belongings
                </h3>

                <p>
                  Bliss spa is not responsible for lost or unattended
                  personal belongings.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-600">
                  Right to Refuse Service
                </h3>

                <p>
                  Management reserves the right to refuse service to anyone
                  displaying inappropriate behavior or violating spa policies.
                </p>
              </div>

            </div>
          </section>

        </div>

      </div>
    </main>
  );
}