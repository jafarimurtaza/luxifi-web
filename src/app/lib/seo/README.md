# SEO Metadata System

A simple, clean metadata template system for Luxifi pages.

## Files Overview

- **`getMetadata.js`** - Core metadata generation function
- **`pageMetadata.js`** - Pre-configured metadata for each page
- **`pageData.js`** - Company information for schema
- **`schema.js`** - JSON-LD structured data helpers

## How to Use

### For Existing Pages

Import and use the pre-configured metadata:

```js
import { pageMetadata } from "../lib/seo/pageMetadata";

export const metadata = pageMetadata.home; // or .tech, .approach, .maintenance, .contact
```

### For New Pages

Use the `getMetadata` function directly:

```js
import { getMetadata } from "../lib/seo/getMetadata";

export const metadata = getMetadata({
  title: "Page Title",
  description: "Page description...",
  canonical: "https://luxifi.com/page-url",
  keywords: ["keyword1", "keyword2"],
  image: "/images/og/page-image.jpg",
});
```

### Adding Structured Data

For pages that need LocalBusiness schema:

```js
import { createLocalBusinessSchema } from "../lib/seo/schema";
import { companyInfo } from "../lib/seo/pageData";

const schema = createLocalBusinessSchema({
  name: companyInfo.name,
  description: "Page-specific description",
  url: "https://luxifi.com/page",
  telephone: companyInfo.telephone,
  address: companyInfo.address,
  image: companyInfo.image,
});

// Add to JSX
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>;
```

## Current Pages with Metadata

✅ Homepage (/)
✅ Tech (/tech)  
✅ Approach (/approach)
✅ Maintenance (/maintenance)
✅ Contact (/contact)
✅ Blog (/blog/[slug]) - Already implemented

## Automatic Features

- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Auto-generated at `/robots.txt`
- **OpenGraph**: Automatic social media previews
- **Twitter Cards**: Automatic Twitter previews
- **JSON-LD**: Structured data for search engines
