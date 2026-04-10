'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
    alert('Thank you for your message! I&apos;ll get back to you soon.')
  }

  const socialLinks = [
    {
      label: 'GitHub',
      icon: Github,
      url: '#',
      color: 'hover:text-accent',
    },
    {
      label: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      color: 'hover:text-accent',
    },
    {
      label: 'Twitter',
      icon: Twitter,
      url: '#',
      color: 'hover:text-accent',
    },
    {
      label: 'Email',
      icon: Mail,
      url: 'mailto:your.email@example.com',
      color: 'hover:text-accent',
    },
  ]

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex w-fit mb-4 mx-auto">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/30">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Let&apos;s Connect</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            I&apos;d love to hear about new opportunities and projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  rows={5}
                  className="bg-background border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-accent text-primary-foreground"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Connect With Me</h3>
              <p className="text-muted-foreground mb-8">
                You can reach me through various channels. I&apos;m always happy to discuss web development, collaborations, or answer any questions!
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Social Links</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border hover:border-accent/50 transition-all group"
                    >
                      <Icon className={`w-5 h-5 text-muted-foreground ${link.color} transition-colors`} />
                      <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                        {link.label}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Email Highlight */}
            <div className="p-6 bg-accent/10 rounded-lg border border-accent/30">
              <p className="text-sm text-muted-foreground mb-2">Email Address</p>
              <a
                href="mailto:your.email@example.com"
                className="text-lg font-semibold text-accent hover:text-accent/80 transition-colors"
              >
                your.email@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
