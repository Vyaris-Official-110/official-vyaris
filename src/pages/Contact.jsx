import { ContactHero } from '../components/contact-sections/ContactHero';
import { ContactInfo } from '../components/contact-sections/ContactInfo';
import { ContactForm } from '../components/contact-sections/ContactForm';
import { ContactMap } from '../components/contact-sections/ContactMap';

export const Contact = () => {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <ContactHero />

            {/* Main Content */}
            <section className="relative py-24 lg:py-32">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Main Card */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
                        <div className="grid lg:grid-cols-12">
                            {/* Left Side - Info */}
                            <div className="lg:col-span-5 bg-zinc-950 p-8 lg:p-12">
                                <ContactInfo />
                            </div>

                            {/* Right Side - Form */}
                            <div className="lg:col-span-7 p-8 lg:p-12">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <ContactMap />
        </div>
    );
};
