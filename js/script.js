const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [],
      result:'',
      
    };
  },
  methods: {
    getEmails(){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mailhttps://flynn.boolean.careers/exercises/api/random/mail').then((resp)=>{
        console.log(resp.data.result),
       result= resp.data.result,
       this.emails.push(this.result)
    })
    },
  },

  mounted(){

  },
}).mount('#app');
