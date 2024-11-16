document.addEventListener("DOMContentLoaded", () => {
    // Animate the logo on page load
    const logo = document.querySelector('.navbar-brand img');
    logo.style.transition = 'transform 1.5s ease';
    logo.style.transform = 'scale(1.2)';
    setTimeout(() => {
      logo.style.transform = 'scale(1)';
    }, 1500);
  
    // Animate navbar links on hover
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
        link.style.transition = 'color 0.3s ease, transform 0.3s ease';
        link.style.color = '#007bff';
        link.style.transform = 'scale(1.1)';
      });
      link.addEventListener('mouseout', () => {
        link.style.color = '#000';
        link.style.transform = 'scale(1)';
      });
    });
  
    // Animate the main heading and paragraphs in the first section
    const mainHeading = document.querySelector('.position-absolute h1');
    const paragraphs = document.querySelectorAll('.position-absolute p');
    
    mainHeading.style.opacity = '0';
    mainHeading.style.transform = 'translateY(50px)';
    mainHeading.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    
    paragraphs.forEach(paragraph => {
      paragraph.style.opacity = '0';
      paragraph.style.transform = 'translateY(20px)';
      paragraph.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    });
  
    setTimeout(() => {
      mainHeading.style.opacity = '1';
      mainHeading.style.transform = 'translateY(0)';
      paragraphs.forEach((paragraph, index) => {
        setTimeout(() => {
          paragraph.style.opacity = '1';
          paragraph.style.transform = 'translateY(0)';
        }, (index + 1) * 500);  // Stagger paragraph animations
      });
    }, 500);
  });
  