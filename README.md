<div align="center">
      <h1> <img src="https://raw.githubusercontent.com/RainboeStrykr/glyph-pdf-toolkit/refs/heads/main/app/glyph_logo_main.png" width="80px"><br/>Glyph</h1>
     </div>
<p align="center"> <a href="https://glyph-pdf.vercel.app/" target="_blank"><img alt="" src="https://img.shields.io/badge/Website-EA4C89?style=normal&logo=link&logoColor=white" style="vertical-align:center" /></a> </p>

## Description
Glyph is your all-in-one, browser-based solution for complete PDF management. Designed for simplicity and power, Glyph empowers you to effortlessly merge, split, compress, convert, organise, and secure your PDF documents, all within a private and intuitive environment. From transforming HTML into PDFs to adding watermarks, encrypting sensitive files, or decrypting protected documents, Glyph provides professional-grade tools without requiring downloads or complex installations. Experience unparalleled control over your documents, ensuring privacy and efficiency with every task.

## Features
- 🔒 100% Private — All processing happens locally in your browser
- ⚡ Fast — No upload/download delays, instant processing
- 🆓 Free — No registration, no limits, no watermarks
- 📱 Responsive — Works on desktop and mobile

## Tools

| Tool | Description |
| ----------- | ----------- |
| Merge PDF | Combine multiple PDFs into one |	
| Split PDF | Extract specific pages from a PDF |
| Compress PDF | Reduce PDF file size |
| Rotate PDF | Rotate all pages by 90°, 180°, or 270° |
| PDF to Images | Convert PDF pages to PNG or JPEG |
| Images to PDF | Create a PDF from images |
| Organise Pages | Reorder, rotate, or delete individual pages |
| Add Watermark | Add text watermark to PDF pages |

## Tech Stack
 ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)    

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
