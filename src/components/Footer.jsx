import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div>
            <img src="/logo-white.png" alt="Centa Partners" className="h-7" />
            <p className="text-text-dim text-sm mt-2">Success, Simplified.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <h4 className="text-text-muted text-xs uppercase tracking-wider mb-4 font-medium">Company</h4>
              <div className="flex flex-col gap-3">
                <Link to="/about" className="text-text-muted hover:text-text-primary text-sm no-underline transition-colors">About</Link>
                <Link to="/how-we-work" className="text-text-muted hover:text-text-primary text-sm no-underline transition-colors">How We Work</Link>
                <Link to="/advisory" className="text-text-muted hover:text-text-primary text-sm no-underline transition-colors">Advisory</Link>
              </div>
            </div>

            <div>
              <h4 className="text-text-muted text-xs uppercase tracking-wider mb-4 font-medium">Platform</h4>
              <div className="flex flex-col gap-3">
                <a href="https://grow.centapartners.com.au" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary text-sm no-underline transition-colors">Grow Platform</a>
                <a href="https://grow.centapartners.com.au/coach" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary text-sm no-underline transition-colors">Centa Coach</a>
                <a href="https://grow.centapartners.com.au/club" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary text-sm no-underline transition-colors">Centa Club</a>
                <a href="https://grow.centapartners.com.au/catalyst" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary text-sm no-underline transition-colors">Centa Catalyst</a>
              </div>
            </div>

            <div>
              <h4 className="text-text-muted text-xs uppercase tracking-wider mb-4 font-medium">Legal</h4>
              <div className="flex flex-col gap-3">
                <a href="https://grow.centapartners.com.au/privacy" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary text-sm no-underline transition-colors">Privacy</a>
                <a href="https://grow.centapartners.com.au/terms" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary text-sm no-underline transition-colors">Terms</a>
                <a href="https://grow.centapartners.com.au/disclaimer" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary text-sm no-underline transition-colors">Disclaimer</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-text-dim text-xs">
          &copy; {new Date().getFullYear()} Centa Partners. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
