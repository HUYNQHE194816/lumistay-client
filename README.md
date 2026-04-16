<<<<<<< Updated upstream
# ✧ LumiStay - Client ✧
> **Minimalist Room Finding Platform for Students**

LumiStay là giao diện người dùng của hệ thống tìm trọ, tập trung vào trải nghiệm trực quan trên bản đồ và kết nối tức thì.

## 🛠 Tech Stack
- **Framework:** React.js (v18+) hoặc Next.js
- **Styling:** Tailwind CSS (Aesthetic & Responsive)
- **State Management:** Redux Toolkit (quản lý User, Chat, Rooms)
- **Map:** Google Maps JavaScript API
- **Communication:** Socket.io-client
- **Icons:** Lucide React / Phosphor Icons

## 📁 Folder Structure
```text
src/
├── assets/          # Hình ảnh, font, css global
├── components/      # Các thành phần tái sử dụng
│   ├── common/      # Button, Input, Modal, Loading
│   ├── layout/      # Navbar, Footer, Sidebar
│   ├── maps/        # GoogleMapContainer, CustomMarker, InfoWindow
│   └── chat/        # ChatBox, MessageItem, ChatList
├── hooks/           # Custom hooks (useAuth, useSocket, useLocation)
├── pages/           # Các trang chính (Home, Login, RoomDetail, Profile)
├── services/        # API calls (Axios instance)
├── store/           # Redux logic (slices, store config)
└── utils/           # Helper functions (format currency, coordinate conversion)
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> Stashed changes
