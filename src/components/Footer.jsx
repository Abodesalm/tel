import { motion } from 'framer-motion';
import { Wifi, Heart } from 'lucide-react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 border-t border-border" data-testid="footer">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <motion.div 
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.05 }}
                        data-testid="footer-logo"
                    >
                        <div className="w-12 h-10 rounded-xl flex items-center justify-center">
                            <img className="w-26 h-auto text-white" src='/logo.png' />
                        </div>
                        <span className="font-cairo font-bold text-xl gradient-text">
                            تيلكوم
                        </span>
                    </motion.div>

                    {/* Copyright */}
                    <div className="text-center md:text-right">
                        <p className="font-tajawal text-foreground/60 flex items-center justify-center md:justify-start gap-2">
                            صنع بـ <Heart className="w-4 h-4 text-telecom-red" /> في دير الزور
                        </p>
                        <p className="font-tajawal text-foreground/40 text-sm mt-1">
                            © {currentYear} تيلكوم. جميع الحقوق محفوظة.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex items-center gap-6">
                        {[
                            { label: 'الباقات', href: '#packages' },
                            { label: 'تواصل معنا', href: '#contact' },
                        ].map((link) => (
                            <button
                                key={link.href}
                                onClick={() => document.querySelector(link.href).scrollIntoView({ behavior: 'smooth' })}
                                className="font-tajawal text-foreground/60 hover:text-telecom-red transition-colors"
                                data-testid={`footer-link-${link.href.replace('#', '')}`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};