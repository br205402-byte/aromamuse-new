import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1615485240384-552e400a9c24?auto=format&fit=crop&q=80&w=2000"
          alt="Essential Oil Background"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-base/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-sage uppercase bg-white/50 backdrop-blur-sm rounded-full border border-white/30">
            Premium Wellness Experience
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-charcoal leading-[1.1] mb-8">
            자연의 치유력을 담은<br />
            <span className="italic text-sage">우아한 향기 여정</span>
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            아로마뮤즈는 도테라의 순수한 에센셜 오일과 함께<br />
            당신의 일상에 깊은 휴식과 영감을 선사합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-4 bg-sage text-white rounded-full overflow-hidden transition-all hover:shadow-lg hover:shadow-sage/20">
              <span className="relative z-10 flex items-center gap-2 font-medium">
                나만의 향기 여정 시작하기
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-charcoal translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 bg-white/40 backdrop-blur-md text-charcoal border border-white/50 rounded-full hover:bg-white/60 transition-all font-medium">
              브랜드 스토리 보기
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-px h-12 bg-charcoal/20" />
      </motion.div>
    </section>
  );
}
