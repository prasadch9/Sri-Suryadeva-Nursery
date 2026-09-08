# Sri Suryadeva Nursery — Next.js Website

A modern, responsive, greenery-first nursery website for **Sri Suryadeva Nursery, Kadiyam**.

## Included pages
- Home
- About Us
- Our Plants
- Gallery
- Contact Us
- Fixed WhatsApp button at the bottom-left

## Tech
- Next.js 16.3.4
- React 19
- JSX
- Responsive CSS
- React Icons
- App Router

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Important before publishing

1. Replace the WhatsApp placeholder in `components/WhatsAppButton.jsx`:
   `91XXXXXXXXXX`
2. Replace the placeholder address, phone and email in `app/contact/page.jsx`.
3. The plant/gallery photos currently use Unsplash image URLs. For the final business website, replace them with your own nursery photographs or licensed image assets.
4. The Contact form is frontend-only and currently shows a success state. Connect it to an API/email service if you want enquiries delivered to email.
5. The supplied business logo is already included at `public/logo.jpg`.

## Build for production

```bash
npm run build
npm start
```
