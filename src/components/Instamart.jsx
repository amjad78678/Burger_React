import React, { useState } from 'react'

const Section=({title,description,isVisible,setIsVisible})=>{

   
  return (
    <div className="border border-black text-center">
      <h1 className="text-4xl my-5">{title}</h1>

      {isVisible ? (
        <button
          onClick={() => setIsVisible()}
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


  const [visibleSection, setVisibleSection] = useState(null);


  return (
    <div>
      <Section
        title={'aboutUs'}
        description={`
Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus dolorem totam, rerum placeat aspernatur facilis dolores non ullam ut cum accusantium quibusdam iusto dignissimos et dolore eius doloribus ea.
      `}
        isVisible={visibleSection == 'about'}
        setIsVisible={() => {
          setVisibleSection((prevVisibleSection) =>
            prevVisibleSection == 'about' ? null : 'about',
          );
        }}
      />
      <Section
        title={'Conract us'}
        description={`
Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus dolorem totam, rerum placeat aspernatur facilis dolores non ullam ut cum accusantium quibusdam iusto dignissimos et dolore eius doloribus ea.
      `}
        isVisible={visibleSection == 'contact'}
        setIsVisible={() => {
          setVisibleSection((prevVisibleSection) =>
            prevVisibleSection == 'contact' ? null : 'contact',
          );
        }}
      />
      <Section
        title={'Career instamart'}
        description={`
Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus dolorem totam, rerum placeat aspernatur facilis dolores non ullam ut cum accusantium quibusdam iusto dignissimos et dolore eius doloribus ea.
      `}
        isVisible={visibleSection == 'career'}
        setIsVisible={() => {
          setVisibleSection((prevVisibleSection) =>
            prevVisibleSection == 'career' ? null : 'career',
          );
        }}
      />
    </div>
  );
}

export default Instamart
