# C3GPT - Lite version of ChatGPT

Tugas Besar III IF2211 Strategi Algoritma
<br />

## Table of Contents
* [General Info](#general-information)
* [Tampilan Program](#tampilan-program)
* [Prerequisites](#prerequisites)
* [How To Run](#how-to-run)
* [Features](#features)
* [Programming Language](#programming-language)
* [Project Structure](#project-structure)
* [Credits](#credits)

## General Information
Web application mirip ChatGPT sederhana yang dapat menampilkan jawaban sesuai pertanyaan user jika pertanyaan tersebut telah ada di database. Web application ini juga menyediakan fitur untuk menambahkan pertanyaan ke database dan menghapus pertanyaan dari database.

## Tampilan Program
TODO

## Prerequisites

- NodeJS
- npm

## How to Run

- Install the dependencies

```bash
npm ci
```

- Run the development server

```bash
npm run dev
```

## Features
- Calculator Feature
- Day Name Generator Feature
- Ask Question Feature
- Add Question to Database Feature (Use format: "Tambahkan pertanyaan xxx dengan jawaban xxx)
- Delete Question from Database Feature (Use format: "Hapus pertanyaan xxx)

## Programming Languange
* JavaScript

## Project Structure
```bash
Tubes3_13521046
│
├───backend
│    ├── db
│    │    └── db.js
│    ├── handlers
│    │    ├── chat.js
│    │    ├── history.js
│    │    └── qna.js
│    ├── lib
│    │    ├── bm.js
│    │    ├── calculator.js
│    │    ├── date.js
│    │    ├── kmp.js
│    │    ├── regex.js
│    │    ├── search.js
│    │    └── similarity.js
│    └── models
│         ├── ChatSchema.js
│         ├── HistorySchema.js
│         └── QnASchema.js
│
├───components
│    ├── chat-history-bar.js
│    └── chat.jsx
│
├───pages
│    ├── api
│    │    ├── chat.js
│    │    ├── history.js
│    │    └── qna.js
│    ├── _app.js
│    ├── _document.js
│    └── index.js
│
├───public
│    ├── bot_avatar.svg
│    └── user_avatar.svg
│
├───services
│    ├── chat.js
│    ├── history.js
│    └── qna.js
│
├───styles
│    ├── Home.module.css
│    └── globals.css
│
├───doc
│   └── Tubes_13521046.pdf
│
└───README.md
```

## Credits
This project is implemented by:
1. Jeffrey Chow (13521046)
2. Bill Clinton (13521064)
3. Chiquita Ahsanunnisa (13521129)
