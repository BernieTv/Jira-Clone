# 📝 Jira Clone build with NextJS, TailwindCSS, HonoJS and Appwrite 🌟

![📸 Screenshot 2024-10-12 183257](https://github.com/user-attachments/assets/cc42f737-69b8-424c-b89d-685061dd8018)

This project is a feature-rich Jira clone 🛠️ designed for task and project management. Built with modern web technologies, it provides an efficient and responsive user experience for managing workspaces, projects, and tasks. 🚀

---

## 🌟 Key Features

```
🏢 Workspaces
📊 Projects / Epics
✅ Tasks
📋 Kanban Board View
🗃️ Data Table View
📅 Calendar View
✉️ Invite System
⚙️ Workspace and Project Settings
🖼️ Image Uploads (for avatars and attachments)
🔌 Appwrite SDK Integration
⚛️ Next.js 14 Framework
🎨 Shadcn UI & TailwindCSS Styling
🔍 Advanced Search and Filtering
📈 Analytics Dashboard
👥 User Roles and Permissions
🔒 Authentication (OAuth and Email)
📱 Responsive Design (Mobile-friendly)
🚀 API using Hono.js
```

---

## 🛠️ Tech Stack

- **Frontend:** ⚛️ Next.js 14, 🎨 TailwindCSS, 🖌️ Shadcn UI
- **Backend:** 🚀 Hono.js, 🔌 Appwrite
- **Database:** 🗃️ Appwrite
- **Authentication:** 🔒 OAuth and 📧 Email-based Auth
- **API:** 🌐 Hono.js
- **Package Manager:** 📦 Bun (v1.1.30^)

---

## 📋 Prerequisites

Make sure you have the following installed:

- **[Bun](https://bun.sh/)** 📦 version 1.1.30 or higher
- **Node.js** 🌐 version 18.x or higher
- **Appwrite** server instance (or access to an existing instance) 🔌

---

## 🚀 Getting Started

### 🖥️ Cloning the Repository

```shell
git clone https://github.com/BernieTv/Jira-Clone.git
```

### 📦 Install Packages

```shell
bun install
```

### 🔧 Setup Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
NEXT_PUBLIC_APP_URL= "http://localhost:3000"

NEXT_PUBLIC_APPWRITE_ENDPOINT= "<Your Appwrite Endpoint URL>"
NEXT_PUBLIC_APPWRITE_PROJECT= "<Your Appwrite Project ID>"

NEXT_PUBLIC_APPWRITE_DATABASE_ID= "<Your Database ID>"
NEXT_PUBLIC_APPWRITE_WORKSPACES_ID= "<Your Workspaces Collection ID>"
NEXT_APPWRITE_KEY= "<Your Appwrite API Key>"
```

### ▶️ Start the App

```shell
bun run dev
```

---

## 🛤️ Roadmap

- [ ] ✍️ Real-time Collaboration on Kanban Boards
- [ ] 🌗 Dark Mode Support
- [ ] 🔔 Notifications System
- [ ] 📝 Support for Custom Fields
- [ ] 📊 Enhanced Reporting and Export Options

---

## 🤝 Contributing

Contributions are welcome! 🎉 Feel free to open issues or submit pull requests to improve the project. 🛠️

### Steps to Contribute:

1. 🍴 Fork the repository
2. 🌱 Create a feature branch: `git checkout -b feature/<your-feature>`
3. 💾 Commit your changes: `git commit -m "Add new feature"`
4. 🔄 Push to the branch: `git push origin feature/<your-feature>`
5. 📨 Open a pull request

---

## 📜 License

This project is licensed under the MIT License. 📄 See the `LICENSE` file for more details.

---

## 🙏 Acknowledgments

Special thanks to:

- ⚛️ [Next.js Team](https://nextjs.org/)
- 🔌 [Appwrite Team](https://appwrite.io/)
- 🎨 [TailwindCSS Team](https://tailwindcss.com/)
