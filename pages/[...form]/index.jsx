export default function Form() {
  return <div>Hello there</div>
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { form: ['this-is-a-test'] } }
    ],
    fallback: false
  }
}

export function getStaticProps(ctx) {
  return {
    props: {
      form: ctx.params.form
    }
  }
}
