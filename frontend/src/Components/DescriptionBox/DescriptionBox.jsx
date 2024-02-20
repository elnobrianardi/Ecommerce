import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
          <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div> 
      <div className="descriptionbox-description">
          <p>E-commerce, short for electronic commerce, refers to the buying and selling of goods or services over the internet. 
          It has revolutionized the way businesses operate and consumers shop, offering convenience, accessibility, and a global 
          marketplace at our fingertips. Here's a comprehensive description of e-commerce:</p>
          <p>As technology continues to advance, e-commerce continues to evolve, with emerging trends such as mobile commerce (m-commerce), 
            voice commerce (v-commerce), augmented reality (AR) shopping experiences, and artificial intelligence (AI)-powered 
            personalized recommendations shaping the future of online retail. Despite its rapid growth and transformative impact, 
            e-commerce remains grounded in the fundamental principles of commerce – meeting customer needs, delivering value, and facilitating 
            transactions – albeit in a digital realm.</p>
      </div>  
    </div>
  )
}
