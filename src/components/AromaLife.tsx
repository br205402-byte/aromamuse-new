import { motion } from 'motion/react';
import { BLOG_POSTS } from '@/constants';
import { ArrowUpRight } from 'lucide-react';

export default function AromaLife() {
  return (
    <section id="blog" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">Aroma Life</span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal leading-tight">
              향기로운 일상을 위한<br />
              <span className="italic">아로마 라이프 가이드</span>
            </h2>
          </div>
          <button className="text-sm font-bold uppercase tracking-widest text-charcoal/40 hover:text-sage transition-colors flex items-center gap-2 group">
            전체 보기
            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
              onClick={() => post.link && window.open(post.link, '_blank')}
            >
              <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 soft-shadow relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest text-charcoal">Read More</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-sage">
                  <span>{post.category}</span>
                  <div className="w-1 h-1 rounded-full bg-charcoal/20" />
                  <span className="text-charcoal/40">{post.date}</span>
                </div>
                <h3 className="text-2xl font-serif text-charcoal group-hover:text-sage transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-charcoal/60 font-light line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
