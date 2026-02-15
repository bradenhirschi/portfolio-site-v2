import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Braden Hirschi
      </h1>
      <p className="mb-4">
        {`I'm a software engineer from Missouri. At my day job I work as a full-stack engineer
        for Expedia Group B2B, helping our partners power travel worldwide. This is a space for
        me to share what I'm learning and building.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
