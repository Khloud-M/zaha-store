export default{
    chooseCategey(state)
    {
        return state.chooseCategory;
    },
    hascategery(state){
        return state.chooseCategory && state.chooseCategory.length > 0 ;
    },
}