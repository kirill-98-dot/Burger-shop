import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const reviews = [
  { id: 1, url: "https://rutube.ru/play/embed/e3f78550c4facfc1ab28e0efab9687fb" },
  { id: 2, url: "https://rutube.ru/play/embed/10a2688a25910ed32e11f839f3085a47" },
  { id: 3, url: "https://rutube.ru/play/embed/705923d420040a3b506d8cbc6cc8c2d2" },
  { id: 4, url: "https://rutube.ru/play/embed/751e395a124db92056c8697433bf3ed3" },
  { id: 5, url: "https://rutube.ru/play/embed/11e780f47c739bcdaea5611320720024" },
];

const ReviewsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const currentReviews = reviews.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

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

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {currentReviews.map((review) => (
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

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevPage}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentPage ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="icon"
              onClick={nextPage}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
