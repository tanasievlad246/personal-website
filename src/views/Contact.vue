<template>
  <div class="contact-container">
    <form class="contact-form" @submit.prevent="sendMessage">
      <h3 v-if="this.error != ''" style="color: red; font-family: 'Open Sans'">
        {{ this.error }}
      </h3>
      <h3
        v-else-if="success"
        style="margin: 0 !important; color: rgba(34, 96, 255, 0.55)"
      >
        {{ success }}
      </h3>
      <label for="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        v-model="name"
        required
      />
      <label for="email">Email</label>
      <input
        type="text"
        name="email"
        placeholder="Email"
        v-model="email"
        required
      />
      <label for="message">Message</label>
      <textarea
        name="message"
        id="messageBox"
        cols="30"
        rows="10"
        v-model="message"
        required
      ></textarea>
      <button class="btn btn-main mt5" value="Send" type="submit">Send</button>
    </form>
    <div class="contact-ilustration">
      <img src="../assets/illustrations/contact_ilustration 1.svg" alt="" />
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data(){
    return {
      name: '',
      email: '',
      message: '',
      error: '',
      success: ''
    }
  },
  methods: { 
    sendMessage(e) {
      try {
        emailjs.sendForm('service_h8sndb9', 'template_r5tv2p7', e.target,
        'user_C0GmLXo3OC5iZdsqXGPaJ', {
          name: this.name,
          email: this.email,
          message: this.message
        })
        this.success = 'Message was sent successfully!';
      } catch(error) {
          this.error = "Message could not be sent"
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    } 
  }
}
</script>

<style>
.contact-container {
  display: flex;
  padding-left: 50px;
  padding-top: 35px;
  height: 100%;
}

.contact-ilustration {
  position: absolute;
  z-index: -1;
  right: 0;
  top: 150px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 50vw;
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
}

.contact-form label {
  padding: 10px 0 10px 0;
}

.contact-form input[type="text"] {
  border: none;
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
  height: 25px;
  padding: 5px;
}

.contact-form input[type="text"]:focus {
  outline-color: rgba(34, 96, 255, 0.55);
}

.contact-form textarea {
  border: none;
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
  /* padding: 5px; */
}

.contact-form textarea:focus {
  outline-color: rgba(34, 96, 255, 0.55);
  /* height: 50%; */
}

.contact-form button {
  height: 50px;
}

@media screen and (max-width: 1000px) {
  .contact-form {
    width: 100vw;
  }

  .contact-container {
    padding: 20px;
    height: 100%;
  }

  .contact-form textarea {
    height: 30%;
  }

  .contact-ilustration {
    display: none;
  }
}

@media screen and (max-width: 1920px) {
  .contact-form textarea {
    height: 50%;
  }
}
</style>