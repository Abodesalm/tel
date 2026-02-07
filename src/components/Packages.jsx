import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Check, Crown, Star, Briefcase, Users, User, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const packages = [
    {
        name: 'باقة شخصية',
        nameEn: 'Personal',
        price: '750',
        speed: '2',
        icon: User,
        features: ['سرعة 2 ميغابايت', 'دعم فني', 'تركيب مجاني'],
        popular: false,
        gradient: 'from-slate-500 to-slate-600',
    },
    {
        name: 'باقة عائلية',
        nameEn: 'Family',
        price: '1000',
        speed: '3',
        icon: Users,
        features: ['سرعة 3 ميغابايت', 'دعم فني 24/7', 'تركيب مجاني'],
        popular: false,
        gradient: 'from-blue-500 to-blue-600',
    },
    {
        name: 'باقة رجال أعمال',
        nameEn: 'Business',
        price: '1250',
        speed: '4',
        icon: Briefcase,
        features: ['سرعة 4 ميغابايت', 'دعم فني أولوية', 'تركيب مجاني'],
        popular: true,
        gradient: 'from-emerald-500 to-emerald-600',
    },
    {
        name: 'باقة فضية',
        nameEn: 'Silver',
        price: '1500',
        speed: '5',
        icon: Star,
        features: ['سرعة 5 ميغابايت', 'دعم فني VIP', 'تركيب مجاني'],
        popular: false,
        gradient: 'from-gray-400 to-gray-500',
    },
    {
        name: 'باقة ذهبية',
        nameEn: 'Gold',
        price: '2000',
        speed: '8',
        icon: Crown,
        features: ['سرعة 8 ميغابايت', 'دعم فني VIP', 'تركيب مجاني', 'أولوية الصيانة'],
        popular: true,
        gradient: 'from-telecom-red to-telecom-orange',
    },
    {
        name: 'باقات مخصصة',
        nameEn: 'Custom',
        price: 'حسب الطلب',
        speed: '∞',
        icon: Sparkles,
        features: ['سرعة مخصصة', 'حلول للشركات', 'عقود خاصة', 'دعم مخصص'],
        popular: false,
        gradient: 'from-purple-500 to-pink-500',
        isCustom: true,
    },
];

export const Packages = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const openWhatsApp = (packageName) => {
        const message = encodeURIComponent(`مرحباً، أريد الاشتراك في ${packageName}`);
        window.open(`https://wa.me/963982450249?text=${message}`, '_blank');
    };

    return (
        <section
            id="packages"
            ref={ref}
            className="py-24 relative overflow-hidden"
            data-testid="packages-section"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-telecom-red/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-telecom-red/10 text-telecom-red font-tajawal text-sm mb-4">
                        الأسعار
                    </span>
                    <h2 className="font-cairo font-bold text-3xl sm:text-4xl lg:text-5xl mb-4" data-testid="packages-title">
                        باقات <span className="gradient-text">الإنترنت</span>
                    </h2>
                    <p className="font-tajawal text-foreground/70 max-w-2xl mx-auto text-base sm:text-lg">
                        اختر الباقة المناسبة لاحتياجاتك واستمتع بإنترنت ضوئي مستقر
                    </p>
                </motion.div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {packages.map((pkg, index) => {
                        const Icon = pkg.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative group ${pkg.popular ? 'md:-translate-y-4' : ''}`}
                                data-testid={`package-card-${pkg.nameEn.toLowerCase()}`}
                            >
                                {/* Popular Badge */}
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                        <span className="px-4 py-1 rounded-full bg-gradient-to-r from-telecom-red to-telecom-orange text-white font-tajawal text-sm">
                                            الأكثر طلباً
                                        </span>
                                    </div>
                                )}

                                <div className={`h-full p-8 rounded-2xl bg-card border transition-all duration-300 overflow-hidden ${
                                    pkg.popular 
                                        ? 'border-telecom-red shadow-xl shadow-telecom-red/20' 
                                        : 'border-border hover:border-telecom-red/50 hover:shadow-lg'
                                }`}>
                                    {/* Glow effect for popular */}
                                    {pkg.popular && (
                                        <div className="absolute inset-0 bg-gradient-to-br from-telecom-red/10 to-telecom-orange/10" />
                                    )}

                                    <div className="relative z-10">
                                        {/* Icon & Name */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-cairo font-bold text-xl text-foreground">
                                                    {pkg.name}
                                                </h3>
                                                <span className="font-tajawal text-sm text-foreground/50">
                                                    {pkg.nameEn}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Speed */}
                                        <div className="flex items-baseline gap-2 mb-2">
                                            <Zap className="w-5 h-5 text-telecom-orange" />
                                            <span className="font-cairo font-bold text-2xl text-foreground">
                                                {pkg.speed}
                                            </span>
                                            <span className="font-tajawal text-foreground/70">
                                                {pkg.isCustom ? '' : 'ميغابايت/ثانية'}
                                            </span>
                                        </div>

                                        {/* Price */}
                                        <div className="mb-6">
                                            {pkg.isCustom ? (
                                                <span className="font-cairo font-bold text-3xl gradient-text">
                                                    {pkg.price}
                                                </span>
                                            ) : (
                                                <div className="flex items-baseline gap-2">
                                                    <span className="font-cairo font-bold text-4xl gradient-text">
                                                        {pkg.price}
                                                    </span>
                                                    <span className="font-tajawal text-foreground/70">
                                                        ل.س/شهرياً
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Features */}
                                        <ul className="space-y-3 mb-8">
                                            {pkg.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3 font-tajawal text-foreground/80">
                                                    <Check className="w-5 h-5 text-telecom-red flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA Button */}
                                        <Button
                                            onClick={() => openWhatsApp(pkg.name)}
                                            className={`w-full py-6 rounded-xl font-tajawal font-medium transition-all ${
                                                pkg.popular 
                                                    ? 'gradient-btn text-white hover:scale-105' 
                                                    : 'bg-foreground/10 hover:bg-foreground/20 text-foreground'
                                            }`}
                                            data-testid={`package-cta-${pkg.nameEn.toLowerCase()}`}
                                        >
                                            اشترك الآن
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};