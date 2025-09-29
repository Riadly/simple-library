<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use Illuminate\View\View;
use Illuminate\Http\JsonResponse;

class BookController extends Controller
{
    public function WebIndex(): View 
    {
        $books = Book::orderBy('created_at', 'desc')->get();
        return view('books.index', compact('books'));
    }

    public function index(): JsonResponse
    {
        $books = Book::all();

        return response()->json([
            'success' => true,
            'data' => $books
        ], 200);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:150',
            'author' => 'required|string|max:100',
            'year' => 'nullable|integer|max:' . date('Y')
        ]);

        $book = Book::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Book created successfully',
            'data' => $book
        ], 201);
    }

    public function show(string $id): JsonResponse
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json([
                'success' => false,
                'message' => 'Book Not Found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $book,
        ], 200);
    }

    public function update(Request $request, string $id): JsonResponse
    {
        $book = Book::find($id);

        if(!$book) {
            return response()->json([
                'success' => false,
                'message' => 'Book Not Found'
            ], 404);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:150',
            'author' => 'required|string|max:100',
            'year' => 'nullable|integer|max:'. date('Y')
        ]);

        $book->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Book Update Successfully',
            'data' => $book
        ], 200);
    }

    public function destroy(string $id): JsonResponse
    {
        $book = Book::find($id);

        if(!$book){
            return response()->json([
                'success' => false,
                'message' => 'Book Not Found'
            ], 404);
        }

        $book->delete();

        return response()->json([
            'success' => true,
            'message' => 'Book Delete Successfully'
        ], 200);
    }
}
