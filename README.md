# 🔒 Bài Kiểm Tra Nội Bộ - VietProDev x MeU

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.0-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC)](https://tailwindcss.com/)

**Website kiểm tra nội bộ** dành cho nhân viên **VietProDev x MeU**. Không phải dự án công khai.

## ⚠️ Lưu ý quan trọng

- **Nội bộ**: Chỉ dành cho nhân viên VietProDev x MeU
- **Không công khai**: Không được chia sẻ link hoặc mã nguồn
- **Không indexing**: Đã cấu hình robots.txt chặn tìm kiếm

## ✨ Tính năng

- 📝 **Bài kiểm tra nội bộ** về JavaScript, TypeScript, React, Tailwind CSS
- ⏱️ **Thời gian giới hạn** 60 phút với đếm ngược
- 🛡️ **Bảo mật cao** - Chặn copy, paste, dev tools, chuyển tab
- 📱 **Responsive Design** - Hoạt động trên mọi thiết bị
- 🎨 **UI đơn giản** với hiệu ứng cơ bản
- 📊 **Lưu kết quả** vào Google Sheets nội bộ
- 🔄 **Làm lại bài thi** với dữ liệu localStorage

## 🚀 Công nghệ sử dụng

- **Framework**: Next.js 14 (App Router)
- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Backend**: Next.js API Routes
- **Database**: Google Sheets (nội bộ)

## 🛠️ Cài đặt (Chỉ dành cho developer nội bộ)

### Yêu cầu hệ thống
- Node.js 18+
- npm/yarn/pnpm
- Quyền truy cập repository nội bộ

### Cài đặt dependencies
```bash
npm install
```

### Chạy development server
```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem.

### Build production
```bash
npm run build
npm start
```

## 🔒 Bảo mật & Quyền truy cập

- ✅ **Robots.txt**: Chặn hoàn toàn indexing
- ✅ **No-index meta**: Không cho phép tìm kiếm
- ✅ **Internal only**: Chỉ truy cập nội bộ
- ✅ **Access control**: Kiểm soát truy cập theo IP/domain nội bộ

## 📁 Cấu trúc thư mục

```
src/
├── app/
│   ├── api/           # API routes nội bộ
│   ├── components/    # React components
│   ├── data/         # Questions data
│   ├── globals.css   # Global styles
│   ├── layout.js     # Root layout
│   └── page.js       # Homepage
public/
├── js/              # Snowstorm effect
├── robots.txt       # Block indexing
└── site.webmanifest # PWA manifest
```

## 🌐 Deployment (Nội bộ)

### Vercel Internal
```bash
npm i -g vercel
vercel --prod
```

### Internal Server
```bash
npm run build
# Deploy lên server nội bộ
```

## 🔧 Cấu hình Environment (Nội bộ)

Tạo file `.env.local`:

```env
NEXT_PUBLIC_APP_URL=https://internal-quiz.vietprodev.com
GOOGLE_SHEETS_API_KEY=internal-key
```

## 📞 Liên hệ

- **Internal Email**: internal@vietprodev.com
- **Slack**: #internal-quiz
- **GitHub**: Repository nội bộ

---

**🔒 Dự án nội bộ - Không chia sẻ công khai**
