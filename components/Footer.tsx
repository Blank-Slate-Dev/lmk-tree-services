// components/Footer.tsx
import Logo from '@/components/logo'
import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-bark-100 via-bark-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand / intro */}
          <div className="space-y-5 lg:col-span-2">
            <Logo />

            <p className="max-w-md text-sm leading-relaxed text-bark-700">
              LMK Tree Services specialises in safe, professional tree removals,
              pruning, hedge trimming and stump grinding. Local, fully insured
              and committed to leaving every property clean, tidy and ready to enjoy.
            </p>

            <p className="text-sm text-bark-600">
              Free, no-obligation quotes with honest advice on the best option for
              your trees and property.
            </p>

            {/* Agency credit */}
            <div className="pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bark-500">
                Website by
              </p>
              <div className="mt-2 inline-flex items-center gap-3 rounded-xl bg-white/80 px-3 py-2 shadow-sm">
                <Image
                  src="/BlankSlateDevToFillHeader.png"
                  alt="Blank Slate Dev"
                  width={711}
                  height={374}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-700">
              QUICK LINKS
            </h3>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#services" className="text-bark-700 hover:text-primary-700">
                Services
              </a>
              <a href="#process" className="text-bark-700 hover:text-primary-700">
                How we work
              </a>
              <a href="#about" className="text-bark-700 hover:text-primary-700">
                About LMK
              </a>
              <a href="#gallery" className="text-bark-700 hover:text-primary-700">
                Before &amp; after gallery
              </a>
              <a href="#faq" className="text-bark-700 hover:text-primary-700">
                FAQs
              </a>
              <a href="#consultation" className="text-bark-700 hover:text-primary-700">
                Request a free quote
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-700">
              CONTACT &amp; SERVICE AREA
            </h3>
            <ul className="space-y-3 text-sm text-bark-800">
              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-bark-600">CALL KYLE</p>
                  <a
                    href="tel:0429187791"
                    className="text-base font-semibold text-bark-900"
                  >
                    0429 187 791
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-bark-600">EMAIL</p>
                  <a
                    href="mailto:kyle@lmktreeservices.com"
                    className="text-sm font-medium text-bark-900"
                  >
                    kyle@lmktreeservices.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-bark-600">BASED IN</p>
                  <p className="text-sm font-medium text-bark-900">
                    Melbourne&apos;s south-east • Servicing metro &amp; surrounding suburbs
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-bark-200 pt-6 text-xs text-bark-600 sm:flex sm:items-center sm:justify-between">
          <p>&copy; {currentYear} LMK Tree Services. All rights reserved.</p>
          <p className="mt-3 sm:mt-0">
            Fully insured tree lopping &amp; arborist services • Free quotes available
          </p>
        </div>
      </div>
    </footer>
  )
}
