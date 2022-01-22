import { InjectionKey } from "vue";
import { Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module({ namespaced: true, name: "MessageService" })
export class MessageService extends VuexModule {
  messages: string[] = [];

  @Mutation
  add(message: string): void {
    this.messages.push(message);
  }

  @Mutation
  clear(): void {
    this.messages = [];
  }
}

export const messageServiceKey: InjectionKey<MessageService> = Symbol();
