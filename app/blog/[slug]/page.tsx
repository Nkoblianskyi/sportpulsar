import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { articles } from "@/data/articles"
import { ArrowLeft, ArrowRight, Calendar, User, Tag, Trophy, Star } from "lucide-react"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = articles.find((article) => article.slug === params.slug)

  if (!article) {
    return {
      title: "Artículo no encontrado",
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
    },
  }
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find((article) => article.slug === params.slug)

  if (!article) {
    notFound()
  }

  // Find related articles (same category)
  const relatedArticles = articles.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 3)

  // Find next and previous articles for navigation
  const currentIndex = articles.findIndex((a) => a.slug === params.slug)
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null

  // Format content with paragraphs
  const formattedContent = article.content.split("\n\n").map((paragraph, index) => (
    <p key={index} className="mb-4">
      {paragraph}
    </p>
  ))

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1 text-sm font-semibold text-accent">
              {article.category}
            </div>
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{article.title}</h1>
            <div className="flex items-center justify-center space-x-4 text-muted">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={1200}
                height={600}
                className="w-full object-cover"
              />
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              <div className="md:col-span-2">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="lead text-xl font-medium">{article.excerpt}</p>
                  {formattedContent}
                </div>

                {/* Prediction Section */}
                {article.prediction && (
                  <div className="mt-12 rounded-lg bg-gray-100 p-6">
                    <div className="mb-4 flex items-center">
                      <Trophy className="mr-2 h-6 w-6 text-accent" />
                      <h2 className="text-2xl font-bold text-primary">Pronóstico</h2>
                    </div>
                    <div className="mb-4">
                      <h3 className="mb-2 text-lg font-semibold text-primary">{article.prediction.event}</h3>
                      {article.prediction.teams && (
                        <div className="mb-4 flex items-center justify-center space-x-4">
                          <div className="text-center font-bold text-xl">{article.prediction.teams[0]}</div>
                          <div className="text-center text-lg">vs</div>
                          <div className="text-center font-bold text-xl">{article.prediction.teams[1]}</div>
                        </div>
                      )}
                      {article.prediction.players && (
                        <div className="mb-4">
                          <h4 className="mb-2 text-sm font-semibold uppercase text-gray-500">Jugadores Clave</h4>
                          <div className="flex flex-wrap gap-2">
                            {article.prediction.players.map((player, index) => (
                              <span key={index} className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                                {player}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold uppercase text-gray-500">Análisis</h4>
                      <p className="text-gray-700">{article.prediction.analysis}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold uppercase text-gray-500">Predicción</h4>
                      <p className="text-lg font-bold text-primary">{article.prediction.prediction}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase text-gray-500">Nivel de Confianza</h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < article.prediction.confidence ? "fill-accent text-accent" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="mt-8">
                  <h3 className="mb-4 text-lg font-semibold text-primary">Etiquetas</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${tag}`}
                        className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-accent hover:text-primary"
                      >
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="sticky top-8 space-y-8">
                  <div className="rounded-lg bg-gray-100 p-6">
                    <h3 className="mb-4 text-xl font-bold text-primary">Sobre el Autor</h3>
                    <div className="mb-4 flex items-center">
                      <div className="mr-4 h-16 w-16 overflow-hidden rounded-full">
                        <Image
                          src={`/placeholder.svg?height=200&width=200&query=retrato profesional`}
                          alt={article.author}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{article.author}</h4>
                        <p className="text-sm text-gray-600">Analista Deportivo</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      Especialista en análisis táctico y estadístico con más de 10 años de experiencia en periodismo
                      deportivo.
                    </p>
                  </div>

                  {relatedArticles.length > 0 && (
                    <div className="rounded-lg bg-gray-100 p-6">
                      <h3 className="mb-4 text-xl font-bold text-primary">Artículos Relacionados</h3>
                      <div className="space-y-4">
                        {relatedArticles.map((relatedArticle) => (
                          <div key={relatedArticle.id} className="flex items-start">
                            <div className="relative mr-3 h-16 w-16 flex-shrink-0 overflow-hidden rounded">
                              <Image
                                src={relatedArticle.image || "/placeholder.svg"}
                                alt={relatedArticle.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 line-clamp-2">
                                <Link href={`/blog/${relatedArticle.slug}`} className="hover:text-accent">
                                  {relatedArticle.title}
                                </Link>
                              </h4>
                              <p className="text-sm text-gray-600">{relatedArticle.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Article Navigation */}
            <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-8">
              {prevArticle ? (
                <Button asChild variant="outline" className="flex items-center text-primary">
                  <Link href={`/blog/${prevArticle.slug}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Artículo Anterior
                  </Link>
                </Button>
              ) : (
                <div></div>
              )}

              <Button asChild variant="outline" className="text-primary">
                <Link href="/blog">Todos los Artículos</Link>
              </Button>

              {nextArticle ? (
                <Button asChild variant="outline" className="flex items-center text-primary">
                  <Link href={`/blog/${nextArticle.slug}`}>
                    Artículo Siguiente <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
