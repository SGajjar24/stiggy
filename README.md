# Stiggy India - Streetwear E-commerce

![Stiggy India](https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2070&auto=format&fit=crop)

Stiggy India is a modern, high-performance e-commerce platform for premium streetwear, built with React, TypeScript, and Vite. It features a sleek, responsive design, product filtering, and WhatsApp order integration.

## 🚀 Features

- **Modern UI/UX**: Premium aesthetic with smooth animations and responsive layout.
- **Product Catalog**: Filterable shop page with categories (New, Sale, T-Shirts, Hoodies, etc.).
- **Product Details**: Image gallery, size selection, and quantity management.
- **WhatsApp Integration**: Direct "Order on WhatsApp" functionality with pre-filled messages.
- **Contact Form**: Integrated with Web3Forms for inquiries and newsletter subscriptions.
- **SEO Optimized**: Meta tags and Open Graph support using `react-helmet-async`.
- **Error Handling**: Custom 404 page and Error Boundary for robust user experience.

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Forms**: Web3Forms
- **SEO**: React Helmet Async

## 📦 Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/SGajjar24/stiggy.git
    cd stiggy
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**:
    Create a `.env` file in the root directory and add your Web3Forms Access Key:
    ```env
    VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
    ```

4.  **Start the development server**:
    ```bash
    npm run dev
    ```

## 🚀 Deployment

### Vercel

1.  Push your code to GitHub.
2.  Import the project into Vercel.
3.  Add the `VITE_WEB3FORMS_ACCESS_KEY` environment variable in the Vercel dashboard.
4.  Deploy!

## 📝 Content Management

For instructions on how to update products, images, and contact information, please refer to the [USER_GUIDE.md](./USER_GUIDE.md).

## 📄 License

This project is licensed under the MIT License.
