# Nextstep AI — Brand Guidelines

## Logo
- File: drop `logo.png` or `logo.svg` into this folder
- Icon: Dark navy background (#0f172a), sky-blue gradient "N" lettermark with circuit node dot
- Wordmark: "Nextstep AI" — "Nextstep" in navy/white, "AI" in sky blue (#0ea5e9)
- Usage: Always use on dark navy backgrounds or white backgrounds
- Min size: 28px height — never scale below this

## Color Palette
| Name           | Hex       | Usage                              |
|----------------|-----------|------------------------------------|
| Primary Navy   | `#0f172a` | Backgrounds, text, logo base       |
| Secondary Navy | `#1e293b` | Cards, dark section backgrounds    |
| Navy Accent    | `#334155` | Borders, dividers on dark          |
| Sky Blue       | `#0ea5e9` | CTAs, links, highlights, accents   |
| Light Blue     | `#38bdf8` | Gradients, hover states            |
| Pale Blue      | `#e0f2fe` | Light section tints                |
| X-Pale Blue    | `#f0f9ff` | Section backgrounds, badges        |
| White          | `#ffffff` | Base background, light text        |
| Gray 50        | `#f8fafc` | Alternate light backgrounds        |
| Gray 500       | `#64748b` | Body text, secondary text          |
| Gray 400       | `#94a3b8` | Captions, muted text               |

## Typography
| Role        | Font     | Weights Used    | Notes                         |
|-------------|----------|-----------------|-------------------------------|
| Headings    | **Syne** | 700, 800, 900   | Google Fonts — geometric, bold|
| Body        | **Outfit**| 400, 500, 600, 700 | Google Fonts — clean, modern |

**Never use:** Inter, Roboto, Arial, Space Grotesk

### Type Scale
| Element   | Size (desktop) | Size (mobile) | Weight |
|-----------|---------------|---------------|--------|
| H1 / Hero | 64–72px       | 38–42px       | 900    |
| H2        | 40–48px       | 28–32px       | 800    |
| H3        | 20–24px       | 18–20px       | 700    |
| Body      | 16–18px       | 15–16px       | 400    |
| Labels    | 13px          | 13px          | 600    |
| Captions  | 12–13px       | 12px          | 500    |

## Glassmorphism Rules
Apply glassmorphism to: pricing cards, service cards, dark-section overlays, modals, and the audit mock card.

```css
/* Dark glass (on navy backgrounds) */
background: rgba(255,255,255,0.06);
backdrop-filter: blur(16px);
-webkit-backdrop-filter: blur(16px);
border: 1px solid rgba(255,255,255,0.10);

/* Light glass (on white/light backgrounds) */
background: rgba(255,255,255,0.72);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(255,255,255,0.90);
box-shadow: 0 8px 32px rgba(14,165,233,0.08);
```

## Tone of Voice
- **Confident:** We don't hedge. "We build revenue systems" not "We try to help."
- **Direct:** One idea per sentence. No fluff.
- **Premium:** Language that signals expertise, not desperation.
- **Results-focused:** Always anchor to revenue, ROI, and time saved.
- **Never:** Salesy buzzwords, emoji in web copy, generic AI claims

## Button Hierarchy
1. **Primary CTA** — Sky blue fill (`#0ea5e9`) — "Get Free Audit", "Book a Call"
2. **Ghost CTA** — Transparent with border — secondary actions
3. **Dark CTAs** — White fill on navy sections

## Spacing System
| Token   | Value  |
|---------|--------|
| xs      | 8px    |
| sm      | 16px   |
| md      | 24px   |
| lg      | 40px   |
| xl      | 64px   |
| 2xl     | 96px   |
| section | 96px vertical padding |

## Design Personality
Think: **premium AI agency** — not SaaS startup template, not freelancer portfolio.
References: Linear.app confidence + Stripe precision + hint of Awwwards craft.
