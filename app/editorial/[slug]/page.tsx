import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import { editorials } from "@/data/editorials"

interface EditorialPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: EditorialPageProps): Promise<Metadata> {
  const editorial = editorials.find((editorial) => editorial.slug === params.slug)

  if (!editorial) {
    return {
      title: "Editorial no encontrado",
    }
  }

  return {
    title: `${editorial.title} - Editorial SportPulsar`,
    description: editorial.content.substring(0, 160),
  }
}

export async function generateStaticParams() {
  return editorials.map((editorial) => ({
    slug: editorial.slug,
  }))
}

export default function EditorialDetailPage({ params }: EditorialPageProps) {
  const editorial = editorials.find((editorial) => editorial.slug === params.slug)

  if (!editorial) {
    notFound()
  }

  // Format content with paragraphs
  const formattedContent = editorial.content.split(". ").map((sentence, index, array) => {
    // Add the period back except for the last sentence if it doesn't have one
    const text = index < array.length - 1 ? `${sentence}.` : sentence.endsWith(".") ? sentence : `${sentence}.`

    // Group sentences into paragraphs (roughly 3 sentences per paragraph)
    if (index % 3 === 0) {
      return (
        <p key={index} className="mb-4">
          {text}
        </p>
      )
    } else {
      return <span key={index}>{text} </span>
    }
  })

  // Find related editorials (by matching tags)
  const relatedEditorials = editorials
    .filter((e) => e.id !== editorial.id && e.tags.some((tag) => editorial.tags.includes(tag)))
    .slice(0, 2)

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">{editorial.title}</h1>
            <div className="flex items-center justify-center space-x-4 text-gray-300">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>{editorial.author}</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{editorial.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Button asChild variant="outline" className="mb-8">
              <Link href="/editorial">
                <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Editoriales
              </Link>
            </Button>

            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-md">
              <div className="relative mb-8">
                <div className="absolute -left-4 -top-4 text-6xl text-accent opacity-20">"</div>
                <div className="prose prose-lg max-w-none text-gray-700">{formattedContent}</div>
                <div className="absolute -bottom-4 -right-4 text-6xl text-accent opacity-20">"</div>
              </div>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <h3 className="mb-3 text-lg font-semibold text-primary">Temas relacionados</h3>
                <div className="flex flex-wrap gap-2">
                  {editorial.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/editorial?tag=${tag}`}
                      className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-accent hover:text-primary"
                    >
                      <Tag className="mr-1 h-3 w-3" />
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Editorials */}
            {relatedEditorials.length > 0 && (
              <div className="mt-12">
                <h2 className="mb-6 text-2xl font-bold text-primary">Editoriales Relacionados</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {relatedEditorials.map((relatedEditorial) => (
                    <div key={relatedEditorial.id} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                      <h3 className="mb-3 text-lg font-semibold text-primary">
                        <Link href={`/editorial/${relatedEditorial.slug}`} className="hover:text-accent">
                          {relatedEditorial.title}
                        </Link>
                      </h3>
                      <p className="mb-4 text-sm text-gray-500">{relatedEditorial.date}</p>
                      <p className="text-gray-700 line-clamp-3">{relatedEditorial.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
