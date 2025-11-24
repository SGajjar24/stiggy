# Stiggy India - Content Management Guide

This guide provides instructions on how to update content, images, and contact information for the Stiggy India website.

## 1. Updating Products

All product data is stored in `constants.ts`. To add, remove, or modify products, edit this file.

### Adding a New Product
Add a new object to the `PRODUCTS` array in `constants.ts` following this structure:

```typescript
{
  id: 'unique-id', // Must be unique (e.g., 'p12')
  name: 'Product Name',
  price: 2999,
  originalPrice: 3999, // Optional, for sale items
  category: 'T-Shirts', // Must match one of the categories in CATEGORIES array
  image: 'https://link-to-main-image.jpg',
  gallery: ['https://link-to-image-1.jpg', 'https://link-to-image-2.jpg'],
  description: 'Product description goes here.',
  sizes: ['S', 'M', 'L', 'XL'],
  newArrival: true, // Optional, marks as "Latest Drop"
  bestSeller: false // Optional, marks as "Trending Now"
}
```

### Removing a Product
Simply delete the corresponding object from the `PRODUCTS` array.

### Updating Product Images
Replace the URL in the `image` field (main image) or the `gallery` array (additional images). You can use hosted URLs (like Unsplash, Cloudinary) or local images (if configured).

## 2. Updating Contact Information

### Phone Number
The phone number for WhatsApp orders and inquiries is located in two places:
1. **Footer**: Open `components/Footer.tsx` and search for `const phoneNumber = "919104518311";`. Update the number there.
2. **Product Page**: Open `pages/ProductDetailsPage.tsx` and search for `const phoneNumber = "919104518311";`. Update it there as well.

### Email Address
The contact form sends emails via Web3Forms.
- To change the destination email, you need to update the `VITE_WEB3FORMS_ACCESS_KEY` in the `.env` file.
- You can generate a new Access Key at [web3forms.com](https://web3forms.com/) using your new email address.

## 3. Updating Social Media Links

Social media links are located in the Footer.
1. Open `components/Footer.tsx`.
2. Search for the `Instagram`, `Twitter`, or `Facebook` icons.
3. Update the `href="#"` attribute with your actual profile URL.

Example:
```tsx
<a href="https://instagram.com/stiggyindia" ...>
  <Instagram size={18} />
</a>
```

## 4. Updating the Hero Image

To change the large background image on the home page:
1. Open `components/Hero.tsx`.
2. Locate the `img` tag inside the "Background Image with Overlay" section.
3. Update the `src` attribute with your new image URL.

```tsx
<img 
  src="https://your-new-image-url.jpg" 
  alt="Streetwear Background" 
  className="w-full h-full object-cover opacity-60"
/>
```

## 5. Adding/Removing Categories

To add a new category (e.g., "Caps"):
1. Open `constants.ts`.
2. Add the new category name to the `CATEGORIES` array at the bottom of the file.
3. Ensure any new products belonging to this category use the exact same name in their `category` field.
