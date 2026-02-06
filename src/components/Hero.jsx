import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Wifi, Zap, Globe } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const scrollToPackages = () => {
        const element = document.querySelector('#packages');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            ref={ref}
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            data-testid="hero-section"
        >
            {/* Background Image with Parallax */}
            <motion.div 
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1734126650058-623935bab140?crop=entropy&cs=srgb&fm=jpg&q=85')`,
                    }}
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                <motion.div
                    animate={{ 
                        y: [0, -30, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-[10%] w-20 h-20 rounded-full bg-telecom-red/20 blur-xl"
                />
                <motion.div
                    animate={{ 
                        y: [0, 20, 0],
                        rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/3 left-[15%] w-32 h-32 rounded-full bg-telecom-orange/20 blur-xl"
                />
                <motion.div
                    animate={{ 
                        y: [0, -20, 0],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-1/4 right-[20%] w-24 h-24 rounded-full bg-telecom-red/15 blur-xl"
                />
            </div>

            {/* Content */}
            <motion.div 
                style={{ opacity }}
                className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    {/* Logo Badge */}
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass mb-8 bg-background">
                        <Wifi className="w-5 h-5 text-telecom-red" />
                        <span className="font-tajawal text-sm text-white/80">
                            خدمات الإنترنت الفضائي في دير الزور
                        </span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-cairo font-bold text-4xl sm:text-5xl lg:text-7xl mb-6 leading-tight space-y-4"
                    data-testid="hero-title"
                >
                    <span className="text-foreground">الإنترنت من الفضاء</span>
                    <br/>
                    <span className="gradient-text">إلى منزلك</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="font-tajawal text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-12"
                    data-testid="hero-subtitle"
                >
                    اتصال سريع ومستقر وموثوق في مدينة دير الزور
                    <br />
                    تيلكوم - شريكك الأمثل للاتصال بالعالم
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button
                        onClick={scrollToPackages}
                        className="gradient-btn text-white font-tajawal font-medium px-8 py-6 text-lg rounded-full hover:scale-105 transition-transform"
                        data-testid="hero-cta-packages"
                    >
                        <Zap className="w-5 h-5 ml-2" />
                        استعرض الباقات
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                        className="font-tajawal font-medium px-8 py-6 text-lg rounded-full border-telecom-red/50 hover:bg-telecom-red/10 hover:border-telecom-red"
                        data-testid="hero-cta-contact"
                    >
                        <Globe className="w-5 h-5 ml-2" />
                        تواصل معنا
                    </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
                >
                    {[
                        { number: '4', label: 'فروع' },
                        { number: '6', label: 'باقات' },
                        { number: '24/7', label: 'دعم فني' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="font-cairo font-bold text-3xl sm:text-4xl gradient-text">
                                {stat.number}
                            </div>
                            <div className="font-tajawal text-sm text-foreground/60">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <button
                    className="flex flex-col items-center cursor-pointer p-4 hover:bg-white/5 rounded-lg transition-colors"
                    onClick={() => document.querySelector('#why-us').scrollIntoView({ behavior: 'smooth' })}
                    data-testid="scroll-indicator"
                >
                    <span className="font-tajawal text-sm text-foreground/50 mb-2">اكتشف المزيد</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-6 h-6 text-telecom-red" />
                    </motion.div>
                </button>
            </motion.div>
        </section>
    );
};