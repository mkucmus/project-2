import { defineStore } from 'pinia'

interface User {
  id: number
  email: string
  name: string
}

export const useAccountStore = defineStore('account', {
  state: () => ({
    user: null as User | null
  }),
  
  getters: {
    isLoggedIn: (state) => state.user !== null
  },
  
  actions: {
    async login(email: string, password: string) {
      // Simulate login
      this.user = {
        id: 1,
        email,
        name: 'John Doe'
      }
    },
    
    logout() {
      this.user = null
    }
  }
})