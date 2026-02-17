# 🛒 ElectroCart

**ElectroCart** is a modern, fully responsive e-commerce web application for purchasing electronic gadgets like phones, laptops, smartwatches, earphones, and more. Built with React and TypeScript, it features a beautiful UI with dark mode support, user authentication, shopping cart functionality, and order tracking.

## 🔗 Live Demo

[Click here to view the live project](https://your-deployment-url.com)

---

## ✨ Features

### 🔐 Authentication
- User signup with full name, email, password, and gender
- Secure login system
- Protected routes for authenticated users
- Profile management

### 🛍️ Shopping Experience
- Browse products by category (Phones, Laptops, Smartwatches, Earphones)
- Featured products and top-rated items on homepage
- Product search functionality
- Detailed product pages with specifications
- Add/remove items to/from cart
- Real-time cart updates

### 📦 Order Management
- Place orders with order confirmation
- View order history with timeline tracking
- Order details with status updates
- Order cancellation (for pending orders)

### 🎨 UI/UX
- Fully responsive design (mobile, tablet, desktop)
- Dark mode / Light mode toggle
- Modern, clean interface with smooth animations
- Optimized mobile layouts for forms and navigation
- Custom back button navigation
- Toast notifications for user feedback

---

## 🧰 Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Routing:** React Router v6
- **Icons:** Lucide React
- **State Management:** React Context API

---

## 📁 Project Structure

```
ElectroCart/
├── public/
│   ├── logo.png
│   └── robots.txt
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── pages/           # Page components
│   │   ├── HomePage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── SignupPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   └── ...
│   ├── context/         # React Context providers
│   │   └── CartContext.tsx
│   ├── hooks/           # Custom React hooks
│   │   ├── useAuth.tsx
│   │   ├── useCart.ts
│   │   └── useOrders.ts
│   ├── data/            # Static data
│   │   └── products.ts
│   ├── types/           # TypeScript types
│   │   └── product.ts
│   ├── lib/             # Utilities
│   │   └── utils.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 📦 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **bun**

### Installation

1. Clone the repository

```bash
git clone https://github.com/Akash972004/ElectroCart.git
cd ElectroCart
```

2. Install dependencies

```bash
npm install
# or
bun install
```

3. Start the development server

```bash
npm run dev
# or
bun dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
bun run build
```

The production-ready files will be in the `dist` folder.

---

## 🎯 Usage

1. **Sign Up:** Create a new account with your details
2. **Browse:** Explore products by category or search
3. **Add to Cart:** Select items and add them to your cart
4. **Checkout:** Review your cart and place an order
5. **Track Orders:** View your order history and track status

---

## 🔧 Configuration

### Environment Variables

Currently, the app uses local storage for data persistence. For production, you may want to configure:

- API endpoints
- Authentication services
- Payment gateways

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Akash**

- GitHub: [@Akash972004](https://github.com/Akash972004)
- Repository: [ElectroCart](https://github.com/Akash972004/ElectroCart)

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the icon set

---

**Made with ❤️ by Akash**
