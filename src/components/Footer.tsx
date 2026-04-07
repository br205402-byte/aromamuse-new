import { Leaf, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-6 h-6 text-sage" />
              <span className="text-2xl font-serif font-semibold tracking-tight text-charcoal">
                AromaMuse
              </span>
            </div>
            <p className="text-charcoal/50 max-w-sm mb-8 font-light leading-relaxed">
              아로마뮤즈는 자연의 지혜와 향기를 통해 당신의 삶에 
              우아한 평온과 영감을 불어넣는 웰니스 큐레이터입니다.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal/40 hover:bg-sage hover:text-white hover:border-sage transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Brand Story', 'Product Guide', 'Membership', 'Aroma Life'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-charcoal/50 hover:text-sage transition-colors font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-charcoal mb-6">Contact</h4>
            <ul className="space-y-4 text-charcoal/50 font-light">
              <li>010-8896-2054</li>
              <li>br205402@gmail.com</li>
              <li>Seoul, South Korea</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-charcoal/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-charcoal/30 font-light">
            © 2024 AromaMuse. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-charcoal/30 font-light">
            <a href="#" className="hover:text-sage transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sage transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
