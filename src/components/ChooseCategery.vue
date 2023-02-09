<template>
    <section class="chooseCategery">
        {{Categery}}
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
export default{
    computed:{
        ...mapGetters({
            Categery :"Categery/chooseCategey"
        })  
            
        
    }

}
</script>