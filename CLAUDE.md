# Nextstep AI — Website Project Rules

## Design
- Always check /brand-assets/brand-guidelines.md before every design decision
- **Banned fonts:** Inter, Roboto, Arial, Space Grotesk — use Syne (headings) + Outfit (body)
- Prefer glassmorphism and premium dark-accent aesthetics over flat/generic UI
- Default color mode: white + navy + sky blue (per brand — see brand guidelines)
- Glassmorphism: use `backdrop-filter: blur()` on dark sections, cards, and overlays
- Never use box-shadow without also using a border for definition
- Spacing: generous whitespace — minimum 96px between sections on desktop

## Screenshot Loop (before any review)
- After generating or updating any UI, analyze the visual mentally
- Check: typography hierarchy, contrast ratios, hover states, mobile layout
- Fix all obvious issues before showing the user
- Repeat until the design looks intentional and polished

## Development
- Use semantic HTML5 + CSS only (no frameworks unless explicitly asked)
- All colors, fonts, and spacing values stored as CSS custom properties (`:root`)
- Keep `index.html` for structure only — all styles live in `styles.css`
- Split large sections into separate CSS blocks with clear comments
- No hardcoded inline styles — everything goes through classes

## Brand
- Company: Nextstep AI
- CEO: Caleb van Rooyen
- Niche: AI workflow automation for e-commerce clothing brands
- Tone: Confident, direct, premium — never salesy, never generic
- Logo: Dark navy background (#0f172a) + sky-blue gradient N mark with circuit node

## Links (keep updated)
- Free Audit form: https://nextsttstepai.app.n8n.cloud/form/qualify-brand
- Instagram: https://instagram.com/caleb_automates
- Book a Call: https://calendly.com/12345vanrooyenn/30min
- Domain: nextstepai.com

## Deployment
- Target: Netlify (drag-and-drop or GitHub integration)
- Always remind user to connect nextstepai.com domain after deploy
- GitHub repo name: nextstep-ai-website
