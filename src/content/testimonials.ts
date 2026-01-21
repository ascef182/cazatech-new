export type Testimonial = {
  id: string;
  image: string;
};

// Testimonials metadata - actual text content comes from translation files
// Access via t(`testimonials.${id}.quote`), t(`testimonials.${id}.name`), etc.
export const testimonials: Testimonial[] = [
  {
    id: "carlos",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "ana",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: "roberto",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "jennifer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "mariana",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "fernando",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
];
