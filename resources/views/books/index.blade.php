<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Simple Library</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 min-h-screen">
    <div class="container mx-auto px-4 py-8">
        <!-- Header -->
        <div class="bg-blue-600 text-white p-6 rounded-lg mb-6">
            <h1 class="text-3xl font-bold mb-2">Simple Library</h1>
            <p class="text-blue-100">Manage your book collection</p>
        </div>

        <div class="flex flex-col lg:flex-row gap-6">
            <!-- Add Book Form -->
            <div class="lg:w-1/3">
                <div class="bg-white p-6 rounded-lg shadow mb-6">
                    <h2 class="text-xl font-bold mb-4 text-gray-800">Add New Book</h2>
                    <form id="addBookForm" class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Book Title *</label>
                            <input type="text" id="title" name="title" required maxlength="150"
                                class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Author *</label>
                            <input type="text" id="author" name="author" required maxlength="100"
                                class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Publication Year</label>
                            <input type="number" id="year" name="year" max="{{ date('Y') }}"
                                class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </div>

                        <button type="submit"
                            class="w-full bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Add Book
                        </button>
                    </form>
                </div>
            </div>

            <!-- Books List -->
            <div class="lg:w-2/3">
                <div class="bg-white p-6 rounded-lg shadow">
                    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                        <h2 class="text-xl font-bold text-gray-800 mb-4 sm:mb-0">Book Collection</h2>

                        <div class="w-full sm:w-64">
                            <input type="text" id="searchInput" placeholder="Search books..."
                                class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </div>
                    </div>

                    <!-- Books Grid -->
                    <div id="booksList" class="space-y-4">
                        @foreach ($books as $book)
                            <div class="bg-gray-50 border border-gray-200 rounded p-4" data-id="{{ $book->id }}">
                                <div class="flex justify-between items-start">
                                    <div class="flex-1">
                                        <h3 class="text-lg font-semibold text-gray-800 mb-1">{{ $book->title }}</h3>
                                        <p class="text-gray-600 mb-1">By: {{ $book->author }}</p>
                                        @if ($book->year)
                                            <p class="text-gray-500 text-sm">Published: {{ $book->year }}</p>
                                        @endif
                                    </div>
                                    <div class="flex space-x-2 ml-4">
                                        <button onclick="editBook({{ $book->id }})"
                                            class="bg-yellow-500 text-white py-1 px-3 rounded text-sm hover:bg-yellow-600 focus:outline-none">
                                            Edit
                                        </button>
                                        <button onclick="deleteBook({{ $book->id }})"
                                            class="bg-red-500 text-white py-1 px-3 rounded text-sm hover:bg-red-600 focus:outline-none">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>

                    <!-- Empty State -->
                    @if (count($books) == 0)
                        <div class="text-center py-8">
                            <p class="text-gray-600 mb-2">No books in your collection yet.</p>
                            <p class="text-gray-500">Add your first book using the form above.</p>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>

    <!-- Edit Modal -->
    <div id="editModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 hidden">
        <div class="bg-white rounded-lg max-w-md w-full">
            <div class="p-6">
                <h2 class="text-xl font-bold mb-4 text-gray-800">Edit Book</h2>
                <form id="editBookForm" class="space-y-4">
                    <input type="hidden" id="edit_id">

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Book Title *</label>
                        <input type="text" id="edit_title" required maxlength="150"
                            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Author *</label>
                        <input type="text" id="edit_author" required maxlength="100"
                            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Publication Year</label>
                        <input type="number" id="edit_year" max="{{ date('Y') }}"
                            class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>

                    <div class="flex space-x-3">
                        <button type="submit"
                            class="flex-1 bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Update
                        </button>
                        <button type="button" onclick="closeEditModal()"
                            class="flex-1 bg-gray-500 text-white py-2 px-4 rounded font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Toast Notification -->
    <div id="toast" class="fixed top-4 right-4 bg-green-500 text-white px-4 py-3 rounded shadow-lg hidden">
        <span id="toastMessage"></span>
    </div>

    <script>
        // CSRF Token setup
        const token = document.querySelector('meta[name="csrf-token"]').content;

        // Add Book
        document.getElementById('addBookForm').addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = e.target.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            // Show loading state
            submitBtn.innerHTML = 'Adding...';
            submitBtn.disabled = true;

            const formData = {
                title: document.getElementById('title').value,
                author: document.getElementById('author').value,
                year: document.getElementById('year').value || null
            };

            try {
                const response = await fetch('/api/books', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': token
                    },
                    body: JSON.stringify(formData)
                });

                const data = await response.json();

                if (data.success) {
                    showToast('Book added successfully!');
                    // Reset form
                    document.getElementById('addBookForm').reset();
                    setTimeout(() => location.reload(), 1000);
                } else {
                    showToast('Error adding book', 'error');
                }
            } catch (error) {
                showToast('Error adding book', 'error');
            } finally {
                // Restore button state
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });

        // Edit Book
        async function editBook(id) {
            try {
                const response = await fetch(`/api/books/${id}`);
                const data = await response.json();

                if (data.success) {
                    document.getElementById('edit_id').value = data.data.id;
                    document.getElementById('edit_title').value = data.data.title;
                    document.getElementById('edit_author').value = data.data.author;
                    document.getElementById('edit_year').value = data.data.year || '';
                    document.getElementById('editModal').classList.remove('hidden');
                }
            } catch (error) {
                showToast('Error loading book', 'error');
            }
        }

        // Update Book
        document.getElementById('editBookForm').addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = e.target.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            // Show loading state
            submitBtn.innerHTML = 'Updating...';
            submitBtn.disabled = true;

            const id = document.getElementById('edit_id').value;
            const formData = {
                title: document.getElementById('edit_title').value,
                author: document.getElementById('edit_author').value,
                year: document.getElementById('edit_year').value || null
            };

            try {
                const response = await fetch(`/api/books/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': token
                    },
                    body: JSON.stringify(formData)
                });

                const data = await response.json();

                if (data.success) {
                    showToast('Book updated successfully!');
                    closeEditModal();
                    setTimeout(() => location.reload(), 1000);
                } else {
                    showToast('Error updating book', 'error');
                }
            } catch (error) {
                showToast('Error updating book', 'error');
            } finally {
                // Restore button state
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });

        // Delete Book
        async function deleteBook(id) {
            if (!confirm('Are you sure you want to delete this book?')) return;

            try {
                const response = await fetch(`/api/books/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'X-CSRF-TOKEN': token
                    }
                });

                const data = await response.json();

                if (data.success) {
                    showToast('Book deleted successfully!');
                    document.querySelector(`[data-id="${id}"]`).remove();
                }
            } catch (error) {
                showToast('Error deleting book', 'error');
            }
        }

        // Close Edit Modal
        function closeEditModal() {
            document.getElementById('editModal').classList.add('hidden');
        }

        // Show Toast Notification
        function showToast(message, type = 'success') {
            const toast = document.getElementById('toast');
            const toastMessage = document.getElementById('toastMessage');

            toastMessage.textContent = message;

            if (type === 'success') {
                toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-3 rounded shadow-lg';
            } else {
                toast.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-3 rounded shadow-lg';
            }

            toast.classList.remove('hidden');

            setTimeout(() => {
                toast.classList.add('hidden');
            }, 3000);
        }

        // Search functionality
        document.getElementById('searchInput').addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const bookCards = document.querySelectorAll('#booksList > div');

            bookCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const author = card.querySelector('p').textContent.toLowerCase();

                if (title.includes(searchTerm) || author.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });

        // Close modal when clicking outside
        document.getElementById('editModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeEditModal();
            }
        });
    </script>
</body>

</html>
