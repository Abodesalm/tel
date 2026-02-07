import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Wifi } from 'lucide-react';
import { Button } from './ui/button';

export const Header = ({ theme, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#hero', label: 'الرئيسية' },
        { href: '#why-us', label: 'لماذا نحن؟' },
        { href: '#packages', label: 'الباقات' },
        { href: '#branches', label: 'فروعنا' },
        { href: '#contact', label: 'تواصل معنا' },
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg' 
                    : 'bg-transparent'
            }`}
            data-testid="header"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div 
                        className="flex items-center gap-3"
                        whileHover={{ scale: 1.05 }}
                        data-testid="logo"
                    >
                        <div className="w-16 h-12 rounded-xl flex items-center justify-center">
                            <img className="w-26 h-auto text-white" src='/logo.png' />
                        </div>
                        <span className="font-cairo font-bold text-2xl gradient-text">
                            تلكم
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
                        {navLinks.map((link) => (
                            <motion.button
                                key={link.href}
                                onClick={() => scrollToSection(link.href)}
                                className="font-tajawal text-foreground/80 hover:text-telecom-red transition-colors relative group"
                                whileHover={{ y: -2 }}
                                data-testid={`nav-link-${link.href.replace('#', '')}`}
                            >
                                {link.label}
                                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-telecom-red transition-all group-hover:w-full" />
                            </motion.button>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="rounded-full"
                            data-testid="theme-toggle"
                        >
                            <AnimatePresence mode="wait">
                                {theme === 'dark' ? (
                                    <motion.div
                                        key="sun"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Sun className="w-5 h-5 text-yellow-400" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="moon"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Moon className="w-5 h-5 text-slate-700" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Button>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden rounded-full"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            data-testid="mobile-menu-toggle"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
                        data-testid="mobile-menu"
                    >
                        <nav className="flex flex-col py-4 px-4">
                            {navLinks.map((link, index) => (
                                <motion.button
                                    key={link.href}
                                    onClick={() => scrollToSection(link.href)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="font-tajawal text-foreground/80 hover:text-telecom-red py-3 text-right border-b border-border/50 last:border-0"
                                    data-testid={`mobile-nav-link-${link.href.replace('#', '')}`}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};