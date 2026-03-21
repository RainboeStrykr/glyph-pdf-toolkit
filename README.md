# Glyph

Glyph is your all-in-one, browser-based solution for complete PDF management. Designed for simplicity and power, Glyph empowers you to effortlessly merge, split, compress, convert, organise, and secure your PDF documents, all within a private and intuitive environment. From transforming HTML into PDFs to adding watermarks, encrypting sensitive files, or decrypting protected documents, Glyph provides professional-grade tools without the need for downloads or complex installations. Experience unparalleled control over your documents, ensuring privacy and efficiency with every task.

![logo](app/glyph_logo_main.png)

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## ✨ Features

- **🔒 100% Private** — All processing happens locally in your browser
- **⚡ Fast** — No upload/download delays, instant processing
- **🆓 Free** — No registration, no limits, no watermarks
- **📱 Responsive** — Works on desktop and mobile

## 🛠️ Tools

| Tool | Description |
|------|-------------|
| **Merge PDF** | Combine multiple PDFs into one |
| **Split PDF** | Extract specific pages from a PDF |
| **Compress PDF** | Reduce PDF file size |
| **Rotate PDF** | Rotate all pages by 90°, 180°, or 270° |
| **PDF to Images** | Convert PDF pages to PNG or JPEG |
| **Images to PDF** | Create a PDF from images |
| **Organize Pages** | Reorder, rotate, or delete individual pages |
| **Add Watermark** | Add text watermark to PDF pages |

## 🏗️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **UI:** [React 19](https://react.dev/) + [Tailwind CSS 4](https://tailwindcss.com/)
- **PDF Processing:** [pdf-lib](https://pdf-lib.js.org/) + [PDF.js](https://mozilla.github.io/pdf.js/)
- **Language:** TypeScript

## 📁 Project Structure

```
glyph/
├── app/
│   ├── page.tsx          
│   ├── layout.tsx        
│   └── tools/
│       ├── page.tsx      
│       ├── merge/        
│       ├── split/        
│       ├── compress/     
│       ├── rotate/       
│       ├── pdf-to-images/
│       ├── images-to-pdf/
│       ├── organize/    
│       └── watermark/    
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── FileUploader.tsx
│   └── ProcessingStatus.tsx
└── lib/
    └── pdf-operations.ts # Core PDF manipulation functions
```

## 📄 License

MIT License — feel free to use this project for personal or commercial purposes.
