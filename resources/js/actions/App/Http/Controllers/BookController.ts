import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\BookController::index
 * @see app/Http/Controllers/BookController.php:18
 * @route '/api/books'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/books',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BookController::index
 * @see app/Http/Controllers/BookController.php:18
 * @route '/api/books'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BookController::index
 * @see app/Http/Controllers/BookController.php:18
 * @route '/api/books'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BookController::index
 * @see app/Http/Controllers/BookController.php:18
 * @route '/api/books'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BookController::index
 * @see app/Http/Controllers/BookController.php:18
 * @route '/api/books'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BookController::index
 * @see app/Http/Controllers/BookController.php:18
 * @route '/api/books'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BookController::index
 * @see app/Http/Controllers/BookController.php:18
 * @route '/api/books'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\BookController::store
 * @see app/Http/Controllers/BookController.php:28
 * @route '/api/books'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/books',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BookController::store
 * @see app/Http/Controllers/BookController.php:28
 * @route '/api/books'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BookController::store
 * @see app/Http/Controllers/BookController.php:28
 * @route '/api/books'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\BookController::store
 * @see app/Http/Controllers/BookController.php:28
 * @route '/api/books'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BookController::store
 * @see app/Http/Controllers/BookController.php:28
 * @route '/api/books'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\BookController::show
 * @see app/Http/Controllers/BookController.php:45
 * @route '/api/books/{id}'
 */
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/books/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BookController::show
 * @see app/Http/Controllers/BookController.php:45
 * @route '/api/books/{id}'
 */
show.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return show.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BookController::show
 * @see app/Http/Controllers/BookController.php:45
 * @route '/api/books/{id}'
 */
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BookController::show
 * @see app/Http/Controllers/BookController.php:45
 * @route '/api/books/{id}'
 */
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BookController::show
 * @see app/Http/Controllers/BookController.php:45
 * @route '/api/books/{id}'
 */
    const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BookController::show
 * @see app/Http/Controllers/BookController.php:45
 * @route '/api/books/{id}'
 */
        showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BookController::show
 * @see app/Http/Controllers/BookController.php:45
 * @route '/api/books/{id}'
 */
        showForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\BookController::update
 * @see app/Http/Controllers/BookController.php:62
 * @route '/api/books/{id}'
 */
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/books/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\BookController::update
 * @see app/Http/Controllers/BookController.php:62
 * @route '/api/books/{id}'
 */
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BookController::update
 * @see app/Http/Controllers/BookController.php:62
 * @route '/api/books/{id}'
 */
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\BookController::update
 * @see app/Http/Controllers/BookController.php:62
 * @route '/api/books/{id}'
 */
    const updateForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BookController::update
 * @see app/Http/Controllers/BookController.php:62
 * @route '/api/books/{id}'
 */
        updateForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\BookController::destroy
 * @see app/Http/Controllers/BookController.php:88
 * @route '/api/books/{id}'
 */
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/books/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BookController::destroy
 * @see app/Http/Controllers/BookController.php:88
 * @route '/api/books/{id}'
 */
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BookController::destroy
 * @see app/Http/Controllers/BookController.php:88
 * @route '/api/books/{id}'
 */
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\BookController::destroy
 * @see app/Http/Controllers/BookController.php:88
 * @route '/api/books/{id}'
 */
    const destroyForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BookController::destroy
 * @see app/Http/Controllers/BookController.php:88
 * @route '/api/books/{id}'
 */
        destroyForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\BookController::webIndex
 * @see app/Http/Controllers/BookController.php:12
 * @route '/'
 */
export const webIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: webIndex.url(options),
    method: 'get',
})

webIndex.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BookController::webIndex
 * @see app/Http/Controllers/BookController.php:12
 * @route '/'
 */
webIndex.url = (options?: RouteQueryOptions) => {
    return webIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BookController::webIndex
 * @see app/Http/Controllers/BookController.php:12
 * @route '/'
 */
webIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: webIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BookController::webIndex
 * @see app/Http/Controllers/BookController.php:12
 * @route '/'
 */
webIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: webIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BookController::webIndex
 * @see app/Http/Controllers/BookController.php:12
 * @route '/'
 */
    const webIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: webIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BookController::webIndex
 * @see app/Http/Controllers/BookController.php:12
 * @route '/'
 */
        webIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: webIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BookController::webIndex
 * @see app/Http/Controllers/BookController.php:12
 * @route '/'
 */
        webIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: webIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    webIndex.form = webIndexForm
const BookController = { index, store, show, update, destroy, webIndex }

export default BookController