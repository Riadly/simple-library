<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $books = [
            [
                'title' => 'Harry Potterand the Philosoper stone',
                'author' => 'J.K. Rowling',
                'year' => 1997
            ],
            [
                'title' => 'The Lord of the Rings',
                'author' => 'J.R.R. Tolkien',
                'year' => 1954
            ],
            [
                'title' => 'To Kill a Mockingbird',
                'author' => 'Harper Lee',
                'year' => 1960
            ],
            [
                'title' => '1984',
                'author' => 'George Orwell',
                'year' => 1949
            ],
            [
                'title' => 'The Greats Gatsby',
                'author' => 'F. Scott Fitzgerald',
                'year' => 1925
            ]

        ];

        foreach ($books as $book) {
            Book::create($book);
        }
    }
}
