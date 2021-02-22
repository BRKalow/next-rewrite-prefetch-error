export default function Data({ slug }) {
  return <div>You are at {slug}</div>
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'this-is-a-test' } }
    ],
    fallback: false
  }
}

export function getStaticProps(ctx) {
  return {
    props: {
      slug: ctx.params.slug
    }
  }
}
