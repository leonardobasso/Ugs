<template >
  <main class="info">
    <section class="text-container">
      <h1>Chi Siamo</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum iure nam. Sit optio culpa nemo? Adipisci, autem laboriosam. At laudantium eos repudiandae natus, autem earum odit optio. Dolores, hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum iure nam. Sit optio culpa nemo? Adipisci, autem laboriosam. At laudantium eos repudiandae natus, autem earum odit optio. Dolores, hic.</p>
      <a href="#">Scopri di più</a>
    </section>
  </main>
</template>
<script>
export default {
    name: 'HomeInfo',
}
</script>
<style lang="sass">
  .info
    height: 80vh
    .text-container
        padding: 3rem
        h1, p, a
            text-align: right
            margin-left: 15%
            padding: 1rem
        h1
            background: linear-gradient(to top left, #BF092D, #8D0923)
            -webkit-background-clip: text
            -webkit-text-fill-color: transparent
        a
            letter-spacing: 1.1px
            color: #fff
            background: linear-gradient(to top left, #BF092D, #8D0923)
            width: fit-content
            float: right
            margin: 10px
            border-radius: 5px

  @media screen and ( max-width: 768px )
    .info
      .text-container
        padding: 1rem
  @media screen and ( max-width: 320px )
    .info
      .text-container
        h1, p
          padding: 0.5rem
          margin-left: 1px
</style>