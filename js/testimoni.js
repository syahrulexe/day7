class Testimonial {
    #quote = "";
    #image = "";
  
    constructor(quote, image) {
      this.#quote = quote;
      this.#image = image;
    }
  
    get quote() {
      return this.#quote;
    }
  
    get image() {
      return this.#image;
    }
  
    // This is an abstract method that subclasses will implement
    get author() {
      throw new Error("getAuthor() method must be implemented");
    }
  
    // This is a polymorphic method that can take any subclasses of Testimonial
    get testimonialHTML() {
      return `<div class="testimonial">
                  <img
                      src="${this.image}"
                      class="profile-testimonial"
                  />
                  <p class="quote">${this.quote}</p>
                  <p class="author">- ${this.author}</p>
              </div>
          `;
    }
  }
  
  // Subclass
  class AuthorTestimonials extends Testimonial {
    #author = "";
  
    constructor(author, quote, image) {
      super(quote, image);
      this.#author = author;
    }
  
    get author() {
      return this.#author;
    }
  }
  
  // Subclass
  class CompanyTestimonials extends Testimonial {
    #company = "";
  
    constructor(company, quote, image) {
      super(quote, image);
      this.#company = company;
    }
  
    get author() {
      return this.#company + " Company";
    }
  }
  
  const testimonial1 = new AuthorTestimonials(
    "testimonial1",
    "author pertama",
    "https://mmc.tirto.id/image/otf/500x0/2017/11/07/soeharto--life_ratio-16x9.JPG"
  );
  const testimonial2 = new AuthorTestimonials(
    "testi2",
    "author dua",
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  );
  const testimonial3 = new CompanyTestimonials(
    "toyota",
    "ketiga",
    "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  );
  
  let testimonialData = [testimonial1, testimonial2, testimonial3];
  let testimonialHTML = "";
  
  for (let i = 0; i < testimonialData.length; i++) {
    testimonialHTML += testimonialData[i].testimonialHTML;
  }
  
  document.getElementById("testimonials").innerHTML = testimonialHTML;