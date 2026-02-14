# SEO Setup Guide for muhammadsabik.dev

## ✅ Completed Tasks

1. ✅ Updated URLs from `.com` to `.dev` in:
   - `config/site.ts`
   - `app/robots.ts`

2. ✅ Added Structured Data (JSON-LD) in `app/layout.tsx`
   - Person schema with your name, bio, and social links
   - Helps Google understand your website better

3. ✅ Existing SEO features:
   - Sitemap at `/sitemap.xml`
   - Robots.txt at `/robots.txt`
   - Comprehensive metadata in layout
   - Open Graph and Twitter cards configured

## 🎨 Images You Need to Create

### 1. Open Graph Image (`/public/og.png`)

**Size:** 1200 x 630 pixels  
**Format:** PNG or JPG

**Content suggestions:**

- Your name: "Muhammad Sabik"
- Tagline: "Full-Stack Architect & Founder"
- Background: Clean gradient or minimal design
- Optional: Your logo or professional photo

**Tools to create:**

- Canva (free templates)
- Figma (custom design)
- [og-image.xyz](https://og-image.xyz)
- Photoshop/Sketch

### 2. Favicons (Multiple sizes)

You need these files in `/public/`:

- `favicon.ico` (32x32 or 16x16)
- `favicon-16x16.png` (16x16)
- `apple-touch-icon.png` (180x180)
- `icon-192.png` (192x192) - for webmanifest
- `icon-512.png` (512x512) - for webmanifest

**Easy way to generate all at once:**

1. Create one high-res logo/icon (512x512 minimum)
2. Use [favicon.io](https://favicon.io) or [realfavicongenerator.net](https://realfavicongenerator.net)
3. Upload your image, download the package
4. Extract all files to `/public/` folder

**Design tips:**

- Simple and recognizable
- Works in both light/dark backgrounds
- Could be: Your initials "MS", a logo, or a symbol

## 🚀 Deployment Checklist

### Before Going Live:

- [ ] Images created and placed in `/public/`
- [ ] Website deployed to `muhammadsabik.dev`
- [ ] SSL certificate active (https://)
- [ ] Test all pages load correctly
- [ ] Check `/sitemap.xml` is accessible
- [ ] Check `/robots.txt` is accessible

### After Deployment:

#### 1. Google Search Console (CRITICAL)

- [ ] Go to https://search.google.com/search-console
- [ ] Add property: `muhammadsabik.dev`
- [ ] Verify ownership (choose DNS, HTML file, or Analytics method)
- [ ] Submit sitemap: `https://muhammadsabik.dev/sitemap.xml`
- [ ] Request indexing for homepage
- [ ] Wait 1-7 days for indexing

#### 2. Add Website to Your Profiles

Update your website link on:

- [ ] GitHub profile
- [ ] LinkedIn profile
- [ ] Twitter/X bio
- [ ] Dev.to profile
- [ ] Any other social media

#### 3. Create Quality Backlinks

- [ ] Write blog posts mentioning your name
- [ ] Guest post on other blogs (with link to your site)
- [ ] Comment on relevant forums/communities
- [ ] Share your portfolio on Reddit, Twitter, LinkedIn

#### 4. Monitor Progress

- [ ] Check indexing: Search `site:muhammadsabik.dev` on Google
- [ ] Search your name: `Muhammad Sabik` + `developer` or `engineer`
- [ ] Check Google Search Console for impressions/clicks
- [ ] Use Google Analytics (if installed) to track visitors

## 🎯 SEO Best Practices

### Improve Ranking:

1. **Content is King**
   - Write more blog posts with your name
   - Share unique insights and projects
   - Update content regularly

2. **Social Proof**
   - Share your articles on social media
   - Get mentions from other developers
   - Build a presence on GitHub, LinkedIn, Twitter

3. **Technical Excellence** (Already Done!)
   - Fast loading times ✅
   - Mobile responsive ✅
   - Proper meta tags ✅
   - Sitemap & robots.txt ✅
   - Structured data ✅

4. **Backlinks**
   - Quality over quantity
   - Get links from tech blogs, forums
   - Contribute to open source (shows activity)

## 📊 Expected Timeline

- **Day 1-3:** Google crawls your site
- **Day 3-7:** Site appears in `site:muhammadsabik.dev` search
- **Week 2-4:** Site may appear for your name (if unique)
- **Month 1-3:** Improve ranking with content and backlinks

## 🔍 Testing Your SEO

Test these URLs once deployed:

- Home: https://muhammadsabik.dev
- Sitemap: https://muhammadsabik.dev/sitemap.xml
- Robots: https://muhammadsabik.dev/robots.txt
- OG Image: https://muhammadsabik.dev/og.png

Use these tools:

- Google Search Console (index status)
- [PageSpeed Insights](https://pagespeed.web.dev)
- [Rich Results Test](https://search.google.com/test/rich-results) (for structured data)
- [Open Graph Checker](https://www.opengraph.xyz)

## 💡 Pro Tips

1. **Make your name searchable:**
   - Use "Muhammad Sabik" consistently everywhere
   - Add your name to image alt texts
   - Mention it naturally in blog posts

2. **Build authority:**
   - Link to your GitHub projects
   - Showcase real work (FrameKart, etc.)
   - Write technical tutorials

3. **Stay active:**
   - Update blog regularly
   - Share on social media
   - Engage with developer community

---

**Need help?** Check:

- [Google Search Central](https://developers.google.com/search)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
