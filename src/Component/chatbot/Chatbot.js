import React, { useEffect } from 'react'
 
const Chatbot = () => {
  <div style={{ width: '400px', height: '300px' }}>
      {/* Your Botpress chatbot component goes here */}
    </div>
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        botId: 'bbf590ee-c42e-435d-be8d-1dc9b0212fe9',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: 'bbf590ee-c42e-435d-be8d-1dc9b0212fe9',
      })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot