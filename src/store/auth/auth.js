export default {
    namespaced: true,
    pageLoading: false,
    state:{
      userToken : localStorage.getItem("zaha-app-user-token"),
      userEmail : localStorage.getItem("zaha-app-user-email"),
      userName :  localStorage.getItem("zaha-app-user-name"),
      phone:localStorage.getItem("zaha-app-user-phone")
  
    },
    mutations:{
      // start :: set cuent user data mutation
      setCurrentUserData(state ,payload){
        if(payload.token){
        state.userToken=payload.token;
        localStorage.setItem("zaha-app-user-token" , payload.token);
  
        }
        if(payload.name){
          state.userName=payload.name;
          localStorage.setItem("zaha-app-user-name" , payload.name);
          } 
          if(payload.email){
            state.userName=payload.email;
            localStorage.setItem("zaha-app-user-email" , payload.email);
      
            }
            if(payload.phone){
              state.userName=payload.phone;
              localStorage.setItem("zaha-app-user-phone" , payload.phone);
        
              }
      }, 
      logout(state){
        state.userToken= null ;
        state.userEmail= null ;
        state.userName= null ;
      },
      pageLoading(state , payload)
      {
        state.pageLoading = payload
      }
      // end :: set cuent user data mutation
      
  
    },
    actions(){
  
    },
    getters:{
      // start :: cuurrent  user data Getters
      currentUser(state){
        return{
          token:state.userToken,
          email:state.userEmail,
          userName:state.userName,
          phone:state.phone,
        }
      },
      pageLoading(state){
        state.pageLoading;
      }
  
  
    },
  };