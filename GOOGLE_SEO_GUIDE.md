# Google SEO Submission Guide

## Step 1: Google Search Console

1. **Visit Google Search Console**
   - Go to: https://search.google.com/search-console
   - Sign in with your Google account

2. **Add Property**
   - Click "Add Property"
   - Select "URL prefix"
   - Enter: `https://tonyisid.github.io/mahjong-heaven-site/`
   - Click "Continue"

3. **Verify Ownership**
   - Choose "HTML tag" verification method
   - Copy the meta tag provided
   - The tag looks like:
     ```html
     <meta name="google-site-verification" content="..." />
     ```
   - Add this tag to `<head>` in `index.html`
   - Click "Verify"

## Step 2: Submit Sitemap

### Create Sitemap

Create a file `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tonyisid.github.io/mahjong-heaven-site/</loc>
    <lastmod>2026-02-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Submit to Google

1. In Search Console, select your property
2. Go to "Sitemaps" in the left sidebar
3. Enter: `sitemap.xml`
4. Click "Submit"

## Step 3: Request Indexing

1. In Search Console, go to "URL Inspection"
2. Enter: `https://tonyisid.github.io/mahjong-heaven-site/`
3. Click "Request Indexing"
4. Google will crawl and index your site

## Step 4: robots.txt

Create `public/robots.txt`:

```txt
User-agent: *
Allow: /
Sitemap: https://tonyisid.github.io/mahjong-heaven-site/sitemap.xml
```

## Step 5: Monitor Performance

After submission, monitor:
- Index coverage
- Search performance
- Mobile usability
- Core Web Vitals

## Additional SEO Tips

1. **Build Backlinks**
   - Submit to gaming directories
   - Share on Reddit (r/puzzles, r/mobilegaming)
   - Post on Discord servers
   - Create YouTube gameplay videos

2. **Content Marketing**
   - Write blog posts about mahjong strategies
   - Create infographics
   - Share on social media
   - Engage with gaming communities

3. **Track Analytics**
   - Set up Google Analytics
   - Monitor user behavior
   - Track conversion rates
   - A/B test CTAs

## Expected Timeline

- **Day 1**: Submit to Search Console
- **Week 1**: Google starts crawling
- **Week 2-4**: Pages begin appearing in search results
- **Month 2-3**: Ranking improvements with backlinks

## Keywords to Track

Monitor rankings for:
- "mahjong puzzle game"
- "tile matching game"
- "brain training game"
- "relaxing puzzle game"
- "zen game android"
- "free mobile puzzle game"

## Contact

For questions about SEO:
- Google Search Console Help: https://support.google.com/webmasters/
- Google Search Central: https://developers.google.com/search
