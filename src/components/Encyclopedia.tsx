import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SYMPTOMS } from '@/constants';
import { Search, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Encyclopedia() {
  const [selectedSymptom, setSelectedSymptom] = useState(SYMPTOMS[0]);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-5">
            <span className="text-sage font-medium tracking-widest uppercase text-sm mb-4 block">Aroma Encyclopedia</span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">
              증상별 <span className="italic">에센셜 오일</span><br />활용 백과
            </h2>
            <p className="text-charcoal/60 mb-10 font-light text-lg">
              불면증부터 소화불량까지, 일상의 불편함을 자연의 향기로 다스리는 방법을 확인해보세요.
            </p>

            <div className="space-y-4">
              {SYMPTOMS.map((symptom) => (
                <button
                  key={symptom.id}
                  onClick={() => setSelectedSymptom(symptom)}
                  className={cn(
                    'w-full text-left p-6 rounded-2xl transition-all border flex items-center justify-between group',
                    selectedSymptom.id === symptom.id
                      ? 'bg-sage/5 border-sage/20 shadow-sm'
                      : 'bg-transparent border-charcoal/5 hover:border-sage/20'
                  )}
                >
                  <span className={cn(
                    'text-lg font-medium transition-colors',
                    selectedSymptom.id === symptom.id ? 'text-sage' : 'text-charcoal/60'
                  )}>
                    {symptom.name}
                  </span>
                  <div className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center transition-all',
                    selectedSymptom.id === symptom.id ? 'bg-sage text-white' : 'bg-charcoal/5 text-charcoal/30 group-hover:bg-sage/20 group-hover:text-sage'
                  )}>
                    <Search className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSymptom.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-base rounded-3xl p-8 md:p-12 h-full soft-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Info className="w-32 h-32" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-serif text-charcoal mb-8">
                    '{selectedSymptom.name}'을 위한 추천 솔루션
                  </h3>
                  
                  <div className="space-y-8">
                    {selectedSymptom.oils.map((oil, idx) => (
                      <div key={idx} className="flex gap-6 items-start">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gold font-serif text-xl shrink-0 shadow-sm">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="text-xl font-medium text-charcoal mb-2">{oil.name}</h4>
                          <p className="text-charcoal/60 leading-relaxed font-light">
                            {oil.usage}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 p-6 bg-white/50 rounded-2xl border border-white/50">
                    <p className="text-sm text-charcoal/50 italic">
                      * 에센셜 오일은 의약품이 아니며, 심각한 증상의 경우 전문가와 상담하시기 바랍니다.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
