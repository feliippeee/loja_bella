export default function CardsUp() {
    return(
        <div className='justify-around mt-8 mb-4  p-8 shadow-md rounded-md'>
            <div className='bg-white p-8 flex flex-col justify-center shadow-2xl shadow-slay-100 rounded-md md:w-full sm:w-8'>
              <h2 className="bg-pink-500 flex justify-center p-4 mb-9 mt-9 text-violet-800 shadow-2xl shadow-violet-800 rounded-md md:text-6xl sm:text-xs">Produtos em Destaque</h2>
              <div className="grid rounded grid-cols-1 gap-3 p-2 md:grid-cols-2 lg:sm:grid-cols-3">
                <div className="bg-slate-50 rounded-md p-2 shadow-2xl shadow-violet-800">
                    <h3 className="flex justify-center p-2 font-bold text-l mb-1">
                        Bella show
                    </h3>              
                  <div className="h-80">
                    <img className="w-full h-full p-1 rounded-md object-cover" src="image.jpg" alt="" /></div>
                  <p className=" h-21 p-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum illum 
                    similique, incidunt iure amet eius repellat sed quas magnam natus ad 
                    expedita commodi repudiandae, 
                    {/*mollitia minima reprehenderit eos voluptatem placeat!*/}
                  </p>
                  <div className="grid grid-cols-1 justify-around p-2 gap-1">
                  <div className="flex justify-evenly pb-2">
                      <span className="line-through text-red-500 text-sm">R$17,00</span>
                      <span className="text-green-900 text-lg ">R$15,00</span>
                    </div>
                    <button className="w-full p-1 uppercase bg-green-700 text-white rounded">Comprar</button>
                    <button className="w-full p-1 uppercase bg-violet-700 text-white rounded">Adicionar ao carrinho</button>
                  </div>
                  </div>
                
                  <div className="bg-slate-50 rounded-md p-2 shadow-2xl shadow-violet-800">
                    <h3 className="flex justify-center p-2 font-bold text-lg rounded mb-1">
                        Bella Natalina
                    </h3>              
                  <div className="h-80">
                    <img className="w-full h-full object-cover" src="image1.jpg" alt="" /></div>
                  <p className=" h-21 p-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum illum 
                    similique, incidunt iure amet eius repellat sed quas magnam natus ad 
                    expedita commodi repudiandae, 
                    {/*mollitia minima reprehenderit eos voluptatem placeat!*/}
                  </p>
                  <div className="grid grid-cols-1 justify-around p-2 gap-1">
                  <div className="flex justify-evenly pb-2">
                      <span className="line-through text-red-500 text-sm">R$22,00</span>
                      <span className="text-green-900 text-lg ">R$18,90</span>
                    </div>
                    <button className="w-full p-1 uppercase bg-green-700 text-white rounded">Comprar</button>
                    <button className="w-full p-1 uppercase bg-violet-700 text-white rounded">Adicionar ao carrinho</button>
                    {/*<button className="w-full p-1 bg-slate-400 border rounded border-black hover:bg-slate-600">Link</button>*/}
                  </div>
                  </div>
    
                    <div className="bg-slate-50 rounded-md p-2 shadow-2xl shadow-violet-800">
                    <h3 className="flex justify-center p-2 font-bold text-lg rounded mb-1 border-black">
                        Bella Luxo
                    </h3>              
                  <div className="h-80">
                    <img className="w-full h-full object-cover"  src="image2.jpg" alt="" /></div>
                  <p className=" h-21 p-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum illum 
                    similique, incidunt iure amet eius repellat sed quas magnam natus ad 
                    expedita commodi repudiandae, 
                    {/*mollitia minima reprehenderit eos voluptatem placeat!*/}
                  </p>
                  <div className="grid grid-cols-1 justify-around p-2 gap-1">
                    <div className="flex justify-evenly pb-2">
                      <span className="line-through text-red-500 text-sm">R$15,00</span>
                      <span className="text-green-900 text-lg ">R$12,90</span>
                    </div>
                    <button className="w-full p-1 text-xs uppercase bg-green-700 text-white rounded md:text-base">Comprar</button>
                    <button className="w-full p-1 text-xs uppercase bg-violet-700 text-white rounded md:text-base">Adicionar ao carrinho</button>
                  </div>
                  </div>
    
                  
              </div>
            </div>
    
            
    
          </div>
        
    )
}