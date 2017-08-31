Vue.component('message',{
    template:
    `
    <article class="message is-primary">
    <div class="message-header ">
      <slot name="header">This is the header</slot>
      <button @click="close"class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
      <slot name="body"> This is the body</slot>
    </div>
  </article>
    
    `,
    methods:{
        close(){
            this.$emit('close-message')
        }
    }
})


Vue.component('progress-bar',{
    props:['number'],
    template: 
    `
    <div>
    <progress class="progress is-primary" v-bind:value="number" max="100"></progress>
        <p> Progress status: {{number}} </p>
    </div>
    `
})


new Vue({
    el:'#root',
    data:{
        showMessage:true,
        numberProgress:'',
        idCounter:''

    },
    methods:{
        start(){
           var id = setInterval(() => this.numberProgress++,200)
           this.idCounter = id;
        },
        reset(){
            this.numberProgress = ''
        },
        stop(){
            console.log('click');
            console.log(this.idCounter);
        clearInterval(this.idCounter)
        }
    }
})