import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, getBlogPost } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title + " – Bavarian Craft",
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) { elements.push(<div key={key++} className="h-2" />); continue; }
    if (trimmed.startsWith("## ")) {
      elements.push(<h2 key={key++} className="text-2xl font-bold mt-10 mb-4">{trimmed.slice(3)}</h2>);
    } else if (trimmed.startsWith("### ")) {
      elements.push(<h3 key={key++} className="text-lg font-bold mt-6 mb-2">{trimmed.slice(4)}</h3>);
    } else if (trimmed.startsWith("- **")) {
      const match = trimmed.match(/^- \*\*(.+?)\*\*\s*[–-]\s*(.+)$/);
      if (match) {
        elements.push(<li key={key++} className="ml-4 text-bc-muted text-base mb-1"><strong className="text-bc-text">{match[1]}</strong> – {match[2]}</li>);
      } else {
        elements.push(<li key={key++} className="ml-4 text-bc-muted text-base mb-1">{trimmed.slice(2)}</li>);
      }
    } else if (trimmed.startsWith("- ")) {
      elements.push(<li key={key++} className="ml-4 text-bc-muted text-base mb-1 list-disc">{trimmed.slice(2)}</li>);
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      elements.push(<p key={key++} className="font-bold text-base mt-2">{trimmed.slice(2, -2)}</p>);
    } else if (trimmed === "---") {
      elements.push(<hr key={key++} className="border-bc-border my-8" />);
    } else {
      // Handle inline bold and links
      const parsed = trimmed
        .replace(/\[(.+?)\]\((.+?)\)/g, `<a href="$2" class="text-bc-brown hover:underline font-semibold">$1</a>`)
        .replace(/\*\*(.+?)\*\*/g, `<strong>$1</strong>`);
      elements.push(<p key={key++} className="text-bc-muted text-base leading-relaxed mb-0" dangerouslySetInnerHTML={{ __html: parsed }} />);
    }
  }
  return elements;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link href="/blog" className="text-sm text-bc-muted hover:text-bc-text mb-8 block">← Zurück zum Blog</Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 text-xs text-bc-muted mb-4">
            <span>{new Date(post.date).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })}</span>
            <span>·</span>
            <span>{post.readingTime} Lesezeit</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{post.title}</h1>
          <p className="text-bc-muted text-lg leading-relaxed">{post.excerpt}</p>
        </div>

        {/* Hero image */}
        <div className="rounded-sm overflow-hidden mb-12">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Content */}
        <article className="prose-custom space-y-3">
          {renderContent(post.content)}
        </article>

        {/* CTA */}
        <div className="mt-16 bg-bc-cream-dark p-8 text-center">
          <div className="text-bc-gold text-xs font-semibold tracking-widest uppercase mb-2">Bavarian Craft</div>
          <h3 className="text-xl font-bold mb-2">Deinen eigenen Anhänger gestalten</h3>
          <p className="text-bc-muted text-sm mb-5">Handgefertigt in Bayern. Fahrzeug wählen, personalisieren, bestellen.</p>
          <Link href="/konfigurieren" className="bg-bc-brown text-white px-8 py-3 font-bold hover:bg-bc-brown-dark transition-colors inline-block">
            Jetzt gestalten
          </Link>
        </div>

        {/* Other posts */}
        {otherPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="font-bold text-lg mb-6">Weitere Beiträge</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group card overflow-hidden">
                  <div className="h-36 overflow-hidden bg-bc-cream">
                    <Image src={p.image} alt={p.title} width={400} height={144} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm leading-snug group-hover:text-bc-brown transition-colors">{p.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
