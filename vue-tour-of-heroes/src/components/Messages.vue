<template>
  <div v-if="messageService.messages.length">
    <h2>Messages</h2>
    <button class="clear" @click="messageService.clear()">
      Clear messages
    </button>
    <div v-for="(message, index) of messageService.messages" :key="index">
      {{ message }}
    </div>
  </div>
</template>

<script lang="ts">
import { MessageService } from "@/store/message-service";
import { keys } from "@/keys";
import { defineComponent, inject } from "vue";

export default defineComponent({
  setup() {
    const messageService = inject(keys.messageServiceKey) as MessageService;

    return {
      messageService,
    };
  },
});
</script>

<style lang="scss" scoped>
/* MessagesComponent's private CSS styles */
h2 {
  color: #a80000;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}

.clear {
  color: #333;
  background-color: #eee;
  margin-bottom: 12px;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1rem;
}
.clear:hover {
  color: white;
  background-color: #42545c;
}
</style>
