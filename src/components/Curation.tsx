import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '@/constants';
import { cn } from '@/lib/utils';

const CATEGORIES = ['전체', '감정 케어', '면역력 강화', '홈케어'];

export default function Curation() {
  const [activeCategory, setActiveCategory] = useState('전체');

  const filteredProducts = activeCategory === '전체' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 px-6 bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-charcoal mb-6"
          >
            당신을 위한 <span className="italic">큐레이션</span>
          </motion.h2>
          <p className="text-charcoal/60 max-w-xl mx-auto font-light">
            일상의 순간마다 필요한 자연의 에너지를 테마별로 만나보세요.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-6 py-2 rounded-full text-sm font-medium transition-all border',
                activeCategory === cat 
                  ? 'bg-sage text-white border-sage shadow-md' 
                  : 'bg-white text-charcoal/60 border-charcoal/10 hover:border-sage/30'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-2xl overflow-hidden soft-shadow hover-lift"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-sage rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-charcoal mb-2">{product.name}</h3>
                  <p className="text-sm text-charcoal/60 font-light line-clamp-2">
                    {product.description}
                  </p>
                  <button className="mt-6 text-xs font-bold uppercase tracking-widest text-gold hover:text-sage transition-colors flex items-center gap-2">
                    자세히 보기
                    <div className="w-4 h-px bg-current" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
