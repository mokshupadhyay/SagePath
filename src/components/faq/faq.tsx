// src/app/faq/page.tsx
'use client'
import { useState } from 'react'

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer: "To enroll in a course, navigate to the course page and click the 'Enroll Now' button. Follow the prompts to complete your registration and payment."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards (Visa, MasterCard, American Express) and PayPal for course payments."
  },
  {
    question: "Can I get a refund if I'm not satisfied with a course?",
    answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with a course, you can request a full refund within 30 days of enrollment."
  },
  {
    question: "How long do I have access to a course after enrolling?",
    answer: "Once enrolled, you have lifetime access to the course materials, including any future updates."
  },
  {
    question: "Are there any prerequisites for taking courses?",
    answer: "Prerequisites vary by course. Check the course description for specific requirements or recommended background knowledge."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg">
            <button
              className="flex justify-between items-center w-full p-4 text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold">{faq.question}</span>
              <span className="ml-6">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}