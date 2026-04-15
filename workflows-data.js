/**
 * Nextstep AI — Workflow Library Data
 * All 40 workflows across 8 categories.
 * Used by workflow detail pages, search, and filtering.
 */
window.WORKFLOWS = [

  // ═══════════════════════════════════════════════════════
  // CART & CHECKOUT RECOVERY (6 workflows)
  // ═══════════════════════════════════════════════════════

  {
    id: "cart-abandonment-email-3-step",
    name: "Cart Abandonment Email — 3-Step Sequence",
    category: "cart-recovery",
    plan: "core",
    shortDesc: "A timed 3-email sequence that fires when a buyer leaves your checkout without purchasing. Email 1 goes out at 1 hour, Email 2 at 24 hours with social proof, Email 3 at 72 hours with a discount trigger. Dynamically pulls the exact products they left behind.",
    trigger: "Cart abandoned",
    result: "8–15% of abandoned carts",
    channel: null,
    problem: "Most clothing brands lose 60–80% of potential revenue at checkout. Without a recovery sequence, those buyers disappear forever — and the ad spend that brought them in is wasted.",
    bestUseCase: "Any brand with consistent traffic and checkout volume. Especially effective for brands running paid ads, where every abandoned cart represents real ad dollars walking out the door.",
    roi: "Recovers 8–15% of abandoned carts on average. For a brand doing $50K/month with a 70% abandonment rate, that's $2,800–$5,250 in recovered revenue per month.",
    howItWorks: [
      "Shopify webhook fires when a checkout is abandoned and the customer has provided an email address.",
      "Email 1 sends at the 1-hour mark — a simple reminder with the exact cart contents and a direct link back to checkout.",
      "Email 2 sends at 24 hours — includes social proof (reviews, best-seller badges) to reinforce buying confidence.",
      "Email 3 sends at 72 hours — a final nudge with a small discount or free shipping incentive to close the deal.",
      "Each email dynamically pulls product images, names, and prices so the messaging is always accurate and personal."
    ],
    exampleScenario: "A customer adds a R1,200 hoodie and R450 cap to their cart but gets distracted at checkout. One hour later, they receive an email showing exactly what they left behind with a one-click return-to-cart link. They don't bite. At 24 hours, they see the same products with 4.8-star reviews and a 'selling fast' indicator. At 72 hours, they get 10% off — and they complete the purchase."
  },

  {
    id: "cart-abandonment-sms-reminder",
    name: "Cart Abandonment SMS Reminder",
    category: "cart-recovery",
    plan: "core",
    shortDesc: "A single high-converting SMS sent 30 minutes after cart abandonment. Short, brand-voice matched, with a direct link back to the exact cart. Works in parallel with the email sequence for maximum recovery.",
    trigger: "Cart abandoned",
    result: null,
    channel: "SMS",
    problem: "Email recovery alone misses buyers who don't check their inbox quickly. SMS has a 98% open rate within 3 minutes — it catches the buyer while the purchase intent is still warm.",
    bestUseCase: "Brands with SMS opt-in consent from their customers. Particularly effective for impulse-buy price points under R2,000 where a quick reminder is all that's needed to close.",
    roi: "SMS cart recovery typically converts at 10–20% higher rates than email alone. Adding SMS to an existing email sequence can increase total cart recovery by 25–40%.",
    howItWorks: [
      "Cart abandonment event fires from Shopify and the system checks if the customer has SMS consent on file.",
      "After a 30-minute delay (shorter than email to catch them first), a short, brand-voice SMS is generated with their cart link.",
      "The SMS includes the product name and a direct deep-link back to their pre-filled checkout.",
      "If the customer completes the purchase before the SMS fires, the message is automatically suppressed."
    ],
    exampleScenario: "A customer abandons a R800 t-shirt at 2:14 PM. At 2:44 PM, they get an SMS: 'Still thinking about that oversized tee? Your cart's saved — tap here to grab it before it's gone.' The direct link drops them straight into checkout with the item already loaded. They complete the purchase within 3 minutes."
  },

  {
    id: "checkout-abandonment-instagram-dm-follow-up",
    name: "Checkout Abandonment — Instagram DM Follow-Up",
    category: "cart-recovery",
    plan: "core",
    shortDesc: "For buyers who have your Instagram DMs open — automatically sends a casual, brand-voice follow-up message when they abandon checkout. Feels personal. Converts at 2–4× the rate of email alone.",
    trigger: "Checkout abandoned + IG connected",
    result: null,
    channel: "Instagram DM",
    problem: "Email and SMS recovery feel transactional. For fashion brands built on Instagram, a DM follow-up feels like a personal message from the brand — and converts significantly higher because it meets the buyer where they already engage.",
    bestUseCase: "Instagram-first clothing brands with a strong DM culture. Best for brands where customers frequently interact via DM and the brand voice is casual and approachable.",
    roi: "DM recovery converts at 2–4x the rate of email alone. Brands typically see an additional 5–10% recovery on top of existing email/SMS sequences.",
    howItWorks: [
      "Checkout abandonment event fires and the system cross-references the customer's email with known Instagram followers.",
      "If a match is found and the customer has previously engaged via DM (open conversation), a follow-up DM is queued.",
      "The DM is written in the brand's casual voice — not a template, but a natural-sounding message referencing the product.",
      "If the customer replies, the conversation is flagged for human handoff so the brand owner can close personally."
    ],
    exampleScenario: "A loyal follower who regularly engages with your stories abandons a R2,500 jacket at checkout. Fifteen minutes later, they get a DM: 'Hey! Saw you were checking out the Midnight jacket — it's one of our favourites this drop. Want me to hold your size?' It feels like a real message from the brand, not an automated email — and 3 out of 10 people who receive it complete the purchase."
  },

  {
    id: "browse-abandonment-high-intent-visitor-follow-up",
    name: "Browse Abandonment — High-Intent Visitor Follow-Up",
    category: "cart-recovery",
    plan: "core",
    shortDesc: "Triggers when a visitor views a product page 2+ times without adding to cart. Sends a soft, curiosity-based email featuring the exact product they kept returning to. Catches buyers before they even get to checkout.",
    trigger: "2+ product page views, no cart add",
    result: null,
    channel: "Email",
    problem: "Not every lost sale happens at checkout. Many high-intent buyers browse multiple times but never add to cart — they're interested but need a nudge. Without browse abandonment tracking, these warm leads go completely unnoticed.",
    bestUseCase: "Brands with significant organic or paid traffic where many visitors browse but don't convert on the first visit. Especially useful for higher-priced items where buyers need more consideration time.",
    roi: "Browse abandonment emails typically convert at 3–8% — lower than cart recovery, but targeting a much larger audience of potential buyers who would otherwise receive no follow-up at all.",
    howItWorks: [
      "Site tracking identifies visitors who view the same product page 2+ times within a 48-hour window without adding to cart.",
      "The system matches the visitor to a known email address (from previous purchases, newsletter sign-up, or cookie data).",
      "A soft, curiosity-based email is sent featuring the exact product with a lifestyle image and a 'still on your mind?' angle.",
      "If the visitor later adds to cart and abandons, they enter the cart recovery sequence instead — no overlap."
    ],
    exampleScenario: "A visitor checks out your new cargo pants three times over two days — once from an Instagram ad, once direct, and once from a Google search. They clearly want them but haven't pulled the trigger. They receive an email: 'The Cargo Pant you've been eyeing' with a clean product shot, one customer review, and a link to buy. 6% of recipients convert — buyers you would have lost entirely without this workflow."
  },

  {
    id: "low-stock-urgency-trigger",
    name: "Low Stock Urgency Trigger",
    category: "cart-recovery",
    plan: "core",
    shortDesc: "When an item in an abandoned cart drops below 5 units remaining, this workflow automatically fires a \"last chance\" email to everyone who abandoned that specific product. Creates genuine urgency without fake scarcity.",
    trigger: "Inventory drops below threshold",
    result: "Converts 6–12% of recipients",
    channel: null,
    problem: "Generic urgency tactics (countdown timers, fake stock numbers) erode trust. But real low-stock situations are powerful conversion moments — the problem is most brands don't act on inventory data fast enough to capitalise.",
    bestUseCase: "Brands with limited-run drops or products that genuinely sell out. Most effective when inventory data is accurate and the brand has a reputation for items actually going out of stock.",
    roi: "Converts 6–12% of recipients — significantly higher than standard recovery emails because the urgency is real and verifiable. Recovers revenue that would be permanently lost once the item sells out.",
    howItWorks: [
      "Inventory monitoring checks stock levels every 15 minutes for products that have active abandoned cart records.",
      "When a product drops below the threshold (default: 5 units), the system pulls all customers who abandoned that specific item.",
      "A 'last chance' email is generated with real stock data — 'Only 3 left in your size' — creating genuine, verifiable urgency.",
      "Once the item sells out, the workflow automatically stops sending and optionally adds recipients to a restock waitlist."
    ],
    exampleScenario: "Your limited-edition bomber jacket had 40 units at launch. Three days later, it's down to 4. The system automatically emails everyone who abandoned that jacket: 'The Bomber you left behind — only 4 left in stock.' Because the scarcity is real, 10% of recipients come back and buy within hours. Two of those four remaining units sell from this email alone."
  },

  {
    id: "dynamic-cart-recovery-product-aware-messaging",
    name: "Dynamic Cart Recovery — Product-Aware Messaging",
    category: "cart-recovery",
    plan: "ultimate",
    shortDesc: "Advanced version of cart recovery that uses AI to write product-specific recovery copy based on the item category, price point, and buyer history. A hoodie recovery email sounds different from a luxury item recovery — this workflow knows the difference.",
    trigger: "Cart abandoned",
    result: null,
    channel: null,
    problem: "Standard cart recovery emails use the same template regardless of what was abandoned. But a R500 t-shirt and a R5,000 leather jacket require completely different messaging tones, urgency levels, and incentive strategies.",
    bestUseCase: "Brands with diverse product ranges spanning multiple price points and categories. Ideal for brands where a one-size-fits-all recovery email feels out of place for their premium items.",
    roi: "AI-powered product-aware recovery typically improves conversion rates by 20–35% over standard templates. The higher the product diversity, the greater the improvement.",
    howItWorks: [
      "Cart abandonment event fires and the system analyses the abandoned products — category, price point, margin, and historical conversion data.",
      "AI generates recovery copy tailored to the product type: casual and playful for streetwear, aspirational and exclusive for premium pieces.",
      "The email template, subject line, incentive strategy, and send timing are all adjusted based on the product profile.",
      "The system learns from conversion data over time — continuously improving which messaging style works best for each product category.",
      "Premium items may receive a personal video message from the brand instead of a standard email, if configured."
    ],
    exampleScenario: "Two customers abandon their carts at the same time. Customer A left a R400 graphic tee — they get a casual, fun email: 'That tee isn't going to wear itself' with a small free-shipping incentive. Customer B left a R4,500 leather jacket — they get an aspirational email: 'Crafted from full-grain leather, only 12 made' with no discount but an invitation to chat directly with the brand. Both emails feel intentional and on-brand for their respective products."
  },

  // ═══════════════════════════════════════════════════════
  // CUSTOMER REACTIVATION (5 workflows)
  // ═══════════════════════════════════════════════════════

  {
    id: "past-buyer-reactivation-60-day",
    name: "Past Buyer Reactivation — 60-Day",
    category: "reactivation",
    plan: "standard",
    shortDesc: "Automatically contacts customers who bought 60 days ago and haven't returned. Personalised \"we miss you\" messaging featuring new arrivals relevant to their past purchases. The cheapest re-sale you'll ever make.",
    trigger: "60 days since last purchase",
    result: "12–18% of recipients repurchase",
    channel: null,
    problem: "Most clothing brands focus all their budget on acquiring new customers while ignoring the easiest sale — bringing back someone who already bought and loved the product. After 60 days of silence, buyers start forgetting your brand.",
    bestUseCase: "Any brand with a customer list of 500+ past buyers. Most effective for brands with regular new arrivals that give lapsed customers a reason to come back and browse.",
    roi: "Reactivation campaigns are 5–7x cheaper than new customer acquisition. With 12–18% of recipients repurchasing, even a modest list of 1,000 lapsed buyers can generate $6,000–$18,000 in recovered revenue.",
    howItWorks: [
      "The system monitors all customers and flags anyone who reaches the 60-day mark since their last purchase.",
      "AI analyses their purchase history and matches them with relevant new arrivals or restocked items from their preferred categories.",
      "A personalised 'we miss you' email is sent featuring products specifically chosen for them — not a generic blast.",
      "If they don't engage within 5 days, a follow-up SMS or DM is sent with a different angle (e.g., social proof from recent buyers)."
    ],
    exampleScenario: "A customer bought two streetwear hoodies 60 days ago but hasn't returned. The system sends them an email: 'New drops you'd love' featuring three new hoodies from the same style category they previously bought, plus a 'customers who bought what you bought also loved...' section. 15% of recipients click through, and 12% make a purchase — all without a single discount offered."
  },

  {
    id: "past-buyer-reactivation-90-day",
    name: "Past Buyer Reactivation — 90-Day",
    category: "reactivation",
    plan: "standard",
    shortDesc: "Deeper reactivation flow for 90-day lapsed buyers. More aggressive incentive, with social proof from recent buyers and a time-limited offer to drive urgency. Designed to bring back the \"one-and-done\" customers.",
    trigger: "90 days since last purchase",
    result: null,
    channel: "Email + SMS",
    problem: "At 90 days, a customer is on the verge of permanently churning. Standard marketing emails no longer cut through — these buyers need a stronger reason to return, combined with genuine urgency.",
    bestUseCase: "Brands with a high percentage of one-time buyers who haven't responded to the 60-day reactivation. Effective for brands willing to offer a small incentive to prevent permanent churn.",
    roi: "90-day reactivation with incentives typically converts 8–14% of recipients. The cost of a 10–15% discount is far less than the $30–$80 it costs to acquire a net-new customer.",
    howItWorks: [
      "Customers who passed through the 60-day reactivation without purchasing are automatically enrolled at the 90-day mark.",
      "A two-touch sequence is sent: Email with social proof (recent buyer testimonials, trending products) plus a time-limited offer.",
      "48 hours later, an SMS follow-up reinforces the offer with a countdown: 'Your 15% off expires tomorrow.'",
      "If the customer purchases, they're removed from the lapsed segment and re-entered into the active customer journey."
    ],
    exampleScenario: "A customer who bought once three months ago and ignored the 60-day email receives a new message: 'We saved something for you — 15% off your next order, valid for 72 hours only.' The email features trending products and reviews from buyers in their city. The SMS follow-up the next day reminds them the offer expires soon. 11% of these lapsed buyers come back and purchase."
  },

  {
    id: "win-back-sequence-120-day-lapsed",
    name: "Win-Back Sequence — 120-Day Lapsed",
    category: "reactivation",
    plan: "standard",
    shortDesc: "Your last-resort campaign for customers who haven't bought in 4+ months. Three-touch sequence over 2 weeks — starts with curiosity, moves to value, ends with a final offer. If they don't buy after this, they're auto-suppressed from your list.",
    trigger: "120 days since last purchase",
    result: null,
    channel: null,
    problem: "Customers lapsed for 120+ days are expensive to keep on your list and almost never convert from standard marketing. Without a structured win-back and suppression strategy, you're paying to email people who will never buy again.",
    bestUseCase: "Brands with growing email lists who want to maintain high deliverability and engagement rates. Essential for keeping your sender reputation clean while giving every customer one last chance.",
    roi: "Win-back sequences convert 3–6% of recipients — modest, but it's pure recovered revenue from customers who would otherwise be permanently lost. Auto-suppression also improves overall email deliverability by 10–20%.",
    howItWorks: [
      "Customers reaching 120 days since last purchase enter a dedicated three-email win-back sequence over 14 days.",
      "Email 1 (Day 1): Curiosity-driven — 'A lot has changed since you were here last' showcasing new collections and brand updates.",
      "Email 2 (Day 7): Value-driven — 'Here's what you've been missing' with best-sellers, reviews, and a soft incentive.",
      "Email 3 (Day 14): Final offer — 'Last chance before we stop emailing' with the strongest incentive and a clear deadline.",
      "If no purchase or engagement after Email 3, the customer is auto-suppressed from marketing emails to protect deliverability."
    ],
    exampleScenario: "A customer who bought a jacket four months ago and has ignored every email since enters the win-back sequence. The first email piques curiosity with new collection imagery. The second shows top-rated products. The third offers 20% off with a clear 'this is our last email to you' message. 4% of recipients come back. The rest are cleanly removed, keeping the email list healthy and engaged."
  },

  {
    id: "new-arrival-alert-past-buyer-segment",
    name: "New Arrival Alert — Past Buyer Segment",
    category: "reactivation",
    plan: "standard",
    shortDesc: "Automatically notifies your highest-value past buyers whenever new products drop that match their purchase history. An ex-streetwear buyer gets streetwear alerts. An accessories buyer gets accessories. Hyper-relevant.",
    trigger: "New product published",
    result: null,
    channel: null,
    problem: "Generic 'new arrival' blasts go to your entire list with the same products — but a customer who only buys streetwear doesn't care about your new formal collection. Irrelevant emails train customers to ignore you.",
    bestUseCase: "Brands with multiple product categories or style lines. Most effective for brands that drop new products regularly (weekly or biweekly) and have enough purchase data to segment by style preference.",
    roi: "Segmented new arrival alerts see 3–5x higher click-through rates and 2–3x higher conversion rates compared to generic new arrival blasts. More relevance means more revenue per email sent.",
    howItWorks: [
      "When a new product is published on Shopify, the system analyses its category, style tags, and price point.",
      "AI matches the product against past buyer segments based on purchase history and browsing behaviour.",
      "Personalised new arrival emails are sent only to the segments most likely to be interested in that specific product.",
      "Each email features the new product alongside complementary items from the same style family to increase AOV."
    ],
    exampleScenario: "You drop a new line of oversized graphic tees. Instead of blasting your entire 5,000-person list, the system identifies 1,200 past buyers who previously purchased streetwear or graphic items. Those 1,200 receive a targeted email — and the open rate is 42% compared to the 18% your generic blasts were getting. 8% of recipients purchase on the first day."
  },

  {
    id: "personalised-product-recommendation-engine",
    name: "Personalised Product Recommendation Engine",
    category: "reactivation",
    plan: "ultimate",
    shortDesc: "AI analyses each customer's purchase history, browsing behaviour, and product preferences to generate personalised product recommendations sent at the highest-intent moment. Not a generic \"you might also like\" — truly personal.",
    trigger: null,
    result: "3–5× higher CTR vs generic recommendations",
    channel: null,
    problem: "Generic product recommendations ('you might also like') perform poorly because they're based on surface-level data. Customers see through them — and irrelevant suggestions actively damage the brand's perceived intelligence and taste.",
    bestUseCase: "Brands with 1,000+ customers and at least 6 months of purchase data. The AI needs enough data to build meaningful taste profiles — the larger the dataset, the more accurate the recommendations.",
    roi: "Personalised recommendations generate 3–5x higher click-through rates than generic suggestions. Brands typically see a 15–25% increase in repeat purchase rate and a 10–20% increase in average order value from recommended products.",
    howItWorks: [
      "AI builds a taste profile for each customer based on purchase history, browsing behaviour, wishlist activity, and email engagement patterns.",
      "The system identifies the optimal send time for each customer based on their historical engagement windows.",
      "Personalised recommendation emails are generated with products scored by predicted interest — not just 'similar items' but genuinely curated selections.",
      "Recommendations improve over time as the AI learns from click, purchase, and return data across the entire customer base.",
      "Each recommendation includes a confidence score — only high-confidence suggestions are sent, maintaining the brand's credibility."
    ],
    exampleScenario: "A customer has bought three times over 6 months — all minimalist, earth-toned pieces in the R800–R1,500 range. The AI identifies them as a 'quiet luxury' buyer and surfaces a new linen overshirt that matches their aesthetic perfectly. The email arrives at 7:30 PM on Tuesday — their highest-engagement window. They click, browse, and add two items to cart. The recommendation felt so natural they didn't even realise it was automated."
  },

  // ═══════════════════════════════════════════════════════
  // DM & LEAD AUTOMATION (6 workflows)
  // ═══════════════════════════════════════════════════════

  {
    id: "instagram-dm-reply-detection-response",
    name: "Instagram DM Reply Detection & Response",
    category: "dm-automation",
    plan: "core",
    shortDesc: "Monitors your Instagram DMs 24/7 and automatically responds to common enquiries — sizing, availability, shipping — in your brand's voice. Complex questions are flagged for your personal reply. Never miss a lead while sleeping.",
    trigger: null,
    result: null,
    channel: null,
    problem: "Clothing brands receive dozens of DMs daily asking the same questions — sizing, shipping times, stock availability. Every unanswered DM is a potential lost sale, and most brands can't respond fast enough, especially outside business hours.",
    bestUseCase: "Instagram-first brands receiving 10+ DMs per day. Especially valuable for brands in different time zones from their audience, or solo founders who can't monitor DMs 24/7.",
    roi: "Brands that respond to DMs within 60 seconds convert at 3–5x the rate of those that respond in hours. Automating responses to common questions frees 5–10 hours per week of manual DM management.",
    howItWorks: [
      "AI monitors incoming Instagram DMs in real-time, classifying each message by intent (sizing question, availability check, shipping enquiry, purchase intent, complaint, or complex).",
      "For common questions, a brand-voice response is generated and sent within 60 seconds — pulling real-time data from your store (actual stock levels, real shipping times).",
      "Complex or high-value conversations (wholesale enquiries, complaints, influencer pitches) are flagged and routed to you for a personal reply.",
      "All automated responses are logged and reviewable — you can see every conversation and jump in at any point."
    ],
    exampleScenario: "At 11 PM on a Saturday, a potential buyer DMs your brand: 'Do you have the cargo pants in a medium?' Within 45 seconds, they receive a reply: 'Hey! Yes, the Cargo Pant is available in medium — we've got 6 left in stock. Here's the link to grab yours.' By the time you check your phone Sunday morning, the sale has already been made."
  },

  {
    id: "basic-lead-qualification-flow",
    name: "Basic Lead Qualification Flow",
    category: "dm-automation",
    plan: "core",
    shortDesc: "When someone DMs asking about products or wholesale, this workflow runs them through a qualification sequence to determine intent, budget, and purchase readiness — then routes them accordingly without you lifting a finger.",
    trigger: null,
    result: "Pre-qualified leads delivered to you",
    channel: "Instagram DM",
    problem: "Not every DM is worth the same attention. Brand owners waste hours talking to people who were just browsing, while genuine wholesale enquiries or high-intent buyers wait in the queue. Without qualification, every DM gets the same treatment.",
    bestUseCase: "Brands receiving wholesale enquiries, collaboration requests, or high-value purchase enquiries via DM. Ideal for brands where the founder's time is the bottleneck.",
    roi: "Reduces time spent on unqualified leads by 60–80%. Ensures high-value leads get immediate attention while low-intent browsers receive helpful but automated responses.",
    howItWorks: [
      "When a DM is received with purchase or wholesale intent, the AI initiates a natural qualification conversation.",
      "Through 2–3 conversational questions, the system determines: what they're looking for, their budget range, and their timeline.",
      "Qualified leads are scored (hot, warm, cold) and routed accordingly — hot leads trigger an immediate notification to you.",
      "Cold leads receive helpful product links and are added to a nurture sequence. Warm leads get a follow-up scheduled."
    ],
    exampleScenario: "A boutique owner DMs asking about wholesale pricing. The AI responds naturally: 'Thanks for reaching out! Are you looking to stock a specific collection, or interested in our full range?' After two more exchanges, the system has their store name, order volume, and timeline — and pings you with a summary: 'Hot lead: Boutique owner in Cape Town, wants 50 units, ready to order this week.' You jump in with a personal message and close the deal."
  },

  {
    id: "instagram-comment-dm-funnel",
    name: "Instagram Comment → DM Funnel",
    category: "dm-automation",
    plan: "standard",
    shortDesc: "When someone comments \"link\" or specific keywords on your posts, they automatically receive a DM with the product link, more info, and a soft call to action. Turns passive engagement into active buying intent.",
    trigger: "Post comment with keyword",
    result: "Comment → DM → sale in under 2 mins",
    channel: null,
    problem: "Post comments like 'link?' or 'price?' represent high buying intent — but by the time you manually respond, the impulse has faded. Every hour of delay between comment and response reduces conversion probability by 30–50%.",
    bestUseCase: "Brands that regularly post product content on Instagram and receive comment engagement. Especially powerful for Reels and carousel posts that showcase individual products.",
    roi: "Comment-to-DM funnels convert at 15–30% — dramatically higher than link-in-bio traffic. For brands getting 50+ keyword comments per week, this can add $2,000–$5,000 in monthly revenue.",
    howItWorks: [
      "The system monitors comments on your Instagram posts for trigger keywords (configurable: 'link', 'price', 'how much', 'size', 'want', etc.).",
      "Within 60 seconds of a keyword comment, the commenter receives a DM with the product link, key details, and a soft CTA.",
      "The DM also includes a secondary recommendation: 'People who love this also grabbed...' to increase AOV.",
      "If the person replies to the DM, the conversation is handed off to the brand owner or continues with AI assistance."
    ],
    exampleScenario: "You post a Reel showcasing your new summer collection. Within an hour, 23 people comment 'link' or 'want'. Each one instantly receives a DM: 'Here's the link to the Summer Drop! The pieces in the video are...' with direct product links. 7 of those 23 click through and 4 make a purchase — all within 2 hours of posting the Reel, while you were at the gym."
  },

  {
    id: "lead-follow-up-reply-detection",
    name: "Lead Follow-Up & Reply Detection",
    category: "dm-automation",
    plan: "standard",
    shortDesc: "After a qualified lead is identified, this workflow sends a timed follow-up sequence — 24h, 48h, 96h — over DM and email. Automatically stops the moment they reply, so it never feels robotic.",
    trigger: null,
    result: null,
    channel: null,
    problem: "Most leads don't convert on the first touchpoint — they need 3–5 follow-ups. But manual follow-up is tedious and inconsistent, and generic drip sequences feel impersonal and can annoy potential buyers.",
    bestUseCase: "Brands with a lead pipeline from DMs, enquiry forms, or wholesale requests. Most effective when paired with the Lead Qualification Flow to ensure only genuine prospects receive follow-up.",
    roi: "Structured follow-up sequences increase lead-to-sale conversion by 40–60% compared to single-touch outreach. Smart reply detection prevents the brand damage that comes from over-messaging.",
    howItWorks: [
      "When a qualified lead is identified (from DM qualification, form submission, or manual tagging), they enter the follow-up sequence.",
      "Follow-up 1 (24h): A gentle check-in referencing the original conversation — 'Just following up on the pieces you were interested in.'",
      "Follow-up 2 (48h): A value-add message — new angle, social proof, or additional product info relevant to their enquiry.",
      "Follow-up 3 (96h): A soft close — 'Let me know if you'd like me to set anything aside for you.'",
      "The moment the lead replies at any stage, the sequence stops immediately and the conversation is handed to you."
    ],
    exampleScenario: "A potential wholesale buyer enquired about stocking your brand but went quiet. At 24 hours, they get a follow-up: 'Hey — just wanted to check if you had any questions about the wholesale pricing I sent over.' No reply. At 48 hours: 'By the way, here's what our other stockists are saying about sell-through rates this season.' They reply: 'Actually yes, let's set up a call.' The sequence stops, you get notified, and you close the deal."
  },

  {
    id: "cold-dm-prospect-pipeline",
    name: "Cold DM Prospect Pipeline",
    category: "dm-automation",
    plan: "standard",
    shortDesc: "For brands with a proactive outreach strategy — this workflow researches prospects, scores them, writes personalised DMs using AI, and queues them for you to review and send. Outreach without the manual grind.",
    trigger: null,
    result: "Pre-written, reviewed, ready to send",
    channel: null,
    problem: "Cold outreach is one of the most effective growth channels for clothing brands — but the research, personalisation, and follow-up take hours per day. Most founders give up after a week because the manual workload is unsustainable.",
    bestUseCase: "Brands looking to grow through strategic partnerships — boutique stockists, influencers, stylists, or corporate gifting contacts. Works for any B2B or high-value B2C outreach.",
    roi: "AI-assisted cold outreach reduces time-per-prospect from 15–20 minutes to 2–3 minutes (review and send). Brands typically 5x their outreach volume while maintaining personalisation quality.",
    howItWorks: [
      "You define your ideal prospect profile (boutique owners, influencers, stylists, etc.) and target criteria.",
      "The AI researches prospects from your provided list or discovered accounts — analysing their content, audience, and relevance.",
      "Each prospect is scored on fit and likelihood of response, and a personalised DM is drafted referencing specific details from their profile.",
      "Drafted DMs are queued in a review dashboard — you approve, edit, or skip each one before they're sent.",
      "Responses are tracked and high-engagement prospects are automatically added to the Lead Follow-Up sequence."
    ],
    exampleScenario: "You want to get your brand into 20 new boutiques this quarter. You upload a list of 100 target stores. The AI researches each one — their aesthetic, current brands, location, audience — and drafts personalised DMs: 'Love what you're doing at [Store Name] — your curation of [specific style] is exactly our vibe. We just dropped a collection that would sit perfectly alongside [brand they stock].' You review 100 messages in 30 minutes instead of spending 25 hours writing them manually."
  },

  {
    id: "whatsapp-lead-conversion-flow",
    name: "WhatsApp Lead Conversion Flow",
    category: "dm-automation",
    plan: "ultimate",
    shortDesc: "For brands operating in markets where WhatsApp is the primary communication channel (Middle East, South Africa, parts of Europe). Full lead qualification, follow-up, and closing sequence via WhatsApp Business API.",
    trigger: null,
    result: null,
    channel: "WhatsApp Business API",
    problem: "In many markets (South Africa, Middle East, parts of Europe), customers prefer WhatsApp over email or Instagram DMs. Brands that don't have a WhatsApp presence in these regions are missing their highest-converting communication channel.",
    bestUseCase: "Brands selling into South Africa, UAE, Saudi Arabia, or European markets where WhatsApp is the dominant messaging platform. Essential for brands with a local customer base that communicates primarily via WhatsApp.",
    roi: "WhatsApp messages have a 95%+ open rate and 45–60% response rate — dramatically outperforming email (20% open, 2% response). Brands in WhatsApp-dominant markets typically see 2–3x higher conversion rates from WhatsApp compared to email.",
    howItWorks: [
      "WhatsApp Business API is connected to your automation system with approved message templates for key touchpoints.",
      "Incoming WhatsApp messages are classified by intent and handled by AI — product questions, order status, purchase intent.",
      "High-intent leads are qualified through a conversational flow and routed to you with a full summary.",
      "Follow-up sequences (cart recovery, post-purchase, reactivation) are delivered via WhatsApp instead of email for maximum engagement.",
      "All conversations are logged and accessible from a central dashboard — full visibility across every customer interaction."
    ],
    exampleScenario: "A customer in Johannesburg sees your Instagram ad and clicks the WhatsApp link. They message: 'How much for the bomber jacket in large?' Within 30 seconds, they receive a reply with the price, a product photo, and a direct payment link. They ask about shipping — the AI responds with real delivery estimates for their area. They pay via the link, receive an order confirmation on WhatsApp, and get shipping updates in the same chat. The entire purchase happened without leaving WhatsApp."
  },

  // ═══════════════════════════════════════════════════════
  // SUPPORT AUTOMATION (5 workflows)
  // ═══════════════════════════════════════════════════════

  {
    id: "order-status-shipping-notification-system",
    name: "Order Status & Shipping Notification System",
    category: "support",
    plan: "core",
    shortDesc: "Automatically sends real-time order confirmations, shipping updates, and delivery notifications to your customers. Eliminates \"where is my order?\" messages by keeping customers informed at every step.",
    trigger: "Order status change",
    result: "80% reduction in support DMs",
    channel: null,
    problem: "\"Where is my order?\" is the number one support question for every clothing brand. Each WISMO message costs time and creates anxiety — both for the customer and the founder answering DMs at midnight.",
    bestUseCase: "Every brand shipping physical products. Non-negotiable for brands doing 50+ orders per month where manual status updates become unsustainable.",
    roi: "Reduces WISMO (Where Is My Order) support messages by 80%. For a brand handling 20 support DMs per day, that's 16 fewer conversations — saving 2–3 hours of daily support time.",
    howItWorks: [
      "Shopify order events (confirmed, fulfilled, shipped, out for delivery, delivered) trigger automated notifications.",
      "Each notification is branded and personalised — not a generic Shopify email, but a message that matches your brand voice.",
      "Shipping updates include real-time tracking links and estimated delivery dates pulled from the courier API.",
      "If a delivery is delayed beyond the estimated date, a proactive apology message is automatically sent before the customer has to ask."
    ],
    exampleScenario: "A customer orders a hoodie on Monday. They immediately receive a branded confirmation. Wednesday, they get 'Your order has shipped!' with a tracking link. Friday morning: 'Out for delivery today — keep an eye out!' Friday afternoon: 'Delivered! We hope you love it.' The customer never once needed to message you asking where their order was."
  },

  {
    id: "review-request-automation",
    name: "Review Request Automation",
    category: "support",
    plan: "core",
    shortDesc: "Sends a personalised review request 5–7 days after delivery confirmed. Includes a direct link to your review platform and a thank-you incentive for their next order. Builds your social proof on autopilot.",
    trigger: "Delivery confirmed + 5 days",
    result: "3–6× more reviews collected",
    channel: null,
    problem: "Social proof is the most powerful conversion tool for clothing brands, but fewer than 2% of customers leave reviews unprompted. Without a systematic review collection process, your product pages look empty and untrustworthy.",
    bestUseCase: "Every brand that wants to build social proof. Most effective when combined with a review platform (Judge.me, Loox, Stamped) that displays reviews with photos on product pages.",
    roi: "Automated review requests increase review collection by 3–6x. Products with 10+ reviews convert at 2x the rate of products with zero reviews. The compounding effect on conversion rates is significant.",
    howItWorks: [
      "Delivery confirmation triggers a 5-day countdown (giving the customer time to try the product).",
      "A personalised email is sent: 'How are you loving your [product name]?' with a one-click link to leave a review.",
      "A small thank-you incentive (10% off next order) is offered in exchange for an honest review.",
      "If no review is left within 7 days, a single gentle reminder is sent. After that, no further follow-up to avoid annoyance."
    ],
    exampleScenario: "A customer receives their cargo pants on Tuesday. The following Sunday, they get an email: 'How are you loving the Cargo Pant? Your review helps other buyers find their perfect fit.' They click the link, leave a 5-star review with a photo, and receive a 10% off code for their next purchase. Your product page now has real social proof, and the customer has an incentive to buy again."
  },

  {
    id: "faq-auto-response-dm-email",
    name: "FAQ Auto-Response — DM & Email",
    category: "support",
    plan: "core",
    shortDesc: "AI-powered auto-responses to the 15 most common customer questions about sizing, returns, shipping times, and product care — delivered instantly via DM or email depending on where the question was asked.",
    trigger: null,
    result: null,
    channel: null,
    problem: "80% of customer support questions are the same 15 questions asked over and over — sizing charts, return policies, shipping times, product care. Every manual response to a repeated question is time stolen from growing the brand.",
    bestUseCase: "Any brand receiving 5+ support messages per day. The more repetitive the questions, the more time this saves. Especially valuable for brands with detailed sizing or care requirements.",
    roi: "Automates responses to 70–80% of incoming support questions. For a brand spending 2 hours per day on support, this saves 1.5 hours daily — over 45 hours per month redirected to revenue-generating activities.",
    howItWorks: [
      "AI is trained on your brand's FAQ data — sizing charts, return policy, shipping times, care instructions, and common product questions.",
      "Incoming DMs and emails are classified by intent. If the question matches a known FAQ, the AI responds within 30 seconds.",
      "Responses pull real-time data where relevant (actual shipping times, current stock availability, specific size measurements).",
      "Questions that don't match known FAQs or that express frustration/complaint are immediately flagged for human response."
    ],
    exampleScenario: "Three customers message within the same hour: one asks about shipping to Durban, one asks if the oversized tee runs true to size, and one asks about your return policy. All three receive accurate, brand-voice responses within 30 seconds — the shipping customer gets real courier estimates, the sizing customer gets exact measurements, and the returns customer gets a clear policy summary with a link. You didn't touch your phone once."
  },

  {
    id: "return-refund-process-automation",
    name: "Return & Refund Process Automation",
    category: "support",
    plan: "standard",
    shortDesc: "Handles the entire returns flow — from initial request through approval, return shipping label generation, and refund confirmation — without manual intervention. Turns a painful process into a smooth brand moment.",
    trigger: "Return request submitted",
    result: "Zero manual handling required",
    channel: null,
    problem: "Returns are one of the most painful operational tasks for clothing brands. Each return requires 4–6 manual steps (acknowledge, approve, generate label, receive, inspect, refund) — and slow handling creates negative reviews.",
    bestUseCase: "Brands processing 10+ returns per month. Essential for brands scaling beyond founder-handled operations where returns are consuming disproportionate time.",
    roi: "Reduces return processing time from 15–20 minutes per return to near-zero manual time. A brand processing 30 returns per month saves 7–10 hours of admin time while providing a faster, better customer experience.",
    howItWorks: [
      "Customer submits a return request through a branded return portal (link provided in delivery confirmation email).",
      "The system checks eligibility (within return window, item condition, return policy compliance) and auto-approves or flags for review.",
      "Approved returns receive an automatic return shipping label and instructions via email.",
      "When the return is received and scanned, the refund is automatically processed and the customer is notified.",
      "A post-return survey is sent to understand the reason — data feeds into product improvement insights."
    ],
    exampleScenario: "A customer wants to return a jacket that didn't fit. They click the return link in their delivery email, select 'wrong size' as the reason, and instantly receive a return shipping label and instructions. They drop it at the courier. When it arrives back, the system processes the refund automatically and emails the customer: 'Refund processed — you'll see it in 3–5 business days. Want to exchange for a different size instead?' The entire process happened without you logging into a single system."
  },

  {
    id: "negative-review-intercept-recovery",
    name: "Negative Review Intercept & Recovery",
    category: "support",
    plan: "standard",
    shortDesc: "Monitors for 1–3 star reviews and automatically triggers a recovery sequence — a personal apology message, a resolution offer, and a request to update the review once resolved. Protects your brand reputation passively.",
    trigger: "Low-star review detected",
    result: "60–70% of recoveries update rating",
    channel: null,
    problem: "A single negative review can reduce conversion rates by 10–15% on a product page. Most brands only see bad reviews days later — by then, the customer is angry and the damage is done. Fast, empathetic response is the only way to recover.",
    bestUseCase: "Any brand with a public review system. Most critical for brands with fewer than 50 reviews per product, where a single negative review has an outsized impact on the overall rating.",
    roi: "60–70% of customers who receive a fast, genuine recovery response update their rating. Protecting a product's average rating from dropping below 4.5 stars can preserve 10–15% of that product's conversion rate.",
    howItWorks: [
      "Review monitoring scans for new 1–3 star reviews across all connected platforms (Shopify, Google, Judge.me, etc.).",
      "Within 30 minutes of a negative review, the customer receives a personal apology email from the brand founder.",
      "The email includes a specific resolution offer — replacement, refund, or discount — depending on the complaint type.",
      "After resolution, a polite request is sent asking if they'd consider updating their review to reflect the experience.",
      "All negative reviews and their resolution status are tracked in a dashboard for brand reputation monitoring."
    ],
    exampleScenario: "A customer leaves a 2-star review: 'Colour was different from the photos.' Within 20 minutes, they receive an email: 'Hey — I saw your review and I'm really sorry about the colour mismatch. That's on us. I'd love to send you a replacement in the exact shade you expected, completely free.' The customer is surprised by the speed and sincerity, accepts the replacement, and updates their review to 5 stars with a note: 'Amazing customer service — they fixed it immediately.'"
  },

  // ═══════════════════════════════════════════════════════
  // PRODUCT PERFORMANCE ALERTS (5 workflows)
  // ═══════════════════════════════════════════════════════

  {
    id: "low-stock-alert-owner-notification",
    name: "Low Stock Alert — Owner Notification",
    category: "product-performance",
    plan: "standard",
    shortDesc: "Automatically alerts you when any product drops below your set threshold. Includes current stock level, average daily sell-through rate, and predicted days until out-of-stock so you can reorder before you lose sales.",
    trigger: "Stock drops below threshold",
    result: null,
    channel: "Telegram / Email",
    problem: "Running out of stock on a best-seller is one of the most expensive mistakes a clothing brand can make — you lose sales, ad spend is wasted, and customers go to competitors. Most brands discover stockouts reactively, days after they happen.",
    bestUseCase: "Any brand with inventory to manage. Critical for brands running paid ads where stockouts mean wasted ad spend, and for brands with longer production lead times where reordering needs to happen weeks in advance.",
    roi: "Preventing even one stockout per month on a best-selling product can save $2,000–$10,000 in lost revenue. The predictive days-until-stockout feature gives you the lead time to reorder before it's too late.",
    howItWorks: [
      "Inventory levels are monitored in real-time across all variants (size, colour) for every active product.",
      "When any variant drops below your configured threshold, an alert is generated with full context.",
      "The alert includes: current stock, daily sell-through rate, predicted days until out-of-stock, and a recommended reorder quantity.",
      "Alerts are delivered via Telegram for instant visibility, with an email backup for record-keeping."
    ],
    exampleScenario: "Your best-selling graphic tee in size Large drops to 4 units at 2 PM. You instantly receive a Telegram message: 'Low Stock Alert: Graphic Tee (L) — 4 remaining. Selling 2.3/day. Predicted stockout: Wednesday. Suggested reorder: 50 units.' You contact your supplier immediately and avoid a stockout that would have cost you $3,000 in lost sales over the following week."
  },

  {
    id: "best-seller-identification-alert",
    name: "Best-Seller Identification & Alert",
    category: "product-performance",
    plan: "standard",
    shortDesc: "Monitors your sales data weekly and automatically identifies emerging best-sellers before they sell out — so you can restock strategically and push more marketing behind what's already working.",
    trigger: null,
    result: "Data-driven restocking decisions",
    channel: null,
    problem: "Most brands discover their best-sellers after they've already sold out — missing the window to restock and amplify. Without proactive sales velocity monitoring, you're always reacting instead of anticipating.",
    bestUseCase: "Brands with 20+ active SKUs where it's hard to manually track which products are gaining momentum. Especially useful in the first 2 weeks after a new drop when early signals predict future best-sellers.",
    roi: "Identifying and restocking emerging best-sellers 1–2 weeks earlier than manual analysis typically increases total revenue per product by 20–40%. Doubling down on marketing for confirmed winners also improves ad ROAS.",
    howItWorks: [
      "Every week, the system analyses sales velocity, conversion rate, and add-to-cart rate for all active products.",
      "Products showing accelerating sales velocity (trending upward faster than the catalogue average) are flagged as emerging best-sellers.",
      "A weekly report is delivered with ranked products, sell-through projections, and recommended actions (restock, increase ad spend, feature on homepage).",
      "Historical trend data is tracked so you can see which product categories consistently outperform."
    ],
    exampleScenario: "You dropped 15 new products two weeks ago. The weekly report shows that one hoodie is selling at 3x the rate of everything else — and at the current velocity, it will sell out in 9 days. You reorder 100 units immediately (instead of waiting until it's gone) and shift 40% of your ad budget to that hoodie. It becomes your top seller of the season because you caught the trend early."
  },

  {
    id: "slow-mover-clearance-trigger",
    name: "Slow Mover Clearance Trigger",
    category: "product-performance",
    plan: "standard",
    shortDesc: "Identifies products that have been sitting unsold for 30+ days and automatically triggers a targeted promotion to the segment most likely to buy that item — without a store-wide sale.",
    trigger: "30+ days no movement",
    result: "Clears dead stock without discounting everything",
    channel: null,
    problem: "Dead stock ties up cash and warehouse space. Store-wide sales to clear it devalue your brand and train customers to wait for discounts. The challenge is clearing slow movers without undermining your pricing integrity.",
    bestUseCase: "Brands carrying seasonal inventory or limited-run pieces that didn't sell as expected. Most effective for brands that want to protect their brand positioning while still moving stale inventory.",
    roi: "Targeted clearance campaigns recover 30–50% of dead stock value without the brand damage of a store-wide sale. Freed-up cash can be reinvested into products with proven demand.",
    howItWorks: [
      "The system flags products with zero or near-zero sales for 30+ consecutive days.",
      "AI identifies the customer segment most likely to be interested in each slow mover based on purchase history and browsing data.",
      "A targeted promotion is sent only to that segment — not your entire list — with a compelling angle (limited remaining, exclusive offer, styling suggestion).",
      "If the product still doesn't move after the targeted campaign, it's flagged for deeper discount or bundle strategy."
    ],
    exampleScenario: "A printed shirt from your last drop has been sitting with 35 units unsold for 40 days. Instead of a site-wide 30% off sale, the system identifies 200 customers who previously bought similar printed pieces. They receive an exclusive email: 'We're letting go of the last few printed shirts — 20% off, only for you.' 18 customers purchase, clearing half the stock without any public discounting that would devalue the brand."
  },

  {
    id: "inventory-alert-to-vip-waitlist",
    name: "Inventory Alert to VIP Waitlist",
    category: "product-performance",
    plan: "ultimate",
    shortDesc: "When a sold-out item is restocked, this workflow instantly notifies everyone on the waitlist — via email AND DM — in priority order based on loyalty score. VIPs get first access before the general announcement.",
    trigger: "Product restocked",
    result: null,
    channel: "Email + DM (priority order)",
    problem: "When popular items come back in stock, a generic announcement creates a frenzy where new visitors buy before your loyal waitlist customers. VIPs who waited patiently deserve first access — and that loyalty should be rewarded.",
    bestUseCase: "Brands that regularly sell out of popular items and have a waitlist feature. Most valuable for brands with a strong VIP programme where rewarding loyalty is a core brand value.",
    roi: "VIP-first restock alerts convert at 40–60% (waitlisted customers are extremely high-intent). Priority access strengthens VIP loyalty and reduces churn of your highest-value customers.",
    howItWorks: [
      "Customers can join a waitlist for sold-out items on the product page.",
      "When inventory is restocked, the system sorts waitlisted customers by loyalty score (VIPs first, then by sign-up date).",
      "VIP customers receive an email AND DM simultaneously with a direct buy link — up to 24 hours before the general restock announcement.",
      "After the VIP window, remaining waitlist customers are notified, followed by the general audience.",
      "Conversion tracking shows exactly how many waitlist conversions occurred and at which priority tier."
    ],
    exampleScenario: "Your limited-edition bomber jacket sold out in 3 days and 180 people joined the waitlist. You restock 60 units. The system notifies your 25 VIP waitlisters first — 18 of them buy within 2 hours. Then the remaining 155 waitlisters are notified — 30 more purchase. By the time you announce the restock publicly, only 12 units remain. Your VIPs feel valued, your waitlist converts at 27%, and the public scarcity drives even more urgency."
  },

  {
    id: "customer-lifetime-value-scoring",
    name: "Customer Lifetime Value Scoring",
    category: "product-performance",
    plan: "ultimate",
    shortDesc: "AI continuously scores every customer based on purchase frequency, AOV, and engagement — and automatically adjusts their marketing treatment. High-value customers get VIP treatment. At-risk high-value customers get a retention campaign before they churn.",
    trigger: null,
    result: "Right message to right customer every time",
    channel: null,
    problem: "Treating all customers the same is the biggest missed opportunity in e-commerce. A customer who's spent R50,000 over 12 months deserves different treatment than a one-time R300 buyer — but most brands don't have the data infrastructure to differentiate.",
    bestUseCase: "Brands with 500+ customers and at least 6 months of sales data. The more customer data available, the more accurate the scoring. Essential for brands ready to move from 'blast everyone' to 'treat everyone differently.'",
    roi: "CLV-driven marketing typically increases overall revenue by 15–25% by allocating more resources to high-value customers and reducing spend on low-value segments. At-risk VIP retention campaigns alone can prevent 20–30% of high-value churn.",
    howItWorks: [
      "AI analyses every customer's purchase history, order frequency, average order value, recency, and engagement metrics to generate a CLV score.",
      "Customers are automatically segmented into tiers: VIP, High Value, Standard, At-Risk, and Lapsed.",
      "Each tier receives different marketing treatment — VIPs get exclusive offers and early access, At-Risk customers get retention campaigns.",
      "Scores update continuously as new data comes in — a customer's tier can change based on recent behaviour.",
      "A monthly CLV report shows segment sizes, movements between tiers, and revenue contribution by segment."
    ],
    exampleScenario: "The system identifies that Customer #4,281 has spent R28,000 over 8 months but hasn't purchased in 45 days — their engagement score is dropping. They're flagged as 'At-Risk VIP' and automatically receive a personal email from the founder with early access to next week's drop and a handwritten-style note. They purchase again within 3 days. Meanwhile, the system also identifies 12 customers whose CLV scores just crossed the VIP threshold — they're auto-tagged and start receiving VIP communications immediately."
  },

  // ═══════════════════════════════════════════════════════
  // VIP CUSTOMER FLOWS (4 workflows)
  // ═══════════════════════════════════════════════════════

  {
    id: "vip-customer-identification-tagging",
    name: "VIP Customer Identification & Tagging",
    category: "vip-flows",
    plan: "standard",
    shortDesc: "Automatically identifies and tags your top-tier customers based on purchase history and AOV. Once tagged, VIPs receive a different (more exclusive) version of all marketing communications — making them feel valued without extra work from you.",
    trigger: "Purchase threshold reached",
    result: "Automatic VIP segmentation",
    channel: null,
    problem: "Most brands know they should treat their best customers differently, but manually identifying and tagging VIPs is tedious and inconsistent. Without automation, VIP segmentation either doesn't happen or falls out of date within weeks.",
    bestUseCase: "Brands with 200+ customers looking to build a loyalty-driven retention strategy. The foundation workflow for all other VIP flows — this one must be in place first.",
    roi: "VIP customers typically represent 20% of the customer base but generate 60–80% of revenue. Proper identification and treatment of VIPs increases their retention rate by 25–40% and AOV by 15–20%.",
    howItWorks: [
      "The system monitors all customers against configurable VIP criteria: total spend threshold, purchase frequency, and average order value.",
      "When a customer crosses the VIP threshold, they're automatically tagged in Shopify and your email platform.",
      "A welcome-to-VIP notification is sent: 'You've unlocked VIP status — here's what that means for you.'",
      "All future marketing emails are dynamically adjusted — VIPs see exclusive offers, early access links, and premium messaging."
    ],
    exampleScenario: "A customer places their fourth order, pushing their total spend to R8,500. The system automatically tags them as VIP in Shopify and Klaviyo. They receive a message: 'You're officially a Nextstep VIP. From now on, you'll get early access to every drop, exclusive offers, and first priority on restocks.' Their next marketing email shows VIP-exclusive pricing on the new collection — 24 hours before anyone else sees it."
  },

  {
    id: "vip-early-access-new-drop-alert",
    name: "VIP Early Access — New Drop Alert",
    category: "vip-flows",
    plan: "standard",
    shortDesc: "When a new collection drops, VIP customers are notified 24 hours before the general public with exclusive early access. Creates genuine loyalty and drives first-hour sales from your most valuable buyers.",
    trigger: "New collection scheduled",
    result: null,
    channel: null,
    problem: "Treating VIPs the same as everyone else on launch day is a missed retention opportunity. Your best customers should feel like insiders — and early access is the single most effective way to make that happen without discounting.",
    bestUseCase: "Brands that drop new collections or products regularly (monthly or more frequently). The more drops, the more valuable VIP early access becomes as a loyalty lever.",
    roi: "VIP early access drives 30–50% of first-day revenue from a fraction of the customer base. VIP retention rates increase by 20–35% when early access is consistently offered — reducing churn of your most profitable customers.",
    howItWorks: [
      "When a new collection is scheduled for launch, the system generates VIP early-access emails and DMs.",
      "VIP customers receive notification 24 hours before the public launch with a private early-access link.",
      "The early-access link grants access to the collection before it's visible on the public storefront.",
      "After the VIP window closes, the collection goes live for everyone and the general launch sequence begins."
    ],
    exampleScenario: "Your new summer collection goes live Friday at 10 AM. Thursday at 10 AM, your 150 VIP customers receive an exclusive email: 'Your private early access to Summer '26 is live — shop before anyone else.' By Friday morning, VIPs have already purchased R45,000 worth of product. When the public launch goes live, 3 items are already 'almost sold out' — creating genuine urgency for the general audience."
  },

  {
    id: "vip-birthday-anniversary-flow",
    name: "VIP Birthday & Anniversary Flow",
    category: "vip-flows",
    plan: "ultimate",
    shortDesc: "Sends personalised birthday and purchase-anniversary messages to VIP customers with a one-time exclusive offer. Simple, effective, and the kind of personal touch that turns one-time buyers into lifetime fans.",
    trigger: "Birthday / anniversary date",
    result: "35–50% redemption rate",
    channel: null,
    problem: "Personal milestones are the highest-engagement moments in a customer's year — but most brands either ignore them or send generic, impersonal messages that feel like afterthoughts. A well-executed birthday or anniversary message builds emotional loyalty.",
    bestUseCase: "Brands with VIP customer data including birthdays or first-purchase dates. Most effective for brands with a warm, personal brand voice where a birthday message feels genuine rather than corporate.",
    roi: "Birthday and anniversary offers see 35–50% redemption rates — the highest of any email type. The incremental revenue plus the long-term loyalty impact makes this one of the highest-ROI automated touchpoints.",
    howItWorks: [
      "Customer birthdays and first-purchase anniversary dates are stored and monitored.",
      "On their birthday (or anniversary), VIP customers receive a personalised message with a one-time exclusive offer.",
      "The offer is unique — a code generated just for them, valid for 7 days, with a minimum spend tied to their typical AOV.",
      "A reminder is sent 2 days before expiry if the offer hasn't been redeemed."
    ],
    exampleScenario: "One of your top VIPs — R32,000 lifetime spend — has a birthday on March 15. They wake up to an email: 'Happy birthday from the Nextstep team! Here's 25% off your next order — our way of saying thanks for being part of the family since day one.' The code is unique, expires in 7 days, and requires a R500 minimum. They redeem it 3 days later with a R2,200 order. The R550 discount cost you a fraction of what it would cost to acquire a new customer of their calibre."
  },

  {
    id: "affiliate-referral-program-automation",
    name: "Affiliate & Referral Program Automation",
    category: "vip-flows",
    plan: "ultimate",
    shortDesc: "Full referral program management — unique tracking codes, automatic commission tracking, payout triggers, and performance reporting. Turn your best customers into a passive sales channel without hiring an affiliate manager.",
    trigger: null,
    result: "Full referral tracking automated",
    channel: null,
    problem: "Word-of-mouth is the most trusted acquisition channel for clothing brands, but most referral programs die because the manual tracking is unsustainable. Without automation, you can't track who referred whom, calculate commissions, or identify your best advocates.",
    bestUseCase: "Brands with loyal customers who already refer friends organically. Also valuable for brands working with micro-influencers who want performance-based compensation instead of flat fees.",
    roi: "Referred customers have a 16% higher lifetime value and 25% higher retention rate than non-referred customers. A well-run referral program can generate 10–25% of total revenue at a fraction of paid acquisition costs.",
    howItWorks: [
      "VIP customers and approved affiliates receive unique referral codes and tracking links.",
      "When a referred customer makes a purchase using the code, the referral is logged and the referrer's commission is calculated.",
      "Commission payouts are triggered automatically when thresholds are met (configurable: monthly, per-transaction, or minimum balance).",
      "A performance dashboard shows each affiliate's referrals, conversion rate, total revenue generated, and commission earned.",
      "AI monitors for fraud patterns (self-referrals, suspicious patterns) and flags anomalies for review."
    ],
    exampleScenario: "You invite your top 50 VIP customers into your referral program. Each gets a unique code and a branded sharing page. One VIP shares her code with her Instagram followers — 12 people use it in the first month, generating R18,000 in revenue. She earns R1,800 in store credit (10% commission). The AI flags one suspicious referral (same shipping address as the referrer) for your review. Your referral program is now a self-funding acquisition channel."
  },

  // ═══════════════════════════════════════════════════════
  // OWNER DASHBOARDS & INSIGHTS (4 workflows)
  // ═══════════════════════════════════════════════════════

  {
    id: "weekly-performance-report-telegram",
    name: "Weekly Performance Report — Telegram",
    category: "dashboards",
    plan: "core",
    shortDesc: "Every Monday morning, you receive a clean performance summary via Telegram showing: revenue recovered, workflows triggered, conversion rates, and what we optimised this week. Your business in 60 seconds.",
    trigger: null,
    result: null,
    channel: "Telegram",
    problem: "Most brand owners have no visibility into how their automations are performing. They're paying for workflows but have no idea which ones are working, which need optimising, or how much revenue they're actually recovering.",
    bestUseCase: "Every client on every plan. This is the baseline reporting workflow that keeps you informed without requiring you to log into any dashboards or analytics tools.",
    roi: "Operational insight — no direct revenue attribution. Provides the visibility needed to make informed decisions about which workflows to optimise, expand, or adjust.",
    howItWorks: [
      "Every Sunday night, the system compiles performance data from all active workflows.",
      "Key metrics are calculated: total revenue recovered, emails/DMs sent, conversion rates, and week-over-week trends.",
      "A clean, scannable summary is formatted and delivered to your Telegram at 8 AM Monday morning.",
      "The report highlights the top-performing workflow and any underperformers that may need attention."
    ],
    exampleScenario: "Monday 8 AM, you get a Telegram message: 'Weekly Report: R14,200 recovered | 847 automations triggered | Cart recovery: 11.3% (up from 9.8%) | Top performer: Low Stock Urgency — 18% conversion. One optimisation made: adjusted SMS timing from 30min to 20min delay.' You know exactly how your automations performed last week in 30 seconds, without opening a single dashboard."
  },

  {
    id: "daily-revenue-order-summary",
    name: "Daily Revenue & Order Summary",
    category: "dashboards",
    plan: "standard",
    shortDesc: "A daily morning briefing delivered to your phone showing yesterday's orders, total revenue, top products, and any anomalies (unusual spikes or drops) flagged by the AI monitoring system.",
    trigger: null,
    result: null,
    channel: "Telegram + Email",
    problem: "Without daily visibility, brand owners make decisions based on gut feeling rather than data. By the time they check Shopify analytics (if they remember), the moment to act on yesterday's trends has already passed.",
    bestUseCase: "Brands doing $20K+/month in revenue where daily fluctuations are meaningful. Most valuable for brands running paid ads, where daily revenue correlation with ad spend is critical for optimisation.",
    roi: "Operational insight — no direct revenue attribution. Enables faster decision-making on ad spend, inventory, and promotions by providing daily data without the friction of logging into analytics tools.",
    howItWorks: [
      "Every night at midnight, the system pulls the full day's data from Shopify, payment processors, and ad platforms.",
      "AI analyses the data for anomalies — unusual spikes, drops, or trends that deviate from the rolling 30-day average.",
      "A morning briefing is generated with: total revenue, order count, top 3 products, AOV, and any flagged anomalies.",
      "The briefing is delivered via Telegram at 7 AM and a detailed version is emailed for reference."
    ],
    exampleScenario: "Tuesday 7 AM, you receive your daily briefing: 'Yesterday: R8,400 revenue | 12 orders | AOV: R700 | Top product: Cargo Pant (5 units). ANOMALY: Revenue down 35% from 7-day average — check if Meta ads are still running.' You open Meta Ads Manager and discover your campaign was paused due to a billing issue. You fix it immediately instead of losing another full day of ad-driven sales."
  },

  {
    id: "ceo-live-dashboard-web-browser",
    name: "CEO Live Dashboard — Web Browser",
    category: "dashboards",
    plan: "ultimate",
    shortDesc: "A private, password-protected live web dashboard that pulls real-time data from your store and all automation systems. Goals, pipeline, metrics, and KPIs in one screen. Access from any device, anywhere.",
    trigger: null,
    result: null,
    channel: null,
    problem: "Brand owners currently need to check 5–8 different tools (Shopify, Klaviyo, Meta Ads, Google Analytics, email platform, DM inbox) to get a complete picture of their business. This fragmentation means most founders only check data sporadically — missing opportunities and problems.",
    bestUseCase: "Brands doing $50K+/month or managing multiple sales channels. Ideal for founders who want investor-grade visibility into their business without hiring a data analyst.",
    roi: "Operational insight — no direct revenue attribution. Consolidates 5–8 data sources into a single view, saving 30–60 minutes daily of cross-platform checking and enabling real-time decision-making.",
    howItWorks: [
      "A custom web dashboard is built and deployed to a private, password-protected URL.",
      "Data is pulled from all connected platforms (Shopify, email, SMS, DM, ads, reviews) and updated every 15 minutes.",
      "The dashboard displays real-time KPIs: revenue, orders, AOV, conversion rate, automation performance, and customer metrics.",
      "Custom goals and targets can be set — the dashboard tracks progress and colour-codes metrics (green/yellow/red) based on performance.",
      "Accessible from any device — phone, tablet, desktop — with a responsive design optimised for quick glances."
    ],
    exampleScenario: "You're at a meeting and someone asks how the business is doing this month. You pull up your dashboard on your phone: 'R142,000 revenue this month (87% of target), 203 orders, AOV R699, cart recovery at 12.4%, 3 VIPs at risk of churning.' All in one glance, real-time, from your phone. No logging into Shopify. No checking email analytics. Just one screen with everything that matters."
  },

  {
    id: "monthly-business-intelligence-report",
    name: "Monthly Business Intelligence Report",
    category: "dashboards",
    plan: "ultimate",
    shortDesc: "An AI-generated end-of-month report that analyses every workflow's performance, your customer cohort data, and makes strategic recommendations for next month. Like having a data analyst on staff.",
    trigger: null,
    result: null,
    channel: null,
    problem: "Monthly reporting is critical for strategic decision-making, but most brand owners don't have the data skills or time to generate meaningful analysis. They end up making month-to-month decisions based on incomplete data or no data at all.",
    bestUseCase: "Brands on the Ultimate VIP plan who want strategic guidance alongside their automation. Most valuable for brands in growth mode where monthly decisions (inventory, marketing spend, new products) have significant financial impact.",
    roi: "Operational insight — no direct revenue attribution. AI-generated strategic recommendations help prevent costly mistakes and identify growth opportunities that would otherwise go unnoticed.",
    howItWorks: [
      "On the 1st of every month, the system compiles a full month's data across all platforms and workflows.",
      "AI analyses performance trends, customer cohort behaviour, product performance, and workflow effectiveness.",
      "A comprehensive report is generated with sections: Executive Summary, Revenue Breakdown, Workflow Performance, Customer Health, and Strategic Recommendations.",
      "Recommendations are specific and actionable: 'Increase ad spend on Product X by 20% — it's converting at 2x your average but receiving below-average traffic.'",
      "The report is delivered as a formatted PDF via email and a summary is sent via Telegram."
    ],
    exampleScenario: "On April 1st, you receive your March Intelligence Report. Key findings: 'Cart recovery improved 22% month-over-month after SMS timing optimisation. VIP segment grew by 8 new customers. Recommendation: Your 90-day reactivation is outperforming the 60-day — consider shortening the 60-day sequence or adjusting the incentive. Product spotlight: The Oversized Hoodie has the highest profit margin and customer satisfaction — consider a colourway expansion.' You now have a clear, data-backed action plan for April."
  },

  // ═══════════════════════════════════════════════════════
  // NEW DROP & LAUNCH FLOWS (5 workflows)
  // ═══════════════════════════════════════════════════════

  {
    id: "product-drop-launch-sequence",
    name: "Product Drop Launch Sequence",
    category: "launch-flows",
    plan: "standard",
    shortDesc: "A multi-touch pre-launch and launch sequence — teaser email 72h before, reminder 24h before, launch notification at drop time, and a \"last chance\" follow-up 48h after. Builds anticipation and drives first-hour sell-through.",
    trigger: null,
    result: null,
    channel: "Email + DM",
    problem: "Most brands announce new drops with a single email on launch day — missing the critical window to build anticipation. Without a pre-launch sequence, first-hour sales are a fraction of what they could be.",
    bestUseCase: "Brands that drop new products or collections at least monthly. The more drops, the more this workflow pays for itself. Especially effective for limited-run or seasonal pieces where urgency is genuine.",
    roi: "Multi-touch launch sequences typically increase first-day revenue by 40–80% compared to single-email launches. The pre-launch teasers build anticipation that converts into immediate purchases at drop time.",
    howItWorks: [
      "You schedule a product drop date and the system generates the full launch sequence automatically.",
      "72 hours before: A teaser email goes out with a hint of what's coming — building curiosity without revealing everything.",
      "24 hours before: A reminder with more details — product previews, pricing, and a countdown to launch.",
      "At launch time: The main announcement goes out with direct product links and a 'shop now' CTA.",
      "48 hours after: A follow-up targeting non-purchasers with social proof from early buyers and any items that are already selling fast."
    ],
    exampleScenario: "You schedule your Winter Collection to drop Friday at 10 AM. Tuesday evening, your list receives a teaser: 'Something's coming Friday...' with a moody preview image. Thursday morning, a detailed preview with product shots and prices. Friday 10 AM sharp, the launch email hits with direct buy links. Sunday, non-buyers get a follow-up: '3 items already 70% sold through — don't miss out.' Your first-day revenue is R28,000 compared to the R12,000 you used to get with a single launch email."
  },

  {
    id: "waitlist-pre-order-automation",
    name: "Waitlist & Pre-Order Automation",
    category: "launch-flows",
    plan: "standard",
    shortDesc: "Manages your pre-launch waitlist from sign-up through to purchase — confirmation, countdown reminders, and instant notification at launch. Turns interest into guaranteed revenue before the product even drops.",
    trigger: "Waitlist sign-up → launch",
    result: "Pre-sold revenue before launch day",
    channel: null,
    problem: "Waitlists generate interest but most brands have no system to nurture that interest into purchases. Without automated follow-through, waitlist sign-ups cool off and many don't even notice when the product actually launches.",
    bestUseCase: "Brands launching limited-run products, restocking popular items, or building hype for new collections. Most effective when combined with VIP Early Access for a tiered launch strategy.",
    roi: "Waitlist nurture sequences convert at 25–45% — significantly higher than general launch emails. Pre-sold revenue provides cash flow certainty and validates demand before committing to larger production runs.",
    howItWorks: [
      "Customers sign up for the waitlist on the product page (or via a landing page / DM keyword trigger).",
      "Immediate confirmation email: 'You're on the list — here's what happens next.'",
      "Countdown reminders are sent at 7 days, 3 days, and 1 day before launch to maintain excitement.",
      "At launch, waitlisted customers receive instant notification with a priority purchase link (before the general announcement).",
      "Post-launch: Any waitlisted customers who didn't purchase receive a single follow-up with social proof from early buyers."
    ],
    exampleScenario: "You announce a limited-edition collaboration and 340 people join the waitlist. They receive a confirmation, then countdown emails at 7, 3, and 1 day before launch. On launch day, waitlisters get their notification 30 minutes before the general public. 42% of waitlisters purchase in the first hour — that's 143 sales before you've even announced the drop publicly. You've already generated R85,000 in revenue before the general audience even knows the product exists."
  },

  {
    id: "post-launch-upsell-flow",
    name: "Post-Launch Upsell Flow",
    category: "launch-flows",
    plan: "standard",
    shortDesc: "3–5 days after launch, triggers an upsell campaign to everyone who bought a new drop item — featuring complementary products from the same collection. Strike while the interest is highest.",
    trigger: "Post-purchase + 3 days",
    result: "15–25% accept the upsell",
    channel: null,
    problem: "The 3–5 days after a purchase are the highest-intent window for a repeat sale — the customer is excited about their new item and receptive to complementary products. Most brands miss this window entirely.",
    bestUseCase: "Brands with collections where products complement each other (e.g., matching sets, accessories, layering pieces). Most effective for drops with clear cross-sell opportunities.",
    roi: "Post-launch upsell flows convert at 15–25%, generating incremental revenue from customers who were already going to buy once. The second purchase is pure profit minus COGS — no acquisition cost.",
    howItWorks: [
      "3–5 days after a customer purchases a new-drop item, the system identifies complementary products from the same collection.",
      "A personalised upsell email is generated: 'Complete the look' or 'Pairs perfectly with your [product name].'",
      "Product recommendations are based on what other buyers of the same item also purchased (collaborative filtering).",
      "A small incentive (free shipping or 10% off) may be included to increase conversion on the second purchase."
    ],
    exampleScenario: "A customer buys the new oversized hoodie from your Winter Drop on Friday. The following Tuesday, they receive an email: 'Complete your Winter look — the matching cargo pants pair perfectly with your hoodie.' The email shows the pants styled with their hoodie, plus what other buyers who got the hoodie also purchased. 20% of recipients add the pants to their cart. Average upsell order: R850 — pure incremental revenue with zero acquisition cost."
  },

  {
    id: "influencer-collaboration-tracker",
    name: "Influencer Collaboration Tracker",
    category: "launch-flows",
    plan: "ultimate",
    shortDesc: "Manages your influencer gifting and collaboration pipeline — tracks who's received product, follows up for content posting, monitors performance of posts, and logs ROI data automatically. Full visibility on every collab.",
    trigger: null,
    result: null,
    channel: null,
    problem: "Influencer marketing is one of the most effective channels for clothing brands, but tracking gifting, content delivery, and ROI manually is a nightmare. Most brands have no idea which influencers actually drive sales versus which ones just take free product.",
    bestUseCase: "Brands working with 5+ influencers per month. Essential for brands scaling their influencer programme beyond what can be managed in a spreadsheet.",
    roi: "Provides clear ROI data per influencer, enabling brands to double down on top performers and cut underperformers. Brands with tracked influencer programs typically see 2–3x better returns than those managing manually.",
    howItWorks: [
      "When product is sent to an influencer, the system logs the shipment and starts a follow-up sequence.",
      "If no content is posted within the agreed timeframe, automated follow-up messages are sent (configurable tone and frequency).",
      "When content goes live, the system tracks engagement metrics (likes, comments, saves, shares) and attributes sales via unique discount codes or tracking links.",
      "A per-influencer ROI dashboard shows: product cost, content delivered, engagement rate, sales generated, and cost-per-acquisition.",
      "AI scores each influencer on overall value, helping you decide who to work with again and who to drop."
    ],
    exampleScenario: "You send product to 15 influencers for your Spring launch. The tracker shows: 12 posted within the agreed 7-day window, 3 haven't (automated follow-ups sent). Of the 12 who posted, 2 generated R18,000 in trackable sales each, 5 generated R2,000–R5,000, and 5 generated under R500. Your ROI dashboard makes it clear: double down on the top 2, maintain the middle 5, and don't gift the bottom 5 next time. No spreadsheets required."
  },

  {
    id: "seasonal-campaign-automation",
    name: "Seasonal Campaign Automation",
    category: "launch-flows",
    plan: "ultimate",
    shortDesc: "Pre-built, customisable campaign sequences for Black Friday, Christmas, Valentine's Day, and end-of-season clearance. Each campaign is AI-personalised by customer segment — VIPs get exclusive previews, casual buyers get standard promotions.",
    trigger: null,
    result: null,
    channel: null,
    problem: "Seasonal campaigns are the biggest revenue events of the year, but most brands scramble to put them together at the last minute. Without pre-built sequences, campaigns launch late, miss key segments, and underperform.",
    bestUseCase: "Every clothing brand — seasonal events drive 30–50% of annual revenue for most fashion brands. Most valuable for brands that want to run professional, multi-touch seasonal campaigns without hiring an agency.",
    roi: "Well-executed seasonal campaigns generate 2–5x the revenue of hastily assembled ones. AI-personalised segmentation adds another 20–40% on top by ensuring VIPs, active buyers, and lapsed customers each receive the right offer.",
    howItWorks: [
      "Pre-built campaign templates for BFCM, Christmas, Valentine's Day, and end-of-season clearance are ready to customise.",
      "Each campaign includes a multi-touch sequence: teaser, early access (VIP), main launch, mid-campaign reminder, and last chance.",
      "AI personalises messaging by customer segment — VIPs see exclusive early access, active buyers see curated picks, lapsed buyers see re-engagement offers.",
      "Campaign timing, offers, and creative are customisable — the framework handles the orchestration and send logic.",
      "Post-campaign reporting shows revenue by segment, offer redemption rates, and recommendations for next season."
    ],
    exampleScenario: "Black Friday is 3 weeks away. Instead of scrambling, you customise the pre-built BFCM template: VIPs get 48-hour early access with 25% off, active buyers get 20% off on launch day, and lapsed buyers get a 'come back for our biggest sale ever' reactivation email. The system handles the 5-email sequence per segment, the timing, and the segmentation. Your BFCM generates R180,000 — 60% more than last year when you sent one email to your entire list."
  }
];
