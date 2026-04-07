import { Product, Symptom, BlogCard } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: '라벤더 (Lavender)',
    category: '감정 케어',
    description: '편안한 휴식과 숙면을 돕는 가장 사랑받는 에센셜 오일입니다.',
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: '페퍼민트 (Peppermint)',
    category: '면역력 강화',
    description: '상쾌한 활력을 불어넣고 소화 및 호흡기 건강을 지원합니다.',
    image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: '도테라 디퓨저 (Diffuser)',
    category: '홈케어',
    description: '공간을 향기로 채우고 공기를 정화하는 프리미엄 디퓨저입니다.',
    image: 'https://images.unsplash.com/photo-1588333390643-0c851927279c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    name: '프랑킨센스 (Frankincense)',
    category: '감정 케어',
    description: '오일의 왕이라 불리며 깊은 명상과 피부 건강에 탁월합니다.',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800',
  },
];

export const SYMPTOMS: Symptom[] = [
  {
    id: 'insomnia',
    name: '불면증',
    oils: [
      { name: '라벤더', usage: '취침 전 베개에 한 방울 떨어뜨리거나 디퓨징하세요.' },
      { name: '세레니티', usage: '발바닥에 도포하여 깊은 이완을 돕습니다.' }
    ]
  },
  {
    id: 'digestion',
    name: '소화불량',
    oils: [
      { name: '다이제스트젠', usage: '복부에 부드럽게 마사지하거나 물에 타서 섭취하세요.' },
      { name: '페퍼민트', usage: '식후 향을 맡거나 관자놀이에 도포하세요.' }
    ]
  },
  {
    id: 'stress',
    name: '스트레스',
    oils: [
      { name: '어댑티브', usage: '맥박이 뛰는 곳에 바르고 깊게 호흡하세요.' },
      { name: '밸런스', usage: '아침에 발바닥에 발라 하루의 균형을 잡으세요.' }
    ]
  },
  {
    id: 'immunity',
    name: '면역력 저하',
    oils: [
      { name: '온가드', usage: '디퓨징하여 공기를 정화하고 면역 체계를 보호하세요.' },
      { name: '티트리', usage: '필요한 부위에 도포하여 정화 효과를 경험하세요.' }
    ]
  }
];

export const BLOG_POSTS: BlogCard[] = [
  {
    id: '1',
    title: '초보자를 위한 에센셜 오일 입문 가이드',
    excerpt: '에센셜 오일의 세계에 처음 발을 들인 당신을 위한 완벽한 안내서입니다.',
    date: '2024.03.20',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
    category: 'Guide'
  },
  {
    id: '2',
    title: '봄철 알레르기를 이겨내는 아로마 레시피',
    excerpt: '환절기 비염과 알레르기로 고생하신다면 이 오일 조합을 추천합니다.',
    date: '2024.03.15',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
    category: 'Recipe'
  },
  {
    id: '3',
    title: '명상의 깊이를 더해주는 우디 계열 오일',
    excerpt: '샌달우드와 프랑킨센스로 마음의 평온을 찾는 시간을 가져보세요.',
    date: '2024.03.10',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    category: 'Wellness'
  }
];
