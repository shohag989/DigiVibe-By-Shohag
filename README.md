# 🎯 A-6 Digital Tools Buying Website

A modern and fully responsive **digital tools marketplace** built with **React.js, Tailwind CSS, DaisyUI, and React Toastify**. This project allows users to browse curated digital tools, switch between **Products** and **Cart** views, add or remove items, track total selected products, and complete a simple checkout flow.

This assignment was crafted with a **clean SaaS-style UI**, meaningful content, and a strong focus on **real-world frontend architecture and state management**.

---

## 🌐 Live Preview
<img alt="DigiVibe Banner"  src="https://github.com/shohag989/DigiVibe-By-Shohag/blob/master/Cover.jpg">

🔗 **Live Website**
*[Vercel live link here](https://digivibe-byshohag.vercel.app/)*

🔗 **[GitHub Repository](https://github.com/shohag989/DigiVibe-By-Shohag.git)**

📸 **UI Preview**
*Add screenshot or GIF preview here*

---

## 💡 About the Project

Modern users often purchase **digital tools, subscriptions, templates, and SaaS resources** online. This project simulates that real-world experience through a smooth and responsive frontend application.

The main goal of this project is to demonstrate:

* Component-based React architecture
* JSON-driven dynamic product rendering
* Smart cart state management
* User-friendly toast notifications
* Clean responsive UI design

It was built as **Programming Hero Assignment 6** while following professional frontend development practices.

---

## 🧠 Key Features

* 🛒 **Dynamic cart system with real-time navbar count**
* 🔄 Product and cart section toggling
* 📦 **6–10 JSON-based digital products**
* ❌ Remove selected products instantly
* 💰 Auto total selected product price calculation
* 🔔 Toast notifications using React Toastify
* ✅ One-click proceed to checkout
* 📱 Fully responsive mobile-first design
* 🎨 Clean SaaS-inspired UI using DaisyUI

---

## 🛠️ Tech Stack

### Frontend

* **React.js**
* **JavaScript (ES6+)**
* **Tailwind CSS**
* **DaisyUI**
* **React Toastify**
* **Font Awesome Icons**

### Data Handling

* **JSON Product Data**
* React `useState`
* Array methods (`map`, `filter`, `reduce`)

---

## 📂 Project Structure

```txt
src/
 ├── components/
 │   ├── Navbar.jsx
 │   ├── Banner.jsx
 │   ├── Stats.jsx
 │   ├── ProductCard.jsx
 │   ├── Cart.jsx
 │   ├── Steps.jsx
 │   ├── Pricing.jsx
 │   └── Footer.jsx
 │
 ├── data/
 │   └── products.json
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## 🎯 Core Functionalities

### 🛍️ Product Browsing

Users can explore multiple digital tools displayed in a **3-column responsive card layout**.

### 🛒 Smart Cart Management

* Add product to cart
* Remove individual product
* See total selected products
* Navbar badge updates instantly

### 💳 Checkout Flow

The **Proceed to Checkout** button clears all selected cart products and shows a success toast.

### 🔔 Toast Alert System

User interactions are enhanced with instant notifications for:

* Add to cart
* Remove item
* Checkout complete

---

## 🚀 Installation & Setup

```bash
# Clone repository
git clone <your-repo-link>

# Go into project folder
cd digital-tools-buying-website

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📦 Product JSON Example

```json
{
  "id": 1,
  "name": "Resume Builder Pro",
  "description": "Create ATS-friendly resumes quickly.",
  "price": 19,
  "period": "monthly",
  "tag": "popular",
  "tagType": "Popular",
  "features": ["100+ templates", "ATS optimization", "Export to PDF"],
  "icon": "file"
}
```

---

## 🎯 Assignment Requirements Covered

* ✅ Navbar with cart icon
* ✅ Banner section
* ✅ Stats section
* ✅ Toggle buttons
* ✅ Product section default visible
* ✅ Empty cart message
* ✅ 6–10 JSON products
* ✅ 3-column layout
* ✅ Buy now button
* ✅ Cart count update
* ✅ Remove functionality
* ✅ Checkout clear cart
* ✅ Total selected product price
* ✅ React Toastify alerts
* ✅ Steps section
* ✅ Pricing section
* ✅ Footer
* ✅ Fully responsive design
* ✅ 8+ meaningful git commits

---

## 📚 What I Learned

Through this project, I improved my skills in:

* Building reusable React components
* Managing cart state efficiently
* Rendering JSON data dynamically
* Using `filter()` and `reduce()` in real projects
* Designing responsive SaaS-style UI
* Implementing better user feedback with toast alerts

---

## 🌟 Future Improvements

* LocalStorage cart persistence
* Product search & filter
* Category-based products
* Wishlist support
* Payment integration
* User authentication

---

## 👨‍💻 Author

**Shohag**
🎓 CSE Student
💻 MERN Stack Learner
🚀 Building modern web applications with clean UI

* GitHub: *https://github.com/shohag989*
* LinkedIn: *http://linkedin.com/in/dev-shohag*

---

## 📜 License

This project is created for **educational and assignment purposes** under Programming Hero.
