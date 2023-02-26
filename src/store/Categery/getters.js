export default{
    chooseCategey(state)
    {
        return state.chooseCategory;
    },
    hascategery(state){
        return state.chooseCategory && state.chooseCategory.length > 0 ;
    },
    prodcuts(state)
    {
        return state.prodcuts;
    },
    SizeFilter(state){
     return state.SizeFilter;
    },
    colours(state){
        return state.colours;
       }
}