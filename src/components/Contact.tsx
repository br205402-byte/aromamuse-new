import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, MessageCircle, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    symptom: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', phone: '', symptom: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <span className="text-sage font-medium tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">
              당신만의 <span className="italic text-gold">향기 상담사</span><br />아로마뮤즈와 소통하세요
            </h2>
            <p className="text-charcoal/60 mb-12 font-light text-lg max-w-md">
              에센셜 오일 활용법이나 도테라 가입에 대해 궁금한 점이 있으신가요? 
              언제든 편하게 문의 남겨주시면 정성껏 답변해 드립니다.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-sage soft-shadow group-hover:bg-sage group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal/40 mb-1">Phone</h4>
                  <p className="text-xl font-medium text-charcoal">010-8896-2054</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-sage soft-shadow group-hover:bg-sage group-hover:text-white transition-all">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal/40 mb-1">KakaoTalk</h4>
                  <p className="text-xl font-medium text-charcoal">AromaMuse_Official</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-sage soft-shadow group-hover:bg-sage group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal/40 mb-1">Location</h4>
                  <p className="text-xl font-medium text-charcoal">Seoul, South Korea</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] soft-shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-1">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="성함을 입력해주세요"
                    className="w-full px-6 py-4 bg-base rounded-2xl border border-transparent focus:border-sage/30 focus:bg-white transition-all outline-none"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-1">Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="연락처를 입력해주세요"
                    className="w-full px-6 py-4 bg-base rounded-2xl border border-transparent focus:border-sage/30 focus:bg-white transition-all outline-none"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-1">Interest / Symptom</label>
                <select
                  className="w-full px-6 py-4 bg-base rounded-2xl border border-transparent focus:border-sage/30 focus:bg-white transition-all outline-none appearance-none"
                  value={formState.symptom}
                  onChange={(e) => setFormState({ ...formState, symptom: e.target.value })}
                >
                  <option value="">관심 분야를 선택해주세요</option>
                  <option value="insomnia">불면증 / 수면 케어</option>
                  <option value="stress">스트레스 / 감정 케어</option>
                  <option value="immunity">면역력 / 건강 관리</option>
                  <option value="membership">도테라 회원가입 문의</option>
                  <option value="other">기타 문의</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="궁금하신 내용을 자유롭게 작성해주세요"
                  className="w-full px-6 py-4 bg-base rounded-2xl border border-transparent focus:border-sage/30 focus:bg-white transition-all outline-none resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  'w-full py-5 rounded-2xl font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3',
                  isSuccess 
                    ? 'bg-sage text-white' 
                    : 'bg-charcoal text-white hover:bg-sage hover:shadow-lg hover:shadow-sage/20'
                )}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSuccess ? (
                  '신청이 완료되었습니다'
                ) : (
                  <>
                    상담 예약하기
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
