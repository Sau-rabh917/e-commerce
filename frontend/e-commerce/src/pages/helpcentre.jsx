import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { FaQuestionCircle, FaEnvelope } from 'react-icons/fa';

const faqs = [
  {
    question: 'How do I track my order?',
    answer: 'You can track your order from your account dashboard under "My Orders". You will also receive tracking details via email after your order is shipped.'
  },
  {
    question: 'What is the return policy?',
    answer: 'We offer a 7-day return policy on most products. Please visit our Returns & Refunds page for detailed information.'
  },
  {
    question: 'How do I contact customer support?',
    answer: 'You can contact us via the Contact page, email us at info@techshed.com, or use the support form below.'
  },
  {
    question: 'Can I change my shipping address?',
    answer: 'Yes, you can change your shipping address before your order is shipped. Go to your account settings or contact support for help.'
  },
  {
    question: 'How do I reset my password?',
    answer: 'Click on the "Forgot Password" link on the Sign In page and follow the instructions to reset your password.'
  },
];

const Helpcentre = () => {
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase()) ||
    faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col items-center mb-10">
        <FaQuestionCircle className="text-5xl text-emerald-400 mb-4" />
        <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-600 mb-2 text-center">Help Centre</h1>
        <p className="text-gray-600 mb-6 text-center max-w-lg">Find answers to common questions or get in touch with our support team.</p>
        <div className="w-full flex items-center mb-8">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-gray-50 text-lg"
            placeholder="Search help topics..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <span className="bg-emerald-500 px-4 py-2 rounded-r-lg text-white text-xl"><IoSearchOutline /></span>
        </div>
        {/* FAQ Accordion */}
        <div className="w-full">
          {filteredFaqs.length > 0 ? filteredFaqs.map((faq, idx) => (
            <div key={idx} className="mb-4 border-b border-gray-200">
              <button
                className="w-full text-left flex justify-between items-center py-3 px-2 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
                <span className={`ml-2 text-emerald-500 text-2xl transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {openIndex === idx && (
                <div className="px-2 pb-4 text-gray-600 text-base animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          )) : (
            <div className="text-center text-gray-400 text-lg mt-8">No help topics found.</div>
          )}
        </div>
      </div>
      {/* Contact Support Section */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <FaEnvelope className="text-4xl text-emerald-400 mb-2" />
        <h2 className="text-2xl font-bold text-emerald-600 mb-2">Need more help?</h2>
        <p className="text-gray-600 mb-4 text-center">If you can't find your answer above, contact our support team and we'll get back to you as soon as possible.</p>
        <a
          href="mailto:info@techshed.com"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded shadow text-base transition"
        >
          Email Support
        </a>
      </div>
    </div>
  );
};

export default Helpcentre;