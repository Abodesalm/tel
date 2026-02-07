import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wifi, Headphones, Wrench, Banknote, Award } from 'lucide-react';

const features = [
    {
        icon: Wifi,
        title: 'إنترنت مستقر',
        description: 'أكثر ما يميزنا هو استقرار الاتصال على مدار الساعة بدون انقطاع',
        gradient: 'from-telecom-red to-telecom-orange',
        colSpan: 'md:col-span-2',
    },
    {
        icon: Headphones,
        title: 'دعم على مدار الساعة',
        description: 'فريق دعم فني متواجد 24/7 لخدمتك',
        gradient: 'from-telecom-orange to-yellow-500',
        colSpan: 'md:col-span-1',
    },
    {
        icon: Wrench,
        title: 'تركيب مجاني',
        description: 'فريقنا يقوم بتركيب الراوتر والصيانة مجاناً',
        gradient: 'from-rose-500 to-telecom-red',
        colSpan: 'md:col-span-1',
    },
    {
        icon: Banknote,
        title: 'أسعار مناسبة',
        description: 'باقات متنوعة تناسب جميع الميزانيات',
        gradient: 'from-green-500 to-emerald-600',
        colSpan: 'md:col-span-1',
    },
    {
        icon: Award,
        title: 'خبرة سنوات',
        description: 'سنوات من الخبرة في مجال الإنترنت',
        gradient: 'from-purple-500 to-indigo-600',
        colSpan: 'md:col-span-1',
    },
];

export const WhyUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    return (
        <section
            id="why-us"
            ref={ref}
            className="py-24 relative overflow-hidden"
            data-testid="why-us-section"
        >
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-telecom-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-telecom-orange/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-telecom-red/10 text-telecom-red font-tajawal text-sm mb-4">
                        مميزاتنا
                    </span>
                    <h2 className="font-cairo font-bold text-3xl sm:text-4xl lg:text-5xl mb-4" data-testid="why-us-title">
                        لماذا <span className="gradient-text">تلكم؟</span>
                    </h2>
                    <p className="font-tajawal text-foreground/70 max-w-2xl mx-auto text-base sm:text-lg">
                        نحن نقدم أفضل خدمات الإنترنت الضوئي والفضائي في دير الزور مع التزامنا بالجودة والموثوقية
                    </p>
                </motion.div> 

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`${feature.colSpan} group relative`}
                                data-testid={`feature-card-${index}`}
                            >
                                <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-telecom-red/50 transition-all duration-300 hover:shadow-xl hover:shadow-telecom-red/5 overflow-hidden">
                                    {/* Gradient blob */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
                                    
                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="font-cairo font-bold text-xl mb-3 text-foreground">
                                        {feature.title}
                                    </h3>
                                    <p className="font-tajawal text-foreground/70 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};