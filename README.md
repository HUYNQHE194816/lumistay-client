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
