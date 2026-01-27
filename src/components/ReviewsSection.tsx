import { Star } from "lucide-react";

const reviews = [
  { id: 1, url: "https://rutube.ru/play/embed/e3f78550c4facfc1ab28e0efab9687fb" },
  { id: 2, url: "https://rutube.ru/play/embed/10a2688a25910ed32e11f839f3085a47" },
  { id: 3, url: "https://rutube.ru/play/embed/705923d420040a3b506d8cbc6cc8c2d2" },
  { id: 4, url: "https://rutube.ru/play/embed/751e395a124db92056c8697433bf3ed3" },
  { id: 5, url: "https://rutube.ru/play/embed/11e780f47c739bcdaea5611320720024" },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 hero-gradient" id="reviews">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 text-primary fill-primary" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Отзывы наших <span className="text-gradient">выпускников</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Более 12 000 довольных учеников уже получили права с автошколой Вектор
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review) => (
            <div 
              key={review.id}
              className="card-gradient rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-video">
                <iframe
                  src={review.url}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="clipboard-write; autoplay"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {reviews.slice(3, 5).map((review) => (
            <div 
              key={review.id}
              className="card-gradient rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-video">
                <iframe
                  src={review.url}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="clipboard-write; autoplay"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
