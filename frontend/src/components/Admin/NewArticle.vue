<template>

</template>
<script>
import { getAPI } from '../../api'
export default {
    data () {
        return{
            APIData: []
        }
    },
    name: 'List',
    // Connect to API
   created () {
      getAPI.get('blog/api/list',)
        .then(response => {
        //   console.log('Post API has recieved data')
          this.APIData = response.data
        })
        .catch(err => {
          console.log(err)
        })
    },
}
</script>
<style lang="sass" scoped>
                            
// Responsive
@media screen and ( max-width: 960px )
    main
        grid-template-columns: repeat(2, 1fr)
        margin: 2rem
@media screen and ( max-width: 480px )
    main
        grid-template-columns: repeat(1, 1fr)

</style>