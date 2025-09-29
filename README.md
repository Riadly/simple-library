# 📚 Simple Library - Laravel API

Simple Library adalah aplikasi manajemen perpustakaan sederhana yang dibangun dengan Laravel 11, MySQL, dan Tailwind CSS. Aplikasi ini menyediakan REST API dan Web Interface untuk mengelola koleksi buku.

## 🚀 Fitur

- ✅ CRUD lengkap untuk manajemen buku (Create, Read, Update, Delete)
- ✅ REST API dengan response JSON
- ✅ Web Interface modern dengan Tailwind CSS
- ✅ Validasi input data
- ✅ Responsive design
- ✅ Real-time notifications

## 🛠️ Tech Stack

- **Backend**: Laravel 11.x
- **Database**: MySQL
- **Frontend**: Blade Templates + Tailwind CSS
- **API**: RESTful API
- **PHP**: 8.2+

## 📋 Prerequisites

Pastikan sistem Anda sudah terinstall:

- PHP >= 8.2
- Composer
- MySQL
- Git

## 🔧 Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/Riadly/simple-library.git
cd simple-library
```

### 2. Install Dependencies

```bash
composer install
```

### 3. Setup Environment

```bash
# Copy file .env.example ke .env
cp .env.example .env

# Generate application key
php artisan key:generate
```

### 4. Konfigurasi Database

Edit file `.env` dan sesuaikan dengan konfigurasi database Anda:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=simple_library
DB_USERNAME=root
DB_PASSWORD=your_password
```

### 5. Buat Database

```sql
CREATE DATABASE simple_library;
```

### 6. Jalankan Migration & Seeder

```bash
# Jalankan migration
php artisan migrate

# Jalankan seeder untuk data sample
php artisan db:seed
```

### 7. Install API Routes (Laravel 11)

```bash
php artisan install:api
```

### 8. Jalankan Aplikasi

```bash
php artisan serve
```

Aplikasi akan berjalan di `http://127.0.0.1:8000`

## 📖 API Documentation

Base URL: `http://127.0.0.1:8000/api`

### Endpoints

#### 1. Get All Books

**Request:**
```http
GET /api/books
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Harry Potter and the Philosopher's Stone",
      "author": "J.K. Rowling",
      "year": 1997,
      "created_at": "2025-09-29T09:17:07.000000Z",
      "updated_at": "2025-09-29T09:17:07.000000Z"
    }
  ]
}
```

#### 2. Get Single Book

**Request:**
```http
GET /api/books/{id}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Harry Potter and the Philosopher's Stone",
    "author": "J.K. Rowling",
    "year": 1997,
    "created_at": "2025-09-29T09:17:07.000000Z",
    "updated_at": "2025-09-29T09:17:07.000000Z"
  }
}
```

#### 3. Create New Book

**Request:**
```http
POST /api/books
Content-Type: application/json

{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "year": 1937
}
```

**Response:**
```json
{
  "success": true,
  "message": "Book created successfully",
  "data": {
    "id": 6,
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "year": 1937,
    "created_at": "2025-09-29T09:17:07.000000Z",
    "updated_at": "2025-09-29T09:17:07.000000Z"
  }
}
```

**Validation Rules:**
- `title`: required, string, max 150 characters
- `author`: required, string, max 100 characters
- `year`: optional, integer, max current year

#### 4. Update Book

**Request:**
```http
PUT /api/books/{id}
Content-Type: application/json

{
  "title": "The Hobbit (Updated)",
  "author": "J.R.R. Tolkien",
  "year": 1937
}
```

**Response:**
```json
{
  "success": true,
  "message": "Book updated successfully",
  "data": {
    "id": 6,
    "title": "The Hobbit (Updated)",
    "author": "J.R.R. Tolkien",
    "year": 1937,
    "created_at": "2025-09-29T09:17:07.000000Z",
    "updated_at": "2025-09-29T10:30:15.000000Z"
  }
}
```

#### 5. Delete Book

**Request:**
```http
DELETE /api/books/{id}
```

**Response:**
```json
{
  "success": true,
  "message": "Book deleted successfully"
}
```

## 🧪 Testing API

### Menggunakan cURL

**Get All Books:**
```bash
curl http://127.0.0.1:8000/api/books
```

**Get Single Book:**
```bash
curl http://127.0.0.1:8000/api/books/1
```

**Create Book:**
```bash
curl -X POST http://127.0.0.1:8000/api/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "year": 1937
  }'
```

**Update Book:**
```bash
curl -X PUT http://127.0.0.1:8000/api/books/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title",
    "author": "Updated Author",
    "year": 2000
  }'
```

**Delete Book:**
```bash
curl -X DELETE http://127.0.0.1:8000/api/books/1
```

### Menggunakan Postman

1. Import collection atau buat request manual
2. Set base URL: `http://127.0.0.1:8000/api`
3. Untuk POST/PUT, set header `Content-Type: application/json`
4. Masukkan JSON body sesuai contoh di atas

## 🖥️ Web Interface

Akses web interface di: `http://127.0.0.1:8000`

### Fitur Web Interface:
- 📝 Form untuk menambah buku baru
- 📚 Grid view untuk melihat semua buku
- ✏️ Edit buku dengan modal popup
- 🗑️ Delete buku dengan konfirmasi
- 🔔 Toast notifications untuk feedback
- 📱 Responsive design

## 📁 Struktur Project

```
simple-library/
├── app/
│   ├── Http/
│   │   └── Controllers/
│   │       └── BookController.php
│   └── Models/
│       └── Book.php
├── database/
│   ├── migrations/
│   │   └── xxxx_create_books_table.php
│   └── seeders/
│       ├── BookSeeder.php
│       └── DatabaseSeeder.php
├── resources/
│   └── views/
│       └── books/
│           └── index.blade.php
├── routes/
│   ├── api.php
│   └── web.php
├── .env.example
├── .gitignore
├── composer.json
└── README.md
```

## 🗃️ Database Schema

### Table: `books`

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT UNSIGNED | Primary key, auto increment |
| title | VARCHAR(150) | Judul buku (required) |
| author | VARCHAR(100) | Penulis buku (required) |
| year | INT | Tahun terbit (nullable) |
| created_at | TIMESTAMP | Waktu pembuatan record |
| updated_at | TIMESTAMP | Waktu update terakhir |

## 🔐 Security

- CSRF Protection untuk web routes
- Input validation
- SQL Injection protection via Eloquent ORM
- XSS protection

## 🐛 Troubleshooting

### Error: Database connection failed
```bash
# Pastikan MySQL berjalan
# Cek kredensial di .env
# Pastikan database sudah dibuat
```

### Error: Class not found
```bash
composer dump-autoload
```

### Error: Migration sudah ada
```bash
php artisan migrate:fresh --seed
```

### Error: View not found
```bash
# Pastikan folder resources/views/books ada
# Pastikan file index.blade.php sudah dibuat
php artisan view:clear
```

### Error: 419 CSRF Token Mismatch (API)
```bash
# Tambahkan 'api/*' ke except array di VerifyCsrfToken middleware
```

### Error: Route not found
```bash
php artisan route:clear
php artisan route:list  # Cek semua routes
```

## 🚀 Deployment

### Persiapan Production

```bash
# Optimize aplikasi
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Set APP_ENV di .env
APP_ENV=production
APP_DEBUG=false
```

### Environment Variables Production

Pastikan set environment variables berikut di production:
- `APP_KEY`
- `DB_*` (Database credentials)
- `APP_URL`

## 📝 License

Open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## 👨‍💻 Author

**Your Name**
- GitHub: [@Riadly](https://github.com/Riadly)
- Email: mriadly@gmail.com

## 🙏 Acknowledgments

- Laravel Framework
- Tailwind CSS
- Technical Test by Rumah Hobi/Xfit Digital Indonesia

---

**Note**: Ini adalah project untuk technical test. Dibuat dengan menggunakan Laravel 11.
