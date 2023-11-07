const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [],
     
    };
  },
  methods:{
    getEmails() {              
          for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
            result = resp.data.response;
            console.log(result);
            this.emails.push(result);
        })

      
        }
        console.log(this.emails)
    }
},
  
 

  mounted() {
    this.getEmails();
  },
}).mount("#app");
