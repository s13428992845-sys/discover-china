/**
 * Discover China - Main JavaScript
 * Handles: back-to-top, mobile menu, mobile accordion, scroll animations
 */
(function() {
  'use strict';

  // Back to Top Button
  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 400) {
        backToTop.style.display = 'flex';
      } else {
        backToTop.style.display = 'none';
      }
    });
    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile Menu Toggle
  var menuToggle = document.querySelector('.menu-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });
  }

  // Mobile Accordion for Mega Menu
  document.querySelectorAll('.mobile-accordion-header').forEach(function(header) {
    header.addEventListener('click', function() {
      var body = this.nextElementSibling;
      if (body && body.classList.contains('mobile-accordion-body')) {
        body.classList.toggle('open');
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Lazy loading for images with data-src
  if ('IntersectionObserver' in window) {
    var lazyImages = document.querySelectorAll('img[data-src]');
    var imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    lazyImages.forEach(function(img) { imageObserver.observe(img); });
  }

})();
