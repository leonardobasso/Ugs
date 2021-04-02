<template>
    <h1>ARTICOLO</h1>
    <form @submit.prevent = "onSubmit" enctype="multipart/form-data">
        <input type="text" name="title" placeholder="Titolo" v-model="form.title">
        <input type="text" name="desc" placeholder="Descrizione" v-model="form.desc">
        <input type="text" name="category" v-model="form.category">
        <input type="file" name="image" @change="EditImage">
        <input type="text" name="author" v-model="form.author">
        <input type="text" name="author" v-model="form.slug">
        <textarea name="text" v-model="form.text"></textarea>
        <p>{{ form }}</p>

        <button type="submit">Edit</button>
    </form>
</template>
<script>
import axios from 'axios';
export default {
    data () {
        return{
            Postslug: this.$route.params.Postslug,
            form: {
                title:"",
                desc:"",
                text:"",
                category:"",
                date:"",
                author:"",
                image:"",
                slug:"",
            },
            selectedFile: '' 
        }
    },
    methods: {
        EditImage(event){
            this.selectedFile = event.target.files[0]   
            console.log(event);
        },
        // Form method
        onSubmit(event){
            const fd = new FormData();
            fd.append('image', this.selectedFile, this.selectedFile.name)
            event.preventDefault();  
            console.log(event);
            axios.post(`http://127.0.0.1:8000/blog/api/create/`, this.form, fd).then(response => {
              this.form.title = response.data.title
              this.form.desc = response.data.desc
              this.form.text = response.data.text
              this.form.image = this.fd
              this.form.category = response.data.category
              this.form.author = response.data.author
              this.form.slug = response.data.slug
            })
            .catch(err => {
              console.log(err)
              console.log(this.fd);
            })
        },
    },
    created() {
            this.onSubmit
        },
    name: 'NewArticle',
}

</script>
<style lang="sass" scoped>


</style>