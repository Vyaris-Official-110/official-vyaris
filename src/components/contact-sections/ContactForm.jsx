import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const InputField = ({ label, type = 'text', placeholder, required, name }) => (
    <div className="group">
        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 block mb-3">
            {label} {required && <span className="text-primary">*</span>}
        </label>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-primary transition-colors text-sm"
        />
    </div>
);

const SelectField = ({ label, options, required, name }) => (
    <div className="group">
        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 block mb-3">
            {label} {required && <span className="text-primary">*</span>}
        </label>
        <select
            name={name}
            required={required}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors text-sm appearance-none cursor-pointer"
        >
            <option value="">Select an option</option>
            {options.map((opt, i) => (
                <option key={i} value={opt.value}>{opt.label}</option>
            ))}
        </select>
    </div>
);

export const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            service: formData.get('service'),
            budget: formData.get('budget'),
            message: formData.get('message'),
            created_at: new Date().toISOString(),
        };

        try {
            const { error } = await supabase
                .from('contact_submissions')
                .insert([data]);

            if (error) throw error;

            setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
            e.target.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Sorry, there was an error sending your message. Please try again or contact us directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const services = [
        // { value: 'branding', label: 'Brand Strategy' },
        { value: 'web-design', label: 'Web Design & Development' },
        { value: 'mobile-app', label: 'Mobile App Development' },
        { value: 'marketing', label: 'Digital Marketing' },
        { value: 'ui-ux', label: 'UI/UX Design' },
        { value: 'other', label: 'Other' },
    ];

    // const budgets = [
    //     { value: '5k-10k', label: '$5,000 - $10,000' },
    //     { value: '10k-25k', label: '$10,000 - $25,000' },
    //     { value: '25k-50k', label: '$25,000 - $50,000' },
    //     { value: '50k+', label: '$50,000+' },
    // ];

    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-full mb-6">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-xs font-medium text-zinc-400">Quick Response Guaranteed</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Send us a message
                </h2>
                <p className="text-zinc-400">
                    Fill out the form below and we'll get back to you within 24 hours.
                </p>
            </div>

            {/* Status Message */}
            {submitStatus && (
                <div className={`p-4 rounded-xl border ${
                    submitStatus.type === 'success'
                        ? 'bg-green-500/10 border-green-500/20 text-green-400'
                        : 'bg-red-500/10 border-red-500/20 text-red-400'
                }`}>
                    <p className="text-sm">{submitStatus.message}</p>
                </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 flex-1">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                    <InputField
                        label="Your Name"
                        name="name"
                        placeholder="John Doe"
                        required
                    />
                    <InputField
                        label="Email Address"
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                    />
                </div>

                {/* Service & Budget Row */}
                <div className="grid md:grid-cols-2 gap-6">
                    <SelectField
                        label="Service Interested In"
                        name="service"
                        options={services}
                        required
                    />
                    <div className="group">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 block mb-3">
                            Project Budget
                        </label>
                        <textarea
                            name="budget"
                            placeholder="Enter your estimated budget or range..."
                            rows={1}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                        ></textarea>
                    </div>
                </div>

                {/* Message */}
                <div className="group">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 block mb-3">
                        Project Details <span className="text-primary">*</span>
                    </label>
                    <textarea
                        name="message"
                        placeholder="Tell us about your project, goals, and timeline..."
                        required
                        rows={5}
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                    ></textarea>
                </div>

                {/* Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                        type="checkbox"
                        className="mt-1 w-5 h-5 rounded border-zinc-700 bg-zinc-800 text-primary focus:ring-primary focus:ring-offset-0"
                    />
                    <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                        I agree to receive communications from Vyaris. You can unsubscribe at any time.
                    </span>
                </label>

                {/* Submit Button */}
                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-wider rounded-full hover:bg-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <span className="animate-pulse">Sending...</span>
                            </>
                        ) : (
                            <>
                                Send Message
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};
