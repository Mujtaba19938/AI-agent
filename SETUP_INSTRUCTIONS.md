# Hero Section & Navbar Setup Instructions

## File Placement

### 1. Video File
Place your MP4 file here:
```
/public/video/hero-bg.mp4
```

**Steps:**
- Create the directory: `public/video/`
- Place `hero-bg.mp4` inside it

### 2. Font Files
Place Eurostile font files here:
```
/public/fonts/
```

**Required font files:**
- `Eurostile Extended Bold.ttf` (currently in use)
- `EurostileExtended-Bold.woff2` (optional, preferred format)
- `EurostileExtended-Bold.woff` (optional, fallback)
- `Eurostile.woff2` (optional, for regular weight)
- `Eurostile-Bold.woff2` (optional, for regular bold)

**If you don't have the font files:**
You can download Eurostile from:
- Adobe Fonts (if you have a Creative Cloud subscription)
- MyFonts.com
- Fonts.com
- Or use a similar geometric sans-serif font as fallback

**Font file naming must match exactly:**
- The @font-face declarations in `globals.css` expect these exact filenames
- If your font files have different names, update the `src` URLs in `globals.css`

## Project Structure

Your project should look like this:
```
killer.web/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Hero.tsx
│   └── Navbar.tsx
├── public/
│   ├── fonts/
│   │   └── Eurostile Extended Bold.ttf
│   └── video/
│       └── hero-bg.mp4
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Next.js Setup Requirements

Make sure your `app/layout.tsx` imports `globals.css`:

```tsx
import './globals.css'
// ... rest of your layout
```

Ensure your `tsconfig.json` has path aliases configured:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## Features Implemented

### Navbar
✅ Pill-shaped (rounded-full) design
✅ Glass effect (backdrop-blur-xl bg-white/10 border border-white/20)
✅ Fixed at top-center with margin-top (top-6)
✅ Menu items: Home, Features, Pricing, Contact
✅ Eurostile Extended Bold font
✅ Pure red text (#ff0000) with no transparency
✅ Neon glow on hover (drop-shadow-[0_0_10px_#ff0000])
✅ Uppercase, tracking-wide styling
✅ Correct z-index (z-30) above all content

### Hero Section
✅ Full-width, full-height hero section (h-screen)
✅ MP4 video background (hero-bg.mp4) - autoplay, loop, muted, object-cover
✅ Dark overlay (bg-black/40)
✅ Centered text with Eurostile Extended Bold font
✅ Fully visible red text (#ff0000) - no transparency
✅ Uppercase styling with wide tracking
✅ Fade-in animation on page load
✅ CTA button with Eurostile font
✅ Responsive typography (scales on mobile/tablet/desktop)
✅ Proper z-index layering:
  - Video: z-0 (background)
  - Overlay: z-10 (above video)
  - Hero Content: z-20 (above overlay)
  - Navbar: z-30 (above all)

## Customization

### Navbar
To adjust the navbar position, modify the `top-6` class in `Navbar.tsx`:
- `top-4` - closer to top
- `top-8` - further from top

To change menu items, edit the `menuItems` array in `Navbar.tsx`.

### Hero Text
The hero text uses pure red (#ff0000) with no transparency. To adjust the color, modify:
- `text-[#ff0000]` in the h1 and h2 elements in `Hero.tsx`

### Video
The video file path is set to `/video/hero-bg.mp4`. Ensure the file exists at this path.

## Z-Index Hierarchy

The z-index stacking order ensures proper layering:
1. **Video Background**: `z-0` - Bottom layer
2. **Dark Overlay**: `z-10` - Above video
3. **Hero Content**: `z-20` - Above overlay
4. **Navbar**: `z-30` - Top layer, always visible

## Styling Notes

- All text uses Eurostile Extended Bold via the `.font-eurostile` utility class
- Text is uppercase with wide letter spacing for a futuristic look
- Neon glow effects use Tailwind's drop-shadow utility
- Glass morphism effect on navbar uses backdrop-blur and semi-transparent backgrounds
- All transitions use 300ms duration for smooth animations
