import { Star, Quote } from 'lucide-react';
import Header from '@/components/Header';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Patel",
      condition: "Epilepsy Treatment",
      rating: 5,
      feedback: "Dr. Mauli Vora's treatment has been life-changing. My seizures are now completely under control, and I can live a normal life again. Her compassionate approach and expertise made all the difference."
    },
    {
      name: "Priya Shah",
      condition: "Migraine Management",
      rating: 5,
      feedback: "After years of suffering from chronic migraines, Dr. Vora's personalized treatment plan has reduced my headache frequency by 80%. I'm finally able to work and enjoy life without constant pain."
    },
    {
      name: "Amit Kumar",
      condition: "Stroke Recovery",
      rating: 5,
      feedback: "The comprehensive stroke care I received at Samvedana NeuroCare was exceptional. Dr. Mauli's expertise and the rehabilitation program helped me recover much faster than expected."
      
    },
    {
      name: "Meera Joshi",
      condition: "Movement Disorders",
      rating: 5,
      feedback: "My Parkinson's symptoms were affecting my daily life significantly. Dr.Mauli's treatment approach has improved my mobility and quality of life tremendously. Highly recommended!"    },
    {
      name: "Suresh Agarwal",
      condition: "Memory Disorders",
      rating: 5,
      feedback: "Dr Mauli vora's early intervention and treatment plan for my memory issues has been remarkable. Her thorough evaluation and personalized care approach is truly commendable."    },
    {
      name: "Kavita Sharma",
      condition: "Neuropathy Treatment",
      rating: 5,
      feedback: "The neuropathic pain in my feet was unbearable. Her treatment has significantly reduced my pain levels, and I can walk comfortably again. Excellent care and follow-up."    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Patient Feedback & Testimonials
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Read what our patients have to say about their experience with Dr. Mauli Vora 
                and the quality of neurological care at Samvedana Neuro Care Clinic.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] medical-card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    {/* Quote Icon */}
                    <div className="flex justify-between items-start">
                      <Quote className="h-8 w-8 text-primary/30" />
                      <div className="flex space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-muted-foreground leading-relaxed">
                      "{testimonial.feedback}"
                    </p>

                    {/* Patient Info */}
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-primary">
                            {testimonial.condition}
                          </p>
                        </div>
                                             </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Experience Quality Neurological Care
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of satisfied patients who have received expert neurological care. 
                Schedule your consultation with Dr. Mauli Vora today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+918200045035" 
                  className="btn-medical"
                >
                  Book Appointment
                </a>
                
                <a 
                  href="https://wa.me/8200045035?text=Hi, I would like to book an appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-medical-outline"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppFloat />
    </div>
  );
};

export default Testimonials;