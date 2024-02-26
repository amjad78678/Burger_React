import React, { useState } from 'react'

const Section=({title,description,isVisible,setIsVisible})=>{

   
  return (
    <div className="border border-black text-center">
      <h1 className="text-4xl my-5">{title}</h1>

      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="bg-red-200 mb-2 rounded-lg px-5 py-2"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible()}
          className="bg-red-200 mb-2 rounded-lg px-5 py-2"
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );

}



const Instamart = () => {


  const [sectionConfig,setSectionConfig] =useState({
    showAbout:true,
    showContact:false,
    showCareer:false,
  })


  return (
    <div>


  
      <Section
        title={'aboutUs'}
        description={`
Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus dolorem totam, rerum placeat aspernatur facilis dolores non ullam ut cum accusantium quibusdam iusto dignissimos et dolore eius doloribus ea.
      `} isVisible={sectionConfig.showAbout} setIsVisible={()=>{
        setSectionConfig({
          showAbout:true,
          showContact:false,
          showCareer:false,
        })
      }}
      />
      <Section
        title={'Conract us'}
        description={`
Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus dolorem totam, rerum placeat aspernatur facilis dolores non ullam ut cum accusantium quibusdam iusto dignissimos et dolore eius doloribus ea.
      `} isVisible={sectionConfig.showContact} setIsVisible={()=>{
        setSectionConfig({
          showAbout:false,
          showContact:true,
          showCareer:false,
        })
      }}
      />
      <Section
        title={'Career instamart'}
        description={`
Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus dolorem totam, rerum placeat aspernatur facilis dolores non ullam ut cum accusantium quibusdam iusto dignissimos et dolore eius doloribus ea.
      `} isVisible={sectionConfig.showCareer} setIsVisible={()=>{
        setSectionConfig({
          showAbout:false,
          showContact:false,
          showCareer:true,
        })
      }}
      />

    </div>
  );
}

export default Instamart
