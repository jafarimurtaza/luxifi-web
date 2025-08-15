import React from 'react'
import { ContactHero } from './ContactHero'
import { ContactCards } from './ContactCards'
import { ContactForm } from './ContactForm'
import { ContactFooter } from './ContactFooter'

export default function ContactSection() {
  return (
    <div>
      <ContactHero backgroundImage="/images/home/balckbackground.jpeg" />
      <ContactCards />
      <ContactForm />
      <ContactFooter />
    </div>
  )
}
