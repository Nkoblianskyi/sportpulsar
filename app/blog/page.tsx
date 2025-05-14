"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { articles } from "@/data/articles"
import { Calendar, ChevronRight, Search, Trophy, Tag, Filter, X } from "lucide-react"

export default function BlogPage() {
  // Estado para los filtros
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOrder, setSortOrder] = useState("date-desc")

  // Estado para los artículos filtrados
  const [filteredArticles, setFilteredArticles] = useState(articles)

  // Get all unique categories
  const categories = [...new Set(articles.map((article) => article.category))]

  // Get all unique tags
  const allTags = articles.flatMap((article) => article.tags)
  const uniqueTags = [...new Set(allTags)]

  // Get featured articles
  const featuredArticles = articles.filter((article) => article.featured).slice(0, 3)

  // Tipos de contenido
  const contentTypes = [
    { id: "all", label: "Todos" },
    { id: "analysis", label: "Análisis" },
    { id: "news", label: "Noticias" },
    { id: "prediction", label: "Pronósticos" },
  ]

  // Función para manejar cambios en las categorías
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  // Función para manejar cambios en las etiquetas
  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  // Función para manejar cambios en los tipos de contenido
  const handleTypeChange = (type: string) => {
    if (type === "all") {
      setSelectedTypes(selectedTypes.length > 0 ? [] : ["all"])
    } else {
      setSelectedTypes((prev) => {
        // Si "all" está seleccionado, quitarlo
        const withoutAll = prev.filter((t) => t !== "all")

        // Alternar el tipo actual
        const newTypes = prev.includes(type) ? withoutAll.filter((t) => t !== type) : [...withoutAll, type]

        return newTypes
      })
    }
  }

  // Función para limpiar todos los filtros
  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedTags([])
    setSelectedTypes([])
    setSearchQuery("")
  }

  // Función para aplicar los filtros
  const applyFilters = () => {
    let result = [...articles]

    // Filtrar por categorías
    if (selectedCategories.length > 0) {
      result = result.filter((article) => selectedCategories.includes(article.category))
    }

    // Filtrar por etiquetas
    if (selectedTags.length > 0) {
      result = result.filter((article) => article.tags.some((tag) => selectedTags.includes(tag)))
    }

    // Filtrar por tipos de contenido
    if (selectedTypes.length > 0 && !selectedTypes.includes("all")) {
      result = result.filter((article) => {
        if (selectedTypes.includes("prediction") && article.prediction) return true
        if (selectedTypes.includes("analysis") && article.category.includes("Análisis")) return true
        if (selectedTypes.includes("news") && article.category.includes("Noticias")) return true
        return false
      })
    }

    // Filtrar por búsqueda
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (article) => article.title.toLowerCase().includes(query) || article.excerpt.toLowerCase().includes(query),
      )
    }

    // Ordenar resultados
    result = sortArticles(result, sortOrder)

    setFilteredArticles(result)
  }

  // Función para ordenar artículos
  const sortArticles = (articlesToSort: typeof articles, order: string) => {
    const sorted = [...articlesToSort]

    switch (order) {
      case "date-desc":
        return sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      case "date-asc":
        return sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      case "title":
        return sorted.sort((a, b) => a.title.localeCompare(b.title))
      default:
        return sorted
    }
  }

  // Aplicar filtros cuando cambien los criterios
  useEffect(() => {
    applyFilters()
  }, [selectedCategories, selectedTags, selectedTypes, searchQuery, sortOrder])

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary py-16">
        <div className="absolute inset-0 bg-[url('/a071a20df079c47f5945441dcb1ab4d2.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Blog y <span className="text-accent">Noticias</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted">
            Las últimas noticias deportivas, análisis tácticos y pronósticos de partidos.
          </p>

        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary">
              Artículos <span className="text-accent">Destacados</span>
            </h2>
            <p className="max-w-2xl text-lg text-gray-700">Nuestros análisis y reportajes más relevantes.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                  {article.prediction && (
                    <div className="absolute right-0 top-0 bg-accent px-3 py-1 text-sm font-bold text-primary">
                      <Trophy className="mr-1 inline-block h-4 w-4" />
                      Pronóstico
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2">{article.category}</span>
                    <span>•</span>
                    <span className="ml-2 flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {article.date}
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2 text-xl text-primary">
                    <Link href={`/blog/${article.slug}`} className="hover:text-accent">
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-gray-700">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto border-t pt-4">
                  <Button asChild variant="link" className="px-0 text-primary">
                    <Link href={`/blog/${article.slug}`}>
                      Leer Más <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary">
                Todos los <span className="text-accent">Artículos</span>
              </h2>
              <p className="max-w-2xl text-lg text-gray-700">
                Explora nuestra colección completa de noticias y análisis deportivos.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-primary">Filtros</h3>
                  <Button variant="ghost" size="sm" className="h-8 text-sm text-primary" onClick={clearAllFilters}>
                    Limpiar todos
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="mb-3 font-medium text-primary">Categorías</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                            className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
                          />
                          <label
                            htmlFor={`category-${category}`}
                            className="ml-2 flex w-full cursor-pointer items-center justify-between text-gray-700 hover:text-accent"
                          >
                            {category}
                            <Badge variant="outline" className="ml-auto bg-gray-50 text-xs font-normal text-gray-500">
                              {articles.filter((article) => article.category === category).length}
                            </Badge>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 font-medium text-primary">Etiquetas populares</h4>
                    <div className="flex flex-wrap gap-2">
                      {uniqueTags.slice(0, 10).map((tag) => (
                        <Badge
                          key={tag}
                          variant={selectedTags.includes(tag) ? "default" : "outline"}
                          className={`cursor-pointer border-gray-200 px-3 py-1 ${
                            selectedTags.includes(tag)
                              ? "bg-accent text-primary"
                              : "bg-white text-gray-700 hover:bg-accent hover:text-primary"
                          }`}
                          onClick={() => handleTagChange(tag)}
                        >
                          <Tag className="mr-1 h-3 w-3" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 font-medium text-primary">Tipo de contenido</h4>
                    <div className="space-y-2">
                      {contentTypes.map((type) => (
                        <div key={type.id} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`type-${type.id}`}
                            checked={
                              type.id === "all"
                                ? selectedTypes.includes("all") || selectedTypes.length === 0
                                : selectedTypes.includes(type.id)
                            }
                            onChange={() => handleTypeChange(type.id)}
                            className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
                          />
                          <label htmlFor={`type-${type.id}`} className="ml-2 cursor-pointer text-gray-700">
                            {type.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button className="w-full bg-accent text-primary hover:bg-accent/90" onClick={applyFilters}>
                      <Filter className="mr-2 h-4 w-4" />
                      Aplicar Filtros
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Articles */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
                <div className="text-sm text-gray-700">
                  Mostrando <span className="font-medium">{filteredArticles.length}</span> artículos
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-700">Ordenar por:</span>
                  <select
                    className="rounded-md border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-accent"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                  >
                    <option value="date-desc">Más recientes</option>
                    <option value="date-asc">Más antiguos</option>
                    <option value="title">Alfabético</option>
                  </select>
                </div>
              </div>

              {filteredArticles.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredArticles.map((article) => (
                    <Card
                      key={article.id}
                      className="flex h-full flex-col overflow-hidden transition-all hover:shadow-md"
                    >
                      <div className="relative h-40 w-full overflow-hidden">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                        {article.prediction && (
                          <div className="absolute right-0 top-0 bg-accent px-2 py-1 text-xs font-bold text-primary">
                            <Trophy className="mr-1 inline-block h-3 w-3" />
                            Pronóstico
                          </div>
                        )}
                      </div>
                      <CardHeader className="flex-grow p-4">
                        <div className="mb-2 flex items-center text-xs text-gray-700">
                          <span>{article.category}</span>
                          <span className="mx-1">•</span>
                          <span>{article.date}</span>
                        </div>
                        <CardTitle className="line-clamp-2 text-base text-primary">
                          <Link href={`/blog/${article.slug}`} className="hover:text-accent">
                            {article.title}
                          </Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-2 mt-2 text-xs text-gray-700">
                          {article.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="border-t p-4 pt-3">
                        <Button asChild variant="link" className="h-auto p-0 text-sm text-primary">
                          <Link href={`/blog/${article.slug}`}>
                            Leer Más <ChevronRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex h-64 flex-col items-center justify-center rounded-lg bg-white p-8 text-center shadow-sm">
                  <div className="mb-4 rounded-full bg-gray-100 p-3">
                    <Search className="h-6 w-6 text-gray-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-primary">No se encontraron artículos</h3>
                  <p className="text-gray-500">
                    No hay artículos que coincidan con tus criterios de búsqueda. Intenta con otros filtros.
                  </p>
                  <Button variant="outline" className="mt-4 text-primary" onClick={clearAllFilters}>
                    Limpiar filtros
                  </Button>
                </div>
              )}

              {/* Botón de cargar más (alternativa a la paginación) */}
              {filteredArticles.length > 0 && (
                <div className="mt-12 text-center">
                  <Button variant="outline" className="px-8 text-primary">
                    Mostrar más artículos
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
