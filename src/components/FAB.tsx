import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FAB() {
  return (
    <motion.a
      href="https://pf.kakao.com"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#FEE500] text-[#3C1E1E] rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageCircle className="w-8 h-8" />
      <div className="absolute right-full mr-4 px-4 py-2 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        <p className="text-xs font-bold text-charcoal">실시간 카톡 상담</p>
      </div>
    </motion.a>
  );
}
