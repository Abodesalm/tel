import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';

const branches = [
    {
        name: 'حي العرفي',
        phone: '0982450249',
        description: 'فرعنا في حي العرفي',
    },
    {
        name: 'حي الجبيلة',
        phone: '0937122720',
        description: 'فرعنا في حي الجبيلة',
    },
    {
        name: 'حي الموظفين',
        phone: '0994742450',
        description: 'فرعنا في حي الموظفين',
    },
    {
        name: 'حي العمال',
        phone: '0985249549',
        description: 'متواجدون في حي العمال لخدمتكم',
    },
];

export const Branches = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const openWhatsApp = (phone, branchName) => {
        const cleanPhone = phone.replace(/^0/, '963');
        const message = encodeURIComponent(`مرحباً، أتواصل معكم من فرع ${branchName}`);
        window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');
    };

    const callPhone = (phone) => {
        window.open(`tel:${phone}`, '_self');
    };

    return (
        <section
            id="branches"
            ref={ref}
            className="py-24 relative overflow-hidden"
            data-testid="branches-section"
        >
            {/* Background decorations */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-telecom-orange/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-telecom-red/10 text-telecom-red font-tajawal text-sm mb-4">
                        مواقعنا
                    </span>
                    <h2 className="font-cairo font-bold text-3xl sm:text-4xl lg:text-5xl mb-4" data-testid="branches-title">
                        <span className="gradient-text">فروعنا</span> في دير الزور
                    </h2>
                    <p className="font-tajawal text-foreground/70 max-w-2xl mx-auto text-base sm:text-lg">
                        نتواجد في أربعة أحياء رئيسية لنكون أقرب إليك
                    </p>
                </motion.div>

                {/* Branches Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {branches.map((branch, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                            data-testid={`branch-card-${index}`}
                        >
                            <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-telecom-red/50 transition-all duration-300 hover:shadow-xl hover:shadow-telecom-red/5">
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-telecom-red to-telecom-orange flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <MapPin className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="font-cairo font-bold text-xl mb-2 text-foreground">
                                            {branch.name}
                                        </h3>
                                        <p className="font-tajawal text-foreground/70 mb-4">
                                            {branch.description}
                                        </p>

                                        {/* Phone */}
                                        <div className="flex items-center gap-2 mb-4">
                                            <Phone className="w-4 h-4 text-telecom-red" />
                                            <span 
                                                className="font-tajawal text-foreground/80 cursor-pointer hover:text-telecom-red transition-colors"
                                                onClick={() => callPhone(branch.phone)}
                                                dir="ltr"
                                            >
                                                {branch.phone}
                                            </span>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex gap-3">
                                            <Button
                                                onClick={() => openWhatsApp(branch.phone, branch.name)}
                                                className="flex-1 gradient-btn text-white font-tajawal rounded-lg hover:scale-105 transition-transform"
                                                data-testid={`branch-whatsapp-${index}`}
                                            >
                                                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                                </svg>
                                                واتساب
                                            </Button>
                                            <Button
                                                variant="outline"
                                                onClick={() => callPhone(branch.phone)}
                                                className="font-tajawal rounded-lg border-foreground/20 hover:border-telecom-red hover:text-telecom-red"
                                                data-testid={`branch-call-${index}`}
                                            >
                                                <Phone className="w-4 h-4 ml-2" />
                                                اتصل
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};