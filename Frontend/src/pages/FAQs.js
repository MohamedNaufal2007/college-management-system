import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FAQs.css';

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState('admission');
  const [openFAQ, setOpenFAQ] = useState(null);
  const navigate = useNavigate();

  const faqCategories = [
    { id: 'admission', name: 'Admission', icon: 'fas fa-user-plus' },
    { id: 'academic', name: 'Academic', icon: 'fas fa-book-open' },
    { id: 'financial', name: 'Financial', icon: 'fas fa-dollar-sign' },
    { id: 'campus', name: 'Campus Life', icon: 'fas fa-home' },
    { id: 'technical', name: 'Technical', icon: 'fas fa-laptop' }
  ];

  const faqs = {
    admission: [
      {
        id: 1,
        question: 'What are the admission requirements?',
        answer: 'Admission requirements include a high school diploma or equivalent, minimum GPA of 3.0, standardized test scores (SAT/ACT), letters of recommendation, and a personal statement.'
      },
      {
        id: 2,
        question: 'When is the application deadline?',
        answer: 'Early Decision deadline is November 15, Regular Decision deadline is January 15, and Spring Admission deadline is October 1.'
      },
      {
        id: 3,
        question: 'How do I apply for admission?',
        answer: 'You can apply online through our admissions portal. Complete the application form, submit required documents, and pay the application fee.'
      },
      {
        id: 4,
        question: 'Is there an application fee?',
        answer: 'Yes, there is a $50 application fee for undergraduate programs and $75 for graduate programs. Fee waivers are available for eligible students.'
      }
    ],
    academic: [
      {
        id: 5,
        question: 'What programs do you offer?',
        answer: 'We offer over 50 undergraduate and graduate programs across 6 departments including Computer Science, Engineering, Business, Liberal Arts, Sciences, and Social Sciences.'
      },
      {
        id: 6,
        question: 'What is the student-to-faculty ratio?',
        answer: 'Our student-to-faculty ratio is 15:1, ensuring personalized attention and quality education for all students.'
      },
      {
        id: 7,
        question: 'Can I change my major?',
        answer: 'Yes, students can change their major by meeting with an academic advisor and completing the necessary paperwork. Some programs may have specific requirements.'
      },
      {
        id: 8,
        question: 'Do you offer online courses?',
        answer: 'Yes, we offer both fully online programs and hybrid courses that combine online and in-person instruction.'
      }
    ],
    financial: [
      {
        id: 9,
        question: 'What is the tuition cost?',
        answer: 'Undergraduate tuition is $25,000 per year for in-state students and $35,000 for out-of-state students. Graduate tuition varies by program.'
      },
      {
        id: 10,
        question: 'What financial aid is available?',
        answer: 'We offer scholarships, grants, work-study programs, and student loans. Over 80% of our students receive some form of financial assistance.'
      },
      {
        id: 11,
        question: 'How do I apply for scholarships?',
        answer: 'Scholarship applications are available through our financial aid office. Many scholarships are automatically considered when you apply for admission.'
      },
      {
        id: 12,
        question: 'Are payment plans available?',
        answer: 'Yes, we offer flexible payment plans that allow you to spread tuition payments over the semester.'
      }
    ],
    campus: [
      {
        id: 13,
        question: 'What housing options are available?',
        answer: 'We offer traditional dormitories, suite-style housing, and apartment-style living. All freshmen are required to live on campus.'
      },
      {
        id: 14,
        question: 'What dining options are on campus?',
        answer: 'Our campus features multiple dining halls, cafes, and food courts offering diverse meal options including vegetarian, vegan, and international cuisines.'
      },
      {
        id: 15,
        question: 'What activities and clubs are available?',
        answer: 'We have over 100 student organizations including academic clubs, sports teams, cultural groups, and volunteer organizations.'
      },
      {
        id: 16,
        question: 'Is parking available on campus?',
        answer: 'Yes, parking permits are available for students, faculty, and staff. Various parking options include daily, semester, and annual permits.'
      }
    ],
    technical: [
      {
        id: 17,
        question: 'How do I access the student portal?',
        answer: 'You can access the student portal using your student ID and password at portal.techvistacollege.edu. Contact IT support if you need help with login credentials.'
      },
      {
        id: 18,
        question: 'What technology resources are available?',
        answer: 'Students have access to computer labs, free Wi-Fi, software licenses, online library resources, and 24/7 IT support.'
      },
      {
        id: 19,
        question: 'How do I connect to campus Wi-Fi?',
        answer: 'Connect to the "TechVista-Student" network using your student credentials. Detailed setup instructions are available on our IT website.'
      },
      {
        id: 20,
        question: 'Where can I get technical support?',
        answer: 'The IT Help Desk is located in the Library building, first floor. You can also contact support at helpdesk@techvistacollege.edu or call (555) 123-4567.'
      }
    ]
  };

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <div className="faqs-page">
      <div className="faqs-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about TechVista College</p>
        </div>
      </div>

      <section className="faqs-content">
        <div className="container">
          <div className="faq-categories">
            {faqCategories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <i className={category.icon}></i>
                {category.name}
              </button>
            ))}
          </div>

          <div className="faq-list">
            {faqs[activeCategory].map(faq => (
              <div key={faq.id} className="faq-item">
                <button
                  className={`faq-question ${openFAQ === faq.id ? 'active' : ''}`}
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <span>{faq.question}</span>
                  <i className={`fas fa-chevron-${openFAQ === faq.id ? 'up' : 'down'}`}></i>
                </button>
                <div className={`faq-answer ${openFAQ === faq.id ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-support">
        <div className="container">
          <div className="support-card">
            <h2>Still Have Questions?</h2>
            <p>Can't find the answer you're looking for? Our support team is here to help!</p>
            <div className="support-options">
              <div className="support-option">
                <i className="fas fa-phone"></i>
                <h3>Call Us</h3>
                <p>(555) 123-4567</p>
              </div>
              <div className="support-option">
                <i className="fas fa-envelope"></i>
                <h3>Email Us</h3>
                <p>support@techvistacollege.edu</p>
              </div>
              <div className="support-option">
                <i className="fas fa-comments"></i>
                <h3>Live Chat</h3>
                <p>Available 24/7</p>
              </div>
            </div>
            <button className="btn btn-primary" onClick={() => navigate('/contact')}>Contact Support</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;