document.addEventListener("DOMContentLoaded", () => {
    const marqueeContent = document.querySelector('#first-marquee-content')
    const secondMarqueeContent = document.querySelector("#second-marquee-content")

    const firstImages = Array.from(marqueeContent.children)
    const secondImages = Array.from(secondMarqueeContent.children)

  
    // Duplicate the content for seamless looping
    firstImages.forEach(image => {
      const clone = image.cloneNode(true);
      marqueeContent.appendChild(clone);
    });

    secondImages.forEach(image => {
        console.log("cloning")
        const clone = image.cloneNode(true);
        secondMarqueeContent.appendChild(clone);
        // secondMarqueeContent.appendChild(clone);
    });
  
    
    const totalWidth = Array.from(marqueeContent.children).reduce(
      (sum, img) => sum + img.offsetWidth,
      0
    );
    marqueeContent.style.width = `${totalWidth}px`;

    const secondTotalWidth = Array.from(secondMarqueeContent.children).reduce(
        (sum, img) => sum + img.offsetWidth,
        0
    );
    secondMarqueeContent.style.width = `${secondTotalWidth}px`;
})