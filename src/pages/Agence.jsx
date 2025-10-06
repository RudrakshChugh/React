import React from 'react'

const Agence = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className='section-1 bg-black pt-20'>
        <div className='absolute overflow-hidden h-[20vw] w-[15vw] rounded-3xl left-[30vw] top-96'>
          <img className='h-full w-full object-cover' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='mt-[55vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18  vw]'>
              Hello
            </h1>
          </div>
          <div className='pl-[40%] mt-20'>
            <p className='text-6xl max-w-4xl'>
              &nbsp; &nbsp; &nbsp; &nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. Cest pour ça quon sengage à donner de la perspective, pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
    <div className="section-2 h-screen bg-black">

    </div>
    </div>
  ) 
}

export default Agence
