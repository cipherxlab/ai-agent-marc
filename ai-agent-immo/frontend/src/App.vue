.logo {
  font-size: 3rem;
  font-weight: 300;
  background: linear-gradient(45deg, #DAA520, #FFD700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.tagline {
  color: #999;
  font-size: 1.1rem;
  letter-spacing: 2px;
}

.chat-container {
  padding: 3rem 0;
  min-height: calc(100vh - 200px);
}

.chat-box {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.1);
  overflow: hidden;
  height: 70vh;
  display: flex;
  flex-direction: column;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
}

.message {
  display: flex;
  margin-bottom: 2rem;
  gap: 1rem;
}

.message.user {
  justify-content: flex-end;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(45deg, #DAA520, #FFD700);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: #000;
  flex-shrink: 0;
}

.avatar.user {
  background: linear-gradient(45deg, #666, #999);
  color: #fff;
  font-size: 0.8rem;
}

.content {
  max-width: 70%;
  background: rgba(255,255,255,0.1);
  padding: 1.5rem;
  border-radius: 15px;
  line-height: 1.6;
}

.message.user .content {
  background: rgba(218,165,32,0.2);
}

.suggestions {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.suggestion-btn {
  background: rgba(218,165,32,0.2);
  border: 1px solid #DAA520;
  color: #DAA520;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #ffffff;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
}

.header {
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(218,165,32,0.2);
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}<script>
import axios from 'axios'

export default {
  name: 'MarcAI',
  data() {
    return {
      messages: [],
      currentMessage: '',
      isLoading: false,
      apiUrl: 'http://localhost:8000'
    }
  },
  methods: {
    async sendMessage() {
      if (!this.currentMessage.trim() || this.isLoading) return
      
      // Message utilisateur
      this.messages.push({
        type: 'user',
        text: this.currentMessage
      })
      
      const message = this.currentMessage
      this.currentMessage = ''
      this.isLoading = true
      
      try {
        const response = await axios.post(`${this.apiUrl}/chat`, {
          message: message,
          client_type: 'acheteur'
        })
        
        // Réponse Marc avec suggestions
        this.messages.push({
          type: 'assistant',
          text: response.data.response,
          suggestions: response.data.next_questions
        })
        
      } catch (error) {
        this.messages.push({
          type: 'assistant',
          text: 'Désolé, un problème technique est survenu. Pouvez-vous réessayer ?'
        })
      } finally {
        this.isLoading = false
        this.$nextTick(() => this.scrollToBottom())
      }
    },
    
    quickReply(suggestion) {
      this.currentMessage = suggestion
      this.sendMessage()
    },
    
    scrollToBottom() {
      this.$refs.messagesContainer.scrollTop = this.$refs.messagesContainer.scrollHeight
    }
  }
}
</script><template>
  <div class="app">
    <!-- Header luxe -->
    <header class="header">
      <div class="container">
        <h1 class="logo">🏛️ MARC</h1>
        <p class="tagline">Intelligence Immobilière Premium</p>
      </div>
    </header>

    <!-- Interface chat luxe -->
    <main class="chat-container">
      <div class="container">
        <div class="chat-box">
          <!-- Messages -->
          <div class="messages" ref="messagesContainer">
            <div class="message assistant welcome">
              <div class="avatar">M</div>
              <div class="content">
                <p>Bonjour, je suis Marc, votre conseiller immobilier IA.</p>
                <p>Comment puis-je vous accompagner dans votre projet ?</p>
              </div>
            </div>
            
            <div 
              v-for="(msg, index) in messages" 
              :key="index"
              :class="['message', msg.type]"
            >
              <div v-if="msg.type === 'assistant'" class="avatar">M</div>
              <div class="content">
                <p>{{ msg.text }}</p>
                <div v-if="msg.suggestions" class="suggestions">
                  <button 
                    v-for="suggestion in msg.suggestions" 
                    :key="suggestion"
                    @click="quickReply(suggestion)"
                    class="suggestion-btn"
                  >
                    {{ suggestion }}
                  </button>
                </div>
              </div>
              <div v-if="msg.type === 'user'" class="avatar user">Vous</div>
            </div>
          </div>

          <!-- Input luxe -->
          <div class="input-area">
            <div class="input-group">
              <input 
                v-model="currentMessage"
                @keypress.enter="sendMessage"
                placeholder="Décrivez votre projet immobilier..."
                class="luxury-input"
                :disabled="isLoading"
              />
              <button @click="sendMessage" class="send-btn" :disabled="isLoading">
                {{ isLoading ? '...' : '→' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
