import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/ashiksharonm', Icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ashik-sharon-6757011b3/', Icon: LinkedInIcon },
]

export default function SocialRow() {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-outline px-6 py-6 md:px-12">
      <div className="flex gap-6">
        {LINKS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-on-surface-variant transition-colors hover:text-tertiary"
          >
            <Icon size={16} />
            {label}
          </a>
        ))}
      </div>
      <div className="h-px flex-1 bg-outline" />
      <a
        href="mailto:sharonashik20@gmail.com"
        className="flex items-center gap-2 text-sm text-on-surface-variant transition-colors hover:text-tertiary"
      >
        <Mail size={16} strokeWidth={1.75} />
        sharonashik20@gmail.com
      </a>
    </div>
  )
}
