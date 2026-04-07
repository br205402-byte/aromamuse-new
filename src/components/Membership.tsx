import { motion } from 'motion/react';
import { UserPlus, ClipboardCheck, Gift, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    icon: UserPlus,
    title: '회원가입 시작',
    desc: '도테라 공식 홈페이지에서 회원가입을 진행합니다.',
    color: 'bg-sage/10 text-sage'
  },
  {
    icon: ClipboardCheck,
    title: '추천인 코드 입력',
    desc: '추천인 ID [17408567]를 입력하여 혜택을 받으세요.',
    color: 'bg-gold/10 text-gold'
  },
  {
    icon: Gift,
    title: '웰컴 혜택 수령',
    desc: '첫 구매 할인 및 아로마뮤즈 전용 가이드를 제공합니다.',
    color: 'bg-charcoal/5 text-charcoal'
  }
];

export default function Membership() {
  return (
    <section id="membership" className="py-24 px-6 bg-base overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-charcoal mb-6"
          >
            아로마뮤즈 <span className="italic text-sage">멤버십</span>
          </motion.h2>
          <p className="text-charcoal/60 max-w-xl mx-auto font-light">
            도테라의 프리미엄 혜택과 아로마뮤즈만의 특별한 케어를 경험해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-charcoal/5 -translate-y-12 z-0" />

          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 bg-white p-8 rounded-3xl soft-shadow text-center group"
            >
              <div className={`w-20 h-20 rounded-2xl ${step.color} mx-auto flex items-center justify-center mb-8 transition-transform duration-500 group-hover:rotate-6`}>
                <step.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-4">Step {idx + 1}. {step.title}</h3>
              <p className="text-charcoal/60 font-light text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-sage p-8 md:p-12 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h4 className="text-2xl md:text-3xl font-serif mb-2">지금 바로 시작하세요</h4>
            <p className="text-white/80 font-light">추천인 코드: <span className="font-bold text-white underline decoration-gold underline-offset-4">17408567</span></p>
          </div>
          <button className="px-10 py-4 bg-white text-sage rounded-full font-bold hover:bg-gold hover:text-white transition-all flex items-center gap-2 group">
            도테라 가입하러 가기
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
