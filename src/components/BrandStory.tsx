import { motion } from 'motion/react';

export default function BrandStory() {
  return (
    <section id="brand" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden soft-shadow">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1000"
                alt="Brand Story"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-sage/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gold/10 rounded-full blur-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">
              당신의 내면을 깨우는<br />
              <span className="italic">가장 순수한 자연의 울림</span>
            </h2>
            <div className="space-y-6 text-charcoal/70 leading-relaxed font-light text-lg">
              <p>
                '아로마뮤즈'는 단순한 향기를 넘어, 자연이 선사하는 치유의 에너지를 일상으로 연결합니다. 
                우리는 도테라의 CPTG 등급 에센셜 오일을 통해 몸과 마음의 균형을 찾는 여정을 안내합니다.
              </p>
              <p>
                뮤즈(Muse)가 예술가에게 영감을 주듯, 아로마뮤즈는 당신의 웰니스 라이프에 
                새로운 영감과 평온을 불어넣는 동반자가 되고자 합니다.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-serif text-sage mb-2">100%</h4>
                <p className="text-sm text-charcoal/60">Pure Therapeutic Grade</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-sage mb-2">50+</h4>
                <p className="text-sm text-charcoal/60">Global Sourcing Partners</p>
              </div>
            </div>

            {/* Product Category Quick Links */}
            <div className="mt-12 pt-12 border-t border-charcoal/5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-6">Main Categories</h4>
              <div className="flex flex-wrap gap-3">
                {['감정 케어', '면역력 강화', '홈케어'].map((cat) => (
                  <a
                    key={cat}
                    href="#products"
                    className="px-5 py-2 bg-base rounded-full text-xs font-medium text-charcoal/70 hover:bg-sage hover:text-white transition-all"
                  >
                    {cat}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
