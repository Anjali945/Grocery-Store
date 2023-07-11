const App = () => { 
    return ( <> <div className="container min-h-screen bg-[url('/images/bg.jpg')] bg-center bg-no-repeat bg-cover px-25 py-5 relative">
       <nav className=" Home flex items-center justify-between flex-wrap ">
        <div className=" logo cursor-pointer m-5 ">
            <img class= "w-16 md:w-52 md:order-1  md:text-center " src="/images/groc.png"  alt="logo"/>
        </div>
<div className="Information text-center sm:order-2  ">
        <ul class="flex-1  text-centre flex-wrap md:flex md:items-center  ">
            <li class="list-none inline-block py-4 px-5"><a href ="#">Home</a></li>
            <li class="list-none inline-block py-4 px-5"><a href="#"> Services </a></li>
            <li class="list-none inline-block py-4 px-5"><a href="#">Contact</a></li>   
        </ul>
        </div>
        
        <div className="Search ">
            <input className="box-content w-80 mr-5 ml-5 p-0"
            placeholder="Search items..."/>
        </div>
       </nav>


    <div className="mt-48 max-w-xl">
            <h1 className="text-6xl font-semibold leading-normal ml-5">Groceries <br/>delivery in <span class="font-light">15mins</span></h1>
            <p class="ml-5">Grocify offer a wide range of products, includung fresh products, meats, dairy , baked goods 
                and non-perishable items.</p>

                <div className="mt-10 ml-7 ">
                <a href="#" class="bg-yellow-300 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-yellow-300 duration-300 hover:border border border-transparent">Order</a>
                <a href="#" class="py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-yellow-300 duration-300 hover:border border border-transparent">Download app </a>
                
            </div>
    </div>
    </div>


<div className="Services bg-green-100">
<h1  className="text-center font-semibold text-5xl">Services</h1>

<div className="  flex  p-4    mx-10 flex-wrap py-14 " >
    <div className="flex-col">
    <img className="  bg-white max-w-400 h-250 mr-8 ml-12"src="/images/ig1.jpg"  />
    <h2 className="list-none inline-block text-xl font-semibold mx-18 px-20 py-4 hover:bg-transparent hover:border-red-500 duration-300 hover:border border border-transparent">Vegetables</h2>
    </div>
    <div>
    <img className="  bg-white max-w-400 h-250  mr-8 ml-12" src="/images/ig2.jpg"/>
    <h2 className="list-none inline-block text-xl font-semibold mx-20 px-20 py-4 hover:bg-transparent hover:border-red-500 duration-300 hover:border border border-transparent">Fruits </h2>
    </div>
    <div>
    <img className=" bg-white max-w-400 h-250  mr-8 ml-12" src="/images/ig1.jpg"/>
    <h2 className="list-none inline-block text-xl font-semibold mx-20 px-20 py-4 hover:bg-transparent hover:border-red-500 duration-300 hover:border border border-transparent">Meat</h2>
    </div>
</div>


</div>

     <div className=" Contact  px-25 py-5 bg-blue-200 " >
    
    <nav className="  m-3">
    <h1 className="text-center font-semibold text-5xl"> Contact us</h1>
    <p className="py-4">LET'S CONNECT: WE ARE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! WHEATHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,EMAIL,OR SOCIAL MEDIA.{""}</p>
    </nav>
    </div>
    <form className=" gap-9 bg-slate-500 flex  flex-wrap">
    <nav className=" mx-8 my-5 md:flex-col md:space-x-6 md:space-y-0 space-y-6  md:max-w-4xl">
        <img className=" h-96 w-96 "  src ="/images/CONTACT.avif" alt="Contact image" />
        </nav>
        <div className=" container mx-10 my-5  flex flex-col  md:w-60 md:m-5">
        <div className=" flex flex-col  h-20 p-4 ">
        <label htmlFor="name">Name</label>
        <input isOutline={true} className="rounded   outline-2 w-96 h-25 my-3 p-1" type  ="text" name="name"/>
        </div>
        <div className="  flex flex-col h-20 p-4 ">
        <label htmlFor="email">Email</label>
        <input className=" rounded w-96 h-25 my-3 p-1" type ="email" name="email"/>
        </div>
        <div className=" flex flex-col h-25  p-4 ">
        <label  htmlFor="text">Message</label>
        <textarea className="rounded outline-none w-96 my-3 p-1 " name="text" rows="5" cols="20"></textarea>
        </div >
        <div className="mx-36 ">
        <button className="bg-slate-900  text-white rounded-2xl py-2 px-6 font-bold inline-block mr-4 mt-5 w-36 hover:bg-transparent hover:border-yellow-300 duration-300 hover:border border border-transparent">Submit</button>
        </div>
        </div>
        
    

    </form>

    
    </> )
};
export default App;