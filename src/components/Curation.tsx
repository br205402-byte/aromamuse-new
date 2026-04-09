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
            아로마뮤즈 <span className="italic">셀렉션</span>
          </motion.h2>
          <p className="text-charcoal/60 max-w-xl mx-auto font-light">
            엄선된 도테라 프리미엄 제품들을 만나보세요. <br />
            당신의 일상을 바꾸는 작은 한 방울의 힘을 경험할 수 있습니다.
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
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif text-charcoal">{product.name}</h3>
                    {product.price && (
                      <span className="text-sage font-medium text-sm">{product.price}</span>
                    )}
                  </div>
                  <p className="text-sm text-charcoal/60 font-light line-clamp-2 mb-6">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <button className="text-xs font-bold uppercase tracking-widest text-charcoal/40 hover:text-sage transition-colors">
                      자세히 보기
                    </button>
                    {product.buyUrl && (
                      <a 
                        href={product.buyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-sage/10 text-sage rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-sage hover:text-white transition-all"
                      >
                        구매하기
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
